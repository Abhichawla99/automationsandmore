import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { TidyCalIframe } from "@/components/tidycal-iframe";
import { TidyCalPopup } from "@/components/tidycal-popup";
import { 
  Zap, 
  Globe, 
  Smartphone, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Clock,
  Building2,
  Heart,
  Utensils,
  Briefcase,
  Home as HomeIcon,
  Factory
} from "lucide-react";

const industries = [
  { name: "Retail & E-commerce", icon: Building2, href: "/industries/retail" },
  { name: "Healthcare", icon: Heart, href: "/industries/healthcare" },
  { name: "Restaurants", icon: Utensils, href: "/industries/restaurants" },
  { name: "Professional Services", icon: Briefcase, href: "/industries/professional-services" },
  { name: "Real Estate", icon: HomeIcon, href: "/industries/real-estate" },
  { name: "Manufacturing", icon: Factory, href: "/industries/manufacturing" },
];

const services = [
  {
    title: "AI Automation",
    description: "Streamline your business processes with intelligent automation that works 24/7",
    icon: Zap,
    features: ["Process Automation", "Data Integration", "Workflow Optimization"],
    href: "/services/ai-automation"
  },
  {
    title: "Custom Websites",
    description: "Modern, AI-powered websites that convert visitors into customers",
    icon: Globe,
    features: ["Responsive Design", "SEO Optimized", "AI Integration"],
    href: "/services/websites"
  },
  {
    title: "Business Apps",
    description: "Custom mobile and web applications tailored to your business needs",
    icon: Smartphone,
    features: ["Mobile Apps", "Web Applications", "API Integration"],
    href: "/services/apps"
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Revenue",
    description: "AI-powered solutions help you capture more customers and increase sales"
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Automate repetitive tasks and focus on what matters most to your business"
  },
  {
    icon: Users,
    title: "Better Customer Experience",
    description: "Provide faster, more personalized service with AI-powered customer interactions"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              AI-Powered Business Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Mainstreet Business
              </span>{" "}
              with AI
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We help small businesses leverage artificial intelligence for automation, 
              custom websites, and intelligent apps that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TidyCalPopup 
                path="abhixchawla/automations-and-more-consultation"
                triggerText="Get Free Consultation"
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

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose AI for Your Business?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI isn't just for big corporations. Small businesses can benefit tremendously from intelligent automation.
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our AI-Powered Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From automation to custom development, we provide comprehensive AI solutions for your business.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
              We specialize in AI solutions for mainstreet businesses across various industries.
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
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of mainstreet businesses that have already embraced AI automation. 
              Let's discuss how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TidyCalPopup 
                path="abhixchawla/automations-and-more-consultation"
                triggerText="Get Free Consultation"
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

      {/* Book Consultation Section */}
      <section id="book-consultation" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Book Your Free AI Automation Consultation
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Schedule a free 30-minute consultation to discuss how AI automation can transform your business. 
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
                Helping mainstreet businesses leverage AI for automation, custom websites, 
                and intelligent applications that drive growth and efficiency. Based in Calgary, Canada.
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
                <li><Link href="/privacy" className="hover:text-foreground">Privacy</Link></li>
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
