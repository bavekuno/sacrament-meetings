'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { addMeeting, updateMeeting as updateMeetingDb, deleteMeeting as deleteMeetingDb } from './meetings-db';
import type { SacramentMeeting, WardBusinessItem, SpeakerItem } from './types';
import { signIn } from '@/auth';
import { auth } from '@/auth';
import { AuthError } from 'next-auth';

const MeetingFormSchema = z.object({
  date: z.string().min(1, 'Date is required.'),
  meetingType: z.enum(['testimony', 'regular', 'stake', 'general']),
  presiding: z.string().min(1, 'Presiding is required.'),
  conducting: z.string().min(1, 'Conducting is required.'),
  announcements: z.string(),
  openingHymnNumber: z.coerce.number().min(1, 'Opening hymn number is required.'),
  openingHymnTitle: z.string().min(1, 'Opening hymn title is required.'),
  openingPrayer: z.string().min(1, 'Opening prayer is required.'),
  wardBusiness: z.string(),
  stakeBusiness: z.enum(['true', 'false']),
  sacramentHymnNumber: z.coerce.number().min(1, 'Sacrament hymn number is required.'),
  sacramentHymnTitle: z.string().min(1, 'Sacrament hymn title is required.'),
  speakers: z.string(),
  closingHymnNumber: z.coerce.number().min(1, 'Closing hymn number is required.'),
  closingHymnTitle: z.string().min(1, 'Closing hymn title is required.'),
  closingPrayer: z.string().min(1, 'Closing prayer is required.'),
});

export type State = {
  errors?: {
    date?: string[];
    meetingType?: string[];
    presiding?: string[];
    conducting?: string[];
    announcements?: string[];
    openingHymnNumber?: string[];
    openingHymnTitle?: string[];
    openingPrayer?: string[];
    wardBusiness?: string[];
    stakeBusiness?: string[];
    sacramentHymnNumber?: string[];
    sacramentHymnTitle?: string[];
    speakers?: string[];
    closingHymnNumber?: string[];
    closingHymnTitle?: string[];
    closingPrayer?: string[];
  };
  message?: string | null;
};

function parseAnnouncements(value: string): string[] {
  return value.split(',').map((s) => s.trim()).filter(Boolean);
}

function parseWardBusiness(value: string): WardBusinessItem[] {
  return value
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((description) => ({ description }));
}

function parseSpeakers(value: string): SpeakerItem[] {
  return value
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((line) => {
      const [name, topic, type = 'speaker'] = line.split('|').map((s) => s.trim());
      return { name: name || '', topic: topic || '', type: type as 'speaker' | 'musical-number' };
    });
}

function formDataToMeeting(data: z.infer<typeof MeetingFormSchema>): Omit<SacramentMeeting, 'id'> {
  return {
    date: data.date,
    meetingType: data.meetingType,
    presiding: data.presiding,
    conducting: data.conducting,
    announcements: parseAnnouncements(data.announcements),
    openingHymn: { number: data.openingHymnNumber, title: data.openingHymnTitle },
    openingPrayer: data.openingPrayer,
    wardBusiness: parseWardBusiness(data.wardBusiness),
    stakeBusiness: data.stakeBusiness === 'true',
    sacramentHymn: { number: data.sacramentHymnNumber, title: data.sacramentHymnTitle },
    speakers: parseSpeakers(data.speakers),
    closingHymn: { number: data.closingHymnNumber, title: data.closingHymnTitle },
    closingPrayer: data.closingPrayer,
  };
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirectTo: '/meetings',
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid email or password.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

async function requireOwnerSession() {
  const session = await auth();
  if (!session?.user) throw new Error('Not authenticated');
  return session;
}

function buildRaw(formData: FormData) {
  return {
    date: formData.get('date'),
    meetingType: formData.get('meetingType'),
    presiding: formData.get('presiding'),
    conducting: formData.get('conducting'),
    announcements: (formData.get('announcements') as string | null) ?? '',
    openingHymnNumber: formData.get('openingHymnNumber'),
    openingHymnTitle: (formData.get('openingHymnTitle') as string | null) ?? '',
    openingPrayer: (formData.get('openingPrayer') as string | null) ?? '',
    wardBusiness: (formData.get('wardBusiness') as string | null) ?? '',
    stakeBusiness: formData.get('stakeBusiness') === 'true' ? 'true' : 'false',
    sacramentHymnNumber: formData.get('sacramentHymnNumber'),
    sacramentHymnTitle: (formData.get('sacramentHymnTitle') as string | null) ?? '',
    speakers: (formData.get('speakers') as string | null) ?? '',
    closingHymnNumber: formData.get('closingHymnNumber'),
    closingHymnTitle: (formData.get('closingHymnTitle') as string | null) ?? '',
    closingPrayer: (formData.get('closingPrayer') as string | null) ?? '',
  };
}

export async function createMeeting(prevState: State | undefined, formData: FormData): Promise<State> {
  try {
    await requireOwnerSession();
    const validatedFields = MeetingFormSchema.safeParse(buildRaw(formData));
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing or invalid fields. Failed to create meeting.',
      };
    }

    await addMeeting(formDataToMeeting(validatedFields.data));

    revalidatePath('/meetings');
    redirect('/meetings');
  } catch (error) {
    console.error('Error creating meeting:', error);
    return {
      message: 'Failed to create meeting. Please try again later.',
    };
  }
}

export async function updateMeeting(
  id: number,
  prevState: State | undefined,
  formData: FormData
): Promise<State> {
  try {
    await requireOwnerSession();
    const validatedFields = MeetingFormSchema.safeParse(buildRaw(formData));
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing or invalid fields. Failed to update meeting.',
      };
    }

    await updateMeetingDb(id, formDataToMeeting(validatedFields.data));

    revalidatePath('/meetings');
    redirect('/meetings');
  } catch (error) {
    console.error('Error updating meeting:', error);
    return {
      message: 'Failed to update meeting. Please try again later.',
    };
  }
}

export async function deleteMeeting(id: number) {
  try {
    await requireOwnerSession();
    await deleteMeetingDb(id);
    revalidatePath('/meetings');
    redirect('/meetings');
  } catch (error) {
    console.error('Error deleting meeting:', error);
    throw new Error('Failed to delete meeting. Please try again later.');
  }
}
