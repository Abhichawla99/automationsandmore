import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { 
  Zap, 
  MapPin, 
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
  Building2,
  Heart,
  Utensils,
  Briefcase,
  Home as HomeIcon,
  Factory
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation New York - Business Automation Services in NYC",
  description: "Top AI automation services in New York City. Expert business automation consultants serving Manhattan, Brooklyn, Queens, and all NYC boroughs. Free consultation available.",
  keywords: [
    "AI automation New York",
    "business automation NYC",
    "AI automation Manhattan",
    "automation services Brooklyn",
    "AI consultant New York",
    "business automation Queens",
    "AI automation Bronx",
    "automation services Staten Island",
    "AI automation New York City",
    "business process automation NYC",
    "workflow automation New York",
    "AI automation consultant NYC"
  ],
  openGraph: {
    title: "AI Automation New York - Business Automation Services in NYC",
    description: "Top AI automation services in New York City. Expert business automation consultants serving all NYC boroughs.",
    url: "https://automationsandmore.com/ai-automation-new-york",
  },
  alternates: {
    canonical: "/ai-automation-new-york",
  },
};

const nycAreas = [
  { area: "Manhattan", businesses: "500+", specialties: "Finance, Legal, Consulting" },
  { area: "Brooklyn", businesses: "300+", specialties: "Retail, Healthcare, Tech" },
  { area: "Queens", businesses: "250+", specialties: "Manufacturing, Logistics" },
  { area: "Bronx", businesses: "150+", specialties: "Healthcare, Education" },
  { area: "Staten Island", businesses: "100+", specialties: "Retail, Services" }
];

const nycIndustries = [
  {
    industry: "Financial Services",
    icon: DollarSign,
    description: "AI automation for banks, investment firms, and financial advisors",
    clients: "50+",
    savings: "$50K+/month"
  },
  {
    industry: "Legal Services",
    icon: Briefcase,
    description: "Document automation, case management, and client communication",
    clients: "40+",
    savings: "$40K+/month"
  },
  {
    industry: "Healthcare",
    icon: Heart,
    description: "Patient management, appointment scheduling, and medical records",
    clients: "35+",
    savings: "$35K+/month"
  },
  {
    industry: "Retail & E-commerce",
    icon: Building2,
    description: "Inventory management, customer service, and sales automation",
    clients: "60+",
    savings: "$45K+/month"
  },
  {
    industry: "Restaurants",
    icon: Utensils,
    description: "Order management, delivery optimization, and customer engagement",
    clients: "45+",
    savings: "$30K+/month"
  },
  {
    industry: "Real Estate",
    icon: HomeIcon,
    description: "Lead management, property listings, and client communication",
    clients: "30+",
    savings: "$25K+/month"
  }
];

const nycBenefits = [
  {
    title: "Local NYC Expertise",
    description: "Deep understanding of New York business landscape and regulations",
    icon: MapPin
  },
  {
    title: "Fast Implementation",
    description: "Quick turnaround times to match NYC's fast-paced business environment",
    icon: Clock
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock support to match NYC's business hours",
    icon: Users
  },
  {
    title: "Cost-Effective Solutions",
    description: "Competitive pricing designed for NYC's competitive market",
    icon: DollarSign
  }
];

const testimonials = [
  {
    name: "David Chen",
    company: "Chen & Associates Law Firm",
    location: "Manhattan",
    content: "The AI automation consultant transformed our Manhattan law firm. We've reduced document processing time by 70% and can now handle 3x more cases.",
    rating: 5
  },
  {
    name: "Maria Rodriguez",
    company: "Brooklyn Medical Group",
    location: "Brooklyn",
    content: "Working with a local NYC automation expert was crucial. They understood our HIPAA requirements and helped us automate patient scheduling across all our Brooklyn locations.",
    rating: 5
  },
  {
    name: "James Thompson",
    company: "Queens Financial Services",
    location: "Queens",
    content: "The automation solutions have saved us over $40,000 per month. The local expertise in NYC financial regulations made all the difference.",
    rating: 5
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Automations and More - AI Automation Services New York",
  "description": "Expert AI automation services for businesses in New York City, Manhattan, Brooklyn, Queens, Bronx, and Staten Island.",
  "url": "https://automationsandmore.com/ai-automation-new-york",
  "telephone": "+1-555-123-4567",
  "email": "hello@automationsandmore.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.7128",
    "longitude": "-74.0060"
  },
  "areaServed": [
    "Manhattan",
    "Brooklyn", 
    "Queens",
    "Bronx",
    "Staten Island"
  ],
  "serviceType": "AI Automation Services",
  "priceRange": "$$"
};

export default function AIAutomationNewYorkPage() {
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
              AI Automation Services New York
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              AI Automation{" "}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                New York City
              </span>{" "}
              - Expert Business Automation
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Leading AI automation services for NYC businesses. Serving Manhattan, Brooklyn, Queens, 
              Bronx, and Staten Island with expert automation solutions that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Get Free NYC Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="tel:+15878049266">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (587) 804-9266
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* NYC Areas Served */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Automation Services Across All NYC Boroughs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide expert AI automation services throughout New York City with local expertise 
              in each borough's unique business landscape.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {nycAreas.map((area, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{area.area}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Businesses:</span>
                      <span className="font-semibold">{area.businesses}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {area.specialties}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NYC Industries */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              NYC Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized AI automation solutions for New York City's diverse business landscape.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nycIndustries.map((industry, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <industry.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{industry.industry}</CardTitle>
                  <CardDescription className="text-base">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">NYC Clients:</span>
                      <span className="font-semibold">{industry.clients}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Avg. Savings:</span>
                      <span className="font-semibold text-green-600">{industry.savings}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose NYC Local Service */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Local NYC AI Automation Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Local expertise matters in New York City's complex business environment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nycBenefits.map((benefit, index) => (
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

      {/* NYC Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What NYC Businesses Say About Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real testimonials from New York City businesses that have transformed with AI automation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    <div className="text-sm text-primary">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NYC-Specific Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              NYC-Specific AI Automation Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized automation solutions designed for New York City's unique business challenges.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">NYC Compliance Automation</CardTitle>
                <CardDescription>
                  Automated compliance with NYC business regulations, permits, and reporting requirements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Automated permit renewals
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Tax reporting automation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    License management
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Regulatory compliance tracking
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">NYC Multi-Location Management</CardTitle>
                <CardDescription>
                  Centralized automation for businesses with multiple NYC locations across boroughs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Cross-borough inventory sync
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Unified customer management
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Location-specific reporting
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Staff scheduling optimization
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Automate Your NYC Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of New York City businesses that have already transformed their operations with AI automation. 
              Get your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Get Free NYC Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="tel:+15878049266">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (587) 804-9266
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Serving all NYC boroughs • Free consultation • Local expertise
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
                Leading AI automation services for New York City businesses. Expert automation solutions 
                serving Manhattan, Brooklyn, Queens, Bronx, and Staten Island.
              </p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Serving All NYC Boroughs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(587) 804-9266</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">NYC Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/ai-automation-new-york" className="hover:text-foreground">AI Automation NYC</Link></li>
                <li><Link href="/small-business-automation" className="hover:text-foreground">Small Business Automation</Link></li>
                <li><Link href="/ai-automation-cost" className="hover:text-foreground">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">NYC Areas</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/ai-automation-new-york" className="hover:text-foreground">Manhattan</Link></li>
                <li><Link href="/ai-automation-new-york" className="hover:text-foreground">Brooklyn</Link></li>
                <li><Link href="/ai-automation-new-york" className="hover:text-foreground">Queens</Link></li>
                <li><Link href="/ai-automation-new-york" className="hover:text-foreground">Bronx</Link></li>
                <li><Link href="/ai-automation-new-york" className="hover:text-foreground">Staten Island</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Automations and More. All rights reserved. | Serving New York City</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
