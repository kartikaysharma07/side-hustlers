// src/app/quiz/page.tsx
"use client";

import MainLayout from "../../components/layout/MainLayout";

export default function QuizPage() {
  return (
    <MainLayout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Side Hustle Quiz</h1>
          <p className="text-lg">Take our quiz to find your perfect side hustle (coming soon).</p>
        </div>
      </section>
    </MainLayout>
  );
}