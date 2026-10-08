import { getMeetingById } from '@/lib/meetings-db';
import { notFound } from 'next/navigation';
import EditMeetingForm from './edit-form';

export default async function EditMeetingPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = Number(params.id);
  const meeting = await getMeetingById(id);

  if (!meeting) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-2xl p-8">
      <h1 className="text-3xl font-bold mb-4">Edit Meeting</h1>
      <EditMeetingForm meeting={meeting} id={id} />
    </div>
  );
}
