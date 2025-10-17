import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { 
  Wrench, 
  ArrowRight, 
  CheckCircle,
  Shield,
  Clock,
  Zap,
  TrendingUp,
  Settings
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Maintenance Services - Keep Your AI Systems Running Smoothly | Automations and More",
  description: "Professional AI maintenance services to keep your AI systems, automation tools, and intelligent solutions running at peak performance. Ongoing support, updates, and optimization.",
  keywords: [
    "AI maintenance",
    "artificial intelligence maintenance",
    "AI system maintenance",
    "automation maintenance",
    "AI support services",
    "AI system updates",
    "AI performance optimization",
    "AI troubleshooting"
  ],
  openGraph: {
    title: "AI Maintenance Services - Keep Your AI Systems Running Smoothly | Automations and More",
    description: "Professional AI maintenance services to keep your AI systems, automation tools, and intelligent solutions running at peak performance. Ongoing support, updates, and optimization.",
    url: "https://automationsandmore.com/ai-maintenance",
  },
  alternates: {
    canonical: "/ai-maintenance",
  },
};

const services = [
  {
    icon: Settings,
    title: "System Updates",
    description: "Regular updates and patches to keep your AI systems current and secure"
  },
  {
    icon: TrendingUp,
    title: "Performance Monitoring",
    description: "Continuous monitoring and optimization of AI system performance"
  },
  {
    icon: Shield,
    title: "Security Maintenance",
    description: "Ongoing security updates and threat protection for AI systems"
  },
  {
    icon: Wrench,
    title: "Troubleshooting",
    description: "Rapid response troubleshooting and issue resolution services"
  }
];

const benefits = [
  {
    icon: CheckCircle,
    title: "99.9% Uptime",
    description: "Ensure maximum system availability with proactive maintenance"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock support and monitoring for critical AI systems"
  },
  {
    icon: Zap,
    title: "Peak Performance",
    description: "Maintain optimal performance with regular optimization and updates"
  }
];

export default function AIMaintenancePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Support & Maintenance
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Professional{` `}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                AI Maintenance
              </span>{` `}
              Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Keep your AI systems running at peak performance with our comprehensive maintenance services. 
              Proactive support, updates, and optimization to ensure maximum uptime and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Get Maintenance Support
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
              Our AI Maintenance Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive maintenance solutions to keep your AI systems running smoothly and efficiently.
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
              Benefits of Professional AI Maintenance
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ensure your AI investments deliver maximum value with proactive maintenance.
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
              Ready to Protect Your AI Investment?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Don't let system downtime impact your business. Partner with us for reliable AI maintenance 
              that keeps your systems running smoothly and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Start Maintenance Plan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/ai-integration">
                  Learn About AI Integration
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
