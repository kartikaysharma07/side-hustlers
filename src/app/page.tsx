import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Clock, DollarSign, LineChart, TrendingUp, Briefcase, Sparkles, LucideIcon } from "lucide-react";

interface SideHustleCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  income: string;
  difficulty: string;
  timeCommitment: string;
}

// Sample side hustle data
const featuredSideHustles: SideHustleCard[] = [
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
];

// Side hustle categories
const categories = [
  { id: "digital", name: "Digital & Online", count: 24 },
  { id: "creative", name: "Creative & Design", count: 18 },
  { id: "freelancing", name: "Freelancing & Services", count: 22 },
  { id: "physical", name: "Physical Products", count: 15 },
  { id: "finance", name: "Finance & Investing", count: 10 },
  { id: "education", name: "Education & Coaching", count: 12 },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-28 md:py-40 gradient-bg text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></div>
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background/20 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-up">
              Discover Your Perfect <span className="text-hero-foreground underline decoration-4 decoration-primary/70">Side Hustle</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-white/90 animate-fade-up animate-delay-100">
              Explore hundreds of ways to earn extra income, build new skills, and pursue your passions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-delay-200">
              <Button asChild size="lg" className="rounded-full text-lg px-8 hover:bg-white hover:text-primary">
                <Link href="/categories">Browse Side Hustles</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full text-lg px-8 bg-transparent border-white hover:bg-white/20 text-white">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/30 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-blue-500/30 blur-3xl"></div>
      </section>

      {/* Featured Side Hustles */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="h-[1px] w-12 bg-primary/70"></div>
              <span className="mx-3 text-sm font-medium text-primary">FEATURED</span>
              <div className="h-[1px] w-12 bg-primary/70"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Popular Side Hustles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore some of the most popular ways people are making extra income today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredSideHustles.map((hustle, index) => (
              <Card key={hustle.id} className="card-hover border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="mb-4 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    {hustle.icon}
                  </div>
                  <CardTitle className="text-xl">{hustle.title}</CardTitle>
                  <CardDescription className="text-base">{hustle.description}</CardDescription>
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
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full justify-between hover:bg-primary/5">
                    <Link href={`/sidehustles/${hustle.id}`}>
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-14">
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link href="/sidehustles">View All Side Hustles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Side Hustle Section */}
      <section className="py-20 bg-primary/5 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="h-[1px] w-12 bg-primary/70"></div>
              <span className="mx-3 text-sm font-medium text-primary">WHY START</span>
              <div className="h-[1px] w-12 bg-primary/70"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Start a Side Hustle?</h2>
            <p className="text-lg text-muted-foreground">
              A side hustle can transform your life in many ways beyond just the extra income.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 shadow-sm card-hover">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Extra Income</h3>
              <p className="text-muted-foreground">
                Supplement your main income, pay off debt faster, or save for future goals like travel or a home.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-sm card-hover">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Skill Development</h3>
              <p className="text-muted-foreground">
                Learn valuable new skills that can enhance your career prospects and personal growth.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-sm card-hover">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Freedom & Security</h3>
              <p className="text-muted-foreground">
                Create financial security with multiple income streams and enjoy more freedom in your career choices.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-bl-[200px]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/3 rounded-tr-[200px]"></div>
      </section>

      {/* Categories Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="h-[1px] w-12 bg-primary/70"></div>
              <span className="mx-3 text-sm font-medium text-primary">CATEGORIES</span>
              <div className="h-[1px] w-12 bg-primary/70"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Browse by Category</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find the perfect side hustle based on your interests, skills, and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link key={category.id} href={`/categories/${category.id}`} className="block">
                <Card className="card-hover border-0 shadow-sm h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {category.name}
                      <span className="text-sm font-normal bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {category.count}
                      </span>
                    </CardTitle>
                    <CardDescription>Explore this category</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-between text-primary pt-0">
                    <span className="text-sm font-medium">View Side Hustles</span>
                    <ArrowRight className="h-4 w-4" />
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 gradient-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="h-12 w-12 mx-auto mb-6 text-white/90" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Side Hustle?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Join thousands of people who have used SideHustlingStories to find their
              perfect side hustle and start earning extra income today.
            </p>
            <Button asChild size="lg" className="rounded-full text-lg px-10 bg-white text-primary hover:bg-white/90 hover:text-primary">
              <Link href="/sidehustles">Get Started Now</Link>
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/30 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-blue-500/30 blur-3xl"></div>
      </section>

      <Footer />
    </>
  );
}
