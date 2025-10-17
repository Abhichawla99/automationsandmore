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
  Building2, 
  CheckCircle, 
  ArrowRight,
  Star,
  Phone,
  Mail,
  Calendar,
  DollarSign,
  Clock,
  Users,
  TrendingUp,
  Target,
  Award,
  Heart,
  Utensils,
  Briefcase,
  Home as HomeIcon,
  Factory
} from "lucide-react";

export const metadata: Metadata = {
  title: "Small Business Automation - Affordable AI Automation for Small Businesses",
  description: "Transform your small business with affordable AI automation solutions. Save time, reduce costs, and grow your business with automation designed for small businesses.",
  keywords: [
    "small business automation",
    "automation for small business",
    "small business AI automation",
    "affordable business automation",
    "small business process automation",
    "automation tools for small business",
    "small business workflow automation",
    "AI for small business",
    "small business automation software",
    "automation solutions for small business",
    "small business digital transformation",
    "automation services for small business"
  ],
  openGraph: {
    title: "Small Business Automation - Affordable AI Automation for Small Businesses",
    description: "Transform your small business with affordable AI automation solutions. Save time, reduce costs, and grow your business.",
    url: "https://automationsandmore.com/small-business-automation",
  },
  alternates: {
    canonical: "/small-business-automation",
  },
};

const automationSolutions = [
  {
    title: "Customer Service Automation",
    description: "Automate customer inquiries, support tickets, and follow-ups",
    icon: Users,
    features: [
      "AI-powered chatbots",
      "Automated email responses",
      "Customer inquiry routing",
      "Follow-up automation",
      "Support ticket management"
    ],
    savings: "15-20 hours/week"
  },
  {
    title: "Sales & Marketing Automation",
    description: "Streamline lead generation, nurturing, and sales processes",
    icon: TrendingUp,
    features: [
      "Lead capture automation",
      "Email marketing campaigns",
      "Social media scheduling",
      "Sales pipeline management",
      "Customer relationship tracking"
    ],
    savings: "10-15 hours/week"
  },
  {
    title: "Administrative Automation",
    description: "Automate repetitive administrative tasks and data entry",
    icon: Building2,
    features: [
      "Document processing",
      "Data entry automation",
      "Invoice generation",
      "Appointment scheduling",
      "Report generation"
    ],
    savings: "20-25 hours/week"
  },
  {
    title: "Inventory & Order Management",
    description: "Automate inventory tracking and order processing",
    icon: Target,
    features: [
      "Inventory level monitoring",
      "Automated reordering",
      "Order processing",
      "Shipping notifications",
      "Stock level alerts"
    ],
    savings: "12-18 hours/week"
  }
];

const smallBusinessTypes = [
  { 
    type: "Retail Stores", 
    icon: Building2, 
    automation: "Inventory management, customer service, sales tracking",
    savings: "$3,000/month"
  },
  { 
    type: "Restaurants", 
    icon: Utensils, 
    automation: "Order management, inventory, customer communication",
    savings: "$2,500/month"
  },
  { 
    type: "Professional Services", 
    icon: Briefcase, 
    automation: "Client management, document processing, scheduling",
    savings: "$4,000/month"
  },
  { 
    type: "Healthcare Practices", 
    icon: Heart, 
    automation: "Patient scheduling, record management, billing",
    savings: "$3,500/month"
  },
  { 
    type: "Real Estate", 
    icon: HomeIcon, 
    automation: "Lead management, property listings, client communication",
    savings: "$2,800/month"
  },
  { 
    type: "Manufacturing", 
    icon: Factory, 
    automation: "Production tracking, quality control, supply chain",
    savings: "$5,000/month"
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Save 20-40 Hours Per Week",
    description: "Automate repetitive tasks and focus on growing your business"
  },
  {
    icon: DollarSign,
    title: "Reduce Costs by 30-50%",
    description: "Eliminate manual processes and reduce operational expenses"
  },
  {
    icon: TrendingUp,
    title: "Increase Revenue by 25-40%",
    description: "Better customer service and efficiency lead to more sales"
  },
  {
    icon: Users,
    title: "Improve Customer Satisfaction",
    description: "Faster response times and consistent service quality"
  }
];

const caseStudies = [
  {
    business: "Local Coffee Shop",
    size: "5 employees",
    challenge: "Manual order tracking and customer communication",
    solution: "Order management and customer service automation",
    results: "60% reduction in order errors, 40% increase in customer satisfaction"
  },
  {
    business: "Family Law Firm",
    size: "3 attorneys",
    challenge: "Time-consuming document processing and client communication",
    solution: "Document automation and client portal",
    results: "50% faster case processing, 35% increase in billable hours"
  },
  {
    business: "Boutique Clothing Store",
    size: "4 employees",
    challenge: "Inventory management and customer follow-up",
    solution: "Inventory automation and email marketing",
    results: "45% reduction in stockouts, 30% increase in repeat customers"
  }
];

const pricing = [
  {
    plan: "Starter",
    price: "$2,500",
    description: "Perfect for small businesses just getting started",
    features: [
      "Basic workflow automation",
      "Email automation",
      "Simple chatbot",
      "Data integration (3 systems)",
      "30 days support"
    ]
  },
  {
    plan: "Growth",
    price: "$4,000",
    description: "Comprehensive automation for growing businesses",
    features: [
      "Advanced workflow automation",
      "Multi-channel automation",
      "AI-powered chatbot",
      "Data integration (10 systems)",
      "Analytics dashboard",
      "90 days support"
    ],
    popular: true
  },
  {
    plan: "Scale",
    price: "$6,500",
    description: "Full automation suite for established businesses",
    features: [
      "Complete business automation",
      "Custom AI solutions",
      "Advanced analytics",
      "Unlimited integrations",
      "Dedicated support",
      "6 months support"
    ]
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Small Business Automation Services",
  "description": "Affordable AI automation solutions designed specifically for small businesses to save time, reduce costs, and increase efficiency.",
  "provider": {
    "@type": "Organization",
    "name": "Automations and More",
    "url": "https://automationsandmore.com"
  },
  "serviceType": "Small Business Automation",
  "areaServed": "United States",
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Small Businesses"
  },
  "offers": {
    "@type": "Offer",
    "description": "Affordable automation solutions for small businesses",
    "category": "Small Business Automation Services"
  }
};

export default function SmallBusinessAutomationPage() {
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
              Affordable Small Business Automation
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              AI Automation for{" "}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Small Businesses
              </span>{" "}
              That Actually Works
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Stop wasting time on repetitive tasks. Get affordable AI automation solutions designed 
              specifically for small businesses. Save 20-40 hours per week and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TidyCalPopup 
                path="abhixchawla/automations-and-more-consultation"
                triggerText="Get Free Automation Assessment"
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

      {/* Quick Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">20-40</div>
              <div className="text-sm text-muted-foreground">Hours Saved Per Week</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">30-50%</div>
              <div className="text-sm text-muted-foreground">Cost Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">25-40%</div>
              <div className="text-sm text-muted-foreground">Revenue Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$2,500</div>
              <div className="text-sm text-muted-foreground">Starting Price</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Small Businesses Choose AI Automation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Automation isn't just for big corporations. Small businesses see the biggest impact from AI automation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Automation Solutions */}
      <section id="solutions" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Small Business Automation Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Affordable automation solutions designed specifically for small business needs and budgets.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {automationSolutions.map((solution, index) => (
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
                  <ul className="space-y-2 mb-4">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-sm font-semibold text-green-600">
                    Saves: {solution.savings}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Automation Solutions by Business Type
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tailored automation solutions for different types of small businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {smallBusinessTypes.map((business, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <business.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{business.type}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{business.automation}</p>
                  <div className="text-sm font-semibold text-green-600">
                    Avg. Savings: {business.savings}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Small Business Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how other small businesses have transformed their operations with automation.
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
                  <CardDescription className="text-sm">{study.size}</CardDescription>
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

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Affordable Small Business Automation Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing designed for small business budgets. No hidden fees, no surprises.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-2 border-primary shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.plan}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{plan.price}</div>
                  <CardDescription className="text-base mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"}>
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

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Automate Your Small Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of small businesses that have already transformed their operations with AI automation. 
              Get your free assessment and see how much time and money you can save.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TidyCalPopup 
                path="abhixchawla/automations-and-more-consultation"
                triggerText="Get Free Assessment"
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
              Free assessment • No obligation • Custom automation plan
            </p>
          </div>
        </div>
      </section>

      {/* Book Consultation Section */}
      <section id="book-consultation" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Your Free Small Business Automation Assessment
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Schedule a free consultation to see how much time and money you can save with AI automation. 
              Get a custom automation plan designed specifically for your small business.
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
                Affordable AI automation solutions designed specifically for small businesses. 
                Save time, reduce costs, and grow your business with automation that works.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Small Business Solutions</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/small-business-automation" className="hover:text-foreground">Small Business Automation</Link></li>
                <li><Link href="/ai-automation-cost" className="hover:text-foreground">Pricing</Link></li>
                <li><Link href="/services/ai-automation" className="hover:text-foreground">Services</Link></li>
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
