import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { 
  Utensils, 
  Clock, 
  Users, 
  Package, 
  TrendingUp, 
  Smartphone,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  DollarSign,
  Target,
  ChefHat,
  Receipt
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation for Restaurants & Food Service Businesses",
  description: "Transform your restaurant with AI automation. Order management, inventory tracking, customer engagement, kitchen optimization, and delivery automation for food service businesses.",
  keywords: [
    "restaurant AI automation",
    "food service automation",
    "restaurant order management",
    "kitchen automation AI",
    "restaurant inventory management",
    "AI for restaurants",
    "food service AI solutions",
    "restaurant process automation",
    "AI customer service restaurant",
    "restaurant delivery automation"
  ],
  openGraph: {
    title: "AI Automation for Restaurants & Food Service Businesses",
    description: "Transform your restaurant with AI automation. Order management, inventory tracking, customer engagement, and kitchen optimization.",
    url: "https://automationsandmore.com/industries/restaurants",
  },
  alternates: {
    canonical: "/industries/restaurants",
  },
};

const restaurantSolutions = [
  {
    title: "Smart Order Management",
    description: "AI-powered order processing, kitchen coordination, and delivery optimization",
    icon: Receipt,
    features: [
      "Automated order processing and routing",
      "Kitchen display system integration",
      "Delivery route optimization",
      "Real-time order tracking"
    ]
  },
  {
    title: "Inventory & Supply Management",
    description: "Intelligent inventory tracking and automated supplier ordering",
    icon: Package,
    features: [
      "Real-time inventory monitoring",
      "Automated supplier ordering",
      "Waste reduction analytics",
      "Cost optimization insights"
    ]
  },
  {
    title: "Customer Engagement AI",
    description: "Personalized customer experiences and automated marketing campaigns",
    icon: Users,
    features: [
      "Personalized menu recommendations",
      "Automated loyalty programs",
      "Customer feedback analysis",
      "Targeted marketing campaigns"
    ]
  },
  {
    title: "Kitchen Operations Optimization",
    description: "AI-driven kitchen efficiency and staff scheduling optimization",
    icon: ChefHat,
    features: [
      "Staff scheduling optimization",
      "Kitchen workflow analysis",
      "Equipment maintenance alerts",
      "Performance analytics"
    ]
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: "Increase Revenue by 30-50%",
    description: "AI-driven menu optimization and customer engagement boost sales and average order value"
  },
  {
    icon: Clock,
    title: "Reduce Wait Times by 40%",
    description: "Optimized kitchen operations and order management significantly improve service speed"
  },
  {
    icon: Target,
    title: "Improve Customer Satisfaction",
    description: "Faster service, personalized experiences, and better order accuracy increase customer loyalty"
  }
];

const caseStudies = [
  {
    business: "Local Pizza Restaurant",
    challenge: "Manual order taking and delivery coordination",
    solution: "AI order management and delivery optimization",
    results: "45% faster order processing, 30% increase in delivery efficiency"
  },
  {
    business: "Family Diner",
    challenge: "Inventory waste and inconsistent ordering",
    solution: "AI inventory management and demand forecasting",
    results: "35% reduction in food waste, 25% improvement in profit margins"
  },
  {
    business: "Fast Casual Chain",
    challenge: "High customer service volume and staff scheduling",
    solution: "AI customer service and staff optimization",
    results: "50% reduction in customer wait times, 20% improvement in staff efficiency"
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Automation for Restaurants & Food Service",
  "description": "Transform your restaurant with AI automation including order management, inventory tracking, customer engagement, kitchen optimization, and delivery automation.",
  "provider": {
    "@type": "Organization",
    "name": "Automations and More",
    "url": "https://automationsandmore.com"
  },
  "serviceType": "Restaurant AI Automation",
  "areaServed": "United States",
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Restaurants and Food Service Businesses"
  },
  "offers": {
    "@type": "Offer",
    "description": "AI automation solutions for restaurants and food service businesses",
    "category": "Restaurant Automation Services"
  }
};

export default function RestaurantsPage() {
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
              Restaurant & Food Service AI Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Restaurant Business
              </span>{" "}
              with AI
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              From order management to kitchen optimization, AI automation helps restaurants 
              increase efficiency, reduce costs, and provide exceptional dining experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Get Your Restaurant AI Solution
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
              Why Restaurants Choose AI Automation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Restaurants are using AI to streamline operations, improve customer experiences, 
              and increase profitability in an increasingly competitive market.
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
              AI Solutions for Restaurants & Food Service
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI automation solutions designed specifically for restaurants, 
              cafes, and food service businesses of all sizes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {restaurantSolutions.map((solution, index) => (
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

      {/* Restaurant Types Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Solutions for Every Type of Restaurant
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you run a quick-service restaurant, fine dining establishment, or food truck, 
              we have AI solutions tailored to your specific needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Utensils className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Quick Service & Fast Casual</h3>
                <p className="text-sm text-muted-foreground">
                  Order automation, kitchen display systems, and customer flow optimization
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <ChefHat className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Fine Dining & Casual</h3>
                <p className="text-sm text-muted-foreground">
                  Reservation management, table optimization, and personalized service automation
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Package className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Delivery & Takeout</h3>
                <p className="text-sm text-muted-foreground">
                  Delivery route optimization, order tracking, and customer communication automation
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
              Real Results from Restaurant Businesses
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how restaurants have transformed their operations with AI automation.
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Restaurant AI FAQ
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about AI automation for restaurants and food service businesses.
              </p>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How does AI help with restaurant inventory management?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our AI analyzes sales patterns, seasonal trends, and historical data to predict demand, 
                    automatically generate purchase orders, and optimize inventory levels to reduce waste and costs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can AI improve kitchen efficiency?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, AI can optimize kitchen workflows, predict peak times for better staff scheduling, 
                    monitor equipment performance, and provide real-time insights to improve cooking times and food quality.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How does AI enhance customer experience in restaurants?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    AI provides personalized menu recommendations, automated loyalty programs, 
                    faster order processing, and intelligent customer service to create memorable dining experiences.
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
              Ready to Transform Your Restaurant?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join restaurants that have already embraced AI automation to improve efficiency, 
              customer satisfaction, and profitability. Let's discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Start Your Restaurant AI Journey
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
                Helping restaurants leverage AI for order management, inventory tracking, 
                customer engagement, and kitchen optimization.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Restaurant Solutions</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/services/ai-automation" className="hover:text-foreground">AI Automation</Link></li>
                <li><Link href="/services/websites" className="hover:text-foreground">Restaurant Websites</Link></li>
                <li><Link href="/services/apps" className="hover:text-foreground">Restaurant Apps</Link></li>
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
