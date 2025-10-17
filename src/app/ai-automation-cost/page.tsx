import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { TidyCalIframe } from "@/components/tidycal-iframe";
import { TidyCalPopup } from "@/components/tidycal-popup";
import { 
  Zap, 
  DollarSign, 
  Calculator, 
  CheckCircle, 
  ArrowRight,
  TrendingUp,
  Clock,
  Target,
  Users,
  Building2,
  Star,
  Phone,
  Mail
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation Cost - How Much Does Business Automation Cost? (2024 Pricing)",
  description: "Get transparent AI automation pricing for your business. Learn about AI automation costs, ROI, and pricing models. Free consultation and custom quotes available.",
  keywords: [
    "AI automation cost",
    "business automation pricing",
    "AI automation pricing",
    "automation cost calculator",
    "AI automation ROI",
    "business process automation cost",
    "workflow automation pricing",
    "AI automation investment",
    "automation services cost",
    "AI automation budget",
    "small business automation cost",
    "enterprise automation pricing"
  ],
  openGraph: {
    title: "AI Automation Cost - How Much Does Business Automation Cost? (2024 Pricing)",
    description: "Get transparent AI automation pricing for your business. Learn about AI automation costs, ROI, and pricing models.",
    url: "https://automationsandmore.com/ai-automation-cost",
  },
  alternates: {
    canonical: "/ai-automation-cost",
  },
};

const pricingTiers = [
  {
    name: "Starter Package",
    price: "$2,500",
    period: "one-time setup",
    description: "Perfect for small businesses getting started with AI automation",
    features: [
      "Basic workflow automation",
      "Email automation setup",
      "Data integration (up to 3 systems)",
      "Training and documentation",
      "30 days support",
      "ROI tracking dashboard"
    ],
    popular: false
  },
  {
    name: "Professional Package",
    price: "$5,000",
    period: "one-time setup",
    description: "Comprehensive automation for growing businesses",
    features: [
      "Advanced workflow automation",
      "Multi-channel communication automation",
      "Data integration (up to 10 systems)",
      "Custom AI chatbot",
      "Analytics and reporting",
      "90 days support",
      "Monthly optimization sessions"
    ],
    popular: true
  },
  {
    name: "Enterprise Package",
    price: "$10,000+",
    period: "one-time setup",
    description: "Full-scale automation for large businesses",
    features: [
      "Complete business process automation",
      "Custom AI solutions",
      "Unlimited system integrations",
      "Advanced AI analytics",
      "Dedicated account manager",
      "6 months support",
      "Quarterly strategy reviews"
    ],
    popular: false
  }
];

const costFactors = [
  {
    factor: "Complexity of Processes",
    description: "More complex workflows require more development time and higher costs",
    impact: "High"
  },
  {
    factor: "Number of Integrations",
    description: "Each system integration adds to the overall cost",
    impact: "Medium"
  },
  {
    factor: "Custom AI Features",
    description: "Advanced AI features like machine learning models cost more",
    impact: "High"
  },
  {
    factor: "Data Volume",
    description: "Larger data volumes may require more robust infrastructure",
    impact: "Medium"
  },
  {
    factor: "Timeline",
    description: "Rush projects may incur additional costs",
    impact: "Low"
  }
];

const roiExamples = [
  {
    business: "Retail Store",
    investment: "$3,500",
    monthlySavings: "$2,800",
    roi: "800%",
    timeframe: "12 months"
  },
  {
    business: "Restaurant",
    investment: "$4,200",
    monthlySavings: "$3,500",
    roi: "900%",
    timeframe: "12 months"
  },
  {
    business: "Professional Services",
    investment: "$5,000",
    monthlySavings: "$4,200",
    roi: "840%",
    timeframe: "12 months"
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AI Automation Cost - Business Automation Pricing",
  "description": "Comprehensive guide to AI automation costs, pricing models, and ROI for businesses of all sizes.",
  "url": "https://automationsandmore.com/ai-automation-cost",
  "mainEntity": {
    "@type": "Service",
    "name": "AI Automation Services",
    "provider": {
      "@type": "Organization",
      "name": "Automations and More"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Starter Package",
        "price": "2500",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer", 
        "name": "Professional Package",
        "price": "5000",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Enterprise Package", 
        "price": "10000",
        "priceCurrency": "USD"
      }
    ]
  }
};

export default function AIAutomationCostPage() {
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
              Transparent AI Automation Pricing
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              AI Automation{" "}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Cost & Pricing
              </span>{" "}
              Guide 2024
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Get transparent pricing for AI automation services. Learn about costs, ROI, and find the perfect 
              automation package for your business size and needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TidyCalPopup 
                path="abhixchawla/automations-and-more-consultation"
                triggerText="Get Free Cost Estimate"
                triggerSize="lg"
                className="text-lg px-8 py-6"
              />
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="tel:+15878049266">
                  Call (587) 804-9266
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Quick Answer: How Much Does AI Automation Cost?</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  AI automation typically costs between <strong>$2,500 - $10,000+</strong> for initial setup, 
                  with most businesses seeing <strong>300-900% ROI</strong> within the first year.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">$2,500</div>
                    <div className="text-sm text-muted-foreground">Small Business</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">$5,000</div>
                    <div className="text-sm text-muted-foreground">Medium Business</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">$10,000+</div>
                    <div className="text-sm text-muted-foreground">Enterprise</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Automation Pricing Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect automation package for your business needs and budget.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? 'border-2 border-primary shadow-lg' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{tier.price}</div>
                  <div className="text-sm text-muted-foreground">{tier.period}</div>
                  <CardDescription className="text-base mt-2">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full" variant={tier.popular ? "default" : "outline"}>
                    <Link href="/contact">
                      Get Started
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Factors */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Affects AI Automation Cost?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Understanding the factors that influence automation pricing helps you budget effectively.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {costFactors.map((factor, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{factor.factor}</CardTitle>
                    <Badge variant={factor.impact === 'High' ? 'destructive' : factor.impact === 'Medium' ? 'default' : 'secondary'}>
                      {factor.impact} Impact
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{factor.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Examples */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real ROI Examples from Our Clients
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how businesses like yours are saving money and time with AI automation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {roiExamples.map((example, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">{example.business}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-muted-foreground">Investment</div>
                      <div className="text-xl font-bold">{example.investment}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Monthly Savings</div>
                      <div className="text-xl font-bold text-green-600">{example.monthlySavings}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">ROI</div>
                      <div className="text-2xl font-bold text-primary">{example.roi}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Timeframe</div>
                      <div className="text-lg font-semibold">{example.timeframe}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                AI Automation Cost FAQ
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about AI automation pricing and costs.
              </p>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is there a monthly fee for AI automation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our pricing is primarily one-time setup costs. We offer optional monthly maintenance and optimization 
                    services starting at $500/month for ongoing support and improvements.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How quickly will I see ROI from AI automation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Most businesses start seeing ROI within 2-3 months, with full payback typically achieved within 
                    6-12 months. The exact timeline depends on your specific use cases and implementation.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you offer payment plans for AI automation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we offer flexible payment plans including 50% upfront and 50% upon completion, or monthly 
                    installments over 3-6 months for qualifying businesses.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What's included in the initial cost?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Initial costs include consultation, system analysis, automation development, testing, training, 
                    documentation, and initial support. All software licenses and integrations are included.
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
              Ready to Get Your Custom AI Automation Quote?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a personalized cost estimate for your business. No obligation, just transparent pricing 
              to help you make the right decision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TidyCalPopup 
                path="abhixchawla/automations-and-more-consultation"
                triggerText="Get Free Quote"
                triggerSize="lg"
                className="text-lg px-8 py-6"
              />
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="tel:+15878049266">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (587) 804-9266
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Free consultation • Custom pricing • No hidden fees
            </p>
          </div>
        </div>
      </section>

      {/* Book Consultation Section */}
      <section id="book-consultation" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Your Custom AI Automation Quote
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Schedule a free consultation to get a personalized cost estimate for your business. 
              No obligation, just transparent pricing to help you make the right decision.
            </p>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <TidyCalIframe path="abhixchawla/automations-and-more-consultation" />
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Can't find a time that works? Call us at <Link href="tel:+15878049266" className="text-primary hover:underline">(587) 804-9266</Link>
            </p>
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
                Transparent AI automation pricing for businesses of all sizes. Get the automation you need 
                at a price you can afford.
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
                <li><Link href="/ai-automation-cost" className="hover:text-foreground">Pricing</Link></li>
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
