import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string; // Add id to the User type
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }

  interface Session {
    user: {
      id: string; // Add id to the Session.user type
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}