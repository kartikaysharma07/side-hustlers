
"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Command, CommandInput, CommandList, CommandItem } from "cmdk";
import { Navbar } from "../../../components/layout/Navbar";
import { Footer } from "../../../components/layout/Footer";
import { Button } from "../../../components/3rd/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/3rd/card";
import { Input } from "../../../components/3rd/input";
import { Separator } from "../../../components/3rd/separator";
import { ErrorBoundary } from "../../../components/ErrorBoundary";
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
  AlertCircle,
} from "lucide-react";
import sideHustles from "../../../data/sideHustles.json";

interface SideHustle {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  income: string;
  difficulty: string;
  timeCommitment: string;
  startupCost?: string;
  rating?: number;
  reviewCount?: number;
  pros?: string[];
  cons?: string[];
  steps?: { title: string; description: string }[];
  platforms?: { name: string; description: string; url: string }[];
  resources?: { name: string; description: string }[];
  popularSkills?: string[];
  testimonials?: { name: string; quote: string; skill: string }[];
}

export default function SideHustlePage({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const [skillFilter, setSkillFilter] = useState("All");
  const [hours, setHours] = useState<number>(10);
  const [rate, setRate] = useState<number>(20);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const hustle = sideHustles.find((h) => h.id === params.id) as SideHustle | undefined;
  if (!hustle) {
    notFound();
  }

  const skills = hustle.popularSkills ? ["All", ...hustle.popularSkills] : ["All"];
  const filteredSkills = skillFilter === "All" ? hustle.popularSkills || [] : [skillFilter];
  const filteredTestimonials =
    skillFilter === "All"
      ? hustle.testimonials || []
      : (hustle.testimonials || []).filter((t) => t.skill === skillFilter);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSelect = (value: string) => {
    setSkillFilter(value);
  };

  const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (isNaN(value) || value < 0) {
      setError("Hours cannot be negative or invalid");
    } else {
      setHours(value);
      setError(null);
    }
  };

  const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (isNaN(value) || value < 0) {
      setError("Rate cannot be negative or invalid");
    } else {
      setRate(value);
      setError(null);
    }
  };

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "skills", label: "Skills" },
    { id: "get-started", label: "Get Started" },
    { id: "calculator", label: "Calculator" },
    { id: "platforms", label: "Platforms" },
    { id: "testimonials", label: "Stories" },
    { id: "resources", label: "Resources" },
    { id: "success", label: "Success Factors" },
  ];

  return (
    <>
      <ErrorBoundary fallback={<div>Error loading navigation</div>}>
        <Navbar />
      </ErrorBoundary>

      {/* Sticky Section Navigation */}
      <motion.div
        className="fixed top-16 left-0 right-0 bg-background/95 backdrop-blur-md z-40 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: isNavVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-2 flex overflow-x-auto gap-4">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              {section.label}
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 bg-gradient-to-b from-primary/80 to-primary text-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link
              href="/sidehustles"
              className="inline-flex items-center gap-1 text-sm font-medium text-white/70 hover:text-white mb-4"
              aria-label="Back to side hustles"
            >
              <ArrowRight className="h-4 w-4 rotate-180" /> Back to Side Hustles
            </Link>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">{hustle.title}</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">{hustle.description}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full text-lg px-8 bg-white text-primary hover:bg-white/90"
                >
                  <Link href="#get-started" aria-label={`Start ${hustle.title}`}>Start {hustle.title}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full text-lg px-8 bg-transparent border-white hover:bg-white/20 text-white"
                >
                  <Link href="/quiz" aria-label="Take side hustle quiz">Take Our Quiz</Link>
                </Button>
              </div>
            </div>
            {hustle.rating && (
              <div className="flex items-center justify-center gap-1 mt-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(hustle.rating) ? "text-yellow-500 fill-yellow-500" : "text-white/50"}`}
                    />
                  ))}
                </div>
                <span className="font-medium text-white">{hustle.rating}</span>
                <span className="text-white/70">({hustle.reviewCount} reviews)</span>
              </div>
            )}
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-white/30 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-blue-500/30 blur-3xl"></div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-background" id="overview">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <div className="flex items-center justify-center mb-4">
                <div className="h-[1px] w-12 bg-primary"></div>
                <span className="mx-3 text-sm font-medium text-primary">OVERVIEW</span>
                <div className="h-[1px] w-12 bg-primary"></div>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why {hustle.title}?</h2>
              <p className="text-lg mb-6">{hustle.longDescription || hustle.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Income Potential</p>
                    <p className="text-sm text-muted-foreground">{hustle.income}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Difficulty</p>
                    <p className="text-sm text-muted-foreground">{hustle.difficulty}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Time Commitment</p>
                    <p className="text-sm text-muted-foreground">{hustle.timeCommitment}</p>
                  </div>
                </div>
                {hustle.startupCost && (
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Startup Costs</p>
                      <p className="text-sm text-muted-foreground">{hustle.startupCost}</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex gap-4 mt-6">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="#get-started" aria-label="How to start">How to Start</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link href="#platforms" aria-label="Top platforms">Top Platforms</Link>
                </Button>
              </div>
            </div>
            {hustle.pros && hustle.cons && (
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow bg-background/80 backdrop-blur-sm border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" /> Pros
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {hustle.pros.map((pro, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span>{pro}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow bg-background/80 backdrop-blur-sm border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-red-500" /> Cons
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {hustle.cons.map((con, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                          <span>{con}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Popular Skills Section */}
      {hustle.popularSkills && (
        <section className="py-16 md:py-24 bg-muted/10" id="skills">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-12">
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="mx-3 text-sm font-medium text-primary">SKILLS</span>
              <div className="h-[1px] w-12 bg-primary"></div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
                Popular {hustle.title} Skills
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Explore in-demand skills to kickstart your {hustle.title.toLowerCase()} career.
              </p>
              <div className="flex justify-center mb-6">
                <Command className="w-64 rounded-lg border bg-background/10 border-border">
                  <CommandInput placeholder="Search skills..." aria-label="Search skills" />
                  <CommandList>
                    {skills.map((skill) => (
                      <CommandItem key={skill} value={skill} onSelect={handleSearchSelect}>
                        {skill}
                      </CommandItem>
                    ))}
                  </CommandList>
                </Command>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {filteredSkills.length > 0 ? (
                  filteredSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {skill}
                    </motion.div>
                  ))
                ) : (
                  <p className="text-muted-foreground">No skills match your filter.</p>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* How to Get Started Section */}
      {hustle.steps && (
        <section className="py-16 md:py-24 bg-background" id="get-started">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-12">
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="mx-3 text-sm font-medium text-primary">GET STARTED</span>
              <div className="h-[1px] w-12 bg-primary"></div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">Your {hustle.title} Roadmap</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                Follow these steps to launch your {hustle.title.toLowerCase()} career with confidence.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {hustle.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow bg-background/80 backdrop-blur-sm border-0">
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
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Earnings Calculator Section */}
      <section className="py-16 md:py-24 bg-muted/10" id="calculator">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="mx-3 text-sm font-medium text-primary">CALCULATE</span>
            <div className="h-[1px] w-12 bg-primary"></div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
              Estimate Your {hustle.title} Earnings
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              See how much you could earn based on your hours and hourly rate.
            </p>
            <Card className="hover:shadow-lg transition-shadow bg-background/80 backdrop-blur-sm border-0 max-w-md mx-auto">
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
                      onChange={handleHoursChange}
                      min={0}
                      className="bg-background/50"
                      aria-label="Hours per week"
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
                      onChange={handleRateChange}
                      min={0}
                      className="bg-background/50"
                      aria-label="Hourly rate"
                    />
                  </div>
                  {error && (
                    <div className="flex items-center gap-2 text-red-500 bg-red-50 p-3 rounded-md" role="alert">
                      <AlertCircle className="h-5 w-5" />
                      <p className="text-sm">{error}</p>
                    </div>
                  )}
                  <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 h-2 bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min((hours * rate) / 5000, 1) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <p className="text-lg font-semibold">
                    Estimated Weekly Earnings: ${(hours * rate).toFixed(2)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Monthly Estimate: ${(hours * rate * 4).toFixed(2)}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Top Platforms Section */}
      {hustle.platforms && (
        <section className="py-16 md:py-24 bg-background" id="platforms">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-12">
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="mx-3 text-sm font-medium text-primary">PLATFORMS</span>
              <div className="h-[1px] w-12 bg-primary"></div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
                Top {hustle.title} Platforms
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                Connect with clients and start earning through these trusted platforms.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hustle.platforms.map((platform, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow bg-background/80 backdrop-blur-sm border-0">
                      <CardHeader>
                        <CardTitle>{platform.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-base">{platform.description}</p>
                        <Button asChild variant="outline" className="w-full rounded-full">
                          <Link href={platform.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${platform.name}`}>
                            Visit Website <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Success Stories Section */}
      {hustle.testimonials && (
        <section className="py-16 md:py-24 bg-muted/10" id="testimonials">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-12">
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="mx-3 text-sm font-medium text-primary">SUCCESS STORIES</span>
              <div className="h-[1px] w-12 bg-primary"></div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
                {hustle.title} Success Stories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                Hear from those who turned their skills into success with our guidance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredTestimonials.length > 0 ? (
                  filteredTestimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="hover:shadow-lg transition-shadow bg-background/80 backdrop-blur-sm border-0">
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
                    </motion.div>
                  ))
                ) : (
                  <p className="col-span-full text-center text-muted-foreground">
                    No testimonials available for this skill.
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Resources Section */}
      {hustle.resources && (
        <section className="py-16 md:py-24 bg-background" id="resources">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-12">
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="mx-3 text-sm font-medium text-primary">RESOURCES</span>
              <div className="h-[1px] w-12 bg-primary"></div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
                Helpful {hustle.title} Resources
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                Boost your {hustle.title.toLowerCase()} career with these curated tools and guides.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {hustle.resources.map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow bg-background/80 backdrop-blur-sm border-0">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{resource.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{resource.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Success Factors Section */}
      <section className="py-16 md:py-24 bg-muted/10" id="success">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="mx-3 text-sm font-medium text-primary">SUCCESS FACTORS</span>
            <div className="h-[1px] w-12 bg-primary"></div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
              Keys to {hustle.title} Success
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Continuous Learning</h3>
                <p className="text-base">Stay ahead by mastering new skills and industry trends.</p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Networking</h3>
                <p className="text-base">Build connections for more opportunities and support.</p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Landmark className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Professionalism</h3>
                <p className="text-base">Deliver quality and reliability to earn trust and referrals.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-12">
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="mx-3 text-sm font-medium text-primary">GET STARTED</span>
            <div className="h-[1px] w-12 bg-primary"></div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Kickstart Your {hustle.title} Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Connect with us or take our quiz to find the perfect {hustle.title.toLowerCase()} path for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="default" className="flex gap-2 items-center rounded-full">
                <Link href="/contact" aria-label="Contact us">
                  <Mail className="h-4 w-4" /> Contact Us
                </Link>
              </Button>
              <Button asChild variant="outline" className="flex gap-2 items-center rounded-full">
                <Link href="/quiz" aria-label="Find your skill">
                  Find Your Skill <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
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