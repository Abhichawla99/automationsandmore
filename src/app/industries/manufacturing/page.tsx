import { Metadata } from &quot;next&quot;;
import Link from &quot;next/link&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Navigation } from &quot;@/components/navigation&quot;;
import { 
  Factory, 
  Package, 
  BarChart3, 
  Settings, 
  TrendingUp, 
  Clock,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  DollarSign,
  Target,
  Building2,
  Activity
} from &quot;lucide-react&quot;;

export const metadata: Metadata = {
  title: &quot;AI Automation for Manufacturing & Production Businesses&quot;,
  description: &quot;Transform your manufacturing business with AI automation. Production optimization, quality control, supply chain management, and predictive maintenance for manufacturing companies.&quot;,
  keywords: [
    &quot;manufacturing AI automation&quot;,
    &quot;production automation AI&quot;,
    &quot;manufacturing process optimization&quot;,
    &quot;AI quality control manufacturing&quot;,
    &quot;supply chain automation&quot;,
    &quot;predictive maintenance AI&quot;,
    &quot;manufacturing analytics AI&quot;,
    &quot;AI for manufacturing companies&quot;,
    &quot;production line automation&quot;,
    &quot;manufacturing efficiency AI&quot;
  ],
  openGraph: {
    title: &quot;AI Automation for Manufacturing & Production Businesses&quot;,
    description: &quot;Transform your manufacturing business with AI automation. Production optimization, quality control, and supply chain management.&quot;,
    url: &quot;https://automationsandmore.com/industries/manufacturing&quot;,
  },
  alternates: {
    canonical: &quot;/industries/manufacturing&quot;,
  },
};

const manufacturingSolutions = [
  {
    title: &quot;Production Optimization&quot;,
    description: &quot;AI-driven production planning, scheduling, and resource allocation&quot;,
    icon: Settings,
    features: [
      &quot;Intelligent production scheduling&quot;,
      &quot;Resource optimization algorithms&quot;,
      &quot;Demand forecasting and planning&quot;,
      &quot;Real-time production monitoring&quot;
    ]
  },
  {
    title: &quot;Quality Control & Inspection&quot;,
    description: &quot;Automated quality assurance and defect detection systems&quot;,
    icon: Package,
    features: [
      &quot;Automated visual inspection&quot;,
      &quot;Predictive quality analytics&quot;,
      &quot;Defect detection and classification&quot;,
      &quot;Quality trend analysis&quot;
    ]
  },
  {
    title: &quot;Supply Chain Management&quot;,
    description: &quot;Intelligent supply chain optimization and inventory management&quot;,
    icon: Building2,
    features: [
      &quot;Automated inventory management&quot;,
      &quot;Supplier performance monitoring&quot;,
      &quot;Demand-driven procurement&quot;,
      &quot;Supply chain risk assessment&quot;
    ]
  },
  {
    title: &quot;Predictive Maintenance&quot;,
    description: &quot;AI-powered equipment monitoring and maintenance scheduling&quot;,
    icon: Activity,
    features: [
      &quot;Equipment health monitoring&quot;,
      &quot;Predictive failure analysis&quot;,
      &quot;Automated maintenance scheduling&quot;,
      &quot;Performance optimization&quot;
    ]
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: &quot;Increase Efficiency by 30%&quot;,
    description: &quot;AI-driven optimization reduces waste and improves production throughput&quot;
  },
  {
    icon: Clock,
    title: &quot;Reduce Downtime by 50%&quot;,
    description: &quot;Predictive maintenance prevents unexpected equipment failures&quot;
  },
  {
    icon: Target,
    title: &quot;Improve Quality by 40%&quot;,
    description: &quot;Automated quality control and real-time monitoring ensure consistent output&quot;
  }
];

const caseStudies = [
  {
    business: &quot;Automotive Parts Manufacturer&quot;,
    challenge: &quot;Manual quality control and production scheduling inefficiencies&quot;,
    solution: &quot;AI quality control and production optimization&quot;,
    results: &quot;45% reduction in defects, 35% improvement in production efficiency&quot;
  },
  {
    business: &quot;Food Processing Plant&quot;,
    challenge: &quot;Equipment downtime and supply chain disruptions&quot;,
    solution: &quot;Predictive maintenance and supply chain automation&quot;,
    results: &quot;60% reduction in unplanned downtime, 25% improvement in supply chain reliability&quot;
  },
  {
    business: &quot;Electronics Manufacturer&quot;,
    challenge: &quot;Complex production planning and inventory management&quot;,
    solution: &quot;AI production planning and inventory optimization&quot;,
    results: &quot;40% reduction in inventory costs, 30% improvement in on-time delivery&quot;
  }
];

const jsonLd = {
  &quot;@context&quot;: &quot;https://schema.org&quot;,
  &quot;@type&quot;: &quot;Service&quot;,
  &quot;name&quot;: &quot;AI Automation for Manufacturing&quot;,
  &quot;description&quot;: &quot;Transform your manufacturing business with AI automation including production optimization, quality control, supply chain management, and predictive maintenance.&quot;,
  &quot;provider&quot;: {
    &quot;@type&quot;: &quot;Organization&quot;,
    &quot;name&quot;: &quot;Automations and More&quot;,
    &quot;url&quot;: &quot;https://automationsandmore.com&quot;
  },
  &quot;serviceType&quot;: &quot;Manufacturing AI Automation&quot;,
  &quot;areaServed&quot;: &quot;United States&quot;,
  &quot;audience&quot;: {
    &quot;@type&quot;: &quot;BusinessAudience&quot;,
    &quot;audienceType&quot;: &quot;Manufacturing and Production Companies&quot;
  },
  &quot;offers&quot;: {
    &quot;@type&quot;: &quot;Offer&quot;,
    &quot;description&quot;: &quot;AI automation solutions for manufacturing businesses&quot;,
    &quot;category&quot;: &quot;Manufacturing Automation Services&quot;
  }
};

export default function ManufacturingPage() {
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
              Manufacturing AI Solutions
            </Badge>
            <h1 className=&quot;text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6&quot;>
              Transform Your{&quot; &quot;}
              <span className=&quot;bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent&quot;>
                Manufacturing Business
              </span>{&quot; &quot;}
              with AI
            </h1>
            <p className=&quot;text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto&quot;>
              From production optimization to predictive maintenance, AI automation helps manufacturing 
              companies increase efficiency, reduce costs, and improve product quality.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Button size=&quot;lg&quot; asChild className=&quot;text-lg px-8 py-6&quot;>
                <Link href=&quot;/contact&quot;>
                  Get Your Manufacturing AI Solution
                  <ArrowRight className=&quot;ml-2 h-5 w-5&quot; />
                </Link>
              </Button>
              <Button variant=&quot;outline&quot; size=&quot;lg&quot; asChild className=&quot;text-lg px-8 py-6&quot;>
                <Link href=&quot;#solutions&quot;>
                  View Solutions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Why Manufacturing Companies Choose AI Automation
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              Manufacturing companies are using AI to optimize production, improve quality, 
              and reduce operational costs in an increasingly competitive market.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-3 gap-8&quot;>
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

      {/* Solutions Section */}
      <section id=&quot;solutions&quot; className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              AI Solutions for Manufacturing Companies
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              Comprehensive AI automation solutions designed specifically for manufacturing 
              and production companies of all sizes.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-2 gap-8&quot;>
            {manufacturingSolutions.map((solution, index) => (
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
                  <ul className=&quot;space-y-2&quot;>
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className=&quot;flex items-center text-sm&quot;>
                        <CheckCircle className=&quot;h-4 w-4 text-green-500 mr-2 flex-shrink-0&quot; />
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

      {/* Manufacturing Types Section */}
      <section className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              AI Solutions for Every Manufacturing Sector
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              Whether you&apos;re in automotive, food processing, electronics, or other manufacturing sectors, 
              we have AI solutions tailored to your specific needs.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-3 gap-6&quot;>
            <Card>
              <CardContent className=&quot;p-6 text-center&quot;>
                <Factory className=&quot;h-12 w-12 mx-auto text-primary mb-4&quot; />
                <h3 className=&quot;font-semibold text-lg mb-2&quot;>Automotive Manufacturing</h3>
                <p className=&quot;text-sm text-muted-foreground&quot;>
                  Production line optimization, quality control, and supply chain management
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className=&quot;p-6 text-center&quot;>
                <Package className=&quot;h-12 w-12 mx-auto text-primary mb-4&quot; />
                <h3 className=&quot;font-semibold text-lg mb-2&quot;>Food Processing</h3>
                <p className=&quot;text-sm text-muted-foreground&quot;>
                  Quality assurance, batch tracking, and compliance monitoring
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className=&quot;p-6 text-center&quot;>
                <BarChart3 className=&quot;h-12 w-12 mx-auto text-primary mb-4&quot; />
                <h3 className=&quot;font-semibold text-lg mb-2&quot;>Electronics Manufacturing</h3>
                <p className=&quot;text-sm text-muted-foreground&quot;>
                  Precision quality control, component tracking, and testing automation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Real Results from Manufacturing Companies
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              See how manufacturing companies have transformed their operations with AI automation.
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

      {/* CTA Section */}
      <section className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-6&quot;>
              Ready to Transform Your Manufacturing Business?
            </h2>
            <p className=&quot;text-xl text-muted-foreground mb-8&quot;>
              Join manufacturing companies that have already embraced AI automation to improve efficiency, 
              quality, and profitability. Let&apos;s discuss your specific needs.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Button size=&quot;lg&quot; asChild className=&quot;text-lg px-8 py-6&quot;>
                <Link href=&quot;/contact&quot;>
                  Start Your Manufacturing AI Journey
                  <ArrowRight className=&quot;ml-2 h-5 w-5&quot; />
                </Link>
              </Button>
              <Button variant=&quot;outline&quot; size=&quot;lg&quot; asChild className=&quot;text-lg px-8 py-6&quot;>
                <Link href=&quot;/services/ai-automation&quot;>
                  Learn About Our Services
                </Link>
              </Button>
            </div>
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
                Helping manufacturing companies leverage AI for production optimization, 
                quality control, and supply chain management.
              </p>
            </div>
            <div>
              <h3 className=&quot;font-semibold mb-4&quot;>Manufacturing Solutions</h3>
              <ul className=&quot;space-y-2 text-sm text-muted-foreground&quot;>
                <li><Link href=&quot;/services/ai-automation&quot; className=&quot;hover:text-foreground&quot;>AI Automation</Link></li>
                <li><Link href=&quot;/services/websites&quot; className=&quot;hover:text-foreground&quot;>Manufacturing Websites</Link></li>
                <li><Link href=&quot;/services/apps&quot; className=&quot;hover:text-foreground&quot;>Production Apps</Link></li>
              </ul>
            </div>
            <div>
              <h3 className=&quot;font-semibold mb-4&quot;>Company</h3>
              <ul className=&quot;space-y-2 text-sm text-muted-foreground&quot;>
                <li><Link href=&quot;/about&quot; className=&quot;hover:text-foreground&quot;>About</Link></li>
                <li><Link href=&quot;/contact&quot; className=&quot;hover:text-foreground&quot;>Contact</Link></li>
                <li><Link href=&quot;/industries&quot; className=&quot;hover:text-foreground&quot;>All Industries</Link></li>
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
