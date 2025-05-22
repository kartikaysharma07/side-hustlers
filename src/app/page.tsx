"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowRight, Clock, DollarSign, LineChart, TrendingUp, Briefcase, Search } from "lucide-react";
import { useState } from "react";
import  MainLayout  from "@/components/layout/MainLayout";

interface SideHustleCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  income: string;
  difficulty: string;
  timeCommitment: string;
  tags: string[];
}

const featuredSideHustles: SideHustleCard[] = [
  {
    id: "freelancing",
    title: "Freelancing",
    description: "Offer your skills and services directly to clients on a project basis.",
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    income: "$$-$$$",
    difficulty: "Medium",
    timeCommitment: "Flexible",
    tags: ["trending", "beginner-friendly"],
  },
  {
    id: "blogging",
    title: "Blogging",
    description: "Create valuable content on topics you're passionate about and monetize your audience.",
    icon: <LineChart className="h-10 w-10 text-primary" />,
    income: "$-$$$",
    difficulty: "Medium",
    timeCommitment: "10-20 hrs/week",
    tags: ["profitable"],
  },
  {
    id: "ecommerce",
    title: "E-commerce Store",
    description: "Sell physical or digital products through online marketplaces or your own website.",
    icon: <DollarSign className="h-10 w-10 text-primary" />,
    income: "$$-$$$",
    difficulty: "Hard",
    timeCommitment: "15-30 hrs/week",
    tags: ["profitable"],
  },
  {
    id: "online-courses",
    title: "Online Courses",
    description: "Share your expertise by creating and selling educational content.",
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    income: "$$-$$$",
    difficulty: "Medium",
    timeCommitment: "High initially, then passive",
    tags: ["trending", "passive"],
  },
];

const categories = [
  {
    id: "digital",
    name: "Digital & Online",
    description: "Side hustles that can be done completely online",
    count: 24,
  },
  {
    id: "creative",
    name: "Creative & Design",
    description: "Side hustles for creatively inclined individuals",
    count: 18,
  },
  {
    id: "freelancing",
    name: "Freelancing & Services",
    description: "Offering your skills and services to clients",
    count: 22,
  },
  {
    id: "physical",
    name: "Physical Products",
    description: "Side hustles involving selling or creating physical items",
    count: 15,
  },
  {
    id: "finance",
    name: "Finance & Investing",
    description: "Side hustles related to money management and investments",
    count: 10,
  },
  {
    id: "education",
    name: "Education & Coaching",
    description: "Side hustles focused on teaching and mentoring others",
    count: 12,
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [hours, setHours] = useState(10);
  const [rate, setRate] = useState(20);

  const filteredHustles = featuredSideHustles.filter(
    (hustle) =>
      hustle.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hustle.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hustle.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <MainLayout>
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 gradient-bg text-white overflow-hidden">
        <div className="absolute inset-0 noise-bg"></div>
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
              Unlock Your Earning Potential with{" "}
              <span className="underline decoration-4 decoration-primary/70">Side Hustles</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mb-8 animate-fade-up animate-delay-100">
              Discover inspiring stories, practical guides, and the perfect hustle for your skills and goals.
            </p>
            <div className="relative max-w-md mb-6 animate-fade-up animate-delay-200">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
              <Input
                placeholder="Search side hustles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 text-base rounded-full border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-white focus:bg-white/20"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-300">
              <Button
                asChild
                size="lg"
                className="rounded-full text-lg px-8 bg-white text-primary hover:bg-white/90"
              >
                <Link href="/categories">Browse Side Hustles</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full text-lg px-8 bg-transparent border-white hover:bg-white/20 text-white"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/30 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-blue-500/30 blur-3xl"></div>
        <div className="absolute top-10 right-10">
          <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="text-white/50"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="h-[1px] w-12 bg-primary/70"></div>
            <span className="mx-3 text-sm font-medium text-primary">FEATURED</span>
            <div className="h-[1px] w-12 bg-primary/70"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center animate-fade-up">
            Trending & Beginner-Friendly Hustles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up animate-delay-100">
            Discover popular side hustles that are trending, profitable, or perfect for beginners.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredHustles.map((hustle) => (
              <Card
                key={hustle.id}
                className="card-hover border-0 shadow-md bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div className="mb-4 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    {hustle.icon}
                  </div>
                  <CardTitle className="text-xl">{hustle.title}</CardTitle>
                  <CardDescription className="text-base line-clamp-2">
                    {hustle.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-primary" />
                      <span>Income Potential: {hustle.income}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <span>Difficulty: {hustle.difficulty}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>Time: {hustle.timeCommitment}</span>
                    </div>
                    <div className="flex gap-2 mt-2">
                      {hustle.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-between hover:bg-primary/5"
                  >
                    <Link href={`/sidehustles/${hustle.id}`}>
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  {hustle.id === "freelancing" && (
                    <Button asChild variant="link">
                      <Link href="https://www.fiverr.com/?source=sidehustle" target="_blank">
                        Join Fiverr
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8"
            >
              <Link href="/sidehustles">View All Side Hustles</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="h-[1px] w-12 bg-primary/70"></div>
            <span className="mx-3 text-sm font-medium text-primary">CATEGORIES</span>
            <div className="h-[1px] w-12 bg-primary/70"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center animate-fade-up">
            Browse by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up animate-delay-100">
            Find the perfect side hustle based on your interests, skills, and goals.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.id}`}
                className="block group"
              >
                <Card className="card-hover border-0 shadow-md bg-white/80 backdrop-blur-sm h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {category.name}
                      <span className="text-sm font-normal bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {category.count}
                      </span>
                    </CardTitle>
                    <CardDescription className="line-clamp-2 text-base">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-0">
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full justify-between text-primary hover:bg-primary/5 group-hover:bg-primary/5"
                    >
                      <div>
                        <span>Explore Category</span>
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="h-[1px] w-12 bg-primary/70"></div>
            <span className="mx-3 text-sm font-medium text-primary">CALCULATE</span>
            <div className="h-[1px] w-12 bg-primary/70"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center animate-fade-up">
            Estimate Your Earnings
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up animate-delay-100">
            See how much you could earn with your side hustle based on hours and rates.
          </p>
          <Card className="card-hover bg-white/80 backdrop-blur-sm p-6 max-w-md mx-auto">
            <CardTitle className="text-xl mb-4">Earnings Calculator</CardTitle>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Hours per Week:</label>
                  <Input
                    type="number"
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="w-full p-2 border rounded bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Hourly Rate ($):</label>
                  <Input
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full p-2 border rounded bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <p className="text-lg font-semibold">
                  Estimated Weekly Earnings: ${(hours * rate).toFixed(2)}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </MainLayout>
  );
}