import { signOut } from '@/auth';

export function SignOutButton() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut({ redirectTo: '/' });
      }}
    >
      <button
        type="submit"
        className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white text-sm"
      >
        Sign Out
      </button>
    </form>
  );
}
