import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { 
  Zap, 
  ArrowRight, 
  CheckCircle,
  Users,
  Clock,
  Target
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ai Automation Philadelphia - Professional Services | Automations and More",
  description: "Professional AI automation services for philadelphia. Streamline your business processes with intelligent automation solutions.",
  keywords: [
    "ai automation-philadelphia",
    "AI automation",
    "business solutions",
    "professional services",
    "automation consulting",
    "technology solutions"
  ],
  openGraph: {
    title: "Ai Automation Philadelphia - Professional Services | Automations and More",
    description: "Professional AI automation services for philadelphia. Streamline your business processes with intelligent automation solutions.",
    url: "https://automationsandmore.com/ai-automation-philadelphia",
  },
  alternates: {
    canonical: "/ai-automation-philadelphia",
  },
};

const features = [
  {
    icon: Zap,
    title: "Expert Solutions",
    description: "Professional ai automation-philadelphia services tailored to your business needs"
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Ongoing support and maintenance to ensure your success"
  },
  {
    icon: Target,
    title: "Proven Results",
    description: "Track record of delivering measurable improvements for our clients"
  }
];

export default function AiAutomationPhiladelphiaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Ai Automation Philadelphia
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Professional{` `}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Ai Automation Philadelphia
              </span>{` `}
              Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Professional AI automation services for philadelphia. Streamline your business processes with intelligent automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Get Started
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

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Ai Automation Philadelphia Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive ai automation philadelphia solutions that deliver real results for your business.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how our ai automation philadelphia services can help your business grow and succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/about">
                  Learn More About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}