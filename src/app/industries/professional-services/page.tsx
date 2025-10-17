import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { 
  Briefcase, 
  FileText, 
  Users, 
  Calendar, 
  TrendingUp, 
  Clock,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  DollarSign,
  Target,
  Building2,
  BarChart3
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation for Professional Services & Consulting Businesses",
  description: "Transform your professional services firm with AI automation. Client management, document automation, workflow optimization, and business intelligence for consultants, lawyers, accountants, and agencies.",
  keywords: [
    "professional services AI automation",
    "consulting business automation",
    "law firm AI automation",
    "accounting firm automation",
    "agency automation AI",
    "client management AI",
    "document automation professional services",
    "workflow automation consulting",
    "AI for professional services",
    "business intelligence consulting"
  ],
  openGraph: {
    title: "AI Automation for Professional Services & Consulting Businesses",
    description: "Transform your professional services firm with AI automation. Client management, document automation, and workflow optimization.",
    url: "https://automationsandmore.com/industries/professional-services",
  },
  alternates: {
    canonical: "/industries/professional-services",
  },
};

const professionalSolutions = [
  {
    title: "Client Management Automation",
    description: "Streamlined client onboarding, communication, and relationship management",
    icon: Users,
    features: [
      "Automated client onboarding workflows",
      "Intelligent client communication",
      "Project milestone tracking",
      "Client satisfaction monitoring"
    ]
  },
  {
    title: "Document & Contract Automation",
    description: "AI-powered document generation, review, and management",
    icon: FileText,
    features: [
      "Automated document generation",
      "Contract review and analysis",
      "Template management system",
      "Compliance monitoring"
    ]
  },
  {
    title: "Project & Time Management",
    description: "Intelligent project tracking and time optimization",
    icon: Calendar,
    features: [
      "Automated time tracking",
      "Project deadline management",
      "Resource allocation optimization",
      "Performance analytics"
    ]
  },
  {
    title: "Business Intelligence & Analytics",
    description: "Data-driven insights for better decision making",
    icon: BarChart3,
    features: [
      "Client profitability analysis",
      "Market trend identification",
      "Performance benchmarking",
      "Predictive analytics"
    ]
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: "Increase Billable Hours by 25%",
    description: "Automate administrative tasks to focus more time on high-value client work"
  },
  {
    icon: Clock,
    title: "Save 20+ Hours Weekly",
    description: "Streamline workflows and eliminate repetitive manual processes"
  },
  {
    icon: Target,
    title: "Improve Client Satisfaction",
    description: "Faster response times and more consistent service delivery"
  }
];

const caseStudies = [
  {
    business: "Law Firm",
    challenge: "Manual contract review and client communication",
    solution: "AI document automation and client portal",
    results: "60% faster contract processing, 40% improvement in client response time"
  },
  {
    business: "Accounting Firm",
    challenge: "Time-consuming data entry and report generation",
    solution: "AI data automation and report generation",
    results: "50% reduction in data entry time, 35% faster report delivery"
  },
  {
    business: "Marketing Agency",
    challenge: "Client project tracking and resource management",
    solution: "AI project management and resource optimization",
    results: "45% improvement in project delivery time, 30% increase in client retention"
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Automation for Professional Services",
  "description": "Transform your professional services firm with AI automation including client management, document automation, workflow optimization, and business intelligence.",
  "provider": {
    "@type": "Organization",
    "name": "Automations and More",
    "url": "https://automationsandmore.com"
  },
  "serviceType": "Professional Services AI Automation",
  "areaServed": "United States",
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Professional Services and Consulting Businesses"
  },
  "offers": {
    "@type": "Offer",
    "description": "AI automation solutions for professional services firms",
    "category": "Professional Services Automation"
  }
};

export default function ProfessionalServicesPage() {
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
              Professional Services AI Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Professional Services Firm
              </span>{" "}
              with AI
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              From client management to document automation, AI helps professional services firms 
              increase efficiency, improve client satisfaction, and grow their practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Get Your Professional Services AI Solution
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="#solutions">
                  View Solutions
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
              Why Professional Services Choose AI Automation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional services firms are using AI to streamline operations, improve client experiences, 
              and focus more time on high-value advisory work.
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

      {/* Solutions Section */}
      <section id="solutions" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Solutions for Professional Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI automation solutions designed specifically for professional services firms, 
              consulting businesses, and agencies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {professionalSolutions.map((solution, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <solution.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription className="text-base">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
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

      {/* Professional Services Types Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Solutions for Every Professional Service
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're a law firm, accounting practice, consulting agency, or other professional service, 
              we have AI solutions tailored to your specific needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Briefcase className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Law Firms</h3>
                <p className="text-sm text-muted-foreground">
                  Document automation, case management, and client communication optimization
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <BarChart3 className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Accounting Firms</h3>
                <p className="text-sm text-muted-foreground">
                  Data automation, report generation, and client financial analysis
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Building2 className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Consulting Agencies</h3>
                <p className="text-sm text-muted-foreground">
                  Project management, client onboarding, and business intelligence
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Results from Professional Services Firms
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how professional services firms have transformed their operations with AI automation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{study.business}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">Challenge:</h4>
                    <p className="text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">Solution:</h4>
                    <p className="text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">Results:</h4>
                    <p className="text-sm font-medium text-green-600">{study.results}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Professional Services Firm?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join professional services firms that have already embraced AI automation to improve efficiency, 
              client satisfaction, and profitability. Let's discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Start Your Professional Services AI Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/services/ai-automation">
                  Learn About Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-background">
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
                Helping professional services firms leverage AI for client management, 
                document automation, and workflow optimization.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Professional Services Solutions</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/services/ai-automation" className="hover:text-foreground">AI Automation</Link></li>
                <li><Link href="/services/websites" className="hover:text-foreground">Professional Websites</Link></li>
                <li><Link href="/services/apps" className="hover:text-foreground">Business Apps</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-foreground">About</Link></li>
                <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
                <li><Link href="/industries" className="hover:text-foreground">All Industries</Link></li>
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
