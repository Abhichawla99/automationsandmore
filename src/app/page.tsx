import Link from &quot;next/link&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Navigation } from &quot;@/components/navigation&quot;;
import { TidyCalIframe } from &quot;@/components/tidycal-iframe&quot;;
import { TidyCalPopup } from &quot;@/components/tidycal-popup&quot;;
import { 
  Zap, 
  Globe, 
  Smartphone, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Clock,
  Building2,
  Heart,
  Utensils,
  Briefcase,
  Home as HomeIcon,
  Factory
} from &quot;lucide-react&quot;;

const industries = [
  { name: &quot;Retail & E-commerce&quot;, icon: Building2, href: &quot;/industries/retail&quot; },
  { name: &quot;Healthcare&quot;, icon: Heart, href: &quot;/industries/healthcare&quot; },
  { name: &quot;Restaurants&quot;, icon: Utensils, href: &quot;/industries/restaurants&quot; },
  { name: &quot;Professional Services&quot;, icon: Briefcase, href: &quot;/industries/professional-services&quot; },
  { name: &quot;Real Estate&quot;, icon: HomeIcon, href: &quot;/industries/real-estate&quot; },
  { name: &quot;Manufacturing&quot;, icon: Factory, href: &quot;/industries/manufacturing&quot; },
];

const services = [
  {
    title: &quot;AI Automation&quot;,
    description: &quot;Streamline your business processes with intelligent automation that works 24/7&quot;,
    icon: Zap,
    features: [&quot;Process Automation&quot;, &quot;Data Integration&quot;, &quot;Workflow Optimization&quot;],
    href: &quot;/services/ai-automation&quot;
  },
  {
    title: &quot;Custom Websites&quot;,
    description: &quot;Modern, AI-powered websites that convert visitors into customers&quot;,
    icon: Globe,
    features: [&quot;Responsive Design&quot;, &quot;SEO Optimized&quot;, &quot;AI Integration&quot;],
    href: &quot;/services/websites&quot;
  },
  {
    title: &quot;Business Apps&quot;,
    description: &quot;Custom mobile and web applications tailored to your business needs&quot;,
    icon: Smartphone,
    features: [&quot;Mobile Apps&quot;, &quot;Web Applications&quot;, &quot;API Integration&quot;],
    href: &quot;/services/apps&quot;
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: &quot;Increase Revenue&quot;,
    description: &quot;AI-powered solutions help you capture more customers and increase sales&quot;
  },
  {
    icon: Clock,
    title: &quot;Save Time&quot;,
    description: &quot;Automate repetitive tasks and focus on what matters most to your business&quot;
  },
  {
    icon: Users,
    title: &quot;Better Customer Experience&quot;,
    description: &quot;Provide faster, more personalized service with AI-powered customer interactions&quot;
  }
];

export default function HomePage() {
  return (
    <div className=&quot;min-h-screen bg-background&quot;>
      <Navigation />
      
      {/* Hero Section */}
      <section className=&quot;relative py-20 lg:py-32&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <Badge variant=&quot;secondary&quot; className=&quot;mb-6&quot;>
              AI-Powered Business Solutions
            </Badge>
            <h1 className=&quot;text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6&quot;>
              Transform Your{&quot; &quot;}
              <span className=&quot;bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent&quot;>
                Mainstreet Business
              </span>{&quot; &quot;}
              with AI
            </h1>
            <p className=&quot;text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto&quot;>
              We help small businesses leverage artificial intelligence for automation, 
              custom websites, and intelligent apps that drive growth and efficiency.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <TidyCalPopup 
                path=&quot;abhixchawla/automations-and-more-consultation&quot;
                triggerText=&quot;Get Free Consultation&quot;
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

      {/* Benefits Section */}
      <section className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Why Choose AI for Your Business?
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              AI isn&apos;t just for big corporations. Small businesses can benefit tremendously from intelligent automation.
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

      {/* Services Section */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Our AI-Powered Services
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              From automation to custom development, we provide comprehensive AI solutions for your business.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-3 gap-8&quot;>
            {services.map((service, index) => (
              <Card key={index} className=&quot;group hover:shadow-lg transition-shadow&quot;>
                <CardHeader>
                  <div className=&quot;mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors&quot;>
                    <service.icon className=&quot;h-6 w-6 text-primary&quot; />
                  </div>
                  <CardTitle className=&quot;text-xl&quot;>{service.title}</CardTitle>
                  <CardDescription className=&quot;text-base&quot;>
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className=&quot;space-y-2 mb-6&quot;>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className=&quot;flex items-center text-sm&quot;>
                        <CheckCircle className=&quot;h-4 w-4 text-green-500 mr-2 flex-shrink-0&quot; />
                        {feature}
          </li>
                    ))}
                  </ul>
                  <Button variant=&quot;outline&quot; asChild className=&quot;w-full&quot;>
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className=&quot;ml-2 h-4 w-4&quot; />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Industries We Serve
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              We specialize in AI solutions for mainstreet businesses across various industries.
            </p>
          </div>
          <div className=&quot;grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6&quot;>
            {industries.map((industry, index) => (
              <Link key={index} href={industry.href}>
                <Card className=&quot;group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer&quot;>
                  <CardContent className=&quot;p-6 text-center&quot;>
                    <div className=&quot;mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors&quot;>
                      <industry.icon className=&quot;h-6 w-6 text-primary&quot; />
                    </div>
                    <h3 className=&quot;font-semibold text-sm&quot;>{industry.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-6&quot;>
              Ready to Transform Your Business with AI?
            </h2>
            <p className=&quot;text-xl text-muted-foreground mb-8&quot;>
              Join hundreds of mainstreet businesses that have already embraced AI automation. 
              Let&apos;s discuss how we can help your business grow.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <TidyCalPopup 
                path=&quot;abhixchawla/automations-and-more-consultation&quot;
                triggerText=&quot;Get Free Consultation&quot;
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

      {/* Book Consultation Section */}
      <section id=&quot;book-consultation&quot; className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-6&quot;>
              Book Your Free AI Automation Consultation
            </h2>
            <p className=&quot;text-xl text-muted-foreground mb-8&quot;>
              Schedule a free 30-minute consultation to discuss how AI automation can transform your business. 
              No obligation, just expert advice tailored to your needs.
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
                Helping mainstreet businesses leverage AI for automation, custom websites, 
                and intelligent applications that drive growth and efficiency. Based in Calgary, Canada.
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
                <li><Link href=&quot;/privacy&quot; className=&quot;hover:text-foreground&quot;>Privacy</Link></li>
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
