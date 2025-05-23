"use client";

import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { ArrowRight, Briefcase, Clock, DollarSign, LineChart, TrendingUp, Users } from "lucide-react";
import MainLayout from "../../components/layout/MainLayout";

interface SideHustleCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  income: string;
  difficulty: string;
  timeCommitment: string;
}

const sideHustles: SideHustleCard[] = [
  {
    id: "freelancing",
    title: "Freelancing",
    description: "Offer your skills and services directly to clients on a project basis.",
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    income: "$$-$$$",
    difficulty: "Medium",
    timeCommitment: "Flexible",
  },
  {
    id: "blogging",
    title: "Blogging",
    description: "Create valuable content on topics you're passionate about and monetize your audience.",
    icon: <LineChart className="h-10 w-10 text-primary" />,
    income: "$-$$$",
    difficulty: "Medium",
    timeCommitment: "10-20 hrs/week",
  },
  {
    id: "ecommerce",
    title: "E-commerce Store",
    description: "Sell physical or digital products through online marketplaces or your own website.",
    icon: <DollarSign className="h-10 w-10 text-primary" />,
    income: "$$-$$$",
    difficulty: "Hard",
    timeCommitment: "15-30 hrs/week",
  },
  {
    id: "online-courses",
    title: "Online Courses",
    description: "Share your expertise by creating and selling educational content.",
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    income: "$$-$$$",
    difficulty: "Medium",
    timeCommitment: "High initially, then passive",
  },
  {
    id: "affiliate-marketing",
    title: "Affiliate Marketing",
    description: "Earn commissions by promoting products or services through referral links.",
    icon: <Users className="h-10 w-10 text-primary" />,
    income: "$-$$$",
    difficulty: "Medium",
    timeCommitment: "5-15 hrs/week",
  },
];

export default function SideHustlesPage() {
  return (
    <MainLayout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center animate-fade-up">
            Explore All Side Hustles
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 text-center animate-fade-up animate-delay-100">
            Find the perfect side hustle to match your skills, interests, and goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sideHustles.map((hustle) => (
              <Card key={hustle.id} className="card-hover border-0 shadow-md bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="mb-4 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    {hustle.icon}
                  </div>
                  <CardTitle className="text-xl">{hustle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base mb-4">{hustle.description}</p>
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-primary" />
                      <span>Income: {hustle.income}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <span>Difficulty: {hustle.difficulty}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>Time: {hustle.timeCommitment}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full justify-between hover:bg-primary/5">
                    <Link href={`/sidehustles/${hustle.id}`} aria-label={`Learn more about ${hustle.title}`}>
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}