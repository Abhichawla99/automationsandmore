import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { 
  Database, 
  ArrowRight, 
  CheckCircle,
  BarChart3,
  Clock,
  Zap,
  Shield,
  TrendingUp
} from "lucide-react";

export const metadata: Metadata = {
  title: "Data Automation Services - Streamline Data Processing & Management | Automations and More",
  description: "Professional data automation services to streamline data processing, migration, and management. Automate data workflows, reduce errors, and improve data quality with our expert solutions.",
  keywords: [
    "data automation",
    "data processing automation",
    "data migration automation",
    "data workflow automation",
    "data quality automation",
    "database automation",
    "data integration",
    "automated data management"
  ],
  openGraph: {
    title: "Data Automation Services - Streamline Data Processing & Management | Automations and More",
    description: "Professional data automation services to streamline data processing, migration, and management. Automate data workflows, reduce errors, and improve data quality with our expert solutions.",
    url: "https://automationsandmore.com/data-automation",
  },
  alternates: {
    canonical: "/data-automation",
  },
};

const services = [
  {
    icon: Database,
    title: "Data Processing",
    description: "Automated data cleaning, transformation, and processing workflows"
  },
  {
    icon: BarChart3,
    title: "Data Migration",
    description: "Seamless migration of data between systems with zero downtime"
  },
  {
    icon: Shield,
    title: "Data Quality",
    description: "Automated data validation and quality assurance processes"
  },
  {
    icon: TrendingUp,
    title: "Data Analytics",
    description: "Automated reporting and analytics pipeline development"
  }
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Error Reduction",
    description: "Eliminate manual data entry errors with automated validation and processing"
  },
  {
    icon: Clock,
    title: "Time Savings",
    description: "Reduce data processing time by up to 80% with intelligent automation"
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Process and analyze data in real-time for faster decision making"
  }
];

export default function DataAutomationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Data Intelligence
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Professional{` `}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Data Automation
              </span>{` `}
              Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Streamline your data operations with intelligent automation. Our data automation services 
              help you process, migrate, and manage data more efficiently while reducing errors and costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Automate Your Data
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
              Our Data Automation Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive data automation solutions to optimize your data operations and workflows.
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
              Benefits of Data Automation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your data operations with intelligent automation solutions.
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
              Ready to Automate Your Data Operations?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Stop wasting time on manual data processing. Let our experts help you implement 
              intelligent data automation solutions that save time and reduce errors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/business-process-automation">
                  Learn About Process Automation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
