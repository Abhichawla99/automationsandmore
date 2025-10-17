import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { 
  Heart, 
  Calendar, 
  Users, 
  FileText, 
  Shield, 
  Clock,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  DollarSign,
  Target,
  Stethoscope,
  Activity
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation for Healthcare Practices & Medical Businesses",
  description: "Transform your healthcare practice with AI automation. Patient management, appointment scheduling, medical record automation, and HIPAA-compliant solutions for healthcare providers.",
  keywords: [
    "healthcare AI automation",
    "medical practice automation",
    "patient management AI",
    "healthcare appointment scheduling",
    "medical record automation",
    "HIPAA compliant AI",
    "healthcare workflow automation",
    "medical practice management",
    "AI for healthcare providers",
    "healthcare process automation"
  ],
  openGraph: {
    title: "AI Automation for Healthcare Practices & Medical Businesses",
    description: "Transform your healthcare practice with AI automation. Patient management, appointment scheduling, and HIPAA-compliant solutions.",
    url: "https://automationsandmore.com/industries/healthcare",
  },
  alternates: {
    canonical: "/industries/healthcare",
  },
};

const healthcareSolutions = [
  {
    title: "Patient Management Automation",
    description: "Streamlined patient intake, scheduling, and communication with HIPAA-compliant AI",
    icon: Users,
    features: [
      "Automated patient intake forms",
      "Intelligent appointment scheduling",
      "Patient communication automation",
      "HIPAA-compliant data handling"
    ]
  },
  {
    title: "Medical Record Automation",
    description: "AI-powered documentation and record management for improved efficiency",
    icon: FileText,
    features: [
      "Automated medical record updates",
      "Voice-to-text documentation",
      "Clinical note generation",
      "Secure data integration"
    ]
  },
  {
    title: "Appointment Optimization",
    description: "Smart scheduling and patient flow management to reduce wait times",
    icon: Calendar,
    features: [
      "Intelligent appointment scheduling",
      "Wait time optimization",
      "Automated reminders and confirmations",
      "No-show prediction and prevention"
    ]
  },
  {
    title: "Healthcare Analytics",
    description: "Data-driven insights for better patient care and practice management",
    icon: Activity,
    features: [
      "Patient outcome analytics",
      "Practice performance metrics",
      "Resource utilization optimization",
      "Predictive health insights"
    ]
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Save 20+ Hours Weekly",
    description: "Automate administrative tasks and focus more time on patient care"
  },
  {
    icon: Target,
    title: "Improve Patient Satisfaction",
    description: "Faster scheduling, reduced wait times, and better communication"
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "All our healthcare AI solutions meet strict HIPAA compliance requirements"
  }
];

const caseStudies = [
  {
    business: "Family Medical Practice",
    challenge: "Manual appointment scheduling and patient communication",
    solution: "AI appointment system and patient portal",
    results: "50% reduction in no-shows, 30% increase in patient satisfaction"
  },
  {
    business: "Dental Clinic",
    challenge: "Time-consuming patient intake and record management",
    solution: "Automated intake forms and digital record system",
    results: "40% faster patient processing, 25% reduction in administrative time"
  },
  {
    business: "Physical Therapy Center",
    challenge: "Complex scheduling and patient progress tracking",
    solution: "AI scheduling optimization and progress monitoring",
    results: "35% improvement in appointment efficiency, 45% better patient outcomes"
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Automation for Healthcare Practices",
  "description": "Transform your healthcare practice with AI automation including patient management, appointment scheduling, medical record automation, and HIPAA-compliant solutions.",
  "provider": {
    "@type": "Organization",
    "name": "Automations and More",
    "url": "https://automationsandmore.com"
  },
  "serviceType": "Healthcare AI Automation",
  "areaServed": "United States",
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Healthcare Providers and Medical Practices"
  },
  "offers": {
    "@type": "Offer",
    "description": "HIPAA-compliant AI automation solutions for healthcare practices",
    "category": "Healthcare Automation Services"
  }
};

export default function HealthcarePage() {
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
              Healthcare AI Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Healthcare Practice
              </span>{" "}
              with AI
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              HIPAA-compliant AI automation for healthcare practices. Streamline patient management, 
              optimize scheduling, and improve patient care with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Get Your Healthcare AI Solution
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="#solutions">
                  View Solutions
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
              Why Healthcare Practices Choose AI Automation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Healthcare providers are embracing AI to improve patient care, reduce administrative burden, 
              and enhance practice efficiency while maintaining HIPAA compliance.
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

      {/* Solutions Section */}
      <section id="solutions" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Solutions for Healthcare Practices
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive, HIPAA-compliant AI automation solutions designed specifically 
              for healthcare providers and medical practices.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {healthcareSolutions.map((solution, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <solution.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription className="text-base">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
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

      {/* HIPAA Compliance Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Shield className="h-16 w-16 mx-auto text-primary mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                HIPAA Compliant AI Solutions
              </h2>
              <p className="text-xl text-muted-foreground">
                Your patient data security is our top priority. All our healthcare AI solutions 
                are designed with HIPAA compliance at their core.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="h-8 w-8 mx-auto text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Data Encryption</h3>
                  <p className="text-sm text-muted-foreground">
                    All patient data is encrypted both in transit and at rest
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 mx-auto text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Access Controls</h3>
                  <p className="text-sm text-muted-foreground">
                    Role-based access controls ensure only authorized personnel access data
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <FileText className="h-8 w-8 mx-auto text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Audit Trails</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive logging and monitoring of all data access and modifications
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Results from Healthcare Practices
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how healthcare providers have transformed their practices with AI automation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{study.business}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">Challenge:</h4>
                    <p className="text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">Solution:</h4>
                    <p className="text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">Results:</h4>
                    <p className="text-sm font-medium text-green-600">{study.results}</p>
                  </div>
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
                Healthcare AI FAQ
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about AI automation for healthcare practices.
              </p>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is your AI automation HIPAA compliant?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, all our healthcare AI solutions are designed with HIPAA compliance as a core requirement. 
                    We implement encryption, access controls, audit trails, and other security measures to protect patient data.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How does AI help with patient scheduling?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our AI scheduling system optimizes appointment times, reduces no-shows through predictive analytics, 
                    sends automated reminders, and can even reschedule appointments based on patient preferences and availability.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can AI help with medical documentation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, our AI can assist with medical documentation through voice-to-text transcription, 
                    automated note generation based on patient visits, and integration with existing EMR systems.
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
              Ready to Transform Your Healthcare Practice?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join healthcare providers who have already embraced AI automation to improve patient care 
              and practice efficiency. Let's discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Start Your Healthcare AI Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/services/ai-automation">
                  Learn About Our Services
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
                Helping healthcare practices leverage HIPAA-compliant AI for patient management, 
                scheduling, and practice optimization.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Healthcare Solutions</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/services/ai-automation" className="hover:text-foreground">AI Automation</Link></li>
                <li><Link href="/services/websites" className="hover:text-foreground">Practice Websites</Link></li>
                <li><Link href="/services/apps" className="hover:text-foreground">Healthcare Apps</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-foreground">About</Link></li>
                <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
                <li><Link href="/industries" className="hover:text-foreground">All Industries</Link></li>
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
