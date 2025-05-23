import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/3rd/card";
import Link from "next/link";
import { ArrowRight, ChevronRight, Search } from "lucide-react";
import { Input } from "@/components/3rd/input";
import { Button } from "@/components/3rd/button";

// Categories data - this would normally come from a database or API
const categories = [
  {
    id: "digital",
    name: "Digital & Online",
    description: "Side hustles that can be done completely online",
    count: 24,
    subcategories: ["Blogging", "Social Media", "Digital Products", "SaaS", "Affiliate Marketing"],
  },
  {
    id: "creative",
    name: "Creative & Design",
    description: "Side hustles for creatively inclined individuals",
    count: 18,
    subcategories: ["Graphic Design", "Photography", "Video Production", "Writing", "Art"],
  },
  {
    id: "freelancing",
    name: "Freelancing & Services",
    description: "Offering your skills and services to clients",
    count: 22,
    subcategories: ["Web Development", "Content Creation", "Virtual Assistant", "Consulting", "Marketing"],
  },
  {
    id: "physical",
    name: "Physical Products",
    description: "Side hustles involving selling or creating physical items",
    count: 15,
    subcategories: ["E-commerce", "Handmade Crafts", "Dropshipping", "Print-on-Demand", "Local Selling"],
  },
  {
    id: "finance",
    name: "Finance & Investing",
    description: "Side hustles related to money management and investments",
    count: 10,
    subcategories: ["Stock Trading", "Cryptocurrency", "Real Estate", "P2P Lending", "Financial Content Creation"],
  },
  {
    id: "education",
    name: "Education & Coaching",
    description: "Side hustles focused on teaching and mentoring others",
    count: 12,
    subcategories: ["Online Courses", "Tutoring", "Coaching", "Workshops", "Writing Educational Content"],
  },
  {
    id: "misc",
    name: "Miscellaneous",
    description: "Other unique and interesting side hustle opportunities",
    count: 8,
    subcategories: ["Rental Business", "Task Services", "Local Services", "Event Planning", "Seasonal Work"],
  },
  {
    id: "passive",
    name: "Passive Income",
    description: "Side hustles that generate income with minimal ongoing work",
    count: 16,
    subcategories: ["Dividend Investing", "Content Royalties", "Apps & Software", "Print-on-Demand", "Automated Digital Products"],
  },
];

export default function CategoriesPage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 gradient-bg text-white overflow-hidden">
        <div className="absolute inset-0 noise-bg"></div>
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background/20 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm font-medium text-white/70 mb-4 animate-fade-up">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span>Categories</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">Side Hustle Categories</h1>
            <p className="text-xl text-white/90 max-w-3xl animate-fade-up animate-delay-100">
              Browse our comprehensive collection of side hustles organized by category. Find the perfect opportunity that matches your skills, interests, and goals.
            </p>

            {/* Search input */}
            <div className="relative max-w-md mt-8 animate-fade-up animate-delay-200">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
              <Input
                placeholder="Search categories..."
                className="pl-10 py-6 text-base rounded-full border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-white focus:bg-white/20"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/30 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-blue-500/30 blur-3xl"></div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="h-[1px] w-12 bg-primary/70"></div>
            <span className="mx-3 text-sm font-medium text-primary">EXPLORE</span>
            <div className="h-[1px] w-12 bg-primary/70"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link key={category.id} href={`/categories/${category.id}`} className="block group">
                <Card className="card-hover border-0 shadow-sm h-full transition-all duration-300">
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
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {category.subcategories.slice(0, 3).map((subcategory) => (
                        <span
                          key={subcategory}
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary/80 text-secondary-foreground"
                        >
                          {subcategory}
                        </span>
                      ))}
                      {category.subcategories.length > 3 && (
                        <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                          +{category.subcategories.length - 3} more
                        </span>
                      )}
                    </div>
                  </CardContent>
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

      {/* CTA Section */}
      <section className="py-20 bg-primary/5 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Not Sure Where to Start?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Take our quick quiz to discover side hustles perfectly suited to your skills, interests, and time availability.
          </p>
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="/quiz">Find Your Perfect Side Hustle</Link>
          </Button>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-br-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/3 rounded-tl-[100px]"></div>
      </section>

      <Footer />
    </>
  );
}