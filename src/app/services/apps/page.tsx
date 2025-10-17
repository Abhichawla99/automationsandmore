import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { 
  Smartphone, 
  Globe, 
  Zap, 
  Database, 
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
  Briefcase,
  Settings
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Business App Development Services - Mobile & Web Applications",
  description: "Get custom business applications for your company. Mobile apps, web applications, API integration, and AI-powered features for small and medium businesses.",
  keywords: [
    "custom business app development",
    "mobile app development",
    "web application development",
    "business app design",
    "API integration services",
    "custom software development",
    "business application solutions",
    "mobile app for business",
    "web app development",
    "business software solutions"
  ],
  openGraph: {
    title: "Custom Business App Development Services - Mobile & Web Applications",
    description: "Get custom business applications for your company. Mobile apps, web applications, and AI-powered features.",
    url: "https://automationsandmore.com/services/apps",
  },
  alternates: {
    canonical: "/services/apps",
  },
};

const appServices = [
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android",
    icon: Smartphone,
    features: [
      "iOS and Android app development",
      "Cross-platform solutions",
      "App store optimization",
      "Push notifications and analytics"
    ]
  },
  {
    title: "Web Application Development",
    description: "Custom web applications and progressive web apps (PWAs)",
    icon: Globe,
    features: [
      "Custom web applications",
      "Progressive Web Apps (PWA)",
      "Real-time data synchronization",
      "Cloud-based solutions"
    ]
  },
  {
    title: "API Integration & Development",
    description: "Connect your apps with existing systems and third-party services",
    icon: Database,
    features: [
      "Custom API development",
      "Third-party integrations",
      "Data synchronization",
      "System connectivity solutions"
    ]
  },
  {
    title: "AI-Powered Features",
    description: "Intelligent features that enhance user experience and business operations",
    icon: Zap,
    features: [
      "AI chatbots and virtual assistants",
      "Machine learning integration",
      "Predictive analytics",
      "Intelligent automation"
    ]
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Business Efficiency",
    description: "Custom apps streamline your business processes and improve productivity"
  },
  {
    icon: Clock,
    title: "24/7 Access to Your Business",
    description: "Mobile and web apps provide constant access to your business data and tools"
  },
  {
    icon: DollarSign,
    title: "Boost Revenue & Customer Engagement",
    description: "Engaging apps increase customer loyalty and create new revenue opportunities"
  }
];

const appTypes = [
  {
    name: "Business Management Apps",
    icon: Building2,
    description: "CRM, project management, and business process automation apps"
  },
  {
    name: "E-commerce Apps",
    icon: ShoppingCart,
    description: "Online stores, inventory management, and customer engagement apps"
  },
  {
    name: "Restaurant Apps",
    icon: Utensils,
    description: "Order management, menu apps, and customer loyalty programs"
  },
  {
    name: "Healthcare Apps",
    icon: Heart,
    description: "Patient portals, appointment booking, and medical record apps"
  },
  {
    name: "Real Estate Apps",
    icon: Home,
    description: "Property management, listing apps, and client communication tools"
  },
  {
    name: "Professional Services",
    icon: Briefcase,
    description: "Client management, document apps, and service booking systems"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We analyze your business needs and create a comprehensive app development strategy"
  },
  {
    step: "02", 
    title: "Design & Prototyping",
    description: "Create user-friendly designs and interactive prototypes for your app"
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Build your app with rigorous testing to ensure quality and performance"
  },
  {
    step: "04",
    title: "Deployment & Support",
    description: "Launch your app and provide ongoing maintenance and feature updates"
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom Business App Development Services",
  "description": "Get custom business applications for your company including mobile apps, web applications, API integration, and AI-powered features.",
  "provider": {
    "@type": "Organization",
    "name": "Automations and More",
    "url": "https://automationsandmore.com"
  },
  "serviceType": "App Development",
  "areaServed": "United States",
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Small and Medium Businesses"
  },
  "offers": {
    "@type": "Offer",
    "description": "Custom business app development services",
    "category": "App Development Services"
  }
};

export default function AppsPage() {
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
              Custom Business App Development
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Get Custom{" "}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Business Applications
              </span>{" "}
              Built for Your Needs
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Mobile apps, web applications, and API integrations that streamline your business 
              operations and enhance customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Get Your Custom App
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
              Why Choose Our App Development Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our custom business applications are designed to solve real business problems 
              and drive growth through technology.
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
              Our App Development Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive app development services designed to meet your specific 
              business needs and goals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {appServices.map((service, index) => (
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

      {/* App Types Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Business Apps for Every Industry
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We create custom business applications tailored to your specific industry 
              and business requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {appTypes.map((type, index) => (
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
              Our App Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We follow a proven development process to ensure your app meets your business 
              goals and delivers exceptional user experiences.
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
                App Development FAQ
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about our app development services.
              </p>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How long does it take to develop a custom app?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Development timelines vary based on complexity, but most business apps are completed within 8-16 weeks. 
                    We provide detailed timelines during the planning phase.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you develop both mobile and web apps?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we develop both mobile apps (iOS and Android) and web applications. 
                    We can also create cross-platform solutions that work across multiple devices.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can you integrate my app with existing business systems?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolutely! We specialize in API integration and can connect your app with existing 
                    CRM systems, databases, payment processors, and other business tools.
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
              Ready to Build Your Custom Business App?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join businesses that have already transformed their operations with our 
              custom app development services. Let's discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Start Your App Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/services/websites">
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
                Creating custom business applications that streamline operations, enhance customer experiences, 
                and drive growth through innovative mobile and web solutions.
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
