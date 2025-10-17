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
  Users, 
  CheckCircle, 
  ArrowRight,
  Star,
  Phone,
  Mail,
  Calendar,
  Award,
  Target,
  TrendingUp,
  Clock,
  Building2,
  Heart,
  Utensils,
  Briefcase,
  Home as HomeIcon,
  Factory
} from &quot;lucide-react&quot;;

export const metadata: Metadata = {
  title: &quot;AI Automation Consultant - Expert Business Automation Consulting Services&quot;,
  description: &quot;Hire an experienced AI automation consultant to transform your business. Expert automation consulting, strategy, and implementation for small to enterprise businesses.&quot;,
  keywords: [
    &quot;AI automation consultant&quot;,
    &quot;business automation consultant&quot;,
    &quot;automation consulting services&quot;,
    &quot;AI consultant&quot;,
    &quot;business process consultant&quot;,
    &quot;workflow automation consultant&quot;,
    &quot;AI automation expert&quot;,
    &quot;automation strategy consultant&quot;,
    &quot;digital transformation consultant&quot;,
    &quot;AI implementation consultant&quot;,
    &quot;business automation advisor&quot;,
    &quot;automation specialist&quot;
  ],
  openGraph: {
    title: &quot;AI Automation Consultant - Expert Business Automation Consulting Services&quot;,
    description: &quot;Hire an experienced AI automation consultant to transform your business. Expert automation consulting and implementation.&quot;,
    url: &quot;https://automationsandmore.com/ai-automation-consultant&quot;,
  },
  alternates: {
    canonical: &quot;/ai-automation-consultant&quot;,
  },
};

const consultingServices = [
  {
    title: &quot;AI Automation Strategy&quot;,
    description: &quot;Develop a comprehensive automation roadmap tailored to your business goals&quot;,
    icon: Target,
    features: [
      &quot;Business process analysis&quot;,
      &quot;Automation opportunity identification&quot;,
      &quot;ROI projections and cost-benefit analysis&quot;,
      &quot;Implementation timeline and roadmap&quot;,
      &quot;Technology stack recommendations&quot;
    ]
  },
  {
    title: &quot;Process Optimization&quot;,
    description: &quot;Analyze and optimize your existing workflows for maximum efficiency&quot;,
    icon: TrendingUp,
    features: [
      &quot;Current state process mapping&quot;,
      &quot;Bottleneck identification&quot;,
      &quot;Efficiency improvement recommendations&quot;,
      &quot;Workflow redesign&quot;,
      &quot;Performance metrics establishment&quot;
    ]
  },
  {
    title: &quot;AI Implementation&quot;,
    description: &quot;Expert guidance through the entire AI automation implementation process&quot;,
    icon: Zap,
    features: [
      &quot;Technology selection and procurement&quot;,
      &quot;System integration planning&quot;,
      &quot;Change management strategies&quot;,
      &quot;Training and knowledge transfer&quot;,
      &quot;Ongoing support and optimization&quot;
    ]
  },
  {
    title: &quot;Digital Transformation&quot;,
    description: &quot;Complete digital transformation consulting for modern business operations&quot;,
    icon: Building2,
    features: [
      &quot;Digital maturity assessment&quot;,
      &quot;Technology roadmap development&quot;,
      &quot;Legacy system modernization&quot;,
      &quot;Cloud migration strategies&quot;,
      &quot;Data governance and security&quot;
    ]
  }
];

const industries = [
  { name: &quot;Retail & E-commerce&quot;, icon: Building2, clients: &quot;50+&quot;, savings: &quot;40%&quot; },
  { name: &quot;Healthcare&quot;, icon: Heart, clients: &quot;30+&quot;, savings: &quot;35%&quot; },
  { name: &quot;Restaurants&quot;, icon: Utensils, clients: &quot;45+&quot;, savings: &quot;50%&quot; },
  { name: &quot;Professional Services&quot;, icon: Briefcase, clients: &quot;60+&quot;, savings: &quot;45%&quot; },
  { name: &quot;Real Estate&quot;, icon: HomeIcon, clients: &quot;25+&quot;, savings: &quot;55%&quot; },
  { name: &quot;Manufacturing&quot;, icon: Factory, clients: &quot;20+&quot;, savings: &quot;60%&quot; }
];

const testimonials = [
  {
    name: &quot;Sarah Johnson&quot;,
    company: &quot;Johnson & Associates Law Firm&quot;,
    role: &quot;Managing Partner&quot;,
    content: &quot;The AI automation consultant transformed our practice. We&apos;ve reduced document processing time by 70% and increased client satisfaction significantly.&quot;,
    rating: 5
  },
  {
    name: &quot;Mike Rodriguez&quot;,
    company: &quot;Rodriguez Family Restaurant&quot;,
    role: &quot;Owner&quot;,
    content: &quot;Working with an automation consultant was the best investment we made. Our order processing is now 3x faster and we&apos;ve eliminated errors completely.&quot;,
    rating: 5
  },
  {
    name: &quot;Jennifer Chen&quot;,
    company: &quot;Chen Medical Practice&quot;,
    role: &quot;Practice Manager&quot;,
    content: &quot;The consultant helped us implement AI automation that&apos;s HIPAA compliant and saves us 20 hours per week. Highly recommend their expertise.&quot;,
    rating: 5
  }
];

const credentials = [
  {
    title: &quot;Certified AI Automation Expert&quot;,
    issuer: &quot;AI Automation Institute&quot;,
    year: &quot;2024&quot;
  },
  {
    title: &quot;Business Process Management Certification&quot;,
    issuer: &quot;BPM Institute&quot;,
    year: &quot;2023&quot;
  },
  {
    title: &quot;Digital Transformation Specialist&quot;,
    issuer: &quot;Digital Transformation Council&quot;,
    year: &quot;2023&quot;
  },
  {
    title: &quot;Project Management Professional (PMP)&quot;,
    issuer: &quot;Project Management Institute&quot;,
    year: &quot;2022&quot;
  }
];

const jsonLd = {
  &quot;@context&quot;: &quot;https://schema.org&quot;,
  &quot;@type&quot;: &quot;Person&quot;,
  &quot;name&quot;: &quot;AI Automation Consultant&quot;,
  &quot;jobTitle&quot;: &quot;Senior AI Automation Consultant&quot;,
  &quot;description&quot;: &quot;Expert AI automation consultant specializing in business process optimization and digital transformation.&quot;,
  &quot;url&quot;: &quot;https://automationsandmore.com/ai-automation-consultant&quot;,
  &quot;worksFor&quot;: {
    &quot;@type&quot;: &quot;Organization&quot;,
    &quot;name&quot;: &quot;Automations and More&quot;
  },
  &quot;knowsAbout&quot;: [
    &quot;AI Automation&quot;,
    &quot;Business Process Optimization&quot;,
    &quot;Digital Transformation&quot;,
    &quot;Workflow Automation&quot;,
    &quot;AI Implementation&quot;
  ],
  &quot;hasCredential&quot;: [
    {
      &quot;@type&quot;: &quot;EducationalOccupationalCredential&quot;,
      &quot;name&quot;: &quot;Certified AI Automation Expert&quot;,
      &quot;credentialCategory&quot;: &quot;certification&quot;
    }
  ]
};

export default function AIAutomationConsultantPage() {
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
              Expert AI Automation Consulting
            </Badge>
            <h1 className=&quot;text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6&quot;>
              Hire an{&quot; &quot;}
              <span className=&quot;bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent&quot;>
                AI Automation Consultant
              </span>{&quot; &quot;}
              to Transform Your Business
            </h1>
            <p className=&quot;text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto&quot;>
              Get expert guidance from certified AI automation consultants. We help businesses identify, 
              implement, and optimize AI automation solutions for maximum ROI and efficiency.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <TidyCalPopup 
                path=&quot;abhixchawla/automations-and-more-consultation&quot;
                triggerText=&quot;Schedule Free Consultation&quot;
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

      {/* Why Choose Our Consultant */}
      <section className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Why Choose Our AI Automation Consultant?
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              Our certified consultants bring years of experience and proven results to every project.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-3 gap-8&quot;>
            <Card className=&quot;text-center&quot;>
              <CardHeader>
                <div className=&quot;mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center&quot;>
                  <Award className=&quot;h-6 w-6 text-primary&quot; />
                </div>
                <CardTitle>Certified Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className=&quot;text-base&quot;>
                  Certified AI automation experts with proven track records across multiple industries.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className=&quot;text-center&quot;>
              <CardHeader>
                <div className=&quot;mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center&quot;>
                  <Users className=&quot;h-6 w-6 text-primary&quot; />
                </div>
                <CardTitle>200+ Successful Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className=&quot;text-base&quot;>
                  Successfully implemented AI automation for over 200 businesses across various industries.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className=&quot;text-center&quot;>
              <CardHeader>
                <div className=&quot;mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center&quot;>
                  <TrendingUp className=&quot;h-6 w-6 text-primary&quot; />
                </div>
                <CardTitle>Average 45% Cost Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className=&quot;text-base&quot;>
                  Our clients typically see 45% reduction in operational costs within the first year.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section id=&quot;services&quot; className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              AI Automation Consulting Services
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              Comprehensive consulting services to help you identify, plan, and implement AI automation solutions.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-2 gap-8&quot;>
            {consultingServices.map((service, index) => (
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

      {/* Industry Experience */}
      <section className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Industry Experience & Results
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              Our consultants have deep experience across multiple industries with proven results.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-3 gap-6&quot;>
            {industries.map((industry, index) => (
              <Card key={index} className=&quot;text-center&quot;>
                <CardContent className=&quot;p-6&quot;>
                  <div className=&quot;mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center&quot;>
                    <industry.icon className=&quot;h-6 w-6 text-primary&quot; />
                  </div>
                  <h3 className=&quot;font-semibold text-lg mb-2&quot;>{industry.name}</h3>
                  <div className=&quot;space-y-2 text-sm&quot;>
                    <div className=&quot;flex justify-between&quot;>
                      <span className=&quot;text-muted-foreground&quot;>Clients:</span>
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

      {/* Credentials */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Professional Credentials & Certifications
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              Our consultants hold industry-recognized certifications and credentials.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
            {credentials.map((credential, index) => (
              <Card key={index} className=&quot;text-center&quot;>
                <CardContent className=&quot;p-6&quot;>
                  <div className=&quot;mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center&quot;>
                    <Award className=&quot;h-6 w-6 text-primary&quot; />
                  </div>
                  <h3 className=&quot;font-semibold text-sm mb-2&quot;>{credential.title}</h3>
                  <p className=&quot;text-xs text-muted-foreground mb-1&quot;>{credential.issuer}</p>
                  <p className=&quot;text-xs text-muted-foreground&quot;>{credential.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              What Our Clients Say
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              Hear from businesses that have transformed their operations with our consulting services.
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
                    <div className=&quot;text-sm text-muted-foreground&quot;>{testimonial.role}</div>
                    <div className=&quot;text-sm text-primary&quot;>{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Our Consulting Process
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              A proven methodology that ensures successful AI automation implementation.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-4 gap-8&quot;>
            <Card className=&quot;text-center&quot;>
              <CardHeader>
                <div className=&quot;mx-auto mb-4 h-16 w-16 rounded-full bg-primary flex items-center justify-center&quot;>
                  <span className=&quot;text-2xl font-bold text-primary-foreground&quot;>1</span>
                </div>
                <CardTitle className=&quot;text-lg&quot;>Discovery & Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className=&quot;text-base&quot;>
                  Comprehensive analysis of your current processes and identification of automation opportunities.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className=&quot;text-center&quot;>
              <CardHeader>
                <div className=&quot;mx-auto mb-4 h-16 w-16 rounded-full bg-primary flex items-center justify-center&quot;>
                  <span className=&quot;text-2xl font-bold text-primary-foreground&quot;>2</span>
                </div>
                <CardTitle className=&quot;text-lg&quot;>Strategy Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className=&quot;text-base&quot;>
                  Create a detailed automation strategy with ROI projections and implementation roadmap.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className=&quot;text-center&quot;>
              <CardHeader>
                <div className=&quot;mx-auto mb-4 h-16 w-16 rounded-full bg-primary flex items-center justify-center&quot;>
                  <span className=&quot;text-2xl font-bold text-primary-foreground&quot;>3</span>
                </div>
                <CardTitle className=&quot;text-lg&quot;>Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className=&quot;text-base&quot;>
                  Guide the implementation process with hands-on support and change management.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className=&quot;text-center&quot;>
              <CardHeader>
                <div className=&quot;mx-auto mb-4 h-16 w-16 rounded-full bg-primary flex items-center justify-center&quot;>
                  <span className=&quot;text-2xl font-bold text-primary-foreground&quot;>4</span>
                </div>
                <CardTitle className=&quot;text-lg&quot;>Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className=&quot;text-base&quot;>
                  Continuous monitoring and optimization to ensure maximum ROI and performance.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-6&quot;>
              Ready to Transform Your Business with AI Automation?
            </h2>
            <p className=&quot;text-xl text-muted-foreground mb-8&quot;>
              Schedule a free consultation with our AI automation consultant. Get expert advice on how 
              to implement automation solutions that drive real results.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <TidyCalPopup 
                path=&quot;abhixchawla/automations-and-more-consultation&quot;
                triggerText=&quot;Schedule Free Consultation&quot;
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
              Free 30-minute consultation • No obligation • Expert advice
            </p>
          </div>
        </div>
      </section>

      {/* Book Consultation Section */}
      <section id=&quot;book-consultation&quot; className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-6&quot;>
              Schedule Your Free AI Automation Consultation
            </h2>
            <p className=&quot;text-xl text-muted-foreground mb-8&quot;>
              Book a free 30-minute consultation with our certified AI automation consultant. 
              Get expert advice on how to implement automation solutions that drive real results.
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
                Expert AI automation consulting services to help businesses identify, implement, 
                and optimize automation solutions for maximum ROI.
              </p>
            </div>
            <div>
              <h3 className=&quot;font-semibold mb-4&quot;>Consulting Services</h3>
              <ul className=&quot;space-y-2 text-sm text-muted-foreground&quot;>
                <li><Link href=&quot;/ai-automation-consultant&quot; className=&quot;hover:text-foreground&quot;>AI Automation Consulting</Link></li>
                <li><Link href=&quot;/ai-automation-cost&quot; className=&quot;hover:text-foreground&quot;>Cost Analysis</Link></li>
                <li><Link href=&quot;/services/ai-automation&quot; className=&quot;hover:text-foreground&quot;>Implementation</Link></li>
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
