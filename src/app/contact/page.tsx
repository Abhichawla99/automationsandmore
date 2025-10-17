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
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  ArrowRight,
  CheckCircle,
  MessageSquare,
  Calendar,
  Users
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Automations and More - Get Your AI Business Solution",
  description: "Contact Automations and More for AI automation, custom websites, and business app development. Get a free consultation and discover how AI can transform your business.",
  keywords: [
    "contact automations and more",
    "AI automation consultation",
    "business automation services contact",
    "custom website development contact",
    "business app development contact",
    "AI consulting contact",
    "free business consultation",
    "AI automation quote",
    "business technology consultation",
    "automation services contact"
  ],
  openGraph: {
    title: "Contact Automations and More - Get Your AI Business Solution",
    description: "Contact Automations and More for AI automation, custom websites, and business app development. Get a free consultation today.",
    url: "https://automationsandmore.com/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};

const contactMethods = [
  {
    title: "Email Us",
    description: "Send us an email and we'll respond within 24 hours",
    icon: Mail,
    contact: "hello@automationsandmore.com",
    action: "mailto:hello@automationsandmore.com"
  },
  {
    title: "Call Us",
    description: "Speak directly with our team during business hours",
    icon: Phone,
    contact: "(587) 804-9266",
    action: "tel:+15878049266"
  },
  {
    title: "Schedule a Call",
    description: "Book a free consultation to discuss your needs",
    icon: Calendar,
    contact: "Free 30-minute consultation",
    action: "#book-consultation"
  }
];

const services = [
  {
    title: "AI Automation",
    description: "Streamline your business processes with intelligent automation",
    icon: Zap
  },
  {
    title: "Custom Websites",
    description: "Modern, SEO-optimized websites that convert visitors into customers",
    icon: MessageSquare
  },
  {
    title: "Business Apps",
    description: "Custom mobile and web applications tailored to your business needs",
    icon: Users
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Automations and More",
  "description": "Contact Automations and More for AI automation, custom websites, and business app development services.",
  "url": "https://automationsandmore.com/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "Automations and More",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-587-804-9266",
        "contactType": "customer service",
        "email": "hello@automationsandmore.com",
        "availableLanguage": "English"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CA"
    }
  }
};

export default function ContactPage() {
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
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Ready to{" "}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Transform Your Business
              </span>{" "}
              with AI?
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Let's discuss how AI automation, custom websites, and intelligent applications 
              can help your business grow and succeed. Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TidyCalPopup 
                path="abhixchawla/automations-and-more-consultation"
                triggerText="Get Free Consultation"
                triggerSize="lg"
                className="text-lg px-8 py-6"
              />
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="#contact-methods">
                  Contact Us Directly
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section id="contact-methods" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How to Reach Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the most convenient way to get in touch with our team.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{method.title}</CardTitle>
                  <CardDescription className="text-base">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={method.action}>
                      {method.contact}
                    </Link>
                  </Button>
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
              What We Can Help You With
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive AI solutions are designed to address your specific business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
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

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to common questions about our services and process.
              </p>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How much do your services cost?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our pricing varies based on the scope and complexity of your project. 
                    We offer competitive rates and provide detailed quotes after understanding your specific needs. 
                    Contact us for a free consultation and custom quote.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How long does a typical project take?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Project timelines vary depending on the scope. AI automation projects typically take 4-12 weeks, 
                    custom websites 4-8 weeks, and business apps 8-16 weeks. We provide detailed timelines during the planning phase.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you provide ongoing support?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we offer comprehensive ongoing support and maintenance for all our solutions. 
                    This includes updates, monitoring, troubleshooting, and feature enhancements to ensure your systems continue to perform optimally.
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Don't wait to transform your business with AI. Contact us today and take the first step 
              toward a more efficient, profitable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TidyCalPopup 
                path="abhixchawla/automations-and-more-consultation"
                triggerText="Get Free Consultation"
                triggerSize="lg"
                className="text-lg px-8 py-6"
              />
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/about">
                  Learn More About Us
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
                Ready to transform your business with AI? Contact us today for a free consultation 
                and discover how our solutions can help you grow and succeed.
              </p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>hello@automationsandmore.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(587) 804-9266</span>
                </div>
              </div>
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
