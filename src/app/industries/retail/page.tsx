import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { 
  ShoppingCart, 
  TrendingUp, 
  Users, 
  Package, 
  BarChart3, 
  Smartphone,
  Globe,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  DollarSign,
  Target
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation for Retail & E-commerce Businesses",
  description: "Transform your retail business with AI automation. Inventory management, customer service, sales optimization, and personalized shopping experiences for small retail businesses.",
  keywords: [
    "retail AI automation",
    "e-commerce automation",
    "inventory management AI",
    "retail customer service AI",
    "small business retail automation",
    "AI for retail stores",
    "e-commerce AI solutions",
    "retail process automation",
    "AI inventory tracking",
    "retail sales optimization"
  ],
  openGraph: {
    title: "AI Automation for Retail & E-commerce Businesses",
    description: "Transform your retail business with AI automation. Inventory management, customer service, sales optimization, and personalized shopping experiences.",
    url: "https://automationsandmore.com/industries/retail",
  },
  alternates: {
    canonical: "/industries/retail",
  },
};

const retailSolutions = [
  {
    title: "Smart Inventory Management",
    description: "AI-powered inventory tracking and demand forecasting to reduce stockouts and overstock",
    icon: Package,
    features: [
      "Automated stock level monitoring",
      "Demand forecasting and analytics",
      "Low stock alerts and reorder automation",
      "Multi-location inventory sync"
    ]
  },
  {
    title: "AI Customer Service",
    description: "24/7 intelligent customer support with chatbots and automated responses",
    icon: Users,
    features: [
      "Intelligent chatbots for common queries",
      "Automated order status updates",
      "Customer sentiment analysis",
      "Multi-channel support integration"
    ]
  },
  {
    title: "Sales Optimization",
    description: "AI-driven pricing strategies and personalized product recommendations",
    icon: TrendingUp,
    features: [
      "Dynamic pricing optimization",
      "Personalized product recommendations",
      "Cross-selling and upselling automation",
      "Sales performance analytics"
    ]
  },
  {
    title: "E-commerce Automation",
    description: "Streamlined online operations with automated order processing and fulfillment",
    icon: ShoppingCart,
    features: [
      "Automated order processing",
      "Shipping label generation",
      "Customer communication automation",
      "Return and refund processing"
    ]
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: "Increase Revenue by 25-40%",
    description: "AI-driven pricing and recommendations boost average order value and customer lifetime value"
  },
  {
    icon: Clock,
    title: "Save 15+ Hours Weekly",
    description: "Automate repetitive tasks like inventory updates, customer inquiries, and order processing"
  },
  {
    icon: Target,
    title: "Improve Customer Satisfaction",
    description: "24/7 AI customer service and personalized experiences increase customer retention"
  }
];

const caseStudies = [
  {
    business: "Local Fashion Boutique",
    challenge: "Manual inventory tracking and customer service",
    solution: "AI inventory management and chatbot",
    results: "40% increase in sales, 60% reduction in stockouts"
  },
  {
    business: "Electronics Store",
    challenge: "Complex pricing and seasonal demand fluctuations",
    solution: "Dynamic pricing AI and demand forecasting",
    results: "30% improvement in profit margins, 25% reduction in excess inventory"
  },
  {
    business: "Online Gift Shop",
    challenge: "High customer service volume and order processing delays",
    solution: "AI customer service and order automation",
    results: "50% faster order processing, 80% reduction in customer service workload"
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Automation for Retail & E-commerce",
  "description": "Transform your retail business with AI automation including inventory management, customer service, sales optimization, and personalized shopping experiences.",
  "provider": {
    "@type": "Organization",
    "name": "Automations and More",
    "url": "https://automationsandmore.com"
  },
  "serviceType": "AI Business Automation",
  "areaServed": "United States",
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Retail and E-commerce Businesses"
  },
  "offers": {
    "@type": "Offer",
    "description": "AI automation solutions for retail businesses",
    "category": "Business Automation Services"
  }
};

export default function RetailPage() {
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
              Retail & E-commerce AI Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Retail Business
              </span>{" "}
              with AI
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              From inventory management to customer service, AI automation helps retail businesses 
              increase sales, reduce costs, and provide exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Get Your Retail AI Solution
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
              Why Retail Businesses Choose AI Automation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI isn't just for big retailers. Small and medium retail businesses see significant 
              improvements in efficiency, sales, and customer satisfaction.
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
              AI Solutions for Retail & E-commerce
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI automation solutions designed specifically for retail businesses 
              of all sizes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {retailSolutions.map((solution, index) => (
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

      {/* Case Studies Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Results from Real Retail Businesses
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how other retail businesses have transformed their operations with AI automation.
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

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about AI automation for retail businesses.
              </p>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How much does AI automation cost for retail businesses?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our AI automation solutions are designed to be affordable for small and medium retail businesses. 
                    Pricing typically ranges from $500-2000/month depending on the complexity and scale of automation needed. 
                    Most businesses see ROI within 3-6 months.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How long does it take to implement AI automation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Implementation typically takes 2-8 weeks depending on the complexity of your current systems and 
                    the scope of automation. We work closely with you to ensure minimal disruption to your daily operations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do I need technical knowledge to use AI automation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No technical knowledge required! Our AI solutions are designed to be user-friendly and intuitive. 
                    We provide comprehensive training and ongoing support to ensure you can easily manage and monitor your automation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Retail Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of retail businesses that have already embraced AI automation. 
              Let's discuss how we can help your business grow and thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Start Your AI Journey
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
                Helping retail businesses leverage AI for automation, inventory management, 
                and customer service that drives growth and efficiency.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Retail Solutions</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/services/ai-automation" className="hover:text-foreground">AI Automation</Link></li>
                <li><Link href="/services/websites" className="hover:text-foreground">E-commerce Websites</Link></li>
                <li><Link href="/services/apps" className="hover:text-foreground">Retail Apps</Link></li>
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
