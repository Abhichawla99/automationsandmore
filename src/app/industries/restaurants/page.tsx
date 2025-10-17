import { Metadata } from &quot;next&quot;;
import Link from &quot;next/link&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Navigation } from &quot;@/components/navigation&quot;;
import { 
  Utensils, 
  Clock, 
  Users, 
  Package, 
  TrendingUp, 
  Smartphone,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  DollarSign,
  Target,
  ChefHat,
  Receipt
} from &quot;lucide-react&quot;;

export const metadata: Metadata = {
  title: &quot;AI Automation for Restaurants & Food Service Businesses&quot;,
  description: &quot;Transform your restaurant with AI automation. Order management, inventory tracking, customer engagement, kitchen optimization, and delivery automation for food service businesses.&quot;,
  keywords: [
    &quot;restaurant AI automation&quot;,
    &quot;food service automation&quot;,
    &quot;restaurant order management&quot;,
    &quot;kitchen automation AI&quot;,
    &quot;restaurant inventory management&quot;,
    &quot;AI for restaurants&quot;,
    &quot;food service AI solutions&quot;,
    &quot;restaurant process automation&quot;,
    &quot;AI customer service restaurant&quot;,
    &quot;restaurant delivery automation&quot;
  ],
  openGraph: {
    title: &quot;AI Automation for Restaurants & Food Service Businesses&quot;,
    description: &quot;Transform your restaurant with AI automation. Order management, inventory tracking, customer engagement, and kitchen optimization.&quot;,
    url: &quot;https://automationsandmore.com/industries/restaurants&quot;,
  },
  alternates: {
    canonical: &quot;/industries/restaurants&quot;,
  },
};

const restaurantSolutions = [
  {
    title: &quot;Smart Order Management&quot;,
    description: &quot;AI-powered order processing, kitchen coordination, and delivery optimization&quot;,
    icon: Receipt,
    features: [
      &quot;Automated order processing and routing&quot;,
      &quot;Kitchen display system integration&quot;,
      &quot;Delivery route optimization&quot;,
      &quot;Real-time order tracking&quot;
    ]
  },
  {
    title: &quot;Inventory & Supply Management&quot;,
    description: &quot;Intelligent inventory tracking and automated supplier ordering&quot;,
    icon: Package,
    features: [
      &quot;Real-time inventory monitoring&quot;,
      &quot;Automated supplier ordering&quot;,
      &quot;Waste reduction analytics&quot;,
      &quot;Cost optimization insights&quot;
    ]
  },
  {
    title: &quot;Customer Engagement AI&quot;,
    description: &quot;Personalized customer experiences and automated marketing campaigns&quot;,
    icon: Users,
    features: [
      &quot;Personalized menu recommendations&quot;,
      &quot;Automated loyalty programs&quot;,
      &quot;Customer feedback analysis&quot;,
      &quot;Targeted marketing campaigns&quot;
    ]
  },
  {
    title: &quot;Kitchen Operations Optimization&quot;,
    description: &quot;AI-driven kitchen efficiency and staff scheduling optimization&quot;,
    icon: ChefHat,
    features: [
      &quot;Staff scheduling optimization&quot;,
      &quot;Kitchen workflow analysis&quot;,
      &quot;Equipment maintenance alerts&quot;,
      &quot;Performance analytics&quot;
    ]
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: &quot;Increase Revenue by 30-50%&quot;,
    description: &quot;AI-driven menu optimization and customer engagement boost sales and average order value&quot;
  },
  {
    icon: Clock,
    title: &quot;Reduce Wait Times by 40%&quot;,
    description: &quot;Optimized kitchen operations and order management significantly improve service speed&quot;
  },
  {
    icon: Target,
    title: &quot;Improve Customer Satisfaction&quot;,
    description: &quot;Faster service, personalized experiences, and better order accuracy increase customer loyalty&quot;
  }
];

const caseStudies = [
  {
    business: &quot;Local Pizza Restaurant&quot;,
    challenge: &quot;Manual order taking and delivery coordination&quot;,
    solution: &quot;AI order management and delivery optimization&quot;,
    results: &quot;45% faster order processing, 30% increase in delivery efficiency&quot;
  },
  {
    business: &quot;Family Diner&quot;,
    challenge: &quot;Inventory waste and inconsistent ordering&quot;,
    solution: &quot;AI inventory management and demand forecasting&quot;,
    results: &quot;35% reduction in food waste, 25% improvement in profit margins&quot;
  },
  {
    business: &quot;Fast Casual Chain&quot;,
    challenge: &quot;High customer service volume and staff scheduling&quot;,
    solution: &quot;AI customer service and staff optimization&quot;,
    results: &quot;50% reduction in customer wait times, 20% improvement in staff efficiency&quot;
  }
];

const jsonLd = {
  &quot;@context&quot;: &quot;https://schema.org&quot;,
  &quot;@type&quot;: &quot;Service&quot;,
  &quot;name&quot;: &quot;AI Automation for Restaurants & Food Service&quot;,
  &quot;description&quot;: &quot;Transform your restaurant with AI automation including order management, inventory tracking, customer engagement, kitchen optimization, and delivery automation.&quot;,
  &quot;provider&quot;: {
    &quot;@type&quot;: &quot;Organization&quot;,
    &quot;name&quot;: &quot;Automations and More&quot;,
    &quot;url&quot;: &quot;https://automationsandmore.com&quot;
  },
  &quot;serviceType&quot;: &quot;Restaurant AI Automation&quot;,
  &quot;areaServed&quot;: &quot;United States&quot;,
  &quot;audience&quot;: {
    &quot;@type&quot;: &quot;BusinessAudience&quot;,
    &quot;audienceType&quot;: &quot;Restaurants and Food Service Businesses&quot;
  },
  &quot;offers&quot;: {
    &quot;@type&quot;: &quot;Offer&quot;,
    &quot;description&quot;: &quot;AI automation solutions for restaurants and food service businesses&quot;,
    &quot;category&quot;: &quot;Restaurant Automation Services&quot;
  }
};

export default function RestaurantsPage() {
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
              Restaurant & Food Service AI Solutions
            </Badge>
            <h1 className=&quot;text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6&quot;>
              Transform Your{&quot; &quot;}
              <span className=&quot;bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent&quot;>
                Restaurant Business
              </span>{&quot; &quot;}
              with AI
            </h1>
            <p className=&quot;text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto&quot;>
              From order management to kitchen optimization, AI automation helps restaurants 
              increase efficiency, reduce costs, and provide exceptional dining experiences.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Button size=&quot;lg&quot; asChild className=&quot;text-lg px-8 py-6&quot;>
                <Link href=&quot;/contact&quot;>
                  Get Your Restaurant AI Solution
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
              Why Restaurants Choose AI Automation
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              Restaurants are using AI to streamline operations, improve customer experiences, 
              and increase profitability in an increasingly competitive market.
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
              AI Solutions for Restaurants & Food Service
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              Comprehensive AI automation solutions designed specifically for restaurants, 
              cafes, and food service businesses of all sizes.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-2 gap-8&quot;>
            {restaurantSolutions.map((solution, index) => (
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

      {/* Restaurant Types Section */}
      <section className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              AI Solutions for Every Type of Restaurant
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              Whether you run a quick-service restaurant, fine dining establishment, or food truck, 
              we have AI solutions tailored to your specific needs.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-3 gap-6&quot;>
            <Card>
              <CardContent className=&quot;p-6 text-center&quot;>
                <Utensils className=&quot;h-12 w-12 mx-auto text-primary mb-4&quot; />
                <h3 className=&quot;font-semibold text-lg mb-2&quot;>Quick Service & Fast Casual</h3>
                <p className=&quot;text-sm text-muted-foreground&quot;>
                  Order automation, kitchen display systems, and customer flow optimization
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className=&quot;p-6 text-center&quot;>
                <ChefHat className=&quot;h-12 w-12 mx-auto text-primary mb-4&quot; />
                <h3 className=&quot;font-semibold text-lg mb-2&quot;>Fine Dining & Casual</h3>
                <p className=&quot;text-sm text-muted-foreground&quot;>
                  Reservation management, table optimization, and personalized service automation
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className=&quot;p-6 text-center&quot;>
                <Package className=&quot;h-12 w-12 mx-auto text-primary mb-4&quot; />
                <h3 className=&quot;font-semibold text-lg mb-2&quot;>Delivery & Takeout</h3>
                <p className=&quot;text-sm text-muted-foreground&quot;>
                  Delivery route optimization, order tracking, and customer communication automation
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
              Real Results from Restaurant Businesses
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              See how restaurants have transformed their operations with AI automation.
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

      {/* FAQ Section */}
      <section className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-3xl mx-auto&quot;>
            <div className=&quot;text-center mb-16&quot;>
              <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
                Restaurant AI FAQ
              </h2>
              <p className=&quot;text-xl text-muted-foreground&quot;>
                Common questions about AI automation for restaurants and food service businesses.
              </p>
            </div>
            <div className=&quot;space-y-6&quot;>
              <Card>
                <CardHeader>
                  <CardTitle className=&quot;text-lg&quot;>How does AI help with restaurant inventory management?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className=&quot;text-muted-foreground&quot;>
                    Our AI analyzes sales patterns, seasonal trends, and historical data to predict demand, 
                    automatically generate purchase orders, and optimize inventory levels to reduce waste and costs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className=&quot;text-lg&quot;>Can AI improve kitchen efficiency?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className=&quot;text-muted-foreground&quot;>
                    Yes, AI can optimize kitchen workflows, predict peak times for better staff scheduling, 
                    monitor equipment performance, and provide real-time insights to improve cooking times and food quality.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className=&quot;text-lg&quot;>How does AI enhance customer experience in restaurants?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className=&quot;text-muted-foreground&quot;>
                    AI provides personalized menu recommendations, automated loyalty programs, 
                    faster order processing, and intelligent customer service to create memorable dining experiences.
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
              Ready to Transform Your Restaurant?
            </h2>
            <p className=&quot;text-xl text-muted-foreground mb-8&quot;>
              Join restaurants that have already embraced AI automation to improve efficiency, 
              customer satisfaction, and profitability. Let&apos;s discuss your specific needs.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Button size=&quot;lg&quot; asChild className=&quot;text-lg px-8 py-6&quot;>
                <Link href=&quot;/contact&quot;>
                  Start Your Restaurant AI Journey
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
                Helping restaurants leverage AI for order management, inventory tracking, 
                customer engagement, and kitchen optimization.
              </p>
            </div>
            <div>
              <h3 className=&quot;font-semibold mb-4&quot;>Restaurant Solutions</h3>
              <ul className=&quot;space-y-2 text-sm text-muted-foreground&quot;>
                <li><Link href=&quot;/services/ai-automation&quot; className=&quot;hover:text-foreground&quot;>AI Automation</Link></li>
                <li><Link href=&quot;/services/websites&quot; className=&quot;hover:text-foreground&quot;>Restaurant Websites</Link></li>
                <li><Link href=&quot;/services/apps&quot; className=&quot;hover:text-foreground&quot;>Restaurant Apps</Link></li>
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
