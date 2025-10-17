import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { 
  Zap, 
  Bot, 
  Workflow, 
  Database, 
  TrendingUp, 
  Clock,
  ArrowRight,
  CheckCircle,
  Star,
  DollarSign,
  Target,
  Building2,
  Activity,
  Users,
  FileText
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Business Automation Services - Streamline Your Operations",
  description: "Transform your business with AI automation services. Process automation, workflow optimization, data integration, and intelligent business solutions for small and medium businesses.",
  keywords: [
    "AI business automation services",
    "business process automation",
    "workflow automation AI",
    "AI automation consulting",
    "business automation solutions",
    "AI process optimization",
    "automated business workflows",
    "AI integration services",
    "business intelligence automation",
    "AI automation implementation"
  ],
  openGraph: {
    title: "AI Business Automation Services - Streamline Your Operations",
    description: "Transform your business with AI automation services. Process automation, workflow optimization, and intelligent business solutions.",
    url: "https://automationsandmore.com/services/ai-automation",
  },
  alternates: {
    canonical: "/services/ai-automation",
  },
};

const automationServices = [
  {
    title: "Process Automation",
    description: "Automate repetitive business processes to save time and reduce errors",
    icon: Workflow,
    features: [
      "Document processing automation",
      "Email and communication automation",
      "Data entry and validation",
      "Approval workflow automation"
    ]
  },
  {
    title: "Data Integration & Analytics",
    description: "Connect your systems and gain insights from your business data",
    icon: Database,
    features: [
      "System integration and API connections",
      "Real-time data synchronization",
      "Business intelligence dashboards",
      "Predictive analytics and reporting"
    ]
  },
  {
    title: "Customer Service Automation",
    description: "Enhance customer experience with intelligent automation",
    icon: Users,
    features: [
      "AI-powered chatbots and virtual assistants",
      "Automated customer support workflows",
      "Customer communication automation",
      "Service ticket management"
    ]
  },
  {
    title: "Business Intelligence",
    description: "Make data-driven decisions with AI-powered insights",
    icon: Activity,
    features: [
      "Automated reporting and analytics",
      "Performance monitoring and alerts",
      "Trend analysis and forecasting",
      "Custom dashboard creation"
    ]
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Save 20-40 Hours Weekly",
    description: "Automate repetitive tasks and focus on high-value business activities"
  },
  {
    icon: DollarSign,
    title: "Reduce Costs by 30-50%",
    description: "Eliminate manual processes and reduce operational expenses"
  },
  {
    icon: Target,
    title: "Improve Accuracy by 95%",
    description: "AI automation reduces human errors and ensures consistent results"
  }
];

const industries = [
  {
    name: "Retail & E-commerce",
    icon: Building2,
    href: "/industries/retail",
    description: "Inventory management, customer service, and sales optimization"
  },
  {
    name: "Healthcare",
    icon: Building2,
    href: "/industries/healthcare",
    description: "Patient management, appointment scheduling, and record automation"
  },
  {
    name: "Restaurants",
    icon: Building2,
    href: "/industries/restaurants",
    description: "Order management, inventory tracking, and customer engagement"
  },
  {
    name: "Professional Services",
    icon: Building2,
    href: "/industries/professional-services",
    description: "Client management, document automation, and workflow optimization"
  },
  {
    name: "Real Estate",
    icon: Building2,
    href: "/industries/real-estate",
    description: "Lead management, property listings, and client communication"
  },
  {
    name: "Manufacturing",
    icon: Building2,
    href: "/industries/manufacturing",
    description: "Production optimization, quality control, and supply chain management"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "We analyze your current processes and identify automation opportunities"
  },
  {
    step: "02", 
    title: "Strategy & Planning",
    description: "Develop a comprehensive automation strategy tailored to your business"
  },
  {
    step: "03",
    title: "Implementation",
    description: "Build and deploy AI automation solutions with minimal disruption"
  },
  {
    step: "04",
    title: "Optimization & Support",
    description: "Monitor performance and continuously optimize your automation systems"
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Business Automation Services",
  "description": "Transform your business with AI automation services including process automation, workflow optimization, data integration, and intelligent business solutions.",
  "provider": {
    "@type": "Organization",
    "name": "Automations and More",
    "url": "https://automationsandmore.com"
  },
  "serviceType": "AI Business Automation",
  "areaServed": "United States",
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Small and Medium Businesses"
  },
  "offers": {
    "@type": "Offer",
    "description": "AI automation services for businesses",
    "category": "Business Automation Services"
  }
};

export default function AIAutomationPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              AI Business Automation Services
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Business Operations
              </span>{" "}
              with AI
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Streamline your business processes, reduce costs, and improve efficiency with 
              our comprehensive AI automation services designed for small and medium businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Get Your AI Automation Solution
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="#services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our AI Automation Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI automation services help businesses increase efficiency, reduce costs, 
              and focus on what matters most - growing their business.
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

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our AI Automation Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI automation solutions designed to streamline your business 
              operations and drive growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {automationServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our AI Automation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We follow a proven process to ensure successful AI automation implementation 
              for your business.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Automation for Every Industry
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide AI automation solutions tailored to specific industries and business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Link key={index} href={industry.href}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <industry.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{industry.name}</h3>
                    <p className="text-sm text-muted-foreground">{industry.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                AI Automation FAQ
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about our AI automation services.
              </p>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How long does it take to implement AI automation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Implementation timelines vary based on complexity, but most projects are completed within 4-12 weeks. 
                    We work closely with you to ensure minimal disruption to your daily operations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What types of processes can be automated?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We can automate a wide range of business processes including data entry, document processing, 
                    customer communications, inventory management, reporting, and workflow approvals.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do I need technical knowledge to use AI automation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No technical knowledge required! Our AI automation solutions are designed to be user-friendly. 
                    We provide comprehensive training and ongoing support to ensure you can easily manage your automation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join businesses that have already transformed their operations with AI automation. 
              Let's discuss how we can help streamline your business processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Start Your Automation Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/services/websites">
                  View Our Other Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">Automations & More</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Helping businesses leverage AI for process automation, workflow optimization, 
                and intelligent business solutions that drive growth and efficiency.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/services/ai-automation" className="hover:text-foreground">AI Automation</Link></li>
                <li><Link href="/services/websites" className="hover:text-foreground">Custom Websites</Link></li>
                <li><Link href="/services/apps" className="hover:text-foreground">Business Apps</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-foreground">About</Link></li>
                <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
                <li><Link href="/industries" className="hover:text-foreground">Industries</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Automations and More. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
