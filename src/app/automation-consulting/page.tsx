import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { 
  Users, 
  ArrowRight, 
  CheckCircle,
  Target,
  Clock,
  Zap,
  TrendingUp,
  Award
} from "lucide-react";

export const metadata: Metadata = {
  title: "Automation Consulting Services - Expert Business Process Optimization | Automations and More",
  description: "Professional automation consulting services to optimize your business processes. Expert consultants help you identify, implement, and scale automation solutions for maximum ROI.",
  keywords: [
    "automation consulting",
    "business process automation consulting",
    "automation strategy",
    "process optimization consulting",
    "automation implementation",
    "business automation advisor",
    "workflow automation consulting",
    "digital transformation consulting"
  ],
  openGraph: {
    title: "Automation Consulting Services - Expert Business Process Optimization | Automations and More",
    description: "Professional automation consulting services to optimize your business processes. Expert consultants help you identify, implement, and scale automation solutions for maximum ROI.",
    url: "https://automationsandmore.com/automation-consulting",
  },
  alternates: {
    canonical: "/automation-consulting",
  },
};

const services = [
  {
    icon: Target,
    title: "Process Analysis",
    description: "Comprehensive analysis of your current business processes to identify automation opportunities"
  },
  {
    icon: Zap,
    title: "Strategy Development",
    description: "Custom automation strategies tailored to your business goals and industry requirements"
  },
  {
    icon: TrendingUp,
    title: "ROI Optimization",
    description: "Maximize return on investment with data-driven automation recommendations"
  },
  {
    icon: Award,
    title: "Implementation Support",
    description: "End-to-end support for implementing and scaling your automation solutions"
  }
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Expert Guidance",
    description: "Access to certified automation consultants with years of industry experience"
  },
  {
    icon: Clock,
    title: "Faster Implementation",
    description: "Accelerate your automation journey with proven methodologies and best practices"
  },
  {
    icon: Users,
    title: "Team Training",
    description: "Comprehensive training programs to ensure your team can manage and maintain automation systems"
  }
];

export default function AutomationConsultingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Professional Consulting
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Expert{` `}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Automation Consulting
              </span>{` `}
              Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your business with expert automation consulting. Our certified consultants help you identify, 
              implement, and scale automation solutions for maximum efficiency and ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Get Free Consultation
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
              Our Automation Consulting Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive consulting services to help you navigate your automation journey successfully.
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
              Why Choose Our Consulting Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Partner with experienced automation consultants who understand your business challenges.
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
              Ready to Start Your Automation Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get expert guidance from our certified automation consultants. Schedule a free consultation 
              to discuss your business goals and automation opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/about">
                  Learn About Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
