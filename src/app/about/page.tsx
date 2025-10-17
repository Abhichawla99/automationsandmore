import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { 
  Zap, 
  Users, 
  Target, 
  Award, 
  ArrowRight,
  CheckCircle,
  Building2,
  Heart,
  Utensils,
  Briefcase,
  Home,
  Factory
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Automations and More - AI-Powered Business Solutions",
  description: "Learn about Automations and More, a company dedicated to helping mainstreet businesses leverage AI automation, custom websites, and intelligent applications for growth and efficiency.",
  keywords: [
    "about automations and more",
    "AI automation company",
    "business automation services",
    "mainstreet business solutions",
    "AI consulting company",
    "business technology solutions",
    "automation experts",
    "AI for small business",
    "business transformation services",
    "technology consulting"
  ],
  openGraph: {
    title: "About Automations and More - AI-Powered Business Solutions",
    description: "Learn about Automations and More, a company dedicated to helping mainstreet businesses leverage AI automation for growth and efficiency.",
    url: "https://automationsandmore.com/about",
  },
  alternates: {
    canonical: "/about",
  },
};

const values = [
  {
    title: "Innovation",
    description: "We stay at the forefront of AI technology to deliver cutting-edge solutions that drive real business results.",
    icon: Zap
  },
  {
    title: "Partnership",
    description: "We work closely with our clients as partners, understanding their unique needs and challenges.",
    icon: Users
  },
  {
    title: "Results",
    description: "Our focus is on delivering measurable results that help businesses grow and succeed.",
    icon: Target
  }
];

const industries = [
  { name: "Retail & E-commerce", icon: Building2 },
  { name: "Healthcare", icon: Heart },
  { name: "Restaurants", icon: Utensils },
  { name: "Professional Services", icon: Briefcase },
  { name: "Real Estate", icon: Home },
  { name: "Manufacturing", icon: Factory }
];

const team = [
  {
    name: "AI Automation Experts",
    role: "Technical Team",
    description: "Our team of AI and automation specialists bring years of experience in implementing intelligent business solutions."
  },
  {
    name: "Business Consultants",
    role: "Strategy Team", 
    description: "Business consultants who understand the unique challenges facing mainstreet businesses and how AI can solve them."
  },
  {
    name: "Development Team",
    role: "Implementation Team",
    description: "Skilled developers who build custom websites, applications, and automation systems tailored to your business needs."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Automations and More",
  "description": "Learn about Automations and More, a company dedicated to helping mainstreet businesses leverage AI automation for growth and efficiency.",
  "url": "https://automationsandmore.com/about",
  "mainEntity": {
    "@type": "Organization",
    "name": "Automations and More",
    "description": "AI-powered business solutions for mainstreet businesses including automation, custom websites, and intelligent applications.",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "service": [
      "AI Business Automation",
      "Custom Website Development", 
      "Business App Development"
    ]
  }
};

export default function AboutPage() {
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
              About Automations and More
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Empowering{" "}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Mainstreet Businesses
              </span>{" "}
              with AI
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We're passionate about helping small and medium businesses leverage artificial intelligence 
              to automate processes, improve efficiency, and drive growth in today's competitive market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Work With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/services/ai-automation">
                  Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              To democratize AI technology for mainstreet businesses, making advanced automation, 
              intelligent websites, and custom applications accessible and affordable for companies 
              of all sizes.
            </p>
            <p className="text-lg text-muted-foreground">
              We believe that every business, regardless of size, should have access to the same 
              powerful AI technologies that large corporations use to gain competitive advantages.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and every solution we create.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
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
              We work with businesses across various industries, providing tailored AI solutions 
              that address specific industry challenges and opportunities.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <industry.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">{industry.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A dedicated team of AI experts, business consultants, and developers working 
              together to deliver exceptional results for our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-sm font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {member.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Automations and More?
              </h2>
              <p className="text-xl text-muted-foreground">
                We're not just another technology company. We're your partners in business transformation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Industry Expertise</h3>
                    <p className="text-muted-foreground">
                      Deep understanding of various industries and their unique challenges and opportunities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Proven Results</h3>
                    <p className="text-muted-foreground">
                      Track record of delivering measurable improvements in efficiency, cost reduction, and revenue growth.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Ongoing Support</h3>
                    <p className="text-muted-foreground">
                      Comprehensive support and maintenance to ensure your AI solutions continue to deliver value.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Custom Solutions</h3>
                    <p className="text-muted-foreground">
                      Tailored AI solutions designed specifically for your business needs and goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Affordable Pricing</h3>
                    <p className="text-muted-foreground">
                      Competitive pricing that makes AI technology accessible to businesses of all sizes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Future-Ready</h3>
                    <p className="text-muted-foreground">
                      Solutions built with scalability and future growth in mind, ensuring long-term value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
              Let's work together to leverage AI technology and drive your business forward. 
              Contact us today to discuss your specific needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/services/ai-automation">
                  Explore Our Services
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
                Empowering mainstreet businesses with AI automation, custom websites, 
                and intelligent applications that drive growth and efficiency.
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
