import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { 
  Building2,
  Heart,
  Utensils,
  Briefcase,
  Home as HomeIcon,
  Factory,
  ArrowRight,
  CheckCircle,
  Zap
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve - AI Automation Solutions | Automations and More",
  description: "Specialized AI automation solutions for healthcare, retail, restaurants, professional services, real estate, and manufacturing industries.",
  keywords: [
    "AI automation healthcare",
    "retail automation solutions",
    "restaurant automation",
    "professional services automation",
    "real estate automation",
    "manufacturing automation",
    "industry-specific AI solutions",
    "business automation by industry"
  ],
  openGraph: {
    title: "Industries We Serve - AI Automation Solutions | Automations and More",
    description: "Specialized AI automation solutions for various industries including healthcare, retail, restaurants, and more.",
    url: "https://automationsandmore.com/industries",
  },
  alternates: {
    canonical: "/industries",
  },
};

const industries = [
  { 
    name: "Retail & E-commerce", 
    icon: Building2, 
    href: "/industries/retail",
    description: "Streamline inventory, customer service, and sales processes with AI automation"
  },
  { 
    name: "Healthcare", 
    icon: Heart, 
    href: "/industries/healthcare",
    description: "HIPAA-compliant automation for patient management and administrative tasks"
  },
  { 
    name: "Restaurants", 
    icon: Utensils, 
    href: "/industries/restaurants",
    description: "Optimize order processing, inventory management, and customer experience"
  },
  { 
    name: "Professional Services", 
    icon: Briefcase, 
    href: "/industries/professional-services",
    description: "Automate document processing, client management, and workflow optimization"
  },
  { 
    name: "Real Estate", 
    icon: HomeIcon, 
    href: "/industries/real-estate",
    description: "Lead management, property listings, and client communication automation"
  },
  { 
    name: "Manufacturing", 
    icon: Factory, 
    href: "/industries/manufacturing",
    description: "Production optimization, quality control, and supply chain automation"
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Industry Expertise",
    description: "Deep understanding of industry-specific challenges and requirements"
  },
  {
    icon: CheckCircle,
    title: "Compliance Ready",
    description: "Solutions designed to meet industry regulations and standards"
  },
  {
    icon: ArrowRight,
    title: "Scalable Solutions",
    description: "Automation that grows with your business and adapts to your needs"
  }
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Industries We Serve
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Specialized{` `}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                AI Solutions
              </span>{` `}
              for Every Industry
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We understand that every industry has unique challenges and requirements. 
              Our AI automation solutions are tailored to meet the specific needs of your business sector.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Industry
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Click on your industry to learn about our specialized AI automation solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Link key={index} href={industry.href}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                  <CardHeader>
                    <div className="mx-auto mb-4 h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <industry.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-center">{industry.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center mb-4">
                      {industry.description}
                    </CardDescription>
                    <div className="flex items-center justify-center text-primary group-hover:text-primary/80 transition-colors">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Industry-Specific Solutions Matter
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Generic automation solutions don't work for every business. We create tailored solutions that understand your industry's unique needs.
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't See Your Industry Listed?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We work with businesses across many industries. Even if your specific industry isn't listed above, 
              we can create custom AI automation solutions tailored to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Discuss Your Industry
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
