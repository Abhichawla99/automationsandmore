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
  Users, 
  CheckCircle, 
  ArrowRight,
  Star,
  Phone,
  Mail,
  Calendar,
  Award,
  Target,
  TrendingUp,
  Clock,
  Building2,
  Heart,
  Utensils,
  Briefcase,
  Home as HomeIcon,
  Factory
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation Consultant - Expert Business Automation Consulting Services",
  description: "Hire an experienced AI automation consultant to transform your business. Expert automation consulting, strategy, and implementation for small to enterprise businesses.",
  keywords: [
    "AI automation consultant",
    "business automation consultant",
    "automation consulting services",
    "AI consultant",
    "business process consultant",
    "workflow automation consultant",
    "AI automation expert",
    "automation strategy consultant",
    "digital transformation consultant",
    "AI implementation consultant",
    "business automation advisor",
    "automation specialist"
  ],
  openGraph: {
    title: "AI Automation Consultant - Expert Business Automation Consulting Services",
    description: "Hire an experienced AI automation consultant to transform your business. Expert automation consulting and implementation.",
    url: "https://automationsandmore.com/ai-automation-consultant",
  },
  alternates: {
    canonical: "/ai-automation-consultant",
  },
};

const consultingServices = [
  {
    title: "AI Automation Strategy",
    description: "Develop a comprehensive automation roadmap tailored to your business goals",
    icon: Target,
    features: [
      "Business process analysis",
      "Automation opportunity identification",
      "ROI projections and cost-benefit analysis",
      "Implementation timeline and roadmap",
      "Technology stack recommendations"
    ]
  },
  {
    title: "Process Optimization",
    description: "Analyze and optimize your existing workflows for maximum efficiency",
    icon: TrendingUp,
    features: [
      "Current state process mapping",
      "Bottleneck identification",
      "Efficiency improvement recommendations",
      "Workflow redesign",
      "Performance metrics establishment"
    ]
  },
  {
    title: "AI Implementation",
    description: "Expert guidance through the entire AI automation implementation process",
    icon: Zap,
    features: [
      "Technology selection and procurement",
      "System integration planning",
      "Change management strategies",
      "Training and knowledge transfer",
      "Ongoing support and optimization"
    ]
  },
  {
    title: "Digital Transformation",
    description: "Complete digital transformation consulting for modern business operations",
    icon: Building2,
    features: [
      "Digital maturity assessment",
      "Technology roadmap development",
      "Legacy system modernization",
      "Cloud migration strategies",
      "Data governance and security"
    ]
  }
];

const industries = [
  { name: "Retail & E-commerce", icon: Building2, clients: "50+", savings: "40%" },
  { name: "Healthcare", icon: Heart, clients: "30+", savings: "35%" },
  { name: "Restaurants", icon: Utensils, clients: "45+", savings: "50%" },
  { name: "Professional Services", icon: Briefcase, clients: "60+", savings: "45%" },
  { name: "Real Estate", icon: HomeIcon, clients: "25+", savings: "55%" },
  { name: "Manufacturing", icon: Factory, clients: "20+", savings: "60%" }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Johnson & Associates Law Firm",
    role: "Managing Partner",
    content: "The AI automation consultant transformed our practice. We've reduced document processing time by 70% and increased client satisfaction significantly.",
    rating: 5
  },
  {
    name: "Mike Rodriguez",
    company: "Rodriguez Family Restaurant",
    role: "Owner",
    content: "Working with an automation consultant was the best investment we made. Our order processing is now 3x faster and we've eliminated errors completely.",
    rating: 5
  },
  {
    name: "Jennifer Chen",
    company: "Chen Medical Practice",
    role: "Practice Manager",
    content: "The consultant helped us implement AI automation that's HIPAA compliant and saves us 20 hours per week. Highly recommend their expertise.",
    rating: 5
  }
];

const credentials = [
  {
    title: "Certified AI Automation Expert",
    issuer: "AI Automation Institute",
    year: "2024"
  },
  {
    title: "Business Process Management Certification",
    issuer: "BPM Institute",
    year: "2023"
  },
  {
    title: "Digital Transformation Specialist",
    issuer: "Digital Transformation Council",
    year: "2023"
  },
  {
    title: "Project Management Professional (PMP)",
    issuer: "Project Management Institute",
    year: "2022"
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "AI Automation Consultant",
  "jobTitle": "Senior AI Automation Consultant",
  "description": "Expert AI automation consultant specializing in business process optimization and digital transformation.",
  "url": "https://automationsandmore.com/ai-automation-consultant",
  "worksFor": {
    "@type": "Organization",
    "name": "Automations and More"
  },
  "knowsAbout": [
    "AI Automation",
    "Business Process Optimization",
    "Digital Transformation",
    "Workflow Automation",
    "AI Implementation"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Certified AI Automation Expert",
      "credentialCategory": "certification"
    }
  ]
};

export default function AIAutomationConsultantPage() {
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
              Expert AI Automation Consulting
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Hire an{" "}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                AI Automation Consultant
              </span>{" "}
              to Transform Your Business
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Get expert guidance from certified AI automation consultants. We help businesses identify, 
              implement, and optimize AI automation solutions for maximum ROI and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TidyCalPopup 
                path="abhixchawla/automations-and-more-consultation"
                triggerText="Schedule Free Consultation"
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

      {/* Why Choose Our Consultant */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our AI Automation Consultant?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our certified consultants bring years of experience and proven results to every project.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Certified Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Certified AI automation experts with proven track records across multiple industries.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>200+ Successful Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Successfully implemented AI automation for over 200 businesses across various industries.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Average 45% Cost Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our clients typically see 45% reduction in operational costs within the first year.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Automation Consulting Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive consulting services to help you identify, plan, and implement AI automation solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {consultingServices.map((service, index) => (
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

      {/* Industry Experience */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry Experience & Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our consultants have deep experience across multiple industries with proven results.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <industry.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{industry.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Clients:</span>
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

      {/* Credentials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Credentials & Certifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our consultants hold industry-recognized certifications and credentials.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((credential, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2">{credential.title}</h3>
                  <p className="text-xs text-muted-foreground mb-1">{credential.issuer}</p>
                  <p className="text-xs text-muted-foreground">{credential.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from businesses that have transformed their operations with our consulting services.
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
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Consulting Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful AI automation implementation.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">1</span>
                </div>
                <CardTitle className="text-lg">Discovery & Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Comprehensive analysis of your current processes and identification of automation opportunities.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">2</span>
                </div>
                <CardTitle className="text-lg">Strategy Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Create a detailed automation strategy with ROI projections and implementation roadmap.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">3</span>
                </div>
                <CardTitle className="text-lg">Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Guide the implementation process with hands-on support and change management.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">4</span>
                </div>
                <CardTitle className="text-lg">Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Continuous monitoring and optimization to ensure maximum ROI and performance.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI Automation?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Schedule a free consultation with our AI automation consultant. Get expert advice on how 
              to implement automation solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TidyCalPopup 
                path="abhixchawla/automations-and-more-consultation"
                triggerText="Schedule Free Consultation"
                triggerSize="lg"
                className="text-lg px-8 py-6"
              />
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="tel:+15878049266">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (587) 804-9266
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Free 30-minute consultation • No obligation • Expert advice
            </p>
          </div>
        </div>
      </section>

      {/* Book Consultation Section */}
      <section id="book-consultation" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Schedule Your Free AI Automation Consultation
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book a free 30-minute consultation with our certified AI automation consultant. 
              Get expert advice on how to implement automation solutions that drive real results.
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
                Expert AI automation consulting services to help businesses identify, implement, 
                and optimize automation solutions for maximum ROI.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Consulting Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/ai-automation-consultant" className="hover:text-foreground">AI Automation Consulting</Link></li>
                <li><Link href="/ai-automation-cost" className="hover:text-foreground">Cost Analysis</Link></li>
                <li><Link href="/services/ai-automation" className="hover:text-foreground">Implementation</Link></li>
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
