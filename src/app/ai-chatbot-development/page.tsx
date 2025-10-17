import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { 
  MessageCircle, 
  ArrowRight, 
  CheckCircle,
  Bot,
  Clock,
  Zap,
  Users,
  Headphones
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Chatbot Development - Intelligent Customer Service Solutions | Automations and More",
  description: "Professional AI chatbot development services. Create intelligent, conversational AI chatbots that provide 24/7 customer support, lead generation, and business automation.",
  keywords: [
    "AI chatbot development",
    "intelligent chatbot",
    "conversational AI",
    "customer service chatbot",
    "AI assistant development",
    "chatbot automation",
    "virtual assistant",
    "AI customer support"
  ],
  openGraph: {
    title: "AI Chatbot Development - Intelligent Customer Service Solutions | Automations and More",
    description: "Professional AI chatbot development services. Create intelligent, conversational AI chatbots that provide 24/7 customer support, lead generation, and business automation.",
    url: "https://automationsandmore.com/ai-chatbot-development",
  },
  alternates: {
    canonical: "/ai-chatbot-development",
  },
};

const features = [
  {
    icon: Bot,
    title: "Natural Language Processing",
    description: "Advanced NLP capabilities for human-like conversations and understanding"
  },
  {
    icon: MessageCircle,
    title: "Multi-Platform Integration",
    description: "Deploy chatbots across websites, social media, and messaging platforms"
  },
  {
    icon: Users,
    title: "Lead Generation",
    description: "Automated lead capture and qualification to boost your sales pipeline"
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Round-the-clock customer service without additional staffing costs"
  }
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Cost Effective",
    description: "Reduce customer service costs by up to 30% with intelligent automation"
  },
  {
    icon: Clock,
    title: "Instant Response",
    description: "Provide immediate answers to customer queries, improving satisfaction"
  },
  {
    icon: Zap,
    title: "Scalable Solution",
    description: "Handle unlimited conversations simultaneously without performance issues"
  }
];

export default function AIChatbotDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              AI Technology
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Professional{` `}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                AI Chatbot Development
              </span>{` `}
              Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Create intelligent, conversational AI chatbots that provide exceptional customer experiences. 
              Our AI chatbot development services help you automate customer support and boost engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Build Your Chatbot
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

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced AI Chatbot Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful AI capabilities that make your chatbot intelligent, responsive, and effective.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
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
              Why Choose Our AI Chatbot Development?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the benefits of intelligent automation with our professional chatbot solutions.
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
              Ready to Deploy Your AI Chatbot?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your customer service with intelligent AI chatbots. Get started with a custom solution 
              tailored to your business needs and customer expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Start Development
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/customer-service-automation">
                  Learn About Automation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
