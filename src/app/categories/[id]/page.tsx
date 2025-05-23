"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import MainLayout from "../../../components/layout/MainLayout";
import { ArrowRight } from "lucide-react";

const categoryData = {
  digital: { name: "Digital & Online", description: "Side hustles that can be done completely online." },
  creative: { name: "Creative & Design", description: "Side hustles for creatively inclined individuals." },
  freelancing: { name: "Freelancing & Services", description: "Offering your skills and services to clients." },
  physical: { name: "Physical Products", description: "Side hustles involving selling or creating physical items." },
  finance: { name: "Finance & Investing", description: "Side hustles related to money management and investments." },
  education: { name: "Education & Coaching", description: "Side hustles focused on teaching and mentoring others." },
  misc: { name: "Miscellaneous", description: "Other unique and interesting side hustle opportunities." },
  passive: { name: "Passive Income", description: "Side hustles that generate income with minimal ongoing work." },
};

export default function CategoryPage({ params }: { params: { id: string } }) {
  const category = categoryData[params.id as keyof typeof categoryData];
  if (!category) {
    notFound();
  }

  return (
    <MainLayout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Link href="/categories" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
            <ArrowRight className="h-4 w-4 rotate-180" /> Back to Categories
          </Link>
          <h1 className="text-4xl font-bold mt-4 mb-6">{category.name}</h1>
          <p className="text-lg">{category.description} (Details coming soon)</p>
        </div>
      </section>
    </MainLayout>
  );
}