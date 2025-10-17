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
  MapPin, 
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
  Building2,
  Heart,
  Utensils,
  Briefcase,
  Home as HomeIcon,
  Factory
} from &quot;lucide-react&quot;;

export const metadata: Metadata = {
  title: &quot;AI Automation Calgary - Business Automation Services in Calgary, Alberta&quot;,
  description: &quot;Leading AI automation services in Calgary, Alberta. Expert business automation consultants serving Calgary businesses. Free consultation available. Call (587) 804-9266.&quot;,
  keywords: [
    &quot;AI automation Calgary&quot;,
    &quot;business automation Calgary&quot;,
    &quot;AI automation Alberta&quot;,
    &quot;automation services Calgary&quot;,
    &quot;AI consultant Calgary&quot;,
    &quot;business automation Alberta&quot;,
    &quot;AI automation Canada&quot;,
    &quot;automation services Alberta&quot;,
    &quot;AI automation consultant Calgary&quot;,
    &quot;business process automation Calgary&quot;,
    &quot;workflow automation Calgary&quot;,
    &quot;AI automation Calgary Alberta&quot;
  ],
  openGraph: {
    title: &quot;AI Automation Calgary - Business Automation Services in Calgary, Alberta&quot;,
    description: &quot;Leading AI automation services in Calgary, Alberta. Expert business automation consultants serving Calgary businesses.&quot;,
    url: &quot;https://automationsandmore.com/ai-automation-calgary&quot;,
  },
  alternates: {
    canonical: &quot;/ai-automation-calgary&quot;,
  },
};

const calgaryAreas = [
  { area: &quot;Downtown Calgary&quot;, businesses: &quot;200+&quot;, specialties: &quot;Finance, Legal, Consulting&quot; },
  { area: &quot;Beltline&quot;, businesses: &quot;150+&quot;, specialties: &quot;Tech, Retail, Services&quot; },
  { area: &quot;Kensington&quot;, businesses: &quot;100+&quot;, specialties: &quot;Retail, Restaurants&quot; },
  { area: &quot;Mission&quot;, businesses: &quot;80+&quot;, specialties: &quot;Healthcare, Professional&quot; },
  { area: &quot;Inglewood&quot;, businesses: &quot;60+&quot;, specialties: &quot;Creative, Retail&quot; }
];

const calgaryIndustries = [
  {
    industry: &quot;Oil & Gas&quot;,
    icon: Factory,
    description: &quot;AI automation for energy companies, drilling operations, and supply chain management&quot;,
    clients: &quot;25+&quot;,
    savings: &quot;$75K+/month&quot;
  },
  {
    industry: &quot;Financial Services&quot;,
    icon: DollarSign,
    description: &quot;Banking automation, investment management, and financial reporting&quot;,
    clients: &quot;30+&quot;,
    savings: &quot;$50K+/month&quot;
  },
  {
    industry: &quot;Healthcare&quot;,
    icon: Heart,
    description: &quot;Patient management, medical records, and healthcare administration&quot;,
    clients: &quot;20+&quot;,
    savings: &quot;$40K+/month&quot;
  },
  {
    industry: &quot;Retail & E-commerce&quot;,
    icon: Building2,
    description: &quot;Inventory management, customer service, and sales automation&quot;,
    clients: &quot;40+&quot;,
    savings: &quot;$35K+/month&quot;
  },
  {
    industry: &quot;Restaurants&quot;,
    icon: Utensils,
    description: &quot;Order management, delivery optimization, and customer engagement&quot;,
    clients: &quot;35+&quot;,
    savings: &quot;$25K+/month&quot;
  },
  {
    industry: &quot;Real Estate&quot;,
    icon: HomeIcon,
    description: &quot;Lead management, property listings, and client communication&quot;,
    clients: &quot;25+&quot;,
    savings: &quot;$30K+/month&quot;
  }
];

const calgaryBenefits = [
  {
    title: &quot;Local Calgary Expertise&quot;,
    description: &quot;Deep understanding of Calgary&apos;s business landscape and Alberta regulations&quot;,
    icon: MapPin
  },
  {
    title: &quot;Mountain Time Support&quot;,
    description: &quot;Support aligned with Calgary&apos;s business hours and timezone&quot;,
    icon: Clock
  },
  {
    title: &quot;Canadian Business Focus&quot;,
    description: &quot;Understanding of Canadian business practices and compliance requirements&quot;,
    icon: Users
  },
  {
    title: &quot;Competitive Pricing&quot;,
    description: &quot;Affordable automation solutions designed for Calgary&apos;s market&quot;,
    icon: DollarSign
  }
];

const testimonials = [
  {
    name: &quot;Sarah Mitchell&quot;,
    company: &quot;Mitchell Energy Solutions&quot;,
    location: &quot;Downtown Calgary&quot;,
    content: &quot;The AI automation consultant transformed our Calgary energy company. We&apos;ve reduced operational costs by 60% and improved efficiency across all our Alberta locations.&quot;,
    rating: 5
  },
  {
    name: &quot;David Chen&quot;,
    company: &quot;Calgary Medical Group&quot;,
    location: &quot;Beltline&quot;,
    content: &quot;Working with a local Calgary automation expert was crucial. They understood our healthcare compliance requirements and helped us automate patient scheduling across all our Calgary clinics.&quot;,
    rating: 5
  },
  {
    name: &quot;Jennifer Thompson&quot;,
    company: &quot;Thompson Financial Services&quot;,
    location: &quot;Kensington&quot;,
    content: &quot;The automation solutions have saved us over $45,000 per month. The local expertise in Calgary&apos;s financial regulations made all the difference.&quot;,
    rating: 5
  }
];

const jsonLd = {
  &quot;@context&quot;: &quot;https://schema.org&quot;,
  &quot;@type&quot;: &quot;LocalBusiness&quot;,
  &quot;name&quot;: &quot;Automations and More - AI Automation Services Calgary&quot;,
  &quot;description&quot;: &quot;Expert AI automation services for businesses in Calgary, Alberta, Canada.&quot;,
  &quot;url&quot;: &quot;https://automationsandmore.com/ai-automation-calgary&quot;,
  &quot;telephone&quot;: &quot;+1-587-804-9266&quot;,
  &quot;email&quot;: &quot;hello@automationsandmore.com&quot;,
  &quot;address&quot;: {
    &quot;@type&quot;: &quot;PostalAddress&quot;,
    &quot;addressLocality&quot;: &quot;Calgary&quot;,
    &quot;addressRegion&quot;: &quot;AB&quot;,
    &quot;addressCountry&quot;: &quot;CA&quot;
  },
  &quot;geo&quot;: {
    &quot;@type&quot;: &quot;GeoCoordinates&quot;,
    &quot;latitude&quot;: &quot;51.0447&quot;,
    &quot;longitude&quot;: &quot;-114.0719&quot;
  },
  &quot;areaServed&quot;: [
    &quot;Calgary&quot;,
    &quot;Downtown Calgary&quot;,
    &quot;Beltline&quot;,
    &quot;Kensington&quot;,
    &quot;Mission&quot;,
    &quot;Inglewood&quot;
  ],
  &quot;serviceType&quot;: &quot;AI Automation Services&quot;,
  &quot;priceRange&quot;: &quot;$$&quot;
};

export default function AIAutomationCalgaryPage() {
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
              AI Automation Services Calgary
            </Badge>
            <h1 className=&quot;text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6&quot;>
              AI Automation{&quot; &quot;}
              <span className=&quot;bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent&quot;>
                Calgary, Alberta
              </span>{&quot; &quot;}
              - Local Business Automation Experts
            </h1>
            <p className=&quot;text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto&quot;>
              Leading AI automation services for Calgary businesses. Serving Downtown, Beltline, Kensington, 
              Mission, and all Calgary areas with expert automation solutions that drive results.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <TidyCalPopup 
                path=&quot;abhixchawla/automations-and-more-consultation&quot;
                triggerText=&quot;Book Free Calgary Consultation&quot;
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

      {/* Calgary Areas Served */}
      <section className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              AI Automation Services Across Calgary
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              We provide expert AI automation services throughout Calgary with local expertise 
              in each area&apos;s unique business landscape.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-5 gap-6&quot;>
            {calgaryAreas.map((area, index) => (
              <Card key={index} className=&quot;text-center&quot;>
                <CardContent className=&quot;p-6&quot;>
                  <div className=&quot;mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center&quot;>
                    <MapPin className=&quot;h-6 w-6 text-primary&quot; />
                  </div>
                  <h3 className=&quot;font-semibold text-lg mb-2&quot;>{area.area}</h3>
                  <div className=&quot;space-y-2 text-sm&quot;>
                    <div className=&quot;flex justify-between&quot;>
                      <span className=&quot;text-muted-foreground&quot;>Businesses:</span>
                      <span className=&quot;font-semibold&quot;>{area.businesses}</span>
                    </div>
                    <div className=&quot;text-xs text-muted-foreground&quot;>
                      {area.specialties}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calgary Industries */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Calgary Industries We Serve
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              Specialized AI automation solutions for Calgary&apos;s diverse business landscape.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
            {calgaryIndustries.map((industry, index) => (
              <Card key={index} className=&quot;group hover:shadow-lg transition-shadow&quot;>
                <CardHeader>
                  <div className=&quot;mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors&quot;>
                    <industry.icon className=&quot;h-6 w-6 text-primary&quot; />
                  </div>
                  <CardTitle className=&quot;text-lg&quot;>{industry.industry}</CardTitle>
                  <CardDescription className=&quot;text-base&quot;>
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className=&quot;space-y-2 text-sm&quot;>
                    <div className=&quot;flex justify-between&quot;>
                      <span className=&quot;text-muted-foreground&quot;>Calgary Clients:</span>
                      <span className=&quot;font-semibold&quot;>{industry.clients}</span>
                    </div>
                    <div className=&quot;flex justify-between&quot;>
                      <span className=&quot;text-muted-foreground&quot;>Avg. Savings:</span>
                      <span className=&quot;font-semibold text-green-600&quot;>{industry.savings}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Calgary Local Service */}
      <section className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Why Choose Local Calgary AI Automation Services?
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              Local expertise matters in Calgary&apos;s unique business environment.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
            {calgaryBenefits.map((benefit, index) => (
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

      {/* Calgary Testimonials */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              What Calgary Businesses Say About Our Services
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              Real testimonials from Calgary businesses that have transformed with AI automation.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-3 gap-8&quot;>
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className=&quot;flex items-center mb-2&quot;>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className=&quot;h-4 w-4 fill-yellow-400 text-yellow-400&quot; />
                    ))}
                  </div>
                  <CardDescription className=&quot;text-base italic&quot;>
                    &quot;{testimonial.content}&quot;
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <div className=&quot;font-semibold&quot;>{testimonial.name}</div>
                    <div className=&quot;text-sm text-muted-foreground&quot;>{testimonial.company}</div>
                    <div className=&quot;text-sm text-primary&quot;>{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calgary-Specific Services */}
      <section className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Calgary-Specific AI Automation Services
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              Specialized automation solutions designed for Calgary&apos;s unique business challenges.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-2 gap-8&quot;>
            <Card>
              <CardHeader>
                <CardTitle className=&quot;text-xl&quot;>Alberta Compliance Automation</CardTitle>
                <CardDescription>
                  Automated compliance with Alberta business regulations, permits, and reporting requirements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className=&quot;space-y-2&quot;>
                  <li className=&quot;flex items-center text-sm&quot;>
                    <CheckCircle className=&quot;h-4 w-4 text-green-500 mr-2 flex-shrink-0&quot; />
                    Automated permit renewals
                  </li>
                  <li className=&quot;flex items-center text-sm&quot;>
                    <CheckCircle className=&quot;h-4 w-4 text-green-500 mr-2 flex-shrink-0&quot; />
                    Tax reporting automation
                  </li>
                  <li className=&quot;flex items-center text-sm&quot;>
                    <CheckCircle className=&quot;h-4 w-4 text-green-500 mr-2 flex-shrink-0&quot; />
                    License management
                  </li>
                  <li className=&quot;flex items-center text-sm&quot;>
                    <CheckCircle className=&quot;h-4 w-4 text-green-500 mr-2 flex-shrink-0&quot; />
                    Regulatory compliance tracking
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className=&quot;text-xl&quot;>Calgary Multi-Location Management</CardTitle>
                <CardDescription>
                  Centralized automation for businesses with multiple Calgary locations across different areas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className=&quot;space-y-2&quot;>
                  <li className=&quot;flex items-center text-sm&quot;>
                    <CheckCircle className=&quot;h-4 w-4 text-green-500 mr-2 flex-shrink-0&quot; />
                    Cross-location inventory sync
                  </li>
                  <li className=&quot;flex items-center text-sm&quot;>
                    <CheckCircle className=&quot;h-4 w-4 text-green-500 mr-2 flex-shrink-0&quot; />
                    Unified customer management
                  </li>
                  <li className=&quot;flex items-center text-sm&quot;>
                    <CheckCircle className=&quot;h-4 w-4 text-green-500 mr-2 flex-shrink-0&quot; />
                    Location-specific reporting
                  </li>
                  <li className=&quot;flex items-center text-sm&quot;>
                    <CheckCircle className=&quot;h-4 w-4 text-green-500 mr-2 flex-shrink-0&quot; />
                    Staff scheduling optimization
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-6&quot;>
              Ready to Automate Your Calgary Business?
            </h2>
            <p className=&quot;text-xl text-muted-foreground mb-8&quot;>
              Join hundreds of Calgary businesses that have already transformed their operations with AI automation. 
              Get your free consultation today.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <TidyCalPopup 
                path=&quot;abhixchawla/automations-and-more-consultation&quot;
                triggerText=&quot;Book Free Calgary Consultation&quot;
                triggerSize=&quot;lg&quot;
                className=&quot;text-lg px-8 py-6&quot;
              />
              <Button variant=&quot;outline&quot; size=&quot;lg&quot; asChild className=&quot;text-lg px-8 py-6&quot;>
                <Link href=&quot;tel:+15878049266&quot;>
                  Call (587) 804-9266
                </Link>
              </Button>
            </div>
            <p className=&quot;text-sm text-muted-foreground mt-4&quot;>
              Serving all Calgary areas • Free consultation • Local expertise
            </p>
          </div>
        </div>
      </section>

      {/* Book Consultation Section */}
      <section id=&quot;book-consultation&quot; className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-6&quot;>
              Book Your Free Calgary AI Automation Consultation
            </h2>
            <p className=&quot;text-xl text-muted-foreground mb-8&quot;>
              Schedule a free consultation to discuss how AI automation can transform your Calgary business. 
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
                Leading AI automation services for Calgary businesses. Expert automation solutions 
                serving Downtown, Beltline, Kensington, Mission, and all Calgary areas.
              </p>
              <div className=&quot;flex items-center space-x-4 text-sm text-muted-foreground&quot;>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <MapPin className=&quot;h-4 w-4&quot; />
                  <span>Calgary, Alberta, Canada</span>
                </div>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <Phone className=&quot;h-4 w-4&quot; />
                  <span>(587) 804-9266</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className=&quot;font-semibold mb-4&quot;>Calgary Services</h3>
              <ul className=&quot;space-y-2 text-sm text-muted-foreground&quot;>
                <li><Link href=&quot;/ai-automation-calgary&quot; className=&quot;hover:text-foreground&quot;>AI Automation Calgary</Link></li>
                <li><Link href=&quot;/small-business-automation&quot; className=&quot;hover:text-foreground&quot;>Small Business Automation</Link></li>
                <li><Link href=&quot;/ai-automation-cost&quot; className=&quot;hover:text-foreground&quot;>Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className=&quot;font-semibold mb-4&quot;>Calgary Areas</h3>
              <ul className=&quot;space-y-2 text-sm text-muted-foreground&quot;>
                <li><Link href=&quot;/ai-automation-calgary&quot; className=&quot;hover:text-foreground&quot;>Downtown Calgary</Link></li>
                <li><Link href=&quot;/ai-automation-calgary&quot; className=&quot;hover:text-foreground&quot;>Beltline</Link></li>
                <li><Link href=&quot;/ai-automation-calgary&quot; className=&quot;hover:text-foreground&quot;>Kensington</Link></li>
                <li><Link href=&quot;/ai-automation-calgary&quot; className=&quot;hover:text-foreground&quot;>Mission</Link></li>
                <li><Link href=&quot;/ai-automation-calgary&quot; className=&quot;hover:text-foreground&quot;>Inglewood</Link></li>
              </ul>
            </div>
          </div>
          <div className=&quot;border-t mt-8 pt-8 text-center text-sm text-muted-foreground&quot;>
            <p>&copy; 2024 Automations and More. All rights reserved. | Serving Calgary, Alberta, Canada</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
