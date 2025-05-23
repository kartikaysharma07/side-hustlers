import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/auth/error",
  },
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      try {
        if (session.user && token.sub) {
          session.user.id = token.sub;
        }
        return session;
      } catch (error) {
        console.error("Session callback error:", error);
        return session;
      }
    },
    async jwt({ token, account }: { token: JWT; account: any }) {
      try {
        if (account) {
          token.accessToken = account.access_token;
        }
        return token;
      } catch (error) {
        console.error("JWT callback error:", error);
        return token;
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };