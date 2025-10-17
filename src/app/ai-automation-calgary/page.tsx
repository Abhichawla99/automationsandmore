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
  title: "AI Automation Calgary - Business Automation Services in Calgary, Alberta",
  description: "Leading AI automation services in Calgary, Alberta. Expert business automation consultants serving Calgary businesses. Free consultation available. Call (587) 804-9266.",
  keywords: [
    "AI automation Calgary",
    "business automation Calgary",
    "AI automation Alberta",
    "automation services Calgary",
    "AI consultant Calgary",
    "business automation Alberta",
    "AI automation Canada",
    "automation services Alberta",
    "AI automation consultant Calgary",
    "business process automation Calgary",
    "workflow automation Calgary",
    "AI automation Calgary Alberta"
  ],
  openGraph: {
    title: "AI Automation Calgary - Business Automation Services in Calgary, Alberta",
    description: "Leading AI automation services in Calgary, Alberta. Expert business automation consultants serving Calgary businesses.",
    url: "https://automationsandmore.com/ai-automation-calgary",
  },
  alternates: {
    canonical: "/ai-automation-calgary",
  },
};

const calgaryAreas = [
  { area: "Downtown Calgary", businesses: "200+", specialties: "Finance, Legal, Consulting" },
  { area: "Beltline", businesses: "150+", specialties: "Tech, Retail, Services" },
  { area: "Kensington", businesses: "100+", specialties: "Retail, Restaurants" },
  { area: "Mission", businesses: "80+", specialties: "Healthcare, Professional" },
  { area: "Inglewood", businesses: "60+", specialties: "Creative, Retail" }
];

const calgaryIndustries = [
  {
    industry: "Oil & Gas",
    icon: Factory,
    description: "AI automation for energy companies, drilling operations, and supply chain management",
    clients: "25+",
    savings: "$75K+/month"
  },
  {
    industry: "Financial Services",
    icon: DollarSign,
    description: "Banking automation, investment management, and financial reporting",
    clients: "30+",
    savings: "$50K+/month"
  },
  {
    industry: "Healthcare",
    icon: Heart,
    description: "Patient management, medical records, and healthcare administration",
    clients: "20+",
    savings: "$40K+/month"
  },
  {
    industry: "Retail & E-commerce",
    icon: Building2,
    description: "Inventory management, customer service, and sales automation",
    clients: "40+",
    savings: "$35K+/month"
  },
  {
    industry: "Restaurants",
    icon: Utensils,
    description: "Order management, delivery optimization, and customer engagement",
    clients: "35+",
    savings: "$25K+/month"
  },
  {
    industry: "Real Estate",
    icon: HomeIcon,
    description: "Lead management, property listings, and client communication",
    clients: "25+",
    savings: "$30K+/month"
  }
];

const calgaryBenefits = [
  {
    title: "Local Calgary Expertise",
    description: "Deep understanding of Calgary's business landscape and Alberta regulations",
    icon: MapPin
  },
  {
    title: "Mountain Time Support",
    description: "Support aligned with Calgary's business hours and timezone",
    icon: Clock
  },
  {
    title: "Canadian Business Focus",
    description: "Understanding of Canadian business practices and compliance requirements",
    icon: Users
  },
  {
    title: "Competitive Pricing",
    description: "Affordable automation solutions designed for Calgary's market",
    icon: DollarSign
  }
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    company: "Mitchell Energy Solutions",
    location: "Downtown Calgary",
    content: "The AI automation consultant transformed our Calgary energy company. We've reduced operational costs by 60% and improved efficiency across all our Alberta locations.",
    rating: 5
  },
  {
    name: "David Chen",
    company: "Calgary Medical Group",
    location: "Beltline",
    content: "Working with a local Calgary automation expert was crucial. They understood our healthcare compliance requirements and helped us automate patient scheduling across all our Calgary clinics.",
    rating: 5
  },
  {
    name: "Jennifer Thompson",
    company: "Thompson Financial Services",
    location: "Kensington",
    content: "The automation solutions have saved us over $45,000 per month. The local expertise in Calgary's financial regulations made all the difference.",
    rating: 5
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Automations and More - AI Automation Services Calgary",
  "description": "Expert AI automation services for businesses in Calgary, Alberta, Canada.",
  "url": "https://automationsandmore.com/ai-automation-calgary",
  "telephone": "+1-587-804-9266",
  "email": "hello@automationsandmore.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Calgary",
    "addressRegion": "AB",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.0447",
    "longitude": "-114.0719"
  },
  "areaServed": [
    "Calgary",
    "Downtown Calgary",
    "Beltline",
    "Kensington",
    "Mission",
    "Inglewood"
  ],
  "serviceType": "AI Automation Services",
  "priceRange": "$$"
};

export default function AIAutomationCalgaryPage() {
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
              AI Automation Services Calgary
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              AI Automation{" "}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Calgary, Alberta
              </span>{" "}
              - Local Business Automation Experts
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Leading AI automation services for Calgary businesses. Serving Downtown, Beltline, Kensington, 
              Mission, and all Calgary areas with expert automation solutions that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TidyCalPopup 
                path="abhixchawla/automations-and-more-consultation"
                triggerText="Book Free Calgary Consultation"
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

      {/* Calgary Areas Served */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Automation Services Across Calgary
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide expert AI automation services throughout Calgary with local expertise 
              in each area's unique business landscape.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {calgaryAreas.map((area, index) => (
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

      {/* Calgary Industries */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Calgary Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized AI automation solutions for Calgary's diverse business landscape.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {calgaryIndustries.map((industry, index) => (
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
                      <span className="text-muted-foreground">Calgary Clients:</span>
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

      {/* Why Choose Calgary Local Service */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Local Calgary AI Automation Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Local expertise matters in Calgary's unique business environment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {calgaryBenefits.map((benefit, index) => (
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

      {/* Calgary Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Calgary Businesses Say About Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real testimonials from Calgary businesses that have transformed with AI automation.
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

      {/* Calgary-Specific Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Calgary-Specific AI Automation Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized automation solutions designed for Calgary's unique business challenges.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Alberta Compliance Automation</CardTitle>
                <CardDescription>
                  Automated compliance with Alberta business regulations, permits, and reporting requirements.
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
                <CardTitle className="text-xl">Calgary Multi-Location Management</CardTitle>
                <CardDescription>
                  Centralized automation for businesses with multiple Calgary locations across different areas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Cross-location inventory sync
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
              Ready to Automate Your Calgary Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of Calgary businesses that have already transformed their operations with AI automation. 
              Get your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TidyCalPopup 
                path="abhixchawla/automations-and-more-consultation"
                triggerText="Book Free Calgary Consultation"
                triggerSize="lg"
                className="text-lg px-8 py-6"
              />
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="tel:+15878049266">
                  Call (587) 804-9266
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Serving all Calgary areas • Free consultation • Local expertise
            </p>
          </div>
        </div>
      </section>

      {/* Book Consultation Section */}
      <section id="book-consultation" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Book Your Free Calgary AI Automation Consultation
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Schedule a free consultation to discuss how AI automation can transform your Calgary business. 
              No obligation, just expert advice tailored to your needs.
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
                Leading AI automation services for Calgary businesses. Expert automation solutions 
                serving Downtown, Beltline, Kensington, Mission, and all Calgary areas.
              </p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Calgary, Alberta, Canada</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(587) 804-9266</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Calgary Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/ai-automation-calgary" className="hover:text-foreground">AI Automation Calgary</Link></li>
                <li><Link href="/small-business-automation" className="hover:text-foreground">Small Business Automation</Link></li>
                <li><Link href="/ai-automation-cost" className="hover:text-foreground">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Calgary Areas</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/ai-automation-calgary" className="hover:text-foreground">Downtown Calgary</Link></li>
                <li><Link href="/ai-automation-calgary" className="hover:text-foreground">Beltline</Link></li>
                <li><Link href="/ai-automation-calgary" className="hover:text-foreground">Kensington</Link></li>
                <li><Link href="/ai-automation-calgary" className="hover:text-foreground">Mission</Link></li>
                <li><Link href="/ai-automation-calgary" className="hover:text-foreground">Inglewood</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Automations and More. All rights reserved. | Serving Calgary, Alberta, Canada</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
