import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { 
  GraduationCap, 
  ArrowRight, 
  CheckCircle,
  Users,
  Clock,
  Zap,
  BookOpen,
  Award
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Training Services - Learn AI & Automation Skills | Automations and More",
  description: "Professional AI training services to help your team master AI and automation technologies. Comprehensive training programs, workshops, and certification courses for businesses.",
  keywords: [
    "AI training",
    "artificial intelligence training",
    "automation training",
    "AI education",
    "AI certification",
    "AI workshop",
    "AI skills training",
    "business AI training"
  ],
  openGraph: {
    title: "AI Training Services - Learn AI & Automation Skills | Automations and More",
    description: "Professional AI training services to help your team master AI and automation technologies. Comprehensive training programs, workshops, and certification courses for businesses.",
    url: "https://automationsandmore.com/ai-training",
  },
  alternates: {
    canonical: "/ai-training",
  },
};

const programs = [
  {
    icon: BookOpen,
    title: "AI Fundamentals",
    description: "Comprehensive introduction to AI concepts, tools, and applications for beginners"
  },
  {
    icon: Zap,
    title: "Automation Training",
    description: "Hands-on training in business process automation and workflow optimization"
  },
  {
    icon: Users,
    title: "Team Workshops",
    description: "Customized workshops designed for your team's specific needs and goals"
  },
  {
    icon: Award,
    title: "Certification Programs",
    description: "Professional certification programs to validate AI and automation skills"
  }
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Expert Instructors",
    description: "Learn from certified AI professionals with real-world experience"
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Training programs that fit your team's schedule and availability"
  },
  {
    icon: Zap,
    title: "Practical Skills",
    description: "Hands-on training with real tools and technologies you'll use daily"
  }
];

export default function AITrainingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Education & Training
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Professional{` `}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                AI Training
              </span>{` `}
              Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Empower your team with AI and automation skills. Our comprehensive training programs 
              help your workforce master new technologies and drive digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Start Training Program
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

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our AI Training Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive training programs designed to build AI and automation expertise in your team.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <program.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {program.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our AI Training?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional training that prepares your team for the future of work.
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
              Ready to Upskill Your Team?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Don't let your team fall behind in the AI revolution. Invest in professional training 
              that prepares them for the future and drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Schedule Training
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/automation-consulting">
                  Learn About Consulting
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
