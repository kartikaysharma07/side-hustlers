import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/3rd/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/3rd/card";
import { Input } from "@/components/3rd/input";
import Link from "next/link";
import { ArrowRight, Mail, Users, Lightbulb, BookOpen, DollarSign, Star } from "lucide-react";

export default function AboutPage() {
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
              Empowering Your Side Hustle Journey
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-up animate-delay-100">
              At SideHustlingStories, we’re on a mission to help you unlock financial freedom, discover your passions, and build a life you love through side hustles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-delay-200">
              <Button
                asChild
                size="lg"
                className="rounded-full text-lg px-8 bg-white text-primary hover:bg-white/90"
              >
                <Link href="/sidehustles">Explore Side Hustles</Link>
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

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="h-[1px] w-12 bg-primary/70"></div>
              <span className="mx-3 text-sm font-medium text-primary">OUR MISSION</span>
              <div className="h-[1px] w-12 bg-primary/70"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-up">
              Why We Exist
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up animate-delay-100">
              We’re here to inspire, educate, and connect side hustlers worldwide, helping you turn your skills and passions into meaningful income streams.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg animate-fade-up animate-delay-200">
                SideHustlingStories was born from a simple belief: everyone deserves the opportunity to create financial freedom and pursue their dreams. Whether you’re saving for a big goal, exploring a passion, or building a business, side hustles can transform your life.
              </p>
              <p className="text-lg animate-fade-up animate-delay-300">
                We provide honest, actionable resources—guides, stories, and tools—to help you find the perfect side hustle. Our community connects you with like-minded hustlers, so you’re never alone on your journey.
              </p>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 animate-fade-up animate-delay-400"
              >
                <Link href="/community">Join Our Community</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white/80 backdrop-blur-sm card-hover animate-fade-up animate-delay-200">
                <DollarSign className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-medium mb-2">Financial Freedom</h3>
                <p className="text-sm text-muted-foreground">
                  Unlock extra income to achieve your financial goals.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white/80 backdrop-blur-sm card-hover animate-fade-up animate-delay-300">
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-medium mb-2">Skill Development</h3>
                <p className="text-sm text-muted-foreground">
                  Learn new skills to boost your career and confidence.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white/80 backdrop-blur-sm card-hover animate-fade-up animate-delay-400">
                <Lightbulb className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-medium mb-2">Creativity</h3>
                <p className="text-sm text-muted-foreground">
                  Turn your passions into profitable ventures.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white/80 backdrop-blur-sm card-hover animate-fade-up animate-delay-500">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-medium mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with hustlers who share your drive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="h-[1px] w-12 bg-primary/70"></div>
              <span className="mx-3 text-sm font-medium text-primary">OUR STORY</span>
              <div className="h-[1px] w-12 bg-primary/70"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-up">
              How We Started
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up animate-delay-100">
              From a spark of inspiration to a global community, here’s the story of SideHustlingStories.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-start gap-6 animate-fade-up animate-delay-200">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                2025
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">The Beginning</h3>
                <p className="text-lg text-muted-foreground">
                  Founded by entrepreneurs who turned side hustles into thriving businesses, SideHustlingStories started as a blog to share their insights and inspire others.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 animate-fade-up animate-delay-300">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                2026
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Growth & Community</h3>
                <p className="text-lg text-muted-foreground">
                  We expanded into a platform with hundreds of side hustle guides, expert interviews, and a vibrant community of hustlers sharing stories and tips.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 animate-fade-up animate-delay-400">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                Today
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Empowering Millions</h3>
                <p className="text-lg text-muted-foreground">
                  Trusted by thousands worldwide, we’re committed to helping you start, grow, and succeed with your side hustle, with new resources added daily.
                </p>
              </div>
            </div>
            <div className="text-center mt-12 animate-fade-up animate-delay-500">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/sidehustles">Discover Side Hustles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="h-[1px] w-12 bg-primary/70"></div>
              <span className="mx-3 text-sm font-medium text-primary">WHAT HUSTLERS SAY</span>
              <div className="h-[1px] w-12 bg-primary/70"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-up">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up animate-delay-100">
              Hear from side hustlers who’ve transformed their lives with our resources.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover bg-white/80 backdrop-blur-sm border-0 animate-fade-up animate-delay-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  Sarah M.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  “SideHustlingStories helped me start freelancing on Fiverr. I now earn $2,000/month working part-time!”
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover bg-white/80 backdrop-blur-sm border-0 animate-fade-up animate-delay-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  James T.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  “The guides on blogging were a game-changer. My blog now generates passive income thanks to their tips.”
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover bg-white/80 backdrop-blur-sm border-0 animate-fade-up animate-delay-400">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  Priya R.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  “The community is so supportive! I found my e-commerce niche through their quiz and resources.”
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter & Contact Section */}
      <section className="py-16 md:py-24 bg-primary/5 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="h-[1px] w-12 bg-primary/70"></div>
            <span className="mx-3 text-sm font-medium text-primary">STAY CONNECTED</span>
            <div className="h-[1px] w-12 bg-primary/70"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-up">
            Join Our Hustle Hub
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up animate-delay-100">
            Get weekly tips, side hustle ideas, and success stories delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8 animate-fade-up animate-delay-200">
            <Input
              type="email"
              placeholder="Enter your email"
              className="rounded-full bg-white/50 focus:ring-primary"
              aria-label="Email address for newsletter"
            />
            <Button type="submit" className="rounded-full px-8">
              Subscribe
            </Button>
          </form>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto animate-fade-up animate-delay-300">
            <Button asChild variant="default" className="flex gap-2 items-center rounded-full">
              <Link href="mailto:contact@sidehustlingstories.com">
                <Mail className="h-4 w-4" /> Email Us
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex gap-2 items-center rounded-full">
              <Link href="/contact">
                Contact Form <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-br-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/3 rounded-tl-[100px]"></div>
      </section>

      <Footer />
    </>
  );
}