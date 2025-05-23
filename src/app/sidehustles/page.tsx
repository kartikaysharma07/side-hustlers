"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/3rd/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/3rd/card";
import { Input } from "@/components/3rd/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/3rd/select";
import Link from "next/link";
import { ArrowRight, Clock, DollarSign, Search, TrendingUp, Star } from "lucide-react";
import { useState } from "react";

interface SideHustle {
  id: string;
  title: string;
  description: string;
  category: string;
  income: string;
  difficulty: string;
  timeCommitment: string;
  startupCost: string;
  trending?: boolean;
}

const sideHustles: SideHustle[] = [
  {
    id: "freelance-writing",
    title: "Freelance Writing",
    description: "Create content for blogs, websites, and publications in your area of expertise.",
    category: "Freelancing & Services",
    income: "$$-$$$",
    difficulty: "Medium",
    timeCommitment: "Flexible",
    startupCost: "$",
    trending: true,
  },
  {
    id: "blogging",
    title: "Blogging",
    description: "Start a blog on a topic you're passionate about and monetize through ads, affiliates, and more.",
    category: "Digital & Online",
    income: "$-$$$",
    difficulty: "Medium",
    timeCommitment: "10-20 hrs/week",
    startupCost: "$",
  },
  {
    id: "print-on-demand",
    title: "Print on Demand",
    description: "Design and sell custom products without inventory through print-on-demand services.",
    category: "Physical Products",
    income: "$-$$",
    difficulty: "Medium",
    timeCommitment: "5-15 hrs/week",
    startupCost: "$",
    trending: true,
  },
  {
    id: "online-tutoring",
    title: "Online Tutoring",
    description: "Teach students virtually in subjects you're knowledgeable about.",
    category: "Education & Coaching",
    income: "$$-$$$",
    difficulty: "Low",
    timeCommitment: "Flexible",
    startupCost: "Free-$",
  },
  {
    id: "virtual-assistant",
    title: "Virtual Assistant",
    description: "Provide administrative, technical, or creative assistance to clients remotely.",
    category: "Freelancing & Services",
    income: "$$-$$$",
    difficulty: "Low",
    timeCommitment: "Flexible",
    startupCost: "Free-$",
  },
  {
    id: "dropshipping",
    title: "Dropshipping",
    description: "Sell products online without holding inventory by using dropshipping suppliers.",
    category: "Physical Products",
    income: "$$-$$$",
    difficulty: "High",
    timeCommitment: "15-30 hrs/week",
    startupCost: "$$",
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    description: "Manage social media accounts and content for businesses and influencers.",
    category: "Digital & Online",
    income: "$$-$$$",
    difficulty: "Medium",
    timeCommitment: "10-25 hrs/week",
    startupCost: "Free-$",
    trending: true,
  },
  {
    id: "youtube-content-creation",
    title: "YouTube Content Creation",
    description: "Create video content and monetize through ads, sponsorships, and more.",
    category: "Creative & Design",
    income: "$-$$$",
    difficulty: "Medium",
    timeCommitment: "10-30 hrs/week",
    startupCost: "$-$$",
  },
  {
    id: "affiliate-marketing",
    title: "Affiliate Marketing",
    description: "Promote products and earn commissions for sales made through your referrals.",
    category: "Digital & Online",
    income: "$-$$$",
    difficulty: "Medium",
    timeCommitment: "10-20 hrs/week",
    startupCost: "Free-$",
  },
  {
    id: "ecommerce-store",
    title: "E-commerce Store",
    description: "Sell products through your own online store or marketplace.",
    category: "Physical Products",
    income: "$$-$$$",
    difficulty: "High",
    timeCommitment: "15-40 hrs/week",
    startupCost: "$$-$$$",
  },
  {
    id: "online-courses",
    title: "Online Courses",
    description: "Create and sell courses teaching your skills and knowledge.",
    category: "Education & Coaching",
    income: "$$-$$$",
    difficulty: "Medium",
    timeCommitment: "High initially, then passive",
    startupCost: "$-$$",
    trending: true,
  },
  {
    id: "stock-photography",
    title: "Stock Photography",
    description: "Shoot and sell photos to stock photography platforms.",
    category: "Creative & Design",
    income: "$-$$",
    difficulty: "Medium",
    timeCommitment: "Flexible",
    startupCost: "$$",
  },
];

export default function SideHustlesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [difficultyFilter, setDifficultyFilter] = useState("All");

  const categories = ["All", ...new Set(sideHustles.map((hustle) => hustle.category))];
  const difficulties = ["All", "Low", "Medium", "High"];

  const filteredHustles = sideHustles.filter((hustle) => {
    const matchesSearch =
      hustle.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hustle.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hustle.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "All" || hustle.category === categoryFilter;
    const matchesDifficulty = difficultyFilter === "All" || hustle.difficulty === difficultyFilter;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 gradient-bg text-white overflow-hidden">
        <div className="absolute inset-0 noise-bg"></div>
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
              Discover Your Perfect Side Hustle
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-up animate-delay-100">
              Explore our curated collection of side hustles to find opportunities that match your skills, interests, and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-delay-200">
              <Button
                asChild
                size="lg"
                className="rounded-full text-lg px-8 bg-white text-primary hover:bg-white/90"
              >
                <Link href="/quiz">Take Our Quiz</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full text-lg px-8 bg-transparent border-white hover:bg-white/20 text-white"
              >
                <Link href="/categories">Browse Categories</Link>
              </Button>
            </div>
          </div>
          <div className="mt-12 max-w-2xl mx-auto animate-fade-up animate-delay-300">
            <div className="relative flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
                <Input
                  placeholder="Search side hustles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-6 text-base rounded-full border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-white focus:bg-white/20"
                  aria-label="Search side hustles"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="rounded-full bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger className="rounded-full bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  {difficulties.map((difficulty) => (
                    <SelectItem key={difficulty} value={difficulty}>
                      {difficulty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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

      {/* Trending Side Hustles */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="h-[1px] w-12 bg-primary/70"></div>
            <span className="mx-3 text-sm font-medium text-primary">TRENDING</span>
            <div className="h-[1px] w-12 bg-primary/70"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center animate-fade-up">
            Trending Side Hustles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up animate-delay-100">
            Discover the most popular side hustles right now, perfect for quick wins and high potential.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredHustles
              .filter((hustle) => hustle.trending)
              .map((hustle) => (
                <Card
                  key={hustle.id}
                  className="card-hover border-0 shadow-md bg-white/80 backdrop-blur-sm"
                >
                  <CardHeader className="pb-4">
                    <div className="flex justify-between mb-2">
                      <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary">
                        {hustle.category}
                      </span>
                      <Star className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{hustle.title}</CardTitle>
                    <CardDescription className="line-clamp-2 text-base">
                      {hustle.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <div className="grid grid-cols-2 gap-y-2 text-sm">
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
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span>Startup: {hustle.startupCost}</span>
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
                        View Details <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    {hustle.id === "freelance-writing" && (
                      <Button asChild variant="link">
                        <Link href="https://www.upwork.com/?source=sidehustle" target="_blank">
                          Start on Upwork
                        </Link>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* All Side Hustles */}
      <section className="py-16 md:py-24 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="h-[1px] w-12 bg-primary/70"></div>
            <span className="mx-3 text-sm font-medium text-primary">ALL HUSTLES</span>
            <div className="h-[1px] w-12 bg-primary/70"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center animate-fade-up">
            Explore All Side Hustles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up animate-delay-100">
            Find the perfect side hustle to fit your lifestyle and goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHustles.map((hustle) => (
              <Card
                key={hustle.id}
                className="card-hover border-0 shadow-md bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-between mb-2">
                    <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary">
                      {hustle.category}
                    </span>
                    {hustle.trending && <Star className="h-5 w-5 text-primary" />}
                  </div>
                  <CardTitle className="text-xl">{hustle.title}</CardTitle>
                  <CardDescription className="line-clamp-2 text-base">
                    {hustle.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="grid grid-cols-2 gap-y-2 text-sm">
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
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-primary" />
                      <span>Startup: {hustle.startupCost}</span>
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
                      View Details <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  {hustle.id === "print-on-demand" && (
                    <Button asChild variant="link">
                      <Link href="https://www.printful.com/?source=sidehustle" target="_blank">
                        Start with Printful
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 noise-bg"></div>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up">
            Not Sure Where to Start?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 animate-fade-up animate-delay-100">
            Take our quick quiz to discover side hustles tailored to your skills, interests, and time availability.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 bg-white text-primary hover:bg-white/90 animate-fade-up animate-delay-200"
          >
            <Link href="/quiz">Find Your Perfect Side Hustle</Link>
          </Button>
        </div>
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/30 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-blue-500/30 blur-3xl"></div>
      </section>

      <Footer />
    </>
  );
}