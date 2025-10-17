import { Metadata } from &quot;next&quot;;
import Link from &quot;next/link&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Navigation } from &quot;@/components/navigation&quot;;
import { TidyCalIframe } from &quot;@/components/tidycal-iframe&quot;;
import { TidyCalPopup } from &quot;@/components/tidycal-popup&quot;;
import { 
  Zap, 
  Building2, 
  CheckCircle, 
  ArrowRight,
  Star,
  Phone,
  Mail,
  Calendar,
  DollarSign,
  Clock,
  Users,
  TrendingUp,
  Target,
  Award,
  Heart,
  Utensils,
  Briefcase,
  Home as HomeIcon,
  Factory
} from &quot;lucide-react&quot;;

export const metadata: Metadata = {
  title: &quot;Small Business Automation - Affordable AI Automation for Small Businesses&quot;,
  description: &quot;Transform your small business with affordable AI automation solutions. Save time, reduce costs, and grow your business with automation designed for small businesses.&quot;,
  keywords: [
    &quot;small business automation&quot;,
    &quot;automation for small business&quot;,
    &quot;small business AI automation&quot;,
    &quot;affordable business automation&quot;,
    &quot;small business process automation&quot;,
    &quot;automation tools for small business&quot;,
    &quot;small business workflow automation&quot;,
    &quot;AI for small business&quot;,
    &quot;small business automation software&quot;,
    &quot;automation solutions for small business&quot;,
    &quot;small business digital transformation&quot;,
    &quot;automation services for small business&quot;
  ],
  openGraph: {
    title: &quot;Small Business Automation - Affordable AI Automation for Small Businesses&quot;,
    description: &quot;Transform your small business with affordable AI automation solutions. Save time, reduce costs, and grow your business.&quot;,
    url: &quot;https://automationsandmore.com/small-business-automation&quot;,
  },
  alternates: {
    canonical: &quot;/small-business-automation&quot;,
  },
};

const automationSolutions = [
  {
    title: &quot;Customer Service Automation&quot;,
    description: &quot;Automate customer inquiries, support tickets, and follow-ups&quot;,
    icon: Users,
    features: [
      &quot;AI-powered chatbots&quot;,
      &quot;Automated email responses&quot;,
      &quot;Customer inquiry routing&quot;,
      &quot;Follow-up automation&quot;,
      &quot;Support ticket management&quot;
    ],
    savings: &quot;15-20 hours/week&quot;
  },
  {
    title: &quot;Sales & Marketing Automation&quot;,
    description: &quot;Streamline lead generation, nurturing, and sales processes&quot;,
    icon: TrendingUp,
    features: [
      &quot;Lead capture automation&quot;,
      &quot;Email marketing campaigns&quot;,
      &quot;Social media scheduling&quot;,
      &quot;Sales pipeline management&quot;,
      &quot;Customer relationship tracking&quot;
    ],
    savings: &quot;10-15 hours/week&quot;
  },
  {
    title: &quot;Administrative Automation&quot;,
    description: &quot;Automate repetitive administrative tasks and data entry&quot;,
    icon: Building2,
    features: [
      &quot;Document processing&quot;,
      &quot;Data entry automation&quot;,
      &quot;Invoice generation&quot;,
      &quot;Appointment scheduling&quot;,
      &quot;Report generation&quot;
    ],
    savings: &quot;20-25 hours/week&quot;
  },
  {
    title: &quot;Inventory & Order Management&quot;,
    description: &quot;Automate inventory tracking and order processing&quot;,
    icon: Target,
    features: [
      &quot;Inventory level monitoring&quot;,
      &quot;Automated reordering&quot;,
      &quot;Order processing&quot;,
      &quot;Shipping notifications&quot;,
      &quot;Stock level alerts&quot;
    ],
    savings: &quot;12-18 hours/week&quot;
  }
];

const smallBusinessTypes = [
  { 
    type: &quot;Retail Stores&quot;, 
    icon: Building2, 
    automation: &quot;Inventory management, customer service, sales tracking&quot;,
    savings: &quot;$3,000/month&quot;
  },
  { 
    type: &quot;Restaurants&quot;, 
    icon: Utensils, 
    automation: &quot;Order management, inventory, customer communication&quot;,
    savings: &quot;$2,500/month&quot;
  },
  { 
    type: &quot;Professional Services&quot;, 
    icon: Briefcase, 
    automation: &quot;Client management, document processing, scheduling&quot;,
    savings: &quot;$4,000/month&quot;
  },
  { 
    type: &quot;Healthcare Practices&quot;, 
    icon: Heart, 
    automation: &quot;Patient scheduling, record management, billing&quot;,
    savings: &quot;$3,500/month&quot;
  },
  { 
    type: &quot;Real Estate&quot;, 
    icon: HomeIcon, 
    automation: &quot;Lead management, property listings, client communication&quot;,
    savings: &quot;$2,800/month&quot;
  },
  { 
    type: &quot;Manufacturing&quot;, 
    icon: Factory, 
    automation: &quot;Production tracking, quality control, supply chain&quot;,
    savings: &quot;$5,000/month&quot;
  }
];

const benefits = [
  {
    icon: Clock,
    title: &quot;Save 20-40 Hours Per Week&quot;,
    description: &quot;Automate repetitive tasks and focus on growing your business&quot;
  },
  {
    icon: DollarSign,
    title: &quot;Reduce Costs by 30-50%&quot;,
    description: &quot;Eliminate manual processes and reduce operational expenses&quot;
  },
  {
    icon: TrendingUp,
    title: &quot;Increase Revenue by 25-40%&quot;,
    description: &quot;Better customer service and efficiency lead to more sales&quot;
  },
  {
    icon: Users,
    title: &quot;Improve Customer Satisfaction&quot;,
    description: &quot;Faster response times and consistent service quality&quot;
  }
];

const caseStudies = [
  {
    business: &quot;Local Coffee Shop&quot;,
    size: &quot;5 employees&quot;,
    challenge: &quot;Manual order tracking and customer communication&quot;,
    solution: &quot;Order management and customer service automation&quot;,
    results: &quot;60% reduction in order errors, 40% increase in customer satisfaction&quot;
  },
  {
    business: &quot;Family Law Firm&quot;,
    size: &quot;3 attorneys&quot;,
    challenge: &quot;Time-consuming document processing and client communication&quot;,
    solution: &quot;Document automation and client portal&quot;,
    results: &quot;50% faster case processing, 35% increase in billable hours&quot;
  },
  {
    business: &quot;Boutique Clothing Store&quot;,
    size: &quot;4 employees&quot;,
    challenge: &quot;Inventory management and customer follow-up&quot;,
    solution: &quot;Inventory automation and email marketing&quot;,
    results: &quot;45% reduction in stockouts, 30% increase in repeat customers&quot;
  }
];

const pricing = [
  {
    plan: &quot;Starter&quot;,
    price: &quot;$2,500&quot;,
    description: &quot;Perfect for small businesses just getting started&quot;,
    features: [
      &quot;Basic workflow automation&quot;,
      &quot;Email automation&quot;,
      &quot;Simple chatbot&quot;,
      &quot;Data integration (3 systems)&quot;,
      &quot;30 days support&quot;
    ]
  },
  {
    plan: &quot;Growth&quot;,
    price: &quot;$4,000&quot;,
    description: &quot;Comprehensive automation for growing businesses&quot;,
    features: [
      &quot;Advanced workflow automation&quot;,
      &quot;Multi-channel automation&quot;,
      &quot;AI-powered chatbot&quot;,
      &quot;Data integration (10 systems)&quot;,
      &quot;Analytics dashboard&quot;,
      &quot;90 days support&quot;
    ],
    popular: true
  },
  {
    plan: &quot;Scale&quot;,
    price: &quot;$6,500&quot;,
    description: &quot;Full automation suite for established businesses&quot;,
    features: [
      &quot;Complete business automation&quot;,
      &quot;Custom AI solutions&quot;,
      &quot;Advanced analytics&quot;,
      &quot;Unlimited integrations&quot;,
      &quot;Dedicated support&quot;,
      &quot;6 months support&quot;
    ]
  }
];

const jsonLd = {
  &quot;@context&quot;: &quot;https://schema.org&quot;,
  &quot;@type&quot;: &quot;Service&quot;,
  &quot;name&quot;: &quot;Small Business Automation Services&quot;,
  &quot;description&quot;: &quot;Affordable AI automation solutions designed specifically for small businesses to save time, reduce costs, and increase efficiency.&quot;,
  &quot;provider&quot;: {
    &quot;@type&quot;: &quot;Organization&quot;,
    &quot;name&quot;: &quot;Automations and More&quot;,
    &quot;url&quot;: &quot;https://automationsandmore.com&quot;
  },
  &quot;serviceType&quot;: &quot;Small Business Automation&quot;,
  &quot;areaServed&quot;: &quot;United States&quot;,
  &quot;audience&quot;: {
    &quot;@type&quot;: &quot;BusinessAudience&quot;,
    &quot;audienceType&quot;: &quot;Small Businesses&quot;
  },
  &quot;offers&quot;: {
    &quot;@type&quot;: &quot;Offer&quot;,
    &quot;description&quot;: &quot;Affordable automation solutions for small businesses&quot;,
    &quot;category&quot;: &quot;Small Business Automation Services&quot;
  }
};

export default function SmallBusinessAutomationPage() {
  return (
    <div className=&quot;min-h-screen bg-background&quot;>
      <script
        type=&quot;application/ld+json&quot;
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className=&quot;relative py-20 lg:py-32&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <Badge variant=&quot;secondary&quot; className=&quot;mb-6&quot;>
              Affordable Small Business Automation
            </Badge>
            <h1 className=&quot;text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6&quot;>
              AI Automation for{&quot; &quot;}
              <span className=&quot;bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent&quot;>
                Small Businesses
              </span>{&quot; &quot;}
              That Actually Works
            </h1>
            <p className=&quot;text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto&quot;>
              Stop wasting time on repetitive tasks. Get affordable AI automation solutions designed 
              specifically for small businesses. Save 20-40 hours per week and grow your business.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <TidyCalPopup 
                path=&quot;abhixchawla/automations-and-more-consultation&quot;
                triggerText=&quot;Get Free Automation Assessment&quot;
                triggerSize=&quot;lg&quot;
                className=&quot;text-lg px-8 py-6&quot;
              />
              <Button variant=&quot;outline&quot; size=&quot;lg&quot; asChild className=&quot;text-lg px-8 py-6&quot;>
                <Link href=&quot;tel:+15878049266&quot;>
                  Call (587) 804-9266
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;grid md:grid-cols-4 gap-8 text-center&quot;>
            <div>
              <div className=&quot;text-3xl font-bold text-primary mb-2&quot;>20-40</div>
              <div className=&quot;text-sm text-muted-foreground&quot;>Hours Saved Per Week</div>
            </div>
            <div>
              <div className=&quot;text-3xl font-bold text-primary mb-2&quot;>30-50%</div>
              <div className=&quot;text-sm text-muted-foreground&quot;>Cost Reduction</div>
            </div>
            <div>
              <div className=&quot;text-3xl font-bold text-primary mb-2&quot;>25-40%</div>
              <div className=&quot;text-sm text-muted-foreground&quot;>Revenue Increase</div>
            </div>
            <div>
              <div className=&quot;text-3xl font-bold text-primary mb-2&quot;>$2,500</div>
              <div className=&quot;text-sm text-muted-foreground&quot;>Starting Price</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Why Small Businesses Choose AI Automation
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              Automation isn&apos;t just for big corporations. Small businesses see the biggest impact from AI automation.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
            {benefits.map((benefit, index) => (
              <Card key={index} className=&quot;text-center&quot;>
                <CardHeader>
                  <div className=&quot;mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center&quot;>
                    <benefit.icon className=&quot;h-6 w-6 text-primary&quot; />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className=&quot;text-base&quot;>
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Solutions */}
      <section id=&quot;solutions&quot; className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Small Business Automation Solutions
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              Affordable automation solutions designed specifically for small business needs and budgets.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-2 gap-8&quot;>
            {automationSolutions.map((solution, index) => (
              <Card key={index} className=&quot;group hover:shadow-lg transition-shadow&quot;>
                <CardHeader>
                  <div className=&quot;mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors&quot;>
                    <solution.icon className=&quot;h-6 w-6 text-primary&quot; />
                  </div>
                  <CardTitle className=&quot;text-xl&quot;>{solution.title}</CardTitle>
                  <CardDescription className=&quot;text-base&quot;>
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className=&quot;space-y-2 mb-4&quot;>
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className=&quot;flex items-center text-sm&quot;>
                        <CheckCircle className=&quot;h-4 w-4 text-green-500 mr-2 flex-shrink-0&quot; />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className=&quot;text-sm font-semibold text-green-600&quot;>
                    Saves: {solution.savings}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Automation Solutions by Business Type
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              Tailored automation solutions for different types of small businesses.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
            {smallBusinessTypes.map((business, index) => (
              <Card key={index} className=&quot;text-center&quot;>
                <CardContent className=&quot;p-6&quot;>
                  <div className=&quot;mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center&quot;>
                    <business.icon className=&quot;h-6 w-6 text-primary&quot; />
                  </div>
                  <h3 className=&quot;font-semibold text-lg mb-2&quot;>{business.type}</h3>
                  <p className=&quot;text-sm text-muted-foreground mb-3&quot;>{business.automation}</p>
                  <div className=&quot;text-sm font-semibold text-green-600&quot;>
                    Avg. Savings: {business.savings}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Real Small Business Success Stories
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              See how other small businesses have transformed their operations with automation.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-3 gap-8&quot;>
            {caseStudies.map((study, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className=&quot;flex items-center mb-2&quot;>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className=&quot;h-4 w-4 fill-yellow-400 text-yellow-400&quot; />
                    ))}
                  </div>
                  <CardTitle className=&quot;text-lg&quot;>{study.business}</CardTitle>
                  <CardDescription className=&quot;text-sm&quot;>{study.size}</CardDescription>
                </CardHeader>
                <CardContent className=&quot;space-y-4&quot;>
                  <div>
                    <h4 className=&quot;font-semibold text-sm text-muted-foreground mb-1&quot;>Challenge:</h4>
                    <p className=&quot;text-sm&quot;>{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className=&quot;font-semibold text-sm text-muted-foreground mb-1&quot;>Solution:</h4>
                    <p className=&quot;text-sm&quot;>{study.solution}</p>
                  </div>
                  <div>
                    <h4 className=&quot;font-semibold text-sm text-muted-foreground mb-1&quot;>Results:</h4>
                    <p className=&quot;text-sm font-medium text-green-600&quot;>{study.results}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Affordable Small Business Automation Pricing
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              Transparent pricing designed for small business budgets. No hidden fees, no surprises.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-3 gap-8&quot;>
            {pricing.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? &apos;border-2 border-primary shadow-lg&apos; : &apos;&apos;}`}>
                {plan.popular && (
                  <div className=&quot;absolute -top-3 left-1/2 transform -translate-x-1/2&quot;>
                    <Badge className=&quot;bg-primary text-primary-foreground&quot;>Most Popular</Badge>
                  </div>
                )}
                <CardHeader className=&quot;text-center&quot;>
                  <CardTitle className=&quot;text-xl&quot;>{plan.plan}</CardTitle>
                  <div className=&quot;text-3xl font-bold text-primary&quot;>{plan.price}</div>
                  <CardDescription className=&quot;text-base mt-2&quot;>
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className=&quot;space-y-3 mb-6&quot;>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className=&quot;flex items-center text-sm&quot;>
                        <CheckCircle className=&quot;h-4 w-4 text-green-500 mr-2 flex-shrink-0&quot; />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className=&quot;w-full&quot; variant={plan.popular ? &quot;default&quot; : &quot;outline&quot;}>
                    <Link href=&quot;/contact&quot;>
                      Get Started
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-6&quot;>
              Ready to Automate Your Small Business?
            </h2>
            <p className=&quot;text-xl text-muted-foreground mb-8&quot;>
              Join hundreds of small businesses that have already transformed their operations with AI automation. 
              Get your free assessment and see how much time and money you can save.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <TidyCalPopup 
                path=&quot;abhixchawla/automations-and-more-consultation&quot;
                triggerText=&quot;Get Free Assessment&quot;
                triggerSize=&quot;lg&quot;
                className=&quot;text-lg px-8 py-6&quot;
              />
              <Button variant=&quot;outline&quot; size=&quot;lg&quot; asChild className=&quot;text-lg px-8 py-6&quot;>
                <Link href=&quot;tel:+15878049266&quot;>
                  <Phone className=&quot;mr-2 h-5 w-5&quot; />
                  Call (587) 804-9266
                </Link>
              </Button>
            </div>
            <p className=&quot;text-sm text-muted-foreground mt-4&quot;>
              Free assessment • No obligation • Custom automation plan
            </p>
          </div>
        </div>
      </section>

      {/* Book Consultation Section */}
      <section id=&quot;book-consultation&quot; className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-6&quot;>
              Get Your Free Small Business Automation Assessment
            </h2>
            <p className=&quot;text-xl text-muted-foreground mb-8&quot;>
              Schedule a free consultation to see how much time and money you can save with AI automation. 
              Get a custom automation plan designed specifically for your small business.
            </p>
            <div className=&quot;bg-white rounded-lg p-8 shadow-lg&quot;>
              <TidyCalIframe path=&quot;abhixchawla/automations-and-more-consultation&quot; />
            </div>
            <p className=&quot;text-sm text-muted-foreground mt-4&quot;>
              Can&apos;t find a time that works? Call us at <Link href=&quot;tel:+15878049266&quot; className=&quot;text-primary hover:underline&quot;>(587) 804-9266</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className=&quot;border-t py-12 bg-background&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;grid md:grid-cols-4 gap-8&quot;>
            <div className=&quot;md:col-span-2&quot;>
              <div className=&quot;flex items-center space-x-2 mb-4&quot;>
                <div className=&quot;h-8 w-8 rounded bg-primary flex items-center justify-center&quot;>
                  <Zap className=&quot;h-5 w-5 text-primary-foreground&quot; />
                </div>
                <span className=&quot;font-bold text-xl&quot;>Automations & More</span>
              </div>
              <p className=&quot;text-muted-foreground mb-4 max-w-md&quot;>
                Affordable AI automation solutions designed specifically for small businesses. 
                Save time, reduce costs, and grow your business with automation that works.
              </p>
            </div>
            <div>
              <h3 className=&quot;font-semibold mb-4&quot;>Small Business Solutions</h3>
              <ul className=&quot;space-y-2 text-sm text-muted-foreground&quot;>
                <li><Link href=&quot;/small-business-automation&quot; className=&quot;hover:text-foreground&quot;>Small Business Automation</Link></li>
                <li><Link href=&quot;/ai-automation-cost&quot; className=&quot;hover:text-foreground&quot;>Pricing</Link></li>
                <li><Link href=&quot;/services/ai-automation&quot; className=&quot;hover:text-foreground&quot;>Services</Link></li>
              </ul>
            </div>
            <div>
              <h3 className=&quot;font-semibold mb-4&quot;>Company</h3>
              <ul className=&quot;space-y-2 text-sm text-muted-foreground&quot;>
                <li><Link href=&quot;/about&quot; className=&quot;hover:text-foreground&quot;>About</Link></li>
                <li><Link href=&quot;/contact&quot; className=&quot;hover:text-foreground&quot;>Contact</Link></li>
                <li><Link href=&quot;/industries&quot; className=&quot;hover:text-foreground&quot;>Industries</Link></li>
              </ul>
            </div>
          </div>
          <div className=&quot;border-t mt-8 pt-8 text-center text-sm text-muted-foreground&quot;>
            <p>&copy; 2024 Automations and More. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
