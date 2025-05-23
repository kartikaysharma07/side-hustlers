"use client";

import { useState } from "react";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import Link from "next/link";
import { ArrowRight, Mail, Users, Lightbulb, BookOpen, DollarSign, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`); // Replace with API call later
    setEmail("");
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 gradient-bg text-white overflow-hidden">
        <div className="absolute inset-0 noise-bg"></div>
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Your Side Hustle Journey
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              At SideHustlingStories, we’re on a mission to help you unlock financial freedom, discover your passions, and build a life you love through side hustles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </motion.div>
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Why We Exist</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We’re here to inspire, educate, and connect side hustlers worldwide, helping you turn your skills and passions into meaningful income streams.
              </p>
            </motion.div>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <p className="text-lg">
                SideHustlingStories was born from a simple belief: everyone deserves the opportunity to create financial freedom and pursue their dreams. Whether you’re saving for a big goal, exploring a passion, or building a business, side hustles can transform your life.
              </p>
              <p className="text-lg">
                We provide honest, actionable resources—guides, stories, and tools—to help you find the perfect side hustle. Our community connects you with like-minded hustlers, so you’re never alone on your journey.
              </p>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link href="/community">Join Our Community</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: DollarSign, title: "Financial Freedom", text: "Unlock extra income to achieve your financial goals." },
                { icon: BookOpen, title: "Skill Development", text: "Learn new skills to boost your career and confidence." },
                { icon: Lightbulb, title: "Creativity", text: "Turn your passions into profitable ventures." },
                { icon: Users, title: "Community", text: "Connect with hustlers who share your drive." },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex flex-col items-center text-center p-6 rounded-lg bg-white/80 backdrop-blur-sm card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <item.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">How We Started</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From a spark of inspiration to a global community, here’s the story of SideHustlingStories.
              </p>
            </motion.div>
          </div>
          <motion.div
            className="max-w-4xl mx-auto space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {[
              {
                year: "2025",
                title: "The Beginning",
                text: "Founded by entrepreneurs who turned side hustles into thriving businesses, SideHustlingStories started as a blog to share their insights and inspire others.",
              },
              {
                year: "2026",
                title: "Growth & Community",
                text: "We expanded into a platform with hundreds of side hustle guides, expert interviews, and a vibrant community of hustlers sharing stories and tips.",
              },
              {
                year: "Today",
                title: "Empowering Millions",
                text: "Trusted by thousands worldwide, we’re committed to helping you start, grow, and succeed with your side hustle, with new resources added daily.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.year}
                className="flex items-start gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {item.year}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-lg text-muted-foreground">{item.text}</p>
                </div>
              </motion.div>
            ))}
            <div className="text-center mt-12">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/sidehustles">Discover Side Hustles</Link>
              </Button>
            </div>
          </motion.div>
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Success Stories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear from side hustlers who’ve transformed their lives with our resources.
              </p>
            </motion.div>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {[
              {
                name: "Sarah M.",
                quote: "SideHustlingStories helped me start freelancing on Fiverr. I now earn $2,000/month working part-time!",
              },
              {
                name: "James T.",
                quote: "The guides on blogging were a game-changer. My blog now generates passive income thanks to their tips.",
              },
              {
                name: "Priya R.",
                quote: "The community is so supportive! I found my e-commerce niche through their quiz and resources.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="card-hover bg-white/80 backdrop-blur-sm border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-primary" />
                      {item.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground">{item.quote}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Join Our Hustle Hub</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Get weekly tips, side hustle ideas, and success stories delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-full bg-white/50 focus:ring-primary"
                aria-label="Email address for newsletter"
                required
              />
              <Button type="submit" className="rounded-full px-8">
                Subscribe
              </Button>
            </form>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
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
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-br-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/3 rounded-tl-[100px]"></div>
      </section>

      <Footer />
    </>
  );
}