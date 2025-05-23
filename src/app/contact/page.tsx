// src/app/contact/page.tsx
"use client";

import MainLayout from "../../components/layout/MainLayout";
import { Button } from "../../components/ui/button";
import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <MainLayout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 text-center">
            Get in touch with SideHustleStories for questions or support.
          </p>
          <div className="max-w-md mx-auto">
            <Button asChild variant="default" className="w-full rounded-full flex items-center gap-2">
              <a href="mailto:contact@sidehustlingstories.com">
                <Mail className="h-4 w-4" /> Email Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}