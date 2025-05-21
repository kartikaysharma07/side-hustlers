import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowRight, Clock, DollarSign, Search, TrendingUp } from "lucide-react";

// Sample side hustle data
const sideHustles = [
  {
    id: "freelance-writing",
    title: "Freelance Writing",
    description: "Create content for blogs, websites, and publications in your area of expertise.",
    category: "Freelancing & Services",
    income: "$$-$$$",
    difficulty: "Medium",
    timeCommitment: "Flexible",
    startupCost: "$",
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
  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-10 md:pt-32 md:pb-12 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">All Side Hustles</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Browse our comprehensive collection of side hustle opportunities. Find the perfect way to earn extra income and pursue your passions.
          </p>

          {/* Search input */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search side hustles..."
              className="pl-10 py-6 text-base rounded-md"
            />
          </div>
        </div>
      </section>

      {/* Side Hustles Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sideHustles.map((hustle) => (
              <Card key={hustle.id} className="transition-all hover:shadow-md">
                <CardHeader>
                  <div className="flex justify-between mb-2">
                    <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-primary/10 text-primary">
                      {hustle.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{hustle.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{hustle.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <span>Income: {hustle.income}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                      <span>Difficulty: {hustle.difficulty}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>Time: {hustle.timeCommitment}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <span>Startup: {hustle.startupCost}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/sidehustles/${hustle.id}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    View Details <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
