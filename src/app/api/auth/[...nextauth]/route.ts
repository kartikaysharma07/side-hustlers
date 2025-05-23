import { type NextAuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { type NextRequest, NextResponse } from "next/server";
import { type JWT } from "next-auth/jwt";
import { type Session as NextAuthSession, type User as NextAuthUser } from "next-auth";

// Define the shape of your user and session
interface User {
  id: string;
  email: string;
  name?: string;
}

interface Session {
  user: User;
}

// Auth options for NextAuth
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        // Replace with your authentication logic
        if (
          credentials?.email === "user@example.com" &&
          credentials?.password === "password"
        ) {
          return { id: "1", email: "user@example.com", name: "Test User" };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({
      session,
      token,
    }: {
      session: NextAuthSession;
      token: JWT;
    }): Promise<NextAuthSession> {
      if (token) {
        session.user = {
          id: token.id as string,
          email: token.email as string,
          name: token.name as string,
        };
      }
      return session;
    },
    async jwt({
      token,
      user,
    }: {
      token: JWT;
      user?: NextAuthUser;
    }): Promise<JWT> {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
};

// Handle GET and POST requests for NextAuth
export async function GET(req: NextRequest) {
  return NextResponse.json({ message: "Use POST for auth" });
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (session) {
    return NextResponse.json({ user: session.user });
  }
  return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
}
