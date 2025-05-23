"use client";

import { useSearchParams } from "next/navigation";
import MainLayout from "../../components/layout/MainLayout";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  return (
    <MainLayout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Search Results for "{query}"</h1>
          <p className="text-lg">No results yet. Search functionality coming soon!</p>
        </div>
      </section>
    </MainLayout>
  );
}