import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { 
  Factory, 
  Package, 
  BarChart3, 
  Settings, 
  TrendingUp, 
  Clock,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  DollarSign,
  Target,
  Building2,
  Activity
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation for Manufacturing & Production Businesses",
  description: "Transform your manufacturing business with AI automation. Production optimization, quality control, supply chain management, and predictive maintenance for manufacturing companies.",
  keywords: [
    "manufacturing AI automation",
    "production automation AI",
    "manufacturing process optimization",
    "AI quality control manufacturing",
    "supply chain automation",
    "predictive maintenance AI",
    "manufacturing analytics AI",
    "AI for manufacturing companies",
    "production line automation",
    "manufacturing efficiency AI"
  ],
  openGraph: {
    title: "AI Automation for Manufacturing & Production Businesses",
    description: "Transform your manufacturing business with AI automation. Production optimization, quality control, and supply chain management.",
    url: "https://automationsandmore.com/industries/manufacturing",
  },
  alternates: {
    canonical: "/industries/manufacturing",
  },
};

const manufacturingSolutions = [
  {
    title: "Production Optimization",
    description: "AI-driven production planning, scheduling, and resource allocation",
    icon: Settings,
    features: [
      "Intelligent production scheduling",
      "Resource optimization algorithms",
      "Demand forecasting and planning",
      "Real-time production monitoring"
    ]
  },
  {
    title: "Quality Control & Inspection",
    description: "Automated quality assurance and defect detection systems",
    icon: Package,
    features: [
      "Automated visual inspection",
      "Predictive quality analytics",
      "Defect detection and classification",
      "Quality trend analysis"
    ]
  },
  {
    title: "Supply Chain Management",
    description: "Intelligent supply chain optimization and inventory management",
    icon: Building2,
    features: [
      "Automated inventory management",
      "Supplier performance monitoring",
      "Demand-driven procurement",
      "Supply chain risk assessment"
    ]
  },
  {
    title: "Predictive Maintenance",
    description: "AI-powered equipment monitoring and maintenance scheduling",
    icon: Activity,
    features: [
      "Equipment health monitoring",
      "Predictive failure analysis",
      "Automated maintenance scheduling",
      "Performance optimization"
    ]
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: "Increase Efficiency by 30%",
    description: "AI-driven optimization reduces waste and improves production throughput"
  },
  {
    icon: Clock,
    title: "Reduce Downtime by 50%",
    description: "Predictive maintenance prevents unexpected equipment failures"
  },
  {
    icon: Target,
    title: "Improve Quality by 40%",
    description: "Automated quality control and real-time monitoring ensure consistent output"
  }
];

const caseStudies = [
  {
    business: "Automotive Parts Manufacturer",
    challenge: "Manual quality control and production scheduling inefficiencies",
    solution: "AI quality control and production optimization",
    results: "45% reduction in defects, 35% improvement in production efficiency"
  },
  {
    business: "Food Processing Plant",
    challenge: "Equipment downtime and supply chain disruptions",
    solution: "Predictive maintenance and supply chain automation",
    results: "60% reduction in unplanned downtime, 25% improvement in supply chain reliability"
  },
  {
    business: "Electronics Manufacturer",
    challenge: "Complex production planning and inventory management",
    solution: "AI production planning and inventory optimization",
    results: "40% reduction in inventory costs, 30% improvement in on-time delivery"
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Automation for Manufacturing",
  "description": "Transform your manufacturing business with AI automation including production optimization, quality control, supply chain management, and predictive maintenance.",
  "provider": {
    "@type": "Organization",
    "name": "Automations and More",
    "url": "https://automationsandmore.com"
  },
  "serviceType": "Manufacturing AI Automation",
  "areaServed": "United States",
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Manufacturing and Production Companies"
  },
  "offers": {
    "@type": "Offer",
    "description": "AI automation solutions for manufacturing businesses",
    "category": "Manufacturing Automation Services"
  }
};

export default function ManufacturingPage() {
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
              Manufacturing AI Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Manufacturing Business
              </span>{" "}
              with AI
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              From production optimization to predictive maintenance, AI automation helps manufacturing 
              companies increase efficiency, reduce costs, and improve product quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Get Your Manufacturing AI Solution
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
              Why Manufacturing Companies Choose AI Automation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Manufacturing companies are using AI to optimize production, improve quality, 
              and reduce operational costs in an increasingly competitive market.
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
              AI Solutions for Manufacturing Companies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI automation solutions designed specifically for manufacturing 
              and production companies of all sizes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {manufacturingSolutions.map((solution, index) => (
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

      {/* Manufacturing Types Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Solutions for Every Manufacturing Sector
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're in automotive, food processing, electronics, or other manufacturing sectors, 
              we have AI solutions tailored to your specific needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Factory className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Automotive Manufacturing</h3>
                <p className="text-sm text-muted-foreground">
                  Production line optimization, quality control, and supply chain management
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Package className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Food Processing</h3>
                <p className="text-sm text-muted-foreground">
                  Quality assurance, batch tracking, and compliance monitoring
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <BarChart3 className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Electronics Manufacturing</h3>
                <p className="text-sm text-muted-foreground">
                  Precision quality control, component tracking, and testing automation
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
              Real Results from Manufacturing Companies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how manufacturing companies have transformed their operations with AI automation.
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
              Ready to Transform Your Manufacturing Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join manufacturing companies that have already embraced AI automation to improve efficiency, 
              quality, and profitability. Let's discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Start Your Manufacturing AI Journey
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
                Helping manufacturing companies leverage AI for production optimization, 
                quality control, and supply chain management.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Manufacturing Solutions</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/services/ai-automation" className="hover:text-foreground">AI Automation</Link></li>
                <li><Link href="/services/websites" className="hover:text-foreground">Manufacturing Websites</Link></li>
                <li><Link href="/services/apps" className="hover:text-foreground">Production Apps</Link></li>
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
