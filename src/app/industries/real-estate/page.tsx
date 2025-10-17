import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { 
  Home, 
  Users, 
  FileText, 
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
  title: "AI Automation for Real Estate Agents & Property Management",
  description: "Transform your real estate business with AI automation. Lead management, property listings, client communication, and transaction automation for real estate professionals.",
  keywords: [
    "real estate AI automation",
    "property management automation",
    "real estate lead management",
    "AI for real estate agents",
    "property listing automation",
    "real estate CRM automation",
    "AI real estate marketing",
    "property management AI",
    "real estate transaction automation",
    "AI for real estate brokers"
  ],
  openGraph: {
    title: "AI Automation for Real Estate Agents & Property Management",
    description: "Transform your real estate business with AI automation. Lead management, property listings, and client communication.",
    url: "https://automationsandmore.com/industries/real-estate",
  },
  alternates: {
    canonical: "/industries/real-estate",
  },
};

const realEstateSolutions = [
  {
    title: "Lead Management & Nurturing",
    description: "AI-powered lead capture, qualification, and automated follow-up systems",
    icon: Users,
    features: [
      "Automated lead capture from multiple sources",
      "Intelligent lead scoring and qualification",
      "Automated follow-up sequences",
      "Lead nurturing campaigns"
    ]
  },
  {
    title: "Property Listing Automation",
    description: "Streamlined property marketing and listing management",
    icon: Home,
    features: [
      "Automated listing creation and updates",
      "Multi-platform listing distribution",
      "Property photo optimization",
      "Market analysis and pricing"
    ]
  },
  {
    title: "Client Communication & CRM",
    description: "Intelligent client relationship management and communication",
    icon: FileText,
    features: [
      "Automated client communication",
      "Transaction milestone tracking",
      "Document management automation",
      "Client portal and self-service"
    ]
  },
  {
    title: "Market Analysis & Insights",
    description: "AI-driven market research and property valuation",
    icon: BarChart3,
    features: [
      "Automated market analysis",
      "Property valuation insights",
      "Investment opportunity identification",
      "Competitive market intelligence"
    ]
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: "Increase Sales by 35%",
    description: "AI-driven lead management and client nurturing boost conversion rates"
  },
  {
    icon: Clock,
    title: "Save 25+ Hours Weekly",
    description: "Automate repetitive tasks like lead follow-up and listing management"
  },
  {
    icon: Target,
    title: "Improve Client Satisfaction",
    description: "Faster response times and personalized service increase client retention"
  }
];

const caseStudies = [
  {
    business: "Real Estate Agency",
    challenge: "Manual lead management and client communication",
    solution: "AI lead management and automated CRM",
    results: "50% increase in lead conversion, 40% improvement in client response time"
  },
  {
    business: "Property Management Company",
    challenge: "Time-consuming tenant screening and maintenance requests",
    solution: "AI tenant screening and maintenance automation",
    results: "60% faster tenant processing, 35% reduction in maintenance response time"
  },
  {
    business: "Real Estate Broker",
    challenge: "Complex transaction coordination and document management",
    solution: "AI transaction management and document automation",
    results: "45% faster transaction processing, 30% reduction in errors"
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Automation for Real Estate",
  "description": "Transform your real estate business with AI automation including lead management, property listings, client communication, and transaction automation.",
  "provider": {
    "@type": "Organization",
    "name": "Automations and More",
    "url": "https://automationsandmore.com"
  },
  "serviceType": "Real Estate AI Automation",
  "areaServed": "United States",
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Real Estate Professionals and Property Managers"
  },
  "offers": {
    "@type": "Offer",
    "description": "AI automation solutions for real estate businesses",
    "category": "Real Estate Automation Services"
  }
};

export default function RealEstatePage() {
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
              Real Estate AI Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Real Estate Business
              </span>{" "}
              with AI
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              From lead management to transaction automation, AI helps real estate professionals 
              close more deals, provide better service, and grow their business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Get Your Real Estate AI Solution
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
              Why Real Estate Professionals Choose AI Automation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real estate professionals are using AI to streamline operations, improve client experiences, 
              and close more deals in a competitive market.
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
              AI Solutions for Real Estate Professionals
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI automation solutions designed specifically for real estate agents, 
              brokers, and property management companies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {realEstateSolutions.map((solution, index) => (
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

      {/* Real Estate Types Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Solutions for Every Real Estate Professional
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're a real estate agent, broker, property manager, or investor, 
              we have AI solutions tailored to your specific needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Home className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Real Estate Agents</h3>
                <p className="text-sm text-muted-foreground">
                  Lead management, client communication, and transaction automation
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Building2 className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Property Managers</h3>
                <p className="text-sm text-muted-foreground">
                  Tenant management, maintenance coordination, and rent collection
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <BarChart3 className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Real Estate Investors</h3>
                <p className="text-sm text-muted-foreground">
                  Market analysis, property evaluation, and investment tracking
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
              Real Results from Real Estate Professionals
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how real estate professionals have transformed their businesses with AI automation.
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
              Ready to Transform Your Real Estate Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join real estate professionals who have already embraced AI automation to improve efficiency, 
              client satisfaction, and sales performance. Let's discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Start Your Real Estate AI Journey
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
                Helping real estate professionals leverage AI for lead management, 
                client communication, and transaction automation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Real Estate Solutions</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/services/ai-automation" className="hover:text-foreground">AI Automation</Link></li>
                <li><Link href="/services/websites" className="hover:text-foreground">Real Estate Websites</Link></li>
                <li><Link href="/services/apps" className="hover:text-foreground">Real Estate Apps</Link></li>
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
