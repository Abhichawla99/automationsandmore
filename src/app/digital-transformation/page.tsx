import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { 
  Globe, 
  ArrowRight, 
  CheckCircle,
  Target,
  Clock,
  Zap,
  TrendingUp,
  Users
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Transformation Services - Modernize Your Business Operations | Automations and More",
  description: "Complete digital transformation services to modernize your business. We help companies embrace digital technologies, automate processes, and improve operational efficiency.",
  keywords: [
    "digital transformation",
    "business digitalization",
    "digital modernization",
    "technology transformation",
    "digital strategy",
    "business process digitization",
    "digital innovation",
    "enterprise digital transformation"
  ],
  openGraph: {
    title: "Digital Transformation Services - Modernize Your Business Operations | Automations and More",
    description: "Complete digital transformation services to modernize your business. We help companies embrace digital technologies, automate processes, and improve operational efficiency.",
    url: "https://automationsandmore.com/digital-transformation",
  },
  alternates: {
    canonical: "/digital-transformation",
  },
};

const phases = [
  {
    icon: Target,
    title: "Assessment & Strategy",
    description: "Comprehensive evaluation of current systems and development of digital transformation roadmap"
  },
  {
    icon: Zap,
    title: "Implementation",
    description: "Deployment of digital solutions and automation tools to streamline operations"
  },
  {
    icon: TrendingUp,
    title: "Optimization",
    description: "Continuous monitoring and improvement of digital processes for maximum efficiency"
  },
  {
    icon: Users,
    title: "Training & Support",
    description: "Comprehensive training programs and ongoing support for your digital transformation journey"
  }
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Increased Efficiency",
    description: "Streamline operations and reduce manual work with automated digital processes"
  },
  {
    icon: Clock,
    title: "Faster Operations",
    description: "Accelerate business processes and improve response times with digital solutions"
  },
  {
    icon: Globe,
    title: "Better Customer Experience",
    description: "Enhance customer interactions with modern digital touchpoints and services"
  }
];

export default function DigitalTransformationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Digital Innovation
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Complete{` `}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Digital Transformation
              </span>{` `}
              Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your business for the digital age. Our comprehensive digital transformation services 
              help you modernize operations, embrace new technologies, and stay competitive in today's market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Start Your Transformation
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

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Digital Transformation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A structured approach to ensure successful digital transformation across your organization.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <phase.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {phase.description}
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
              Benefits of Digital Transformation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Unlock the full potential of your business with strategic digital transformation.
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Don't get left behind in the digital revolution. Partner with us to modernize your operations 
              and unlock new opportunities for growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/automation-consulting">
                  Learn About Our Process
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
