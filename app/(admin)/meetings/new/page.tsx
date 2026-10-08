'use client';

import { useActionState } from 'react';
import { createMeeting, type State } from '@/lib/actions';

const initialState: State = { message: null, errors: {} };

export default function NewMeetingPage() {
  const [state, formAction, isPending] = useActionState<State, FormData>(createMeeting, initialState);

  return (
    <div className="mx-auto max-w-2xl p-8">
      <h1 className="text-3xl font-bold mb-4">Create Meeting</h1>
      <form action={formAction} className="space-y-4">
        <div>
          <label htmlFor="date" className="mb-2 block text-sm font-medium text-slate-700">
            Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
            aria-describedby="date-error"
          />
          <div id="date-error" aria-live="polite" aria-atomic="true">
            {state.errors?.date?.map((error) => (
              <p key={error} className="mt-1 text-sm text-red-600">
                {error}
              </p>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="meetingType" className="mb-2 block text-sm font-medium text-slate-700">
            Meeting Type
          </label>
          <select
            id="meetingType"
            name="meetingType"
            required
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
            aria-describedby="meetingType-error"
          >
            <option value="testimony">Testimony</option>
            <option value="regular">Regular</option>
            <option value="stake">Stake</option>
            <option value="general">General</option>
          </select>
          <div id="meetingType-error" aria-live="polite" aria-atomic="true">
            {state.errors?.meetingType?.map((error) => (
              <p key={error} className="mt-1 text-sm text-red-600">
                {error}
              </p>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="presiding" className="mb-2 block text-sm font-medium text-slate-700">
            Presiding
          </label>
          <input
            id="presiding"
            name="presiding"
            required
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
            aria-describedby="presiding-error"
          />
          <div id="presiding-error" aria-live="polite" aria-atomic="true">
            {state.errors?.presiding?.map((error) => (
              <p key={error} className="mt-1 text-sm text-red-600">
                {error}
              </p>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="conducting" className="mb-2 block text-sm font-medium text-slate-700">
            Conducting
          </label>
          <input
            id="conducting"
            name="conducting"
            required
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
            aria-describedby="conducting-error"
          />
          <div id="conducting-error" aria-live="polite" aria-atomic="true">
            {state.errors?.conducting?.map((error) => (
              <p key={error} className="mt-1 text-sm text-red-600">
                {error}
              </p>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="announcements" className="mb-2 block text-sm font-medium text-slate-700">
            Announcements (comma-separated)
          </label>
          <input
            id="announcements"
            name="announcements"
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
            aria-describedby="announcements-error"
          />
          <div id="announcements-error" aria-live="polite" aria-atomic="true">
            {state.errors?.announcements?.map((error) => (
              <p key={error} className="mt-1 text-sm text-red-600">
                {error}
              </p>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="openingHymnNumber" className="mb-2 block text-sm font-medium text-slate-700">
            Opening Hymn Number
          </label>
          <input
            id="openingHymnNumber"
            name="openingHymnNumber"
            type="number"
            required
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
            aria-describedby="openingHymnNumber-error"
          />
          <div id="openingHymnNumber-error" aria-live="polite" aria-atomic="true">
            {state.errors?.openingHymnNumber?.map((error) => (
              <p key={error} className="mt-1 text-sm text-red-600">
                {error}
              </p>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="openingHymnTitle" className="mb-2 block text-sm font-medium text-slate-700">
            Opening Hymn Title
          </label>
          <input
            id="openingHymnTitle"
            name="openingHymnTitle"
            required
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
            aria-describedby="openingHymnTitle-error"
          />
          <div id="openingHymnTitle-error" aria-live="polite" aria-atomic="true">
            {state.errors?.openingHymnTitle?.map((error) => (
              <p key={error} className="mt-1 text-sm text-red-600">
                {error}
              </p>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="openingPrayer" className="mb-2 block text-sm font-medium text-slate-700">
            Opening Prayer
          </label>
          <input
            id="openingPrayer"
            name="openingPrayer"
            required
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
            aria-describedby="openingPrayer-error"
          />
          <div id="openingPrayer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.openingPrayer?.map((error) => (
              <p key={error} className="mt-1 text-sm text-red-600">
                {error}
              </p>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="wardBusiness" className="mb-2 block text-sm font-medium text-slate-700">
            Ward Business (one per line)
          </label>
          <textarea
            id="wardBusiness"
            name="wardBusiness"
            rows={3}
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
            aria-describedby="wardBusiness-error"
          ></textarea>
          <div id="wardBusiness-error" aria-live="polite" aria-atomic="true">
            {state.errors?.wardBusiness?.map((error) => (
              <p key={error} className="mt-1 text-sm text-red-600">
                {error}
              </p>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="stakeBusiness" className="mb-2 block text-sm font-medium text-slate-700">
            Stake Business
          </label>
          <input
            id="stakeBusiness"
            name="stakeBusiness"
            type="checkbox"
            value="true"
            className="h-4 w-4 rounded border border-slate-300"
            aria-describedby="stakeBusiness-error"
          />
          <div id="stakeBusiness-error" aria-live="polite" aria-atomic="true">
            {state.errors?.stakeBusiness?.map((error) => (
              <p key={error} className="mt-1 text-sm text-red-600">
                {error}
              </p>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="sacramentHymnNumber" className="mb-2 block text-sm font-medium text-slate-700">
            Sacrament Hymn Number
          </label>
          <input
            id="sacramentHymnNumber"
            name="sacramentHymnNumber"
            type="number"
            required
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
            aria-describedby="sacramentHymnNumber-error"
          />
          <div id="sacramentHymnNumber-error" aria-live="polite" aria-atomic="true">
            {state.errors?.sacramentHymnNumber?.map((error) => (
              <p key={error} className="mt-1 text-sm text-red-600">
                {error}
              </p>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="sacramentHymnTitle" className="mb-2 block text-sm font-medium text-slate-700">
            Sacrament Hymn Title
          </label>
          <input
            id="sacramentHymnTitle"
            name="sacramentHymnTitle"
            required
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
            aria-describedby="sacramentHymnTitle-error"
          />
          <div id="sacramentHymnTitle-error" aria-live="polite" aria-atomic="true">
            {state.errors?.sacramentHymnTitle?.map((error) => (
              <p key={error} className="mt-1 text-sm text-red-600">
                {error}
              </p>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="speakers" className="mb-2 block text-sm font-medium text-slate-700">
            Speakers (one per line: Name|Topic|Type)
          </label>
          <textarea
            id="speakers"
            name="speakers"
            rows={3}
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
            aria-describedby="speakers-error"
          ></textarea>
          <div id="speakers-error" aria-live="polite" aria-atomic="true">
            {state.errors?.speakers?.map((error) => (
              <p key={error} className="mt-1 text-sm text-red-600">
                {error}
              </p>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="closingHymnNumber" className="mb-2 block text-sm font-medium text-slate-700">
            Closing Hymn Number
          </label>
          <input
            id="closingHymnNumber"
            name="closingHymnNumber"
            type="number"
            required
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
            aria-describedby="closingHymnNumber-error"
          />
          <div id="closingHymnNumber-error" aria-live="polite" aria-atomic="true">
            {state.errors?.closingHymnNumber?.map((error) => (
              <p key={error} className="mt-1 text-sm text-red-600">
                {error}
              </p>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="closingHymnTitle" className="mb-2 block text-sm font-medium text-slate-700">
            Closing Hymn Title
          </label>
          <input
            id="closingHymnTitle"
            name="closingHymnTitle"
            required
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
            aria-describedby="closingHymnTitle-error"
          />
          <div id="closingHymnTitle-error" aria-live="polite" aria-atomic="true">
            {state.errors?.closingHymnTitle?.map((error) => (
              <p key={error} className="mt-1 text-sm text-red-600">
                {error}
              </p>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="closingPrayer" className="mb-2 block text-sm font-medium text-slate-700">
            Closing Prayer
          </label>
          <input
            id="closingPrayer"
            name="closingPrayer"
            required
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
            aria-describedby="closingPrayer-error"
          />
          <div id="closingPrayer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.closingPrayer?.map((error) => (
              <p key={error} className="mt-1 text-sm text-red-600">
                {error}
              </p>
            ))}
          </div>
        </div>

        {state.message ? (
          <p className="text-sm text-red-600" aria-live="polite">
            {state.message}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isPending}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? 'Saving...' : 'Save Meeting'}
        </button>
      </form>
    </div>
  );
}
