import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      // Protect admin routes (meetings new/edit under (admin))
      const isAdminProtected =
        nextUrl.pathname.startsWith('/meetings/new') ||
        nextUrl.pathname.match(/^\/meetings\/\d+\/edit/) !== null ||
        nextUrl.pathname.startsWith('/(admin)');

      // Also protect the admin route group explicitly if matched by pathname
      if (isAdminProtected) {
        if (isLoggedIn) return true;
        return false; // redirects to /login
      }

      // Redirect already-logged-in users away from the login page
      if (isLoggedIn && nextUrl.pathname === '/login') {
        return Response.redirect(new URL('/meetings', nextUrl));
      }

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
