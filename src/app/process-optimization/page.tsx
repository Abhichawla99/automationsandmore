import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { 
  Settings, 
  ArrowRight, 
  CheckCircle,
  Target,
  Clock,
  Zap,
  TrendingUp,
  BarChart3
} from "lucide-react";

export const metadata: Metadata = {
  title: "Process Optimization Services - Streamline Your Business Operations | Automations and More",
  description: "Professional process optimization services to streamline operations, reduce costs, and improve efficiency. Expert analysis and optimization of business processes for maximum productivity.",
  keywords: [
    "process optimization",
    "business process optimization",
    "operational efficiency",
    "process improvement",
    "workflow optimization",
    "business process analysis",
    "operational excellence",
    "process streamlining"
  ],
  openGraph: {
    title: "Process Optimization Services - Streamline Your Business Operations | Automations and More",
    description: "Professional process optimization services to streamline operations, reduce costs, and improve efficiency. Expert analysis and optimization of business processes for maximum productivity.",
    url: "https://automationsandmore.com/process-optimization",
  },
  alternates: {
    canonical: "/process-optimization",
  },
};

const services = [
  {
    icon: BarChart3,
    title: "Process Analysis",
    description: "Comprehensive analysis of current processes to identify inefficiencies and bottlenecks"
  },
  {
    icon: Target,
    title: "Workflow Design",
    description: "Redesign workflows for optimal efficiency and reduced operational costs"
  },
  {
    icon: Settings,
    title: "System Integration",
    description: "Integrate systems and tools to eliminate redundant processes and data silos"
  },
  {
    icon: TrendingUp,
    title: "Performance Monitoring",
    description: "Continuous monitoring and optimization of process performance metrics"
  }
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Cost Reduction",
    description: "Reduce operational costs by up to 40% through process optimization"
  },
  {
    icon: Clock,
    title: "Time Savings",
    description: "Save 30+ hours per week with streamlined and automated processes"
  },
  {
    icon: Zap,
    title: "Improved Quality",
    description: "Enhance output quality and consistency with optimized processes"
  }
];

export default function ProcessOptimizationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Operational Excellence
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Professional{` `}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Process Optimization
              </span>{` `}
              Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Streamline your business operations with expert process optimization. Our services help you 
              identify inefficiencies, eliminate bottlenecks, and maximize productivity across your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Optimize Your Processes
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
              Our Process Optimization Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive process optimization solutions to maximize efficiency and reduce costs.
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
              Benefits of Process Optimization
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your operations with data-driven process optimization solutions.
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
              Ready to Optimize Your Processes?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Stop wasting time and money on inefficient processes. Let our experts analyze and 
              optimize your operations for maximum efficiency and profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Start Optimization
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/business-process-automation">
                  Learn About Automation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
