import { Metadata } from &quot;next&quot;;
import Link from &quot;next/link&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Navigation } from &quot;@/components/navigation&quot;;
import { 
  Globe, 
  Smartphone, 
  Search, 
  Zap, 
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
  Briefcase
} from &quot;lucide-react&quot;;

export const metadata: Metadata = {
  title: &quot;Custom Website Development Services - AI-Powered Business Websites&quot;,
  description: &quot;Get a custom, AI-powered website for your business. Modern design, SEO optimization, mobile responsive, and AI integration services for small and medium businesses.&quot;,
  keywords: [
    &quot;custom website development&quot;,
    &quot;AI-powered websites&quot;,
    &quot;business website design&quot;,
    &quot;SEO optimized websites&quot;,
    &quot;responsive web design&quot;,
    &quot;website development services&quot;,
    &quot;AI website integration&quot;,
    &quot;modern website design&quot;,
    &quot;business website builder&quot;,
    &quot;professional website development&quot;
  ],
  openGraph: {
    title: &quot;Custom Website Development Services - AI-Powered Business Websites&quot;,
    description: &quot;Get a custom, AI-powered website for your business. Modern design, SEO optimization, and AI integration services.&quot;,
    url: &quot;https://automationsandmore.com/services/websites&quot;,
  },
  alternates: {
    canonical: &quot;/services/websites&quot;,
  },
};

const websiteServices = [
  {
    title: &quot;Custom Website Design&quot;,
    description: &quot;Beautiful, modern websites tailored to your brand and business needs&quot;,
    icon: Palette,
    features: [
      &quot;Custom design and branding&quot;,
      &quot;Mobile-responsive layouts&quot;,
      &quot;User experience optimization&quot;,
      &quot;Modern, professional aesthetics&quot;
    ]
  },
  {
    title: &quot;SEO Optimization&quot;,
    description: &quot;Search engine optimized websites that rank higher and attract more customers&quot;,
    icon: Search,
    features: [
      &quot;Technical SEO implementation&quot;,
      &quot;Content optimization&quot;,
      &quot;Local SEO for businesses&quot;,
      &quot;Performance optimization&quot;
    ]
  },
  {
    title: &quot;AI Integration&quot;,
    description: &quot;Intelligent features that enhance user experience and business operations&quot;,
    icon: Zap,
    features: [
      &quot;AI chatbots and virtual assistants&quot;,
      &quot;Personalized content delivery&quot;,
      &quot;Automated customer interactions&quot;,
      &quot;Intelligent search and recommendations&quot;
    ]
  },
  {
    title: &quot;E-commerce Solutions&quot;,
    description: &quot;Complete online store solutions with payment processing and inventory management&quot;,
    icon: ShoppingCart,
    features: [
      &quot;Online store setup and design&quot;,
      &quot;Payment gateway integration&quot;,
      &quot;Inventory management systems&quot;,
      &quot;Order processing automation&quot;
    ]
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: &quot;Increase Online Visibility&quot;,
    description: &quot;SEO-optimized websites help you rank higher in search results and attract more customers&quot;
  },
  {
    icon: Clock,
    title: &quot;24/7 Business Presence&quot;,
    description: &quot;Your website works around the clock to attract and convert customers&quot;
  },
  {
    icon: DollarSign,
    title: &quot;Boost Sales & Revenue&quot;,
    description: &quot;Professional websites with AI features increase conversion rates and customer engagement&quot;
  }
];

const websiteTypes = [
  {
    name: &quot;Business Websites&quot;,
    icon: Building2,
    description: &quot;Professional websites for service-based businesses and companies&quot;
  },
  {
    name: &quot;E-commerce Stores&quot;,
    icon: ShoppingCart,
    description: &quot;Complete online stores with shopping cart and payment processing&quot;
  },
  {
    name: &quot;Restaurant Websites&quot;,
    icon: Utensils,
    description: &quot;Online menus, reservations, and food ordering systems&quot;
  },
  {
    name: &quot;Healthcare Websites&quot;,
    icon: Heart,
    description: &quot;Patient portals, appointment booking, and HIPAA-compliant designs&quot;
  },
  {
    name: &quot;Real Estate Websites&quot;,
    icon: Home,
    description: &quot;Property listings, virtual tours, and lead generation systems&quot;
  },
  {
    name: &quot;Professional Services&quot;,
    icon: Briefcase,
    description: &quot;Portfolio showcases, client portals, and service booking systems&quot;
  }
];

const processSteps = [
  {
    step: &quot;01&quot;,
    title: &quot;Discovery & Planning&quot;,
    description: &quot;We understand your business goals and create a comprehensive website strategy&quot;
  },
  {
    step: &quot;02&quot;, 
    title: &quot;Design & Development&quot;,
    description: &quot;Create beautiful, functional websites with modern design and AI integration&quot;
  },
  {
    step: &quot;03&quot;,
    title: &quot;Testing & Optimization&quot;,
    description: &quot;Thorough testing and SEO optimization to ensure peak performance&quot;
  },
  {
    step: &quot;04&quot;,
    title: &quot;Launch & Support&quot;,
    description: &quot;Deploy your website and provide ongoing maintenance and support&quot;
  }
];

const jsonLd = {
  &quot;@context&quot;: &quot;https://schema.org&quot;,
  &quot;@type&quot;: &quot;Service&quot;,
  &quot;name&quot;: &quot;Custom Website Development Services&quot;,
  &quot;description&quot;: &quot;Get a custom, AI-powered website for your business with modern design, SEO optimization, and AI integration services.&quot;,
  &quot;provider&quot;: {
    &quot;@type&quot;: &quot;Organization&quot;,
    &quot;name&quot;: &quot;Automations and More&quot;,
    &quot;url&quot;: &quot;https://automationsandmore.com&quot;
  },
  &quot;serviceType&quot;: &quot;Website Development&quot;,
  &quot;areaServed&quot;: &quot;United States&quot;,
  &quot;audience&quot;: {
    &quot;@type&quot;: &quot;BusinessAudience&quot;,
    &quot;audienceType&quot;: &quot;Small and Medium Businesses&quot;
  },
  &quot;offers&quot;: {
    &quot;@type&quot;: &quot;Offer&quot;,
    &quot;description&quot;: &quot;Custom website development services for businesses&quot;,
    &quot;category&quot;: &quot;Website Development Services&quot;
  }
};

export default function WebsitesPage() {
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
              Custom Website Development Services
            </Badge>
            <h1 className=&quot;text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6&quot;>
              Get a{&quot; &quot;}
              <span className=&quot;bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent&quot;>
                Custom AI-Powered Website
              </span>{&quot; &quot;}
              for Your Business
            </h1>
            <p className=&quot;text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto&quot;>
              Modern, SEO-optimized websites with AI integration that help your business 
              attract more customers and grow online.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Button size=&quot;lg&quot; asChild className=&quot;text-lg px-8 py-6&quot;>
                <Link href=&quot;/contact&quot;>
                  Get Your Custom Website
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
              Why Choose Our Website Development Services
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              Our custom websites are designed to help your business succeed online with 
              modern design, AI integration, and SEO optimization.
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
              Our Website Development Services
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              Comprehensive website development services designed to help your business 
              succeed online.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-2 gap-8&quot;>
            {websiteServices.map((service, index) => (
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

      {/* Website Types Section */}
      <section className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Websites for Every Business Type
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              We create custom websites tailored to your specific industry and business needs.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-3 gap-6&quot;>
            {websiteTypes.map((type, index) => (
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
              Our Website Development Process
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              We follow a proven process to ensure your website meets your business goals 
              and exceeds your expectations.
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
                Website Development FAQ
              </h2>
              <p className=&quot;text-xl text-muted-foreground&quot;>
                Common questions about our website development services.
              </p>
            </div>
            <div className=&quot;space-y-6&quot;>
              <Card>
                <CardHeader>
                  <CardTitle className=&quot;text-lg&quot;>How long does it take to build a custom website?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className=&quot;text-muted-foreground&quot;>
                    Most custom websites are completed within 4-8 weeks, depending on complexity and features. 
                    We work closely with you throughout the process to ensure timely delivery.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className=&quot;text-lg&quot;>Do you provide ongoing website maintenance?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className=&quot;text-muted-foreground&quot;>
                    Yes, we offer comprehensive website maintenance and support services including updates, 
                    security monitoring, backups, and performance optimization.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className=&quot;text-lg&quot;>Will my website be mobile-responsive?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className=&quot;text-muted-foreground&quot;>
                    Absolutely! All our websites are built mobile-first and fully responsive, 
                    ensuring optimal performance across all devices and screen sizes.
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
              Ready to Get Your Custom Website?
            </h2>
            <p className=&quot;text-xl text-muted-foreground mb-8&quot;>
              Join businesses that have already transformed their online presence with our 
              custom website development services. Let&apos;s discuss your project.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Button size=&quot;lg&quot; asChild className=&quot;text-lg px-8 py-6&quot;>
                <Link href=&quot;/contact&quot;>
                  Start Your Website Project
                  <ArrowRight className=&quot;ml-2 h-5 w-5&quot; />
                </Link>
              </Button>
              <Button variant=&quot;outline&quot; size=&quot;lg&quot; asChild className=&quot;text-lg px-8 py-6&quot;>
                <Link href=&quot;/services/ai-automation&quot;>
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
                Creating custom, AI-powered websites that help businesses attract more customers 
                and grow their online presence with modern design and intelligent features.
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
