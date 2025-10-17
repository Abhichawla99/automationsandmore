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
  X,
  ArrowRight,
  Star,
  Phone,
  Mail,
  Calendar,
  DollarSign,
  Clock,
  TrendingUp,
  Target,
  Building2,
  Award,
  AlertTriangle
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation vs Hiring Staff - Cost Comparison & ROI Analysis 2024",
  description: "Compare AI automation vs hiring staff costs. See why AI automation saves 60-80% compared to hiring employees. Free ROI calculator and cost analysis available.",
  keywords: [
    "AI automation vs hiring staff",
    "automation vs employees",
    "AI automation cost vs hiring",
    "automation vs human workers",
    "AI vs hiring employees",
    "automation vs staff costs",
    "AI automation ROI vs hiring",
    "automation vs workforce",
    "AI automation benefits vs hiring",
    "automation vs manual labor",
    "AI automation vs human resources",
    "automation vs employment costs"
  ],
  openGraph: {
    title: "AI Automation vs Hiring Staff - Cost Comparison & ROI Analysis 2024",
    description: "Compare AI automation vs hiring staff costs. See why AI automation saves 60-80% compared to hiring employees.",
    url: "https://automationsandmore.com/ai-automation-vs-hiring-staff",
  },
  alternates: {
    canonical: "/ai-automation-vs-hiring-staff",
  },
};

const comparisonData = [
  {
    factor: "Initial Setup Cost",
    aiAutomation: "$2,500 - $10,000",
    hiringStaff: "$15,000 - $50,000",
    winner: "ai",
    description: "One-time automation setup vs recruitment, training, and onboarding costs"
  },
  {
    factor: "Monthly Operating Cost",
    aiAutomation: "$500 - $2,000",
    hiringStaff: "$3,000 - $8,000",
    winner: "ai",
    description: "Maintenance and support vs salary, benefits, and overhead"
  },
  {
    factor: "Availability",
    aiAutomation: "24/7/365",
    hiringStaff: "40-50 hours/week",
    winner: "ai",
    description: "Never sleeps vs limited working hours and vacation time"
  },
  {
    factor: "Scalability",
    aiAutomation: "Instant scaling",
    hiringStaff: "Months to hire and train",
    winner: "ai",
    description: "Immediate capacity changes vs lengthy hiring process"
  },
  {
    factor: "Consistency",
    aiAutomation: "100% consistent",
    hiringStaff: "Variable performance",
    winner: "ai",
    description: "Same quality every time vs human variability"
  },
  {
    factor: "Error Rate",
    aiAutomation: "< 1%",
    hiringStaff: "5-15%",
    winner: "ai",
    description: "Minimal errors vs human mistakes and fatigue"
  }
];

const costBreakdown = [
  {
    category: "Hiring Staff Costs",
    items: [
      { item: "Recruitment & Advertising", cost: "$2,000 - $5,000" },
      { item: "Interviewing & Background Checks", cost: "$500 - $1,500" },
      { item: "Training & Onboarding", cost: "$3,000 - $8,000" },
      { item: "Salary (Annual)", cost: "$30,000 - $80,000" },
      { item: "Benefits & Insurance", cost: "$6,000 - $16,000" },
      { item: "Office Space & Equipment", cost: "$2,000 - $5,000" },
      { item: "Management Overhead", cost: "$3,000 - $8,000" }
    ],
    total: "$46,500 - $123,500"
  },
  {
    category: "AI Automation Costs",
    items: [
      { item: "Initial Setup & Development", cost: "$2,500 - $10,000" },
      { item: "System Integration", cost: "$1,000 - $3,000" },
      { item: "Training & Documentation", cost: "$500 - $1,500" },
      { item: "Monthly Maintenance", cost: "$500 - $2,000" },
      { item: "Software Licenses", cost: "$200 - $800" },
      { item: "Support & Updates", cost: "$300 - $1,200" }
    ],
    total: "$5,000 - $18,500"
  }
];

const roiExamples = [
  {
    scenario: "Customer Service Representative",
    hiringCost: "$45,000/year",
    automationCost: "$8,000/year",
    savings: "$37,000/year",
    roi: "462%"
  },
  {
    scenario: "Data Entry Specialist",
    hiringCost: "$35,000/year",
    automationCost: "$6,000/year",
    savings: "$29,000/year",
    roi: "483%"
  },
  {
    scenario: "Administrative Assistant",
    hiringCost: "$40,000/year",
    automationCost: "$7,000/year",
    savings: "$33,000/year",
    roi: "471%"
  }
];

const prosCons = {
  aiAutomation: {
    pros: [
      "24/7 availability",
      "Consistent performance",
      "No sick days or vacation",
      "Instant scalability",
      "Lower long-term costs",
      "No human resource issues",
      "Faster processing",
      "Reduced errors"
    ],
    cons: [
      "Initial setup investment",
      "Requires technical expertise",
      "Limited to programmed tasks",
      "May need periodic updates"
    ]
  },
  hiringStaff: {
    pros: [
      "Human judgment and creativity",
      "Personal customer interaction",
      "Adaptability to new situations",
      "Emotional intelligence",
      "Relationship building"
    ],
    cons: [
      "High ongoing costs",
      "Limited availability",
      "Human errors and inconsistencies",
      "Training and management overhead",
      "Turnover and replacement costs",
      "Sick days and vacation time",
      "Performance variability"
    ]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "AI Automation vs Hiring Staff - Cost Comparison & ROI Analysis",
  "description": "Comprehensive comparison of AI automation vs hiring staff costs, benefits, and ROI analysis for businesses.",
  "url": "https://automationsandmore.com/ai-automation-vs-hiring-staff",
  "author": {
    "@type": "Organization",
    "name": "Automations and More"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Automations and More"
  },
  "datePublished": "2024-01-01",
  "dateModified": "2024-01-01"
};

export default function AIAutomationVsHiringStaffPage() {
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
              AI Automation vs Hiring Staff Analysis
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              AI Automation{" "}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                vs Hiring Staff
              </span>{" "}
              - Complete Cost Analysis
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover why AI automation saves 60-80% compared to hiring employees. Get detailed cost comparisons, 
              ROI analysis, and see which option is better for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TidyCalPopup 
                path="abhixchawla/automations-and-more-consultation"
                triggerText="Get Free Cost Analysis"
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

      {/* Quick Answer */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Quick Answer: AI Automation vs Hiring Staff</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  <strong>AI automation typically costs 60-80% less than hiring staff</strong> while providing 
                  24/7 availability, consistent performance, and instant scalability.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">AI Automation</div>
                    <div className="text-sm text-muted-foreground">$5,000 - $18,500/year</div>
                    <div className="text-xs text-muted-foreground mt-1">24/7 • Consistent • Scalable</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600 mb-2">Hiring Staff</div>
                    <div className="text-sm text-muted-foreground">$46,500 - $123,500/year</div>
                    <div className="text-xs text-muted-foreground mt-1">40hrs/week • Variable • Limited</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section id="comparison" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Automation vs Hiring Staff: Detailed Comparison
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Side-by-side comparison of key factors that matter most to your business.
            </p>
          </div>
          <div className="space-y-6">
            {comparisonData.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div className="md:col-span-1">
                      <h3 className="font-semibold text-lg">{item.factor}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="md:col-span-1 text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Zap className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="font-semibold">AI Automation</span>
                      </div>
                      <div className={`text-lg font-bold ${item.winner === 'ai' ? 'text-green-600' : 'text-muted-foreground'}`}>
                        {item.aiAutomation}
                      </div>
                    </div>
                    <div className="md:col-span-1 text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Users className="h-5 w-5 text-orange-600 mr-2" />
                        <span className="font-semibold">Hiring Staff</span>
                      </div>
                      <div className={`text-lg font-bold ${item.winner === 'hiring' ? 'text-green-600' : 'text-muted-foreground'}`}>
                        {item.hiringStaff}
                      </div>
                    </div>
                    <div className="md:col-span-1 text-center">
                      {item.winner === 'ai' ? (
                        <div className="flex items-center justify-center text-green-600">
                          <CheckCircle className="h-5 w-5 mr-2" />
                          <span className="font-semibold">AI Wins</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center text-orange-600">
                          <Users className="h-5 w-5 mr-2" />
                          <span className="font-semibold">Staff Wins</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Detailed Cost Breakdown
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See exactly where your money goes with each option.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {costBreakdown.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    {index === 0 ? (
                      <Users className="h-5 w-5 text-orange-600 mr-2" />
                    ) : (
                      <Zap className="h-5 w-5 text-blue-600 mr-2" />
                    )}
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{item.item}</span>
                        <span className="font-semibold">{item.cost}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total Annual Cost:</span>
                      <span className={index === 0 ? 'text-red-600' : 'text-green-600'}>
                        {category.total}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Examples */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real ROI Examples: AI Automation vs Hiring Staff
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See the actual savings businesses achieve by choosing AI automation over hiring staff.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {roiExamples.map((example, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{example.scenario}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-muted-foreground">Hiring Cost</div>
                      <div className="text-lg font-bold text-red-600">{example.hiringCost}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Automation Cost</div>
                      <div className="text-lg font-bold text-green-600">{example.automationCost}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Annual Savings</div>
                      <div className="text-xl font-bold text-primary">{example.savings}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">ROI</div>
                      <div className="text-2xl font-bold text-green-600">{example.roi}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pros and Cons Comparison
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Weigh the advantages and disadvantages of each approach.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Zap className="h-5 w-5 text-blue-600 mr-2" />
                  AI Automation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Advantages</h4>
                    <ul className="space-y-1">
                      {prosCons.aiAutomation.pros.map((pro, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Disadvantages</h4>
                    <ul className="space-y-1">
                      {prosCons.aiAutomation.cons.map((con, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Users className="h-5 w-5 text-orange-600 mr-2" />
                  Hiring Staff
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Advantages</h4>
                    <ul className="space-y-1">
                      {prosCons.hiringStaff.pros.map((pro, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Disadvantages</h4>
                    <ul className="space-y-1">
                      {prosCons.hiringStaff.cons.map((con, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* When to Choose Each */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              When to Choose AI Automation vs Hiring Staff
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Understanding which option is right for your specific situation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-xl flex items-center text-green-600">
                  <Zap className="h-5 w-5 mr-2" />
                  Choose AI Automation When:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Tasks are repetitive and rule-based
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    You need 24/7 availability
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Cost is a primary concern
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    You need consistent, error-free performance
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    You want to scale quickly
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-xl flex items-center text-orange-600">
                  <Users className="h-5 w-5 mr-2" />
                  Choose Hiring Staff When:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    Tasks require human judgment and creativity
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    Personal relationships are important
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    Tasks are highly variable and unpredictable
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    You need emotional intelligence
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    You have budget for higher long-term costs
                  </li>
                </ul>
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
              Ready to See Your Savings with AI Automation?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a personalized cost analysis comparing AI automation vs hiring staff for your specific business needs. 
              See exactly how much you can save.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TidyCalPopup 
                path="abhixchawla/automations-and-more-consultation"
                triggerText="Get Free Cost Analysis"
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
              Free analysis • No obligation • Custom ROI calculation
            </p>
          </div>
        </div>
      </section>

      {/* Book Consultation Section */}
      <section id="book-consultation" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Your Personalized Cost Analysis
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Schedule a free consultation to get a detailed cost analysis comparing AI automation vs hiring staff 
              for your specific business needs. See exactly how much you can save.
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
                Expert analysis of AI automation vs hiring staff costs. Get the data you need to make 
                the right decision for your business.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/ai-automation-vs-hiring-staff" className="hover:text-foreground">AI vs Hiring Analysis</Link></li>
                <li><Link href="/ai-automation-cost" className="hover:text-foreground">Automation Costs</Link></li>
                <li><Link href="/small-business-automation" className="hover:text-foreground">Small Business Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-foreground">About</Link></li>
                <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
                <li><Link href="/services/ai-automation" className="hover:text-foreground">Services</Link></li>
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
