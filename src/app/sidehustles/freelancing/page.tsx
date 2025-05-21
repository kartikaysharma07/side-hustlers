import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  ArrowRight, Clock, DollarSign, Star, TrendingUp,
  CheckCircle2, XCircle, Lightbulb, Landmark, GraduationCap, Users
} from "lucide-react";

// This would normally come from a database or API
const sideHustle = {
  id: "freelancing",
  title: "Freelancing",
  description: "Offer your skills and services directly to clients on a project basis.",
  longDescription: "Freelancing involves offering your professional skills and services directly to clients on a project basis, rather than working as an employee for a single company. As a freelancer, you work independently, set your own rates, choose your clients, and determine your work schedule. Freelancers typically offer services in areas like writing, design, programming, marketing, consulting, and many other professional fields.",
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
    "Diverse income streams"
  ],
  cons: [
    "Inconsistent income, especially at the beginning",
    "Responsible for finding clients and marketing yourself",
    "Must handle all business aspects (taxes, invoicing, etc.)",
    "No employee benefits (healthcare, paid time off)",
    "Can be isolating without coworkers"
  ],
  steps: [
    {
      title: "Identify Your Marketable Skills",
      description: "Determine which of your skills are in demand and can be offered as freelance services. Consider your professional experience, education, and personal interests."
    },
    {
      title: "Define Your Services and Rates",
      description: "Clearly define what services you'll offer and how much you'll charge. Research market rates for your skills and experience level to price competitively."
    },
    {
      title: "Create an Online Presence",
      description: "Build a professional website showcasing your portfolio, services, and testimonials. Set up profiles on relevant social media platforms and freelance marketplaces."
    },
    {
      title: "Build Your Portfolio",
      description: "Create samples of your work to demonstrate your skills to potential clients. If you're just starting, consider offering free or discounted work to build your portfolio."
    },
    {
      title: "Find Your First Clients",
      description: "Start with your existing network, join freelance platforms, attend networking events, and reach out to potential clients directly."
    },
    {
      title: "Set Up Business Processes",
      description: "Establish professional systems for contracts, invoicing, time tracking, and project management to ensure smooth operations."
    },
    {
      title: "Deliver Quality Work and Build Relationships",
      description: "Focus on exceeding client expectations, meeting deadlines, and building strong professional relationships to generate repeat business and referrals."
    }
  ],
  platforms: [
    {
      name: "Upwork",
      description: "The largest freelance marketplace with opportunities in virtually every field.",
      url: "https://www.upwork.com"
    },
    {
      name: "Fiverr",
      description: "Popular platform where you can create specific service packages (called 'gigs').",
      url: "https://www.fiverr.com"
    },
    {
      name: "Freelancer",
      description: "Global freelancing platform with millions of projects posted.",
      url: "https://www.freelancer.com"
    },
    {
      name: "99designs",
      description: "Specifically for graphic designers to showcase work and enter design contests.",
      url: "https://99designs.com"
    },
    {
      name: "Toptal",
      description: "Exclusive network for the top 3% of freelance talent in various fields.",
      url: "https://www.toptal.com"
    }
  ],
  resources: [
    {
      name: "The Freelancer's Bible",
      description: "Comprehensive guide to all aspects of freelancing."
    },
    {
      name: "Freelancers Union",
      description: "Organization offering resources, community, and advocacy for freelancers."
    },
    {
      name: "AND.CO",
      description: "Software for managing freelance business operations."
    },
    {
      name: "Creative Class",
      description: "Online course on the business of freelancing."
    }
  ],
  popularSkills: [
    "Web Development", "Graphic Design", "Content Writing", "Digital Marketing",
    "Social Media Management", "SEO", "Video Editing", "Translation",
    "Virtual Assistance", "Accounting", "Consulting", "UI/UX Design"
  ]
};

export default function FreelancingPage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <Link
            href="/sidehustles"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary mb-4"
          >
            <ArrowRight className="h-4 w-4 rotate-180" /> Back to Side Hustles
          </Link>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
            <h1 className="text-4xl md:text-5xl font-bold">{sideHustle.title}</h1>
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(sideHustle.rating) ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
              <span className="font-medium">{sideHustle.rating}</span>
              <span className="text-muted-foreground">({sideHustle.reviewCount} reviews)</span>
            </div>
          </div>

          <p className="text-xl text-muted-foreground">{sideHustle.description}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-lg mb-6">{sideHustle.longDescription}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
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

              <div className="flex gap-4 mt-6">
                <Button asChild size="lg">
                  <Link href="#get-started">How to Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#platforms">Top Platforms</Link>
                </Button>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 gap-6">
                <Card>
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

                <Card>
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
        </div>
      </section>

      <Separator />

      {/* Popular Skills */}
      <section className="py-12" id="skills">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Popular Freelancing Skills</h2>
          <div className="flex flex-wrap gap-3">
            {sideHustle.popularSkills.map((skill, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-muted/50 rounded-full text-sm font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* How to Get Started */}
      <section className="py-12" id="get-started">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">How to Get Started with Freelancing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sideHustle.steps.map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Top Platforms */}
      <section className="py-12 bg-muted/10" id="platforms">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Top Freelancing Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sideHustle.platforms.map((platform, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{platform.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{platform.description}</p>
                  <Button asChild variant="outline" className="w-full">
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

      {/* Resources Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Helpful Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sideHustle.resources.map((resource, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{resource.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{resource.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="py-12 bg-muted/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Keys to Success in Freelancing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Continuous Learning</h3>
              <p>Stay current with industry trends and regularly improve your skills to remain competitive.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Networking</h3>
              <p>Build relationships with clients, other freelancers, and industry professionals to expand your opportunities.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                <Landmark className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Professionalism</h3>
              <p>Maintain high standards of communication, reliability, and quality to build a strong reputation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Freelancing Journey?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Freelancing offers a flexible way to earn income while building valuable skills. Take the first step today by identifying your marketable skills and creating your online presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="#get-started">Get Started Guide</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/categories/freelancing">Explore Freelancing Categories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
