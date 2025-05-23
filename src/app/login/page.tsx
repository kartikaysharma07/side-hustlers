"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import MainLayout from "../../components/layout/MainLayout";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (err) {
      setError("Failed to sign in. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto bg-background/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Sign In to SideHustleStories</CardTitle>
              <CardDescription className="text-center">
                Access your account and explore side hustle opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <p className="text-red-500 text-sm text-center mb-4" role="alert">
                  {error}
                </p>
              )}
              <Button
                onClick={handleGoogleSignIn}
                disabled={isLoading}
                className="w-full rounded-full flex items-center justify-center gap-2 bg-background border border-border text-foreground hover:bg-muted"
                aria-disabled={isLoading}
              >
                <FcGoogle className="h-5 w-5" />
                {isLoading ? "Signing in..." : "Sign in with Google"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </MainLayout>
  );
}