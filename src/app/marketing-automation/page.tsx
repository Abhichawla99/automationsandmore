import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { 
  Megaphone, 
  ArrowRight, 
  CheckCircle,
  Target,
  Clock,
  Zap,
  TrendingUp,
  Users
} from "lucide-react";

export const metadata: Metadata = {
  title: "Marketing Automation Services - Streamline Your Marketing Campaigns | Automations and More",
  description: "Professional marketing automation services to streamline campaigns, nurture leads, and boost conversions. Automate email marketing, social media, and customer journey management.",
  keywords: [
    "marketing automation",
    "email marketing automation",
    "lead nurturing automation",
    "campaign automation",
    "marketing workflow automation",
    "customer journey automation",
    "social media automation",
    "marketing technology"
  ],
  openGraph: {
    title: "Marketing Automation Services - Streamline Your Marketing Campaigns | Automations and More",
    description: "Professional marketing automation services to streamline campaigns, nurture leads, and boost conversions. Automate email marketing, social media, and customer journey management.",
    url: "https://automationsandmore.com/marketing-automation",
  },
  alternates: {
    canonical: "/marketing-automation",
  },
};

const services = [
  {
    icon: Target,
    title: "Email Marketing",
    description: "Automated email campaigns, drip sequences, and personalized messaging"
  },
  {
    icon: Users,
    title: "Lead Nurturing",
    description: "Automated lead scoring, qualification, and nurturing workflows"
  },
  {
    icon: TrendingUp,
    title: "Campaign Management",
    description: "End-to-end campaign automation and performance tracking"
  },
  {
    icon: Megaphone,
    title: "Social Media",
    description: "Automated social media posting, engagement, and content scheduling"
  }
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Higher Conversions",
    description: "Increase conversion rates by up to 50% with targeted automation"
  },
  {
    icon: Clock,
    title: "Time Efficiency",
    description: "Save 20+ hours per week with automated marketing workflows"
  },
  {
    icon: Zap,
    title: "Better ROI",
    description: "Maximize marketing ROI with data-driven automation strategies"
  }
];

export default function MarketingAutomationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Marketing Technology
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Professional{` `}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Marketing Automation
              </span>{` `}
              Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Streamline your marketing operations with intelligent automation. Our marketing automation 
              services help you nurture leads, boost conversions, and scale your marketing efforts efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Automate Your Marketing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Marketing Automation Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive marketing automation solutions to optimize your campaigns and customer journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefits of Marketing Automation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your marketing operations with intelligent automation solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Scale Your Marketing?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Stop managing marketing tasks manually. Let our experts help you implement 
              powerful marketing automation that drives results and grows your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Start Automation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/lead-generation-automation">
                  Learn About Lead Generation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
