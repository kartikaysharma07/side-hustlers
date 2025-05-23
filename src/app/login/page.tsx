"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/3rd/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/3rd/card";
import  MainLayout  from "@/components/layout/MainLayout";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <MainLayout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Sign In to SideHustleStories</CardTitle>
              <CardDescription className="text-center">
                Access your account and explore side hustle opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={handleGoogleSignIn}
                className="w-full rounded-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <FcGoogle className="h-5 w-5" />
                Sign in with Google
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </MainLayout>
  );
}