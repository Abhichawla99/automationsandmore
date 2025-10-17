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
  DollarSign, 
  Calculator, 
  CheckCircle, 
  ArrowRight,
  TrendingUp,
  Clock,
  Target,
  Users,
  Building2,
  Star,
  Phone,
  Mail
} from &quot;lucide-react&quot;;

export const metadata: Metadata = {
  title: &quot;AI Automation Cost - How Much Does Business Automation Cost? (2024 Pricing)&quot;,
  description: &quot;Get transparent AI automation pricing for your business. Learn about AI automation costs, ROI, and pricing models. Free consultation and custom quotes available.&quot;,
  keywords: [
    &quot;AI automation cost&quot;,
    &quot;business automation pricing&quot;,
    &quot;AI automation pricing&quot;,
    &quot;automation cost calculator&quot;,
    &quot;AI automation ROI&quot;,
    &quot;business process automation cost&quot;,
    &quot;workflow automation pricing&quot;,
    &quot;AI automation investment&quot;,
    &quot;automation services cost&quot;,
    &quot;AI automation budget&quot;,
    &quot;small business automation cost&quot;,
    &quot;enterprise automation pricing&quot;
  ],
  openGraph: {
    title: &quot;AI Automation Cost - How Much Does Business Automation Cost? (2024 Pricing)&quot;,
    description: &quot;Get transparent AI automation pricing for your business. Learn about AI automation costs, ROI, and pricing models.&quot;,
    url: &quot;https://automationsandmore.com/ai-automation-cost&quot;,
  },
  alternates: {
    canonical: &quot;/ai-automation-cost&quot;,
  },
};

const pricingTiers = [
  {
    name: &quot;Starter Package&quot;,
    price: &quot;$2,500&quot;,
    period: &quot;one-time setup&quot;,
    description: &quot;Perfect for small businesses getting started with AI automation&quot;,
    features: [
      &quot;Basic workflow automation&quot;,
      &quot;Email automation setup&quot;,
      &quot;Data integration (up to 3 systems)&quot;,
      &quot;Training and documentation&quot;,
      &quot;30 days support&quot;,
      &quot;ROI tracking dashboard&quot;
    ],
    popular: false
  },
  {
    name: &quot;Professional Package&quot;,
    price: &quot;$5,000&quot;,
    period: &quot;one-time setup&quot;,
    description: &quot;Comprehensive automation for growing businesses&quot;,
    features: [
      &quot;Advanced workflow automation&quot;,
      &quot;Multi-channel communication automation&quot;,
      &quot;Data integration (up to 10 systems)&quot;,
      &quot;Custom AI chatbot&quot;,
      &quot;Analytics and reporting&quot;,
      &quot;90 days support&quot;,
      &quot;Monthly optimization sessions&quot;
    ],
    popular: true
  },
  {
    name: &quot;Enterprise Package&quot;,
    price: &quot;$10,000+&quot;,
    period: &quot;one-time setup&quot;,
    description: &quot;Full-scale automation for large businesses&quot;,
    features: [
      &quot;Complete business process automation&quot;,
      &quot;Custom AI solutions&quot;,
      &quot;Unlimited system integrations&quot;,
      &quot;Advanced AI analytics&quot;,
      &quot;Dedicated account manager&quot;,
      &quot;6 months support&quot;,
      &quot;Quarterly strategy reviews&quot;
    ],
    popular: false
  }
];

const costFactors = [
  {
    factor: &quot;Complexity of Processes&quot;,
    description: &quot;More complex workflows require more development time and higher costs&quot;,
    impact: &quot;High&quot;
  },
  {
    factor: &quot;Number of Integrations&quot;,
    description: &quot;Each system integration adds to the overall cost&quot;,
    impact: &quot;Medium&quot;
  },
  {
    factor: &quot;Custom AI Features&quot;,
    description: &quot;Advanced AI features like machine learning models cost more&quot;,
    impact: &quot;High&quot;
  },
  {
    factor: &quot;Data Volume&quot;,
    description: &quot;Larger data volumes may require more robust infrastructure&quot;,
    impact: &quot;Medium&quot;
  },
  {
    factor: &quot;Timeline&quot;,
    description: &quot;Rush projects may incur additional costs&quot;,
    impact: &quot;Low&quot;
  }
];

const roiExamples = [
  {
    business: &quot;Retail Store&quot;,
    investment: &quot;$3,500&quot;,
    monthlySavings: &quot;$2,800&quot;,
    roi: &quot;800%&quot;,
    timeframe: &quot;12 months&quot;
  },
  {
    business: &quot;Restaurant&quot;,
    investment: &quot;$4,200&quot;,
    monthlySavings: &quot;$3,500&quot;,
    roi: &quot;900%&quot;,
    timeframe: &quot;12 months&quot;
  },
  {
    business: &quot;Professional Services&quot;,
    investment: &quot;$5,000&quot;,
    monthlySavings: &quot;$4,200&quot;,
    roi: &quot;840%&quot;,
    timeframe: &quot;12 months&quot;
  }
];

const jsonLd = {
  &quot;@context&quot;: &quot;https://schema.org&quot;,
  &quot;@type&quot;: &quot;WebPage&quot;,
  &quot;name&quot;: &quot;AI Automation Cost - Business Automation Pricing&quot;,
  &quot;description&quot;: &quot;Comprehensive guide to AI automation costs, pricing models, and ROI for businesses of all sizes.&quot;,
  &quot;url&quot;: &quot;https://automationsandmore.com/ai-automation-cost&quot;,
  &quot;mainEntity&quot;: {
    &quot;@type&quot;: &quot;Service&quot;,
    &quot;name&quot;: &quot;AI Automation Services&quot;,
    &quot;provider&quot;: {
      &quot;@type&quot;: &quot;Organization&quot;,
      &quot;name&quot;: &quot;Automations and More&quot;
    },
    &quot;offers&quot;: [
      {
        &quot;@type&quot;: &quot;Offer&quot;,
        &quot;name&quot;: &quot;Starter Package&quot;,
        &quot;price&quot;: &quot;2500&quot;,
        &quot;priceCurrency&quot;: &quot;USD&quot;
      },
      {
        &quot;@type&quot;: &quot;Offer&quot;, 
        &quot;name&quot;: &quot;Professional Package&quot;,
        &quot;price&quot;: &quot;5000&quot;,
        &quot;priceCurrency&quot;: &quot;USD&quot;
      },
      {
        &quot;@type&quot;: &quot;Offer&quot;,
        &quot;name&quot;: &quot;Enterprise Package&quot;, 
        &quot;price&quot;: &quot;10000&quot;,
        &quot;priceCurrency&quot;: &quot;USD&quot;
      }
    ]
  }
};

export default function AIAutomationCostPage() {
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
              Transparent AI Automation Pricing
            </Badge>
            <h1 className=&quot;text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6&quot;>
              AI Automation{&quot; &quot;}
              <span className=&quot;bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent&quot;>
                Cost & Pricing
              </span>{&quot; &quot;}
              Guide 2024
            </h1>
            <p className=&quot;text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto&quot;>
              Get transparent pricing for AI automation services. Learn about costs, ROI, and find the perfect 
              automation package for your business size and needs.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <TidyCalPopup 
                path=&quot;abhixchawla/automations-and-more-consultation&quot;
                triggerText=&quot;Get Free Cost Estimate&quot;
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

      {/* Quick Answer Section */}
      <section className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-4xl mx-auto&quot;>
            <Card className=&quot;border-2 border-primary/20&quot;>
              <CardHeader className=&quot;text-center&quot;>
                <div className=&quot;mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center&quot;>
                  <DollarSign className=&quot;h-6 w-6 text-primary&quot; />
                </div>
                <CardTitle className=&quot;text-2xl&quot;>Quick Answer: How Much Does AI Automation Cost?</CardTitle>
              </CardHeader>
              <CardContent className=&quot;text-center&quot;>
                <p className=&quot;text-lg text-muted-foreground mb-6&quot;>
                  AI automation typically costs between <strong>$2,500 - $10,000+</strong> for initial setup, 
                  with most businesses seeing <strong>300-900% ROI</strong> within the first year.
                </p>
                <div className=&quot;grid md:grid-cols-3 gap-4 text-center&quot;>
                  <div>
                    <div className=&quot;text-2xl font-bold text-primary&quot;>$2,500</div>
                    <div className=&quot;text-sm text-muted-foreground&quot;>Small Business</div>
                  </div>
                  <div>
                    <div className=&quot;text-2xl font-bold text-primary&quot;>$5,000</div>
                    <div className=&quot;text-sm text-muted-foreground&quot;>Medium Business</div>
                  </div>
                  <div>
                    <div className=&quot;text-2xl font-bold text-primary&quot;>$10,000+</div>
                    <div className=&quot;text-sm text-muted-foreground&quot;>Enterprise</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section id=&quot;pricing&quot; className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              AI Automation Pricing Packages
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              Choose the perfect automation package for your business needs and budget.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-3 gap-8&quot;>
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? &apos;border-2 border-primary shadow-lg&apos; : &apos;&apos;}`}>
                {tier.popular && (
                  <div className=&quot;absolute -top-3 left-1/2 transform -translate-x-1/2&quot;>
                    <Badge className=&quot;bg-primary text-primary-foreground&quot;>Most Popular</Badge>
                  </div>
                )}
                <CardHeader className=&quot;text-center&quot;>
                  <CardTitle className=&quot;text-xl&quot;>{tier.name}</CardTitle>
                  <div className=&quot;text-3xl font-bold text-primary&quot;>{tier.price}</div>
                  <div className=&quot;text-sm text-muted-foreground&quot;>{tier.period}</div>
                  <CardDescription className=&quot;text-base mt-2&quot;>
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className=&quot;space-y-3 mb-6&quot;>
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className=&quot;flex items-center text-sm&quot;>
                        <CheckCircle className=&quot;h-4 w-4 text-green-500 mr-2 flex-shrink-0&quot; />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className=&quot;w-full&quot; variant={tier.popular ? &quot;default&quot; : &quot;outline&quot;}>
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

      {/* Cost Factors */}
      <section className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              What Affects AI Automation Cost?
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              Understanding the factors that influence automation pricing helps you budget effectively.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
            {costFactors.map((factor, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className=&quot;flex items-center justify-between&quot;>
                    <CardTitle className=&quot;text-lg&quot;>{factor.factor}</CardTitle>
                    <Badge variant={factor.impact === &apos;High&apos; ? &apos;destructive&apos; : factor.impact === &apos;Medium&apos; ? &apos;default&apos; : &apos;secondary&apos;}>
                      {factor.impact} Impact
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{factor.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Examples */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Real ROI Examples from Our Clients
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              See how businesses like yours are saving money and time with AI automation.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-3 gap-8&quot;>
            {roiExamples.map((example, index) => (
              <Card key={index} className=&quot;text-center&quot;>
                <CardHeader>
                  <div className=&quot;mx-auto mb-4 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center&quot;>
                    <TrendingUp className=&quot;h-6 w-6 text-green-600&quot; />
                  </div>
                  <CardTitle className=&quot;text-lg&quot;>{example.business}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className=&quot;space-y-3&quot;>
                    <div>
                      <div className=&quot;text-sm text-muted-foreground&quot;>Investment</div>
                      <div className=&quot;text-xl font-bold&quot;>{example.investment}</div>
                    </div>
                    <div>
                      <div className=&quot;text-sm text-muted-foreground&quot;>Monthly Savings</div>
                      <div className=&quot;text-xl font-bold text-green-600&quot;>{example.monthlySavings}</div>
                    </div>
                    <div>
                      <div className=&quot;text-sm text-muted-foreground&quot;>ROI</div>
                      <div className=&quot;text-2xl font-bold text-primary&quot;>{example.roi}</div>
                    </div>
                    <div>
                      <div className=&quot;text-sm text-muted-foreground&quot;>Timeframe</div>
                      <div className=&quot;text-lg font-semibold&quot;>{example.timeframe}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-3xl mx-auto&quot;>
            <div className=&quot;text-center mb-16&quot;>
              <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
                AI Automation Cost FAQ
              </h2>
              <p className=&quot;text-xl text-muted-foreground&quot;>
                Common questions about AI automation pricing and costs.
              </p>
            </div>
            <div className=&quot;space-y-6&quot;>
              <Card>
                <CardHeader>
                  <CardTitle className=&quot;text-lg&quot;>Is there a monthly fee for AI automation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className=&quot;text-muted-foreground&quot;>
                    Our pricing is primarily one-time setup costs. We offer optional monthly maintenance and optimization 
                    services starting at $500/month for ongoing support and improvements.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className=&quot;text-lg&quot;>How quickly will I see ROI from AI automation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className=&quot;text-muted-foreground&quot;>
                    Most businesses start seeing ROI within 2-3 months, with full payback typically achieved within 
                    6-12 months. The exact timeline depends on your specific use cases and implementation.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className=&quot;text-lg&quot;>Do you offer payment plans for AI automation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className=&quot;text-muted-foreground&quot;>
                    Yes, we offer flexible payment plans including 50% upfront and 50% upon completion, or monthly 
                    installments over 3-6 months for qualifying businesses.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className=&quot;text-lg&quot;>What&apos;s included in the initial cost?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className=&quot;text-muted-foreground&quot;>
                    Initial costs include consultation, system analysis, automation development, testing, training, 
                    documentation, and initial support. All software licenses and integrations are included.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-6&quot;>
              Ready to Get Your Custom AI Automation Quote?
            </h2>
            <p className=&quot;text-xl text-muted-foreground mb-8&quot;>
              Get a personalized cost estimate for your business. No obligation, just transparent pricing 
              to help you make the right decision.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <TidyCalPopup 
                path=&quot;abhixchawla/automations-and-more-consultation&quot;
                triggerText=&quot;Get Free Quote&quot;
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
              Free consultation • Custom pricing • No hidden fees
            </p>
          </div>
        </div>
      </section>

      {/* Book Consultation Section */}
      <section id=&quot;book-consultation&quot; className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-6&quot;>
              Get Your Custom AI Automation Quote
            </h2>
            <p className=&quot;text-xl text-muted-foreground mb-8&quot;>
              Schedule a free consultation to get a personalized cost estimate for your business. 
              No obligation, just transparent pricing to help you make the right decision.
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
      <footer className=&quot;border-t py-12 bg-muted/30&quot;>
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
                Transparent AI automation pricing for businesses of all sizes. Get the automation you need 
                at a price you can afford.
              </p>
            </div>
            <div>
              <h3 className=&quot;font-semibold mb-4&quot;>Services</h3>
              <ul className=&quot;space-y-2 text-sm text-muted-foreground&quot;>
                <li><Link href=&quot;/services/ai-automation&quot; className=&quot;hover:text-foreground&quot;>AI Automation</Link></li>
                <li><Link href=&quot;/services/websites&quot; className=&quot;hover:text-foreground&quot;>Custom Websites</Link></li>
                <li><Link href=&quot;/services/apps&quot; className=&quot;hover:text-foreground&quot;>Business Apps</Link></li>
              </ul>
            </div>
            <div>
              <h3 className=&quot;font-semibold mb-4&quot;>Company</h3>
              <ul className=&quot;space-y-2 text-sm text-muted-foreground&quot;>
                <li><Link href=&quot;/about&quot; className=&quot;hover:text-foreground&quot;>About</Link></li>
                <li><Link href=&quot;/contact&quot; className=&quot;hover:text-foreground&quot;>Contact</Link></li>
                <li><Link href=&quot;/ai-automation-cost&quot; className=&quot;hover:text-foreground&quot;>Pricing</Link></li>
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
