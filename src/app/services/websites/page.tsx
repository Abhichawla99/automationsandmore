import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { 
  Globe, 
  Smartphone, 
  Search, 
  Zap, 
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
  FileText,
  Palette,
  ShoppingCart,
  Utensils,
  Heart,
  Home,
  Briefcase
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Website Development Services - AI-Powered Business Websites",
  description: "Get a custom, AI-powered website for your business. Modern design, SEO optimization, mobile responsive, and AI integration services for small and medium businesses.",
  keywords: [
    "custom website development",
    "AI-powered websites",
    "business website design",
    "SEO optimized websites",
    "responsive web design",
    "website development services",
    "AI website integration",
    "modern website design",
    "business website builder",
    "professional website development"
  ],
  openGraph: {
    title: "Custom Website Development Services - AI-Powered Business Websites",
    description: "Get a custom, AI-powered website for your business. Modern design, SEO optimization, and AI integration services.",
    url: "https://automationsandmore.com/services/websites",
  },
  alternates: {
    canonical: "/services/websites",
  },
};

const websiteServices = [
  {
    title: "Custom Website Design",
    description: "Beautiful, modern websites tailored to your brand and business needs",
    icon: Palette,
    features: [
      "Custom design and branding",
      "Mobile-responsive layouts",
      "User experience optimization",
      "Modern, professional aesthetics"
    ]
  },
  {
    title: "SEO Optimization",
    description: "Search engine optimized websites that rank higher and attract more customers",
    icon: Search,
    features: [
      "Technical SEO implementation",
      "Content optimization",
      "Local SEO for businesses",
      "Performance optimization"
    ]
  },
  {
    title: "AI Integration",
    description: "Intelligent features that enhance user experience and business operations",
    icon: Zap,
    features: [
      "AI chatbots and virtual assistants",
      "Personalized content delivery",
      "Automated customer interactions",
      "Intelligent search and recommendations"
    ]
  },
  {
    title: "E-commerce Solutions",
    description: "Complete online store solutions with payment processing and inventory management",
    icon: ShoppingCart,
    features: [
      "Online store setup and design",
      "Payment gateway integration",
      "Inventory management systems",
      "Order processing automation"
    ]
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Online Visibility",
    description: "SEO-optimized websites help you rank higher in search results and attract more customers"
  },
  {
    icon: Clock,
    title: "24/7 Business Presence",
    description: "Your website works around the clock to attract and convert customers"
  },
  {
    icon: DollarSign,
    title: "Boost Sales & Revenue",
    description: "Professional websites with AI features increase conversion rates and customer engagement"
  }
];

const websiteTypes = [
  {
    name: "Business Websites",
    icon: Building2,
    description: "Professional websites for service-based businesses and companies"
  },
  {
    name: "E-commerce Stores",
    icon: ShoppingCart,
    description: "Complete online stores with shopping cart and payment processing"
  },
  {
    name: "Restaurant Websites",
    icon: Utensils,
    description: "Online menus, reservations, and food ordering systems"
  },
  {
    name: "Healthcare Websites",
    icon: Heart,
    description: "Patient portals, appointment booking, and HIPAA-compliant designs"
  },
  {
    name: "Real Estate Websites",
    icon: Home,
    description: "Property listings, virtual tours, and lead generation systems"
  },
  {
    name: "Professional Services",
    icon: Briefcase,
    description: "Portfolio showcases, client portals, and service booking systems"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We understand your business goals and create a comprehensive website strategy"
  },
  {
    step: "02", 
    title: "Design & Development",
    description: "Create beautiful, functional websites with modern design and AI integration"
  },
  {
    step: "03",
    title: "Testing & Optimization",
    description: "Thorough testing and SEO optimization to ensure peak performance"
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "Deploy your website and provide ongoing maintenance and support"
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom Website Development Services",
  "description": "Get a custom, AI-powered website for your business with modern design, SEO optimization, and AI integration services.",
  "provider": {
    "@type": "Organization",
    "name": "Automations and More",
    "url": "https://automationsandmore.com"
  },
  "serviceType": "Website Development",
  "areaServed": "United States",
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Small and Medium Businesses"
  },
  "offers": {
    "@type": "Offer",
    "description": "Custom website development services for businesses",
    "category": "Website Development Services"
  }
};

export default function WebsitesPage() {
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
              Custom Website Development Services
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Get a{" "}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Custom AI-Powered Website
              </span>{" "}
              for Your Business
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Modern, SEO-optimized websites with AI integration that help your business 
              attract more customers and grow online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Get Your Custom Website
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
              Why Choose Our Website Development Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our custom websites are designed to help your business succeed online with 
              modern design, AI integration, and SEO optimization.
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
              Our Website Development Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive website development services designed to help your business 
              succeed online.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {websiteServices.map((service, index) => (
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

      {/* Website Types Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Websites for Every Business Type
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We create custom websites tailored to your specific industry and business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {websiteTypes.map((type, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <type.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{type.name}</h3>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Website Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We follow a proven process to ensure your website meets your business goals 
              and exceeds your expectations.
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

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Website Development FAQ
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about our website development services.
              </p>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How long does it take to build a custom website?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Most custom websites are completed within 4-8 weeks, depending on complexity and features. 
                    We work closely with you throughout the process to ensure timely delivery.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you provide ongoing website maintenance?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we offer comprehensive website maintenance and support services including updates, 
                    security monitoring, backups, and performance optimization.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Will my website be mobile-responsive?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolutely! All our websites are built mobile-first and fully responsive, 
                    ensuring optimal performance across all devices and screen sizes.
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
              Ready to Get Your Custom Website?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join businesses that have already transformed their online presence with our 
              custom website development services. Let's discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Start Your Website Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/services/ai-automation">
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
                Creating custom, AI-powered websites that help businesses attract more customers 
                and grow their online presence with modern design and intelligent features.
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
