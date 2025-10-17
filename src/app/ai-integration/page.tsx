import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { 
  Link as LinkIcon, 
  ArrowRight, 
  CheckCircle,
  Zap,
  Clock,
  Shield,
  TrendingUp,
  Settings
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Integration Services - Seamlessly Integrate AI Into Your Business | Automations and More",
  description: "Professional AI integration services to seamlessly connect AI solutions with your existing systems. Expert integration of AI tools, APIs, and platforms for maximum efficiency.",
  keywords: [
    "AI integration",
    "artificial intelligence integration",
    "AI system integration",
    "AI API integration",
    "AI platform integration",
    "AI tool integration",
    "AI software integration",
    "AI solution integration"
  ],
  openGraph: {
    title: "AI Integration Services - Seamlessly Integrate AI Into Your Business | Automations and More",
    description: "Professional AI integration services to seamlessly connect AI solutions with your existing systems. Expert integration of AI tools, APIs, and platforms for maximum efficiency.",
    url: "https://automationsandmore.com/ai-integration",
  },
  alternates: {
    canonical: "/ai-integration",
  },
};

const services = [
  {
    icon: LinkIcon,
    title: "System Integration",
    description: "Seamless integration of AI solutions with your existing business systems"
  },
  {
    icon: Settings,
    title: "API Development",
    description: "Custom API development for AI tool integration and data exchange"
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Secure AI integration with proper data protection and compliance measures"
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Optimize AI integration performance for maximum efficiency and reliability"
  }
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Seamless Integration",
    description: "Smooth integration without disrupting your existing workflows"
  },
  {
    icon: Clock,
    title: "Faster Deployment",
    description: "Quick and efficient AI integration with minimal downtime"
  },
  {
    icon: Zap,
    title: "Enhanced Functionality",
    description: "Boost your existing systems with powerful AI capabilities"
  }
];

export default function AIIntegrationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              AI Technology
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Professional{` `}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                AI Integration
              </span>{` `}
              Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Seamlessly integrate AI solutions into your existing business systems. Our AI integration 
              services ensure smooth connectivity, optimal performance, and enhanced functionality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Integrate AI Solutions
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
              Our AI Integration Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI integration solutions to connect AI tools with your business systems.
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
              Benefits of Professional AI Integration
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the advantages of seamless AI integration with your existing systems.
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
              Ready to Integrate AI Into Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Don't let integration challenges hold you back. Our experts ensure smooth AI integration 
              that enhances your existing systems without disruption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Start Integration
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/ai-automation-solutions">
                  Explore AI Solutions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
