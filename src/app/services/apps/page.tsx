import { Metadata } from &quot;next&quot;;
import Link from &quot;next/link&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Navigation } from &quot;@/components/navigation&quot;;
import { 
  Smartphone, 
  Globe, 
  Zap, 
  Database, 
  TrendingUp, 
  Clock,
  ArrowRight,
  CheckCircle,
  Star,
  DollarSign,
  Target,
  Building2,
  Activity,
  Users,
  FileText,
  Palette,
  ShoppingCart,
  Utensils,
  Heart,
  Home,
  Briefcase,
  Settings
} from &quot;lucide-react&quot;;

export const metadata: Metadata = {
  title: &quot;Custom Business App Development Services - Mobile & Web Applications&quot;,
  description: &quot;Get custom business applications for your company. Mobile apps, web applications, API integration, and AI-powered features for small and medium businesses.&quot;,
  keywords: [
    &quot;custom business app development&quot;,
    &quot;mobile app development&quot;,
    &quot;web application development&quot;,
    &quot;business app design&quot;,
    &quot;API integration services&quot;,
    &quot;custom software development&quot;,
    &quot;business application solutions&quot;,
    &quot;mobile app for business&quot;,
    &quot;web app development&quot;,
    &quot;business software solutions&quot;
  ],
  openGraph: {
    title: &quot;Custom Business App Development Services - Mobile & Web Applications&quot;,
    description: &quot;Get custom business applications for your company. Mobile apps, web applications, and AI-powered features.&quot;,
    url: &quot;https://automationsandmore.com/services/apps&quot;,
  },
  alternates: {
    canonical: &quot;/services/apps&quot;,
  },
};

const appServices = [
  {
    title: &quot;Mobile App Development&quot;,
    description: &quot;Native and cross-platform mobile applications for iOS and Android&quot;,
    icon: Smartphone,
    features: [
      &quot;iOS and Android app development&quot;,
      &quot;Cross-platform solutions&quot;,
      &quot;App store optimization&quot;,
      &quot;Push notifications and analytics&quot;
    ]
  },
  {
    title: &quot;Web Application Development&quot;,
    description: &quot;Custom web applications and progressive web apps (PWAs)&quot;,
    icon: Globe,
    features: [
      &quot;Custom web applications&quot;,
      &quot;Progressive Web Apps (PWA)&quot;,
      &quot;Real-time data synchronization&quot;,
      &quot;Cloud-based solutions&quot;
    ]
  },
  {
    title: &quot;API Integration & Development&quot;,
    description: &quot;Connect your apps with existing systems and third-party services&quot;,
    icon: Database,
    features: [
      &quot;Custom API development&quot;,
      &quot;Third-party integrations&quot;,
      &quot;Data synchronization&quot;,
      &quot;System connectivity solutions&quot;
    ]
  },
  {
    title: &quot;AI-Powered Features&quot;,
    description: &quot;Intelligent features that enhance user experience and business operations&quot;,
    icon: Zap,
    features: [
      &quot;AI chatbots and virtual assistants&quot;,
      &quot;Machine learning integration&quot;,
      &quot;Predictive analytics&quot;,
      &quot;Intelligent automation&quot;
    ]
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: &quot;Increase Business Efficiency&quot;,
    description: &quot;Custom apps streamline your business processes and improve productivity&quot;
  },
  {
    icon: Clock,
    title: &quot;24/7 Access to Your Business&quot;,
    description: &quot;Mobile and web apps provide constant access to your business data and tools&quot;
  },
  {
    icon: DollarSign,
    title: &quot;Boost Revenue & Customer Engagement&quot;,
    description: &quot;Engaging apps increase customer loyalty and create new revenue opportunities&quot;
  }
];

const appTypes = [
  {
    name: &quot;Business Management Apps&quot;,
    icon: Building2,
    description: &quot;CRM, project management, and business process automation apps&quot;
  },
  {
    name: &quot;E-commerce Apps&quot;,
    icon: ShoppingCart,
    description: &quot;Online stores, inventory management, and customer engagement apps&quot;
  },
  {
    name: &quot;Restaurant Apps&quot;,
    icon: Utensils,
    description: &quot;Order management, menu apps, and customer loyalty programs&quot;
  },
  {
    name: &quot;Healthcare Apps&quot;,
    icon: Heart,
    description: &quot;Patient portals, appointment booking, and medical record apps&quot;
  },
  {
    name: &quot;Real Estate Apps&quot;,
    icon: Home,
    description: &quot;Property management, listing apps, and client communication tools&quot;
  },
  {
    name: &quot;Professional Services&quot;,
    icon: Briefcase,
    description: &quot;Client management, document apps, and service booking systems&quot;
  }
];

const processSteps = [
  {
    step: &quot;01&quot;,
    title: &quot;Discovery & Strategy&quot;,
    description: &quot;We analyze your business needs and create a comprehensive app development strategy&quot;
  },
  {
    step: &quot;02&quot;, 
    title: &quot;Design & Prototyping&quot;,
    description: &quot;Create user-friendly designs and interactive prototypes for your app&quot;
  },
  {
    step: &quot;03&quot;,
    title: &quot;Development & Testing&quot;,
    description: &quot;Build your app with rigorous testing to ensure quality and performance&quot;
  },
  {
    step: &quot;04&quot;,
    title: &quot;Deployment & Support&quot;,
    description: &quot;Launch your app and provide ongoing maintenance and feature updates&quot;
  }
];

const jsonLd = {
  &quot;@context&quot;: &quot;https://schema.org&quot;,
  &quot;@type&quot;: &quot;Service&quot;,
  &quot;name&quot;: &quot;Custom Business App Development Services&quot;,
  &quot;description&quot;: &quot;Get custom business applications for your company including mobile apps, web applications, API integration, and AI-powered features.&quot;,
  &quot;provider&quot;: {
    &quot;@type&quot;: &quot;Organization&quot;,
    &quot;name&quot;: &quot;Automations and More&quot;,
    &quot;url&quot;: &quot;https://automationsandmore.com&quot;
  },
  &quot;serviceType&quot;: &quot;App Development&quot;,
  &quot;areaServed&quot;: &quot;United States&quot;,
  &quot;audience&quot;: {
    &quot;@type&quot;: &quot;BusinessAudience&quot;,
    &quot;audienceType&quot;: &quot;Small and Medium Businesses&quot;
  },
  &quot;offers&quot;: {
    &quot;@type&quot;: &quot;Offer&quot;,
    &quot;description&quot;: &quot;Custom business app development services&quot;,
    &quot;category&quot;: &quot;App Development Services&quot;
  }
};

export default function AppsPage() {
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
              Custom Business App Development
            </Badge>
            <h1 className=&quot;text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6&quot;>
              Get Custom{&quot; &quot;}
              <span className=&quot;bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent&quot;>
                Business Applications
              </span>{&quot; &quot;}
              Built for Your Needs
            </h1>
            <p className=&quot;text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto&quot;>
              Mobile apps, web applications, and API integrations that streamline your business 
              operations and enhance customer experiences.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Button size=&quot;lg&quot; asChild className=&quot;text-lg px-8 py-6&quot;>
                <Link href=&quot;/contact&quot;>
                  Get Your Custom App
                  <ArrowRight className=&quot;ml-2 h-5 w-5&quot; />
                </Link>
              </Button>
              <Button variant=&quot;outline&quot; size=&quot;lg&quot; asChild className=&quot;text-lg px-8 py-6&quot;>
                <Link href=&quot;#services&quot;>
                  View Our Services
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
              Why Choose Our App Development Services
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              Our custom business applications are designed to solve real business problems 
              and drive growth through technology.
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
      <section id=&quot;services&quot; className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Our App Development Services
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              Comprehensive app development services designed to meet your specific 
              business needs and goals.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-2 gap-8&quot;>
            {appServices.map((service, index) => (
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
                  <ul className=&quot;space-y-2&quot;>
                    {service.features.map((feature, featureIndex) => (
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

      {/* App Types Section */}
      <section className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Business Apps for Every Industry
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              We create custom business applications tailored to your specific industry 
              and business requirements.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-3 gap-6&quot;>
            {appTypes.map((type, index) => (
              <Card key={index} className=&quot;text-center&quot;>
                <CardContent className=&quot;p-6&quot;>
                  <div className=&quot;mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center&quot;>
                    <type.icon className=&quot;h-6 w-6 text-primary&quot; />
                  </div>
                  <h3 className=&quot;font-semibold text-lg mb-2&quot;>{type.name}</h3>
                  <p className=&quot;text-sm text-muted-foreground&quot;>{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Our App Development Process
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              We follow a proven development process to ensure your app meets your business 
              goals and delivers exceptional user experiences.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-4 gap-8&quot;>
            {processSteps.map((step, index) => (
              <Card key={index} className=&quot;text-center&quot;>
                <CardHeader>
                  <div className=&quot;mx-auto mb-4 h-16 w-16 rounded-full bg-primary flex items-center justify-center&quot;>
                    <span className=&quot;text-2xl font-bold text-primary-foreground&quot;>{step.step}</span>
                  </div>
                  <CardTitle className=&quot;text-lg&quot;>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className=&quot;text-base&quot;>
                    {step.description}
                  </CardDescription>
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
                App Development FAQ
              </h2>
              <p className=&quot;text-xl text-muted-foreground&quot;>
                Common questions about our app development services.
              </p>
            </div>
            <div className=&quot;space-y-6&quot;>
              <Card>
                <CardHeader>
                  <CardTitle className=&quot;text-lg&quot;>How long does it take to develop a custom app?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className=&quot;text-muted-foreground&quot;>
                    Development timelines vary based on complexity, but most business apps are completed within 8-16 weeks. 
                    We provide detailed timelines during the planning phase.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className=&quot;text-lg&quot;>Do you develop both mobile and web apps?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className=&quot;text-muted-foreground&quot;>
                    Yes, we develop both mobile apps (iOS and Android) and web applications. 
                    We can also create cross-platform solutions that work across multiple devices.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className=&quot;text-lg&quot;>Can you integrate my app with existing business systems?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className=&quot;text-muted-foreground&quot;>
                    Absolutely! We specialize in API integration and can connect your app with existing 
                    CRM systems, databases, payment processors, and other business tools.
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
              Ready to Build Your Custom Business App?
            </h2>
            <p className=&quot;text-xl text-muted-foreground mb-8&quot;>
              Join businesses that have already transformed their operations with our 
              custom app development services. Let&apos;s discuss your project.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Button size=&quot;lg&quot; asChild className=&quot;text-lg px-8 py-6&quot;>
                <Link href=&quot;/contact&quot;>
                  Start Your App Project
                  <ArrowRight className=&quot;ml-2 h-5 w-5&quot; />
                </Link>
              </Button>
              <Button variant=&quot;outline&quot; size=&quot;lg&quot; asChild className=&quot;text-lg px-8 py-6&quot;>
                <Link href=&quot;/services/websites&quot;>
                  View Our Other Services
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
                Creating custom business applications that streamline operations, enhance customer experiences, 
                and drive growth through innovative mobile and web solutions.
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
