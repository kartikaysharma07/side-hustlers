"use client";

import MainLayout from "../../components/layout/MainLayout";
import { Button } from "../../components/ui/button";
import { Users } from "lucide-react";
import Link from "next/link";

export default function CommunityPage() {
  return (
    <MainLayout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our Community</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Connect with side hustlers worldwide, share tips, and grow together. (Community features coming soon!)
          </p>
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="/sidehustles">
              <Users className="h-4 w-4 mr-2" /> Explore Side Hustles
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}