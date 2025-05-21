import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowRight, BookOpen, DollarSign, Users, Lightbulb, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About SideHustlingStories</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Learn more about our mission to help people discover and succeed with side hustles.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg mb-4">
                At SideHustlingStories, we believe everyone should have access to opportunities that help them earn extra income, develop new skills, and pursue their passions.
              </p>
              <p className="text-lg mb-4">
                We're dedicated to providing comprehensive, honest, and actionable information about side hustles to help you find the perfect opportunity that fits your skills, interests, and lifestyle.
              </p>
              <p className="text-lg">
                Whether you're looking to supplement your income, test a business idea, or explore a new passion, we're here to guide you on your side hustle journey.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/30">
                <DollarSign className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-medium mb-2">Financial Freedom</h3>
                <p className="text-sm text-muted-foreground">Empowering financial independence through additional income streams</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/30">
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-medium mb-2">Skill Development</h3>
                <p className="text-sm text-muted-foreground">Building valuable skills that enhance career opportunities</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/30">
                <Lightbulb className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-medium mb-2">Creativity</h3>
                <p className="text-sm text-muted-foreground">Exploring passions and creative pursuits with purpose</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/30">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-medium mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">Connecting with like-minded individuals on similar journeys</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Story Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <p className="text-lg mb-4">
              SideHustlingStories was founded in 2025 by a group of passionate entrepreneurs who had personally experienced the transformative power of side hustles. Having built successful businesses that began as side projects, our founders wanted to create a resource that would help others discover and succeed with their own side hustles.
            </p>
            <p className="text-lg mb-4">
              What started as a small blog has grown into a comprehensive platform featuring hundreds of side hustle opportunities, detailed guides, expert interviews, and a supportive community of side hustlers at all stages of their journey.
            </p>
            <p className="text-lg mb-8">
              Today, SideHustlingStories is trusted by thousands of people around the world looking to start or grow their side hustles. We're committed to continually expanding our resources and helping even more people achieve their financial and personal goals through side hustling.
            </p>

            <div className="flex justify-center mt-8">
              <Button asChild size="lg">
                <Link href="/sidehustles">Explore Side Hustles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-muted/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Have questions, suggestions, or want to share your side hustle story? We'd love to hear from you!
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto">
            <Button asChild variant="default" className="flex gap-2 items-center">
              <Link href="mailto:contact@sidehustlingstories.com">
                <Mail className="h-4 w-4" /> Email Us
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex gap-2 items-center">
              <Link href="/contact">
                Contact Form <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
