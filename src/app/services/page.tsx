import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { 
  Zap, 
  Globe, 
  Smartphone, 
  ArrowRight, 
  CheckCircle,
  Building2,
  Heart,
  Utensils,
  Briefcase,
  Home as HomeIcon,
  Factory
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services - AI Automation, Websites & Apps | Automations and More",
  description: "Comprehensive AI automation services, custom website development, and business app solutions. Transform your business with our expert technology services.",
  keywords: [
    "AI automation services",
    "custom website development",
    "business app development",
    "automation consulting",
    "website design",
    "mobile app development",
    "business process automation",
    "AI integration services"
  ],
  openGraph: {
    title: "Our Services - AI Automation, Websites & Apps | Automations and More",
    description: "Comprehensive AI automation services, custom website development, and business app solutions.",
    url: "https://automationsandmore.com/services",
  },
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    title: "AI Automation",
    description: "Streamline your business processes with intelligent automation that works 24/7",
    icon: Zap,
    features: ["Process Automation", "Data Integration", "Workflow Optimization", "AI Chatbots"],
    href: "/services/ai-automation",
    popular: true
  },
  {
    title: "Custom Websites",
    description: "Modern, AI-powered websites that convert visitors into customers",
    icon: Globe,
    features: ["Responsive Design", "SEO Optimized", "AI Integration", "E-commerce Solutions"],
    href: "/services/websites",
    popular: true
  },
  {
    title: "Business Apps",
    description: "Custom mobile and web applications tailored to your business needs",
    icon: Smartphone,
    features: ["Mobile Apps", "Web Applications", "API Integration", "Cloud Solutions"],
    href: "/services/apps",
    popular: false
  },
];

const industries = [
  { name: "Retail & E-commerce", icon: Building2, href: "/industries/retail" },
  { name: "Healthcare", icon: Heart, href: "/industries/healthcare" },
  { name: "Restaurants", icon: Utensils, href: "/industries/restaurants" },
  { name: "Professional Services", icon: Briefcase, href: "/industries/professional-services" },
  { name: "Real Estate", icon: HomeIcon, href: "/industries/real-estate" },
  { name: "Manufacturing", icon: Factory, href: "/industries/manufacturing" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Comprehensive{` `}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Technology Solutions
              </span>{` `}
              for Your Business
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              From AI automation to custom development, we provide end-to-end technology solutions 
              that help your business grow, scale, and succeed in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We specialize in three key areas that can transform your business operations and digital presence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`group hover:shadow-lg transition-shadow ${service.popular ? 'border-2 border-primary shadow-lg' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
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
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide specialized solutions for businesses across various industries.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <Link key={index} href={industry.href}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <industry.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm">{industry.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how our services can help your business grow and succeed. 
              Get a free consultation to explore your options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/about">
                  Learn About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
