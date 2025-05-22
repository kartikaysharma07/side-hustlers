
"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Clock,
  DollarSign,
  Star,
  TrendingUp,
  CheckCircle2,
  XCircle,
  GraduationCap,
  Users,
  Landmark,
  Mail,
} from "lucide-react";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const sideHustle = {
  id: "freelancing",
  title: "Freelancing",
  description: "Offer your skills and services directly to clients on a project basis.",
  longDescription:
    "Freelancing empowers you to turn your skills into a flexible, independent career. Work on projects you love, set your own rates, and choose clients that align with your goals. From writing and design to programming and consulting, freelancing spans countless fields, offering endless opportunities to build income and expertise.",
  category: "Freelancing & Services",
  income: "$$-$$$$ ($20-$150+/hour)",
  difficulty: "Medium",
  timeCommitment: "Flexible (5-40+ hours/week)",
  startupCost: "$-$$ (Basic equipment and software)",
  rating: 4.8,
  reviewCount: 156,
  pros: [
    "Flexible work hours and location",
    "Freedom to choose clients and projects",
    "Set your own rates",
    "Low startup costs",
    "Ability to scale up or down as needed",
    "Diverse income streams",
  ],
  cons: [
    "Inconsistent income, especially at the beginning",
    "Responsible for finding clients and marketing yourself",
    "Must handle all business aspects (taxes, invoicing, etc.)",
    "No employee benefits (healthcare, paid time off)",
    "Can be isolating without coworkers",
  ],
  steps: [
    {
      title: "Identify Your Marketable Skills",
      description: "Pinpoint skills in demand, like writing, design, or coding, based on your experience and passions.",
    },
    {
      title: "Define Your Services and Rates",
      description: "Outline your offerings and set competitive rates by researching market standards.",
    },
    {
      title: "Create an Online Presence",
      description: "Build a portfolio website and profiles on platforms like LinkedIn or Upwork to attract clients.",
    },
    {
      title: "Build Your Portfolio",
      description: "Showcase your work with samples, even if it means starting with pro bono or discounted projects.",
    },
    {
      title: "Find Your First Clients",
      description: "Tap your network, join freelance platforms, and pitch directly to potential clients.",
    },
    {
      title: "Set Up Business Processes",
      description: "Use tools for contracts, invoicing, and project management to stay organized.",
    },
    {
      title: "Deliver Quality Work",
      description: "Exceed expectations to earn repeat business and glowing referrals.",
    },
  ],
  platforms: [
    {
      name: "Upwork",
      description: "The largest freelance marketplace with opportunities in virtually every field.",
      url: "https://www.upwork.com/?source=sidehustle",
    },
    {
      name: "Fiverr",
      description: "Create specific service packages (gigs) to attract clients quickly.",
      url: "https://www.fiverr.com/?source=sidehustle",
    },
    {
      name: "Freelancer",
      description: "Global platform with millions of projects across various skills.",
      url: "https://www.freelancer.com/?source=sidehustle",
    },
    {
      name: "99designs",
      description: "Ideal for graphic designers to showcase work and enter design contests.",
      url: "https://99designs.com/?source=sidehustle",
    },
    {
      name: "Toptal",
      description: "Exclusive network for top-tier freelancers in tech and design.",
      url: "https://www.toptal.com/?source=sidehustle",
    },
  ],
  resources: [
    {
      name: "The Freelancer's Bible",
      description: "Comprehensive guide to all aspects of freelancing.",
    },
    {
      name: "Freelancers Union",
      description: "Resources, community, and advocacy for freelancers.",
    },
    {
      name: "AND.CO",
      description: "Software for managing freelance business operations.",
    },
    {
      name: "Creative Class",
      description: "Online course on the business of freelancing.",
    },
  ],
  popularSkills: [
    "Web Development",
    "Graphic Design",
    "Content Writing",
    "Digital Marketing",
    "Social Media Management",
    "SEO",
    "Video Editing",
    "Translation",
    "Virtual Assistance",
    "Accounting",
    "Consulting",
    "UI/UX Design",
  ],
  testimonials: [
    {
      name: "Sarah M.",
      quote: "Freelancing on Upwork changed my life. I now earn $3,000/month working part-time from home!",
      skill: "Content Writing",
    },
    {
      name: "James T.",
      quote: "Fiverr helped me kickstart my graphic design career. The resources here were invaluable.",
      skill: "Graphic Design",
    },
    {
      name: "Priya R.",
      quote: "As a web developer, Toptal connected me with high-paying clients. This guide got me started!",
      skill: "Web Development",
    },
  ],
};

export default function FreelancingPage() {
  const [skillFilter, setSkillFilter] = useState("All");
  const [hours, setHours] = useState(10);
  const [rate, setRate] = useState(20);
  const skills = ["All", ...sideHustle.popularSkills];

  const filteredSkills = skillFilter === "All" ? sideHustle.popularSkills : [skillFilter];
  const filteredTestimonials =
    skillFilter === "All" ? sideHustle.testimonials : sideHustle.testimonials.filter((t) => t.skill === skillFilter);

  return (
    <>
      <ErrorBoundary fallback={<div>Error loading navigation</div>}>
        <Navbar />
      </ErrorBoundary>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 gradient-bg text-white overflow-hidden">
        <div className="absolute inset-0 noise-bg"></div>
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/sidehustles"
            className="inline-flex items-center gap-1 text-sm font-medium text-white/70 hover:text-white mb-4 animate-fade-up"
          >
            <ArrowRight className="h-4 w-4 rotate-180" /> Back to Side Hustles
          </Link>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
              Master Freelancing: Your Path to Freedom
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-up animate-delay-100">
              Turn your skills into a thriving freelance career with our expert guide, resources, and platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-delay-200">
              <Button
                asChild
                size="lg"
                className="rounded-full text-lg px-8 bg-white text-primary hover:bg-white/90"
              >
                <Link href="#get-started">Start Freelancing</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full text-lg px-8 bg-transparent border-white hover:bg-white/20 text-white"
              >
                <Link href="/quiz">Take Our Quiz</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1 mt-6 animate-fade-up animate-delay-300">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < Math.floor(sideHustle.rating) ? "text-yellow-500 fill-yellow-500" : "text-white/50"}`}
                />
              ))}
            </div>
            <span className="font-medium text-white">{sideHustle.rating}</span>
            <span className="text-white/70">({sideHustle.reviewCount} reviews)</span>
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

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center justify-center mb-4">
                <div className="h-[1px] w-12 bg-primary/70"></div>
                <span className="mx-3 text-sm font-medium text-primary">OVERVIEW</span>
                <div className="h-[1px] w-12 bg-primary/70"></div>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-up">Why Freelance?</h2>
              <p className="text-lg mb-6 animate-fade-up animate-delay-100">{sideHustle.longDescription}</p>
              <div className="grid grid-cols-2 gap-4 mb-6 animate-fade-up animate-delay-200">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Income Potential</p>
                    <p className="text-sm text-muted-foreground">{sideHustle.income}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Difficulty</p>
                    <p className="text-sm text-muted-foreground">{sideHustle.difficulty}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Time Commitment</p>
                    <p className="text-sm text-muted-foreground">{sideHustle.timeCommitment}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Startup Costs</p>
                    <p className="text-sm text-muted-foreground">{sideHustle.startupCost}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-6 animate-fade-up animate-delay-300">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="#get-started">How to Start</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link href="#platforms">Top Platforms</Link>
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="card-hover bg-white/80 backdrop-blur-sm border-0 animate-fade-up animate-delay-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" /> Pros
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {sideHustle.pros.map((pro, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="card-hover bg-white/80 backdrop-blur-sm border-0 animate-fade-up animate-delay-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-red-500" /> Cons
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {sideHustle.cons.map((con, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Skills Section */}
      <section className="py-16 md:py-24 bg-muted/10" id="skills">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="h-[1px] w-12 bg-primary/70"></div>
            <span className="mx-3 text-sm font-medium text-primary">SKILLS</span>
            <div className="h-[1px] w-12 bg-primary/70"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center animate-fade-up">
            Popular Freelancing Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up animate-delay-100">
            Explore in-demand skills to kickstart your freelancing career.
          </p>
          <div className="flex justify-center mb-6 animate-fade-up animate-delay-200">
            <Select value={skillFilter} onValueChange={setSkillFilter}>
              <SelectTrigger
                className="rounded-full bg-white/10 border-white/20 text-foreground w-64"
                suppressHydrationWarning
              >
                <SelectValue placeholder="Filter by skill" />
              </SelectTrigger>
              <SelectContent>
                {skills.map((skill) => (
                  <SelectItem key={skill} value={skill}>
                    {skill}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-wrap gap-3 justify-center animate-fade-up animate-delay-300">
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started Section */}
      <section className="py-16 md:py-24 bg-background" id="get-started">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="h-[1px] w-12 bg-primary/70"></div>
            <span className="mx-3 text-sm font-medium text-primary">GET STARTED</span>
            <div className="h-[1px] w-12 bg-primary/70"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center animate-fade-up">
            Your Freelancing Roadmap
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up animate-delay-100">
            Follow these steps to launch your freelance career with confidence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sideHustle.steps.map((step, index) => (
              <Card
                key={index}
                className="card-hover bg-white/80 backdrop-blur-sm border-0 animate-fade-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-base">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Calculator Section */}
      <section className="py-16 md:py-24 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="h-[1px] w-12 bg-primary/70"></div>
            <span className="mx-3 text-sm font-medium text-primary">CALCULATE</span>
            <div className="h-[1px] w-12 bg-primary/70"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center animate-fade-up">
            Estimate Your Freelancing Earnings
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up animate-delay-100">
            See how much you could earn based on your hours and hourly rate.
          </p>
          <Card className="card-hover bg-white/80 backdrop-blur-sm border-0 max-w-md mx-auto animate-fade-up animate-delay-200">
            <CardHeader>
              <CardTitle>Earnings Calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="hours">
                    Hours per Week
                  </label>
                  <Input
                    type="number"
                    id="hours"
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    min={0}
                    className="bg-white/50"
                    aria-label="Hours per week"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="rate">
                    Hourly Rate ($)
                  </label>
                  <Input
                    type="number"
                    id="rate"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    min={0}
                    className="bg-white/50"
                    aria-label="Hourly rate"
                    suppressHydrationWarning
                  />
                </div>
                <p className="text-lg font-semibold">
                  Estimated Weekly Earnings: ${hours * rate}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Top Platforms Section */}
      <section className="py-16 md:py-24 bg-background" id="platforms">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="h-[1px] w-12 bg-primary/70"></div>
            <span className="mx-3 text-sm font-medium text-primary">PLATFORMS</span>
            <div className="h-[1px] w-12 bg-primary/70"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center animate-fade-up">
            Top Freelancing Platforms
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up animate-delay-100">
            Connect with clients and start earning through these trusted platforms.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sideHustle.platforms.map((platform, index) => (
              <Card
                key={index}
                className="card-hover bg-white/80 backdrop-blur-sm border-0 animate-fade-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle>{platform.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-base">{platform.description}</p>
                  <Button asChild variant="outline" className="w-full rounded-full">
                    <Link href={platform.url} target="_blank" rel="noopener noreferrer">
                      Visit Website <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 md:py-24 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="h-[1px] w-12 bg-primary/70"></div>
            <span className="mx-3 text-sm font-medium text-primary">SUCCESS STORIES</span>
            <div className="h-[1px] w-12 bg-primary/70"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center animate-fade-up">
            Freelancers Who Thrived
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up animate-delay-100">
            Hear from freelancers who turned their skills into success with our guidance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredTestimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="card-hover bg-white/80 backdrop-blur-sm border-0 animate-fade-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    {testimonial.name}
                  </CardTitle>
                  <CardDescription>{testimonial.skill}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-muted-foreground">“{testimonial.quote}”</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="h-[1px] w-12 bg-primary/70"></div>
            <span className="mx-3 text-sm font-medium text-primary">RESOURCES</span>
            <div className="h-[1px] w-12 bg-primary/70"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center animate-fade-up">
            Helpful Freelancing Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up animate-delay-100">
            Boost your freelance career with these curated tools and guides.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sideHustle.resources.map((resource, index) => (
              <Card
                key={index}
                className="card-hover bg-white/80 backdrop-blur-sm border-0 animate-fade-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{resource.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{resource.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Factors Section */}
      <section className="py-16 md:py-24 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="h-[1px] w-12 bg-primary/70"></div>
            <span className="mx-3 text-sm font-medium text-primary">SUCCESS FACTORS</span>
            <div className="h-[1px] w-12 bg-primary/70"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center animate-fade-up">
            Keys to Freelancing Success
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center animate-fade-up animate-delay-200">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Continuous Learning</h3>
              <p className="text-base">Stay ahead by mastering new skills and industry trends.</p>
            </div>
            <div className="flex flex-col items-center text-center animate-fade-up animate-delay-300">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Networking</h3>
              <p className="text-base">Build connections for more opportunities and support.</p>
            </div>
            <div className="flex flex-col items-center text-center animate-fade-up animate-delay-400">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                <Landmark className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Professionalism</h3>
              <p className="text-base">Deliver quality and reliability to earn trust and referrals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-12">
            <div className="h-[1px] w-12 bg-primary/70"></div>
            <span className="mx-3 text-sm font-medium text-primary">GET STARTED</span>
            <div className="h-[1px] w-12 bg-primary/70"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-up">
            Kickstart Your Freelancing Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up animate-delay-100">
            Connect with us or take our quiz to find the perfect freelancing path for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-delay-300">
            <Button asChild variant="default" className="flex gap-2 items-center rounded-full">
              <Link href="mailto:contact@sidehustlingstories.com">
                <Mail className="h-4 w-4" /> Contact Us
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex gap-2 items-center rounded-full">
              <Link href="/quiz">
                Find Your Skill <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-br-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/3 rounded-tl-[100px]"></div>
      </section>

      <ErrorBoundary fallback={<div>Error loading footer</div>}>
        <Footer />
      </ErrorBoundary>
    </>
  );
}