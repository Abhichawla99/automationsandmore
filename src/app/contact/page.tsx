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
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  ArrowRight,
  CheckCircle,
  MessageSquare,
  Calendar,
  Users
} from &quot;lucide-react&quot;;

export const metadata: Metadata = {
  title: &quot;Contact Automations and More - Get Your AI Business Solution&quot;,
  description: &quot;Contact Automations and More for AI automation, custom websites, and business app development. Get a free consultation and discover how AI can transform your business.&quot;,
  keywords: [
    &quot;contact automations and more&quot;,
    &quot;AI automation consultation&quot;,
    &quot;business automation services contact&quot;,
    &quot;custom website development contact&quot;,
    &quot;business app development contact&quot;,
    &quot;AI consulting contact&quot;,
    &quot;free business consultation&quot;,
    &quot;AI automation quote&quot;,
    &quot;business technology consultation&quot;,
    &quot;automation services contact&quot;
  ],
  openGraph: {
    title: &quot;Contact Automations and More - Get Your AI Business Solution&quot;,
    description: &quot;Contact Automations and More for AI automation, custom websites, and business app development. Get a free consultation today.&quot;,
    url: &quot;https://automationsandmore.com/contact&quot;,
  },
  alternates: {
    canonical: &quot;/contact&quot;,
  },
};

const contactMethods = [
  {
    title: &quot;Email Us&quot;,
    description: &quot;Send us an email and we&apos;ll respond within 24 hours&quot;,
    icon: Mail,
    contact: &quot;hello@automationsandmore.com&quot;,
    action: &quot;mailto:hello@automationsandmore.com&quot;
  },
  {
    title: &quot;Call Us&quot;,
    description: &quot;Speak directly with our team during business hours&quot;,
    icon: Phone,
    contact: &quot;(587) 804-9266&quot;,
    action: &quot;tel:+15878049266&quot;
  },
  {
    title: &quot;Schedule a Call&quot;,
    description: &quot;Book a free consultation to discuss your needs&quot;,
    icon: Calendar,
    contact: &quot;Free 30-minute consultation&quot;,
    action: &quot;#book-consultation&quot;
  }
];

const services = [
  {
    title: &quot;AI Automation&quot;,
    description: &quot;Streamline your business processes with intelligent automation&quot;,
    icon: Zap
  },
  {
    title: &quot;Custom Websites&quot;,
    description: &quot;Modern, SEO-optimized websites that convert visitors into customers&quot;,
    icon: MessageSquare
  },
  {
    title: &quot;Business Apps&quot;,
    description: &quot;Custom mobile and web applications tailored to your business needs&quot;,
    icon: Users
  }
];

const jsonLd = {
  &quot;@context&quot;: &quot;https://schema.org&quot;,
  &quot;@type&quot;: &quot;ContactPage&quot;,
  &quot;name&quot;: &quot;Contact Automations and More&quot;,
  &quot;description&quot;: &quot;Contact Automations and More for AI automation, custom websites, and business app development services.&quot;,
  &quot;url&quot;: &quot;https://automationsandmore.com/contact&quot;,
  &quot;mainEntity&quot;: {
    &quot;@type&quot;: &quot;Organization&quot;,
    &quot;name&quot;: &quot;Automations and More&quot;,
    &quot;contactPoint&quot;: [
      {
        &quot;@type&quot;: &quot;ContactPoint&quot;,
        &quot;telephone&quot;: &quot;+1-587-804-9266&quot;,
        &quot;contactType&quot;: &quot;customer service&quot;,
        &quot;email&quot;: &quot;hello@automationsandmore.com&quot;,
        &quot;availableLanguage&quot;: &quot;English&quot;
      }
    ],
    &quot;address&quot;: {
      &quot;@type&quot;: &quot;PostalAddress&quot;,
      &quot;addressCountry&quot;: &quot;CA&quot;
    }
  }
};

export default function ContactPage() {
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
              Get In Touch
            </Badge>
            <h1 className=&quot;text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6&quot;>
              Ready to{&quot; &quot;}
              <span className=&quot;bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent&quot;>
                Transform Your Business
              </span>{&quot; &quot;}
              with AI?
            </h1>
            <p className=&quot;text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto&quot;>
              Let&apos;s discuss how AI automation, custom websites, and intelligent applications 
              can help your business grow and succeed. Get a free consultation today.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <TidyCalPopup 
                path=&quot;abhixchawla/automations-and-more-consultation&quot;
                triggerText=&quot;Get Free Consultation&quot;
                triggerSize=&quot;lg&quot;
                className=&quot;text-lg px-8 py-6&quot;
              />
              <Button variant=&quot;outline&quot; size=&quot;lg&quot; asChild className=&quot;text-lg px-8 py-6&quot;>
                <Link href=&quot;#contact-methods&quot;>
                  Contact Us Directly
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section id=&quot;contact-methods&quot; className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              How to Reach Us
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              Choose the most convenient way to get in touch with our team.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-3 gap-8&quot;>
            {contactMethods.map((method, index) => (
              <Card key={index} className=&quot;text-center group hover:shadow-lg transition-shadow&quot;>
                <CardHeader>
                  <div className=&quot;mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors&quot;>
                    <method.icon className=&quot;h-6 w-6 text-primary&quot; />
                  </div>
                  <CardTitle>{method.title}</CardTitle>
                  <CardDescription className=&quot;text-base&quot;>
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant=&quot;outline&quot; className=&quot;w-full&quot;>
                    <Link href={method.action}>
                      {method.contact}
                    </Link>
                  </Button>
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
              What We Can Help You With
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              Our comprehensive AI solutions are designed to address your specific business needs.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-3 gap-8&quot;>
            {services.map((service, index) => (
              <Card key={index} className=&quot;text-center&quot;>
                <CardHeader>
                  <div className=&quot;mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center&quot;>
                    <service.icon className=&quot;h-6 w-6 text-primary&quot; />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className=&quot;text-base&quot;>
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
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

      {/* FAQ Section */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-3xl mx-auto&quot;>
            <div className=&quot;text-center mb-16&quot;>
              <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
                Frequently Asked Questions
              </h2>
              <p className=&quot;text-xl text-muted-foreground&quot;>
                Quick answers to common questions about our services and process.
              </p>
            </div>
            <div className=&quot;space-y-6&quot;>
              <Card>
                <CardHeader>
                  <CardTitle className=&quot;text-lg&quot;>How much do your services cost?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className=&quot;text-muted-foreground&quot;>
                    Our pricing varies based on the scope and complexity of your project. 
                    We offer competitive rates and provide detailed quotes after understanding your specific needs. 
                    Contact us for a free consultation and custom quote.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className=&quot;text-lg&quot;>How long does a typical project take?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className=&quot;text-muted-foreground&quot;>
                    Project timelines vary depending on the scope. AI automation projects typically take 4-12 weeks, 
                    custom websites 4-8 weeks, and business apps 8-16 weeks. We provide detailed timelines during the planning phase.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className=&quot;text-lg&quot;>Do you provide ongoing support?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className=&quot;text-muted-foreground&quot;>
                    Yes, we offer comprehensive ongoing support and maintenance for all our solutions. 
                    This includes updates, monitoring, troubleshooting, and feature enhancements to ensure your systems continue to perform optimally.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-6&quot;>
              Ready to Get Started?
            </h2>
            <p className=&quot;text-xl text-muted-foreground mb-8&quot;>
              Don&apos;t wait to transform your business with AI. Contact us today and take the first step 
              toward a more efficient, profitable future.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <TidyCalPopup 
                path=&quot;abhixchawla/automations-and-more-consultation&quot;
                triggerText=&quot;Get Free Consultation&quot;
                triggerSize=&quot;lg&quot;
                className=&quot;text-lg px-8 py-6&quot;
              />
              <Button variant=&quot;outline&quot; size=&quot;lg&quot; asChild className=&quot;text-lg px-8 py-6&quot;>
                <Link href=&quot;/about&quot;>
                  Learn More About Us
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
                Ready to transform your business with AI? Contact us today for a free consultation 
                and discover how our solutions can help you grow and succeed.
              </p>
              <div className=&quot;flex items-center space-x-4 text-sm text-muted-foreground&quot;>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <Mail className=&quot;h-4 w-4&quot; />
                  <span>hello@automationsandmore.com</span>
                </div>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <Phone className=&quot;h-4 w-4&quot; />
                  <span>(587) 804-9266</span>
                </div>
              </div>
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
