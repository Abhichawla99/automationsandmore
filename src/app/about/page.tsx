import { Metadata } from &quot;next&quot;;
import Link from &quot;next/link&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Navigation } from &quot;@/components/navigation&quot;;
import { 
  Zap, 
  Users, 
  Target, 
  Award, 
  ArrowRight,
  CheckCircle,
  Building2,
  Heart,
  Utensils,
  Briefcase,
  Home,
  Factory
} from &quot;lucide-react&quot;;

export const metadata: Metadata = {
  title: &quot;About Automations and More - AI-Powered Business Solutions&quot;,
  description: &quot;Learn about Automations and More, a company dedicated to helping mainstreet businesses leverage AI automation, custom websites, and intelligent applications for growth and efficiency.&quot;,
  keywords: [
    &quot;about automations and more&quot;,
    &quot;AI automation company&quot;,
    &quot;business automation services&quot;,
    &quot;mainstreet business solutions&quot;,
    &quot;AI consulting company&quot;,
    &quot;business technology solutions&quot;,
    &quot;automation experts&quot;,
    &quot;AI for small business&quot;,
    &quot;business transformation services&quot;,
    &quot;technology consulting&quot;
  ],
  openGraph: {
    title: &quot;About Automations and More - AI-Powered Business Solutions&quot;,
    description: &quot;Learn about Automations and More, a company dedicated to helping mainstreet businesses leverage AI automation for growth and efficiency.&quot;,
    url: &quot;https://automationsandmore.com/about&quot;,
  },
  alternates: {
    canonical: &quot;/about&quot;,
  },
};

const values = [
  {
    title: &quot;Innovation&quot;,
    description: &quot;We stay at the forefront of AI technology to deliver cutting-edge solutions that drive real business results.&quot;,
    icon: Zap
  },
  {
    title: &quot;Partnership&quot;,
    description: &quot;We work closely with our clients as partners, understanding their unique needs and challenges.&quot;,
    icon: Users
  },
  {
    title: &quot;Results&quot;,
    description: &quot;Our focus is on delivering measurable results that help businesses grow and succeed.&quot;,
    icon: Target
  }
];

const industries = [
  { name: &quot;Retail & E-commerce&quot;, icon: Building2 },
  { name: &quot;Healthcare&quot;, icon: Heart },
  { name: &quot;Restaurants&quot;, icon: Utensils },
  { name: &quot;Professional Services&quot;, icon: Briefcase },
  { name: &quot;Real Estate&quot;, icon: Home },
  { name: &quot;Manufacturing&quot;, icon: Factory }
];

const team = [
  {
    name: &quot;AI Automation Experts&quot;,
    role: &quot;Technical Team&quot;,
    description: &quot;Our team of AI and automation specialists bring years of experience in implementing intelligent business solutions.&quot;
  },
  {
    name: &quot;Business Consultants&quot;,
    role: &quot;Strategy Team&quot;, 
    description: &quot;Business consultants who understand the unique challenges facing mainstreet businesses and how AI can solve them.&quot;
  },
  {
    name: &quot;Development Team&quot;,
    role: &quot;Implementation Team&quot;,
    description: &quot;Skilled developers who build custom websites, applications, and automation systems tailored to your business needs.&quot;
  }
];

const jsonLd = {
  &quot;@context&quot;: &quot;https://schema.org&quot;,
  &quot;@type&quot;: &quot;AboutPage&quot;,
  &quot;name&quot;: &quot;About Automations and More&quot;,
  &quot;description&quot;: &quot;Learn about Automations and More, a company dedicated to helping mainstreet businesses leverage AI automation for growth and efficiency.&quot;,
  &quot;url&quot;: &quot;https://automationsandmore.com/about&quot;,
  &quot;mainEntity&quot;: {
    &quot;@type&quot;: &quot;Organization&quot;,
    &quot;name&quot;: &quot;Automations and More&quot;,
    &quot;description&quot;: &quot;AI-powered business solutions for mainstreet businesses including automation, custom websites, and intelligent applications.&quot;,
    &quot;foundingDate&quot;: &quot;2024&quot;,
    &quot;address&quot;: {
      &quot;@type&quot;: &quot;PostalAddress&quot;,
      &quot;addressCountry&quot;: &quot;US&quot;
    },
    &quot;service&quot;: [
      &quot;AI Business Automation&quot;,
      &quot;Custom Website Development&quot;, 
      &quot;Business App Development&quot;
    ]
  }
};

export default function AboutPage() {
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
              About Automations and More
            </Badge>
            <h1 className=&quot;text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6&quot;>
              Empowering{&quot; &quot;}
              <span className=&quot;bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent&quot;>
                Mainstreet Businesses
              </span>{&quot; &quot;}
              with AI
            </h1>
            <p className=&quot;text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto&quot;>
              We&apos;re passionate about helping small and medium businesses leverage artificial intelligence 
              to automate processes, improve efficiency, and drive growth in today&apos;s competitive market.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Button size=&quot;lg&quot; asChild className=&quot;text-lg px-8 py-6&quot;>
                <Link href=&quot;/contact&quot;>
                  Work With Us
                  <ArrowRight className=&quot;ml-2 h-5 w-5&quot; />
                </Link>
              </Button>
              <Button variant=&quot;outline&quot; size=&quot;lg&quot; asChild className=&quot;text-lg px-8 py-6&quot;>
                <Link href=&quot;/services/ai-automation&quot;>
                  Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-8&quot;>
              Our Mission
            </h2>
            <p className=&quot;text-xl text-muted-foreground mb-8&quot;>
              To democratize AI technology for mainstreet businesses, making advanced automation, 
              intelligent websites, and custom applications accessible and affordable for companies 
              of all sizes.
            </p>
            <p className=&quot;text-lg text-muted-foreground&quot;>
              We believe that every business, regardless of size, should have access to the same 
              powerful AI technologies that large corporations use to gain competitive advantages.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Our Values
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              The principles that guide everything we do and every solution we create.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-3 gap-8&quot;>
            {values.map((value, index) => (
              <Card key={index} className=&quot;text-center&quot;>
                <CardHeader>
                  <div className=&quot;mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center&quot;>
                    <value.icon className=&quot;h-6 w-6 text-primary&quot; />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className=&quot;text-base&quot;>
                    {value.description}
                  </CardDescription>
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
              We work with businesses across various industries, providing tailored AI solutions 
              that address specific industry challenges and opportunities.
            </p>
          </div>
          <div className=&quot;grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6&quot;>
            {industries.map((industry, index) => (
              <Card key={index} className=&quot;text-center&quot;>
                <CardContent className=&quot;p-6&quot;>
                  <div className=&quot;mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center&quot;>
                    <industry.icon className=&quot;h-6 w-6 text-primary&quot; />
                  </div>
                  <h3 className=&quot;font-semibold text-sm&quot;>{industry.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Our Team
            </h2>
            <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
              A dedicated team of AI experts, business consultants, and developers working 
              together to deliver exceptional results for our clients.
            </p>
          </div>
          <div className=&quot;grid md:grid-cols-3 gap-8&quot;>
            {team.map((member, index) => (
              <Card key={index} className=&quot;text-center&quot;>
                <CardHeader>
                  <div className=&quot;mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center&quot;>
                    <Award className=&quot;h-6 w-6 text-primary&quot; />
                  </div>
                  <CardTitle className=&quot;text-lg&quot;>{member.name}</CardTitle>
                  <CardDescription className=&quot;text-sm font-medium text-primary&quot;>
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardDescription className=&quot;text-base&quot;>
                    {member.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className=&quot;py-20 bg-muted/30&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-4xl mx-auto&quot;>
            <div className=&quot;text-center mb-16&quot;>
              <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
                Why Choose Automations and More?
              </h2>
              <p className=&quot;text-xl text-muted-foreground&quot;>
                We&apos;re not just another technology company. We&apos;re your partners in business transformation.
              </p>
            </div>
            <div className=&quot;grid md:grid-cols-2 gap-8&quot;>
              <div className=&quot;space-y-6&quot;>
                <div className=&quot;flex items-start space-x-4&quot;>
                  <CheckCircle className=&quot;h-6 w-6 text-green-500 mt-1 flex-shrink-0&quot; />
                  <div>
                    <h3 className=&quot;font-semibold text-lg mb-2&quot;>Industry Expertise</h3>
                    <p className=&quot;text-muted-foreground&quot;>
                      Deep understanding of various industries and their unique challenges and opportunities.
                    </p>
                  </div>
                </div>
                <div className=&quot;flex items-start space-x-4&quot;>
                  <CheckCircle className=&quot;h-6 w-6 text-green-500 mt-1 flex-shrink-0&quot; />
                  <div>
                    <h3 className=&quot;font-semibold text-lg mb-2&quot;>Proven Results</h3>
                    <p className=&quot;text-muted-foreground&quot;>
                      Track record of delivering measurable improvements in efficiency, cost reduction, and revenue growth.
                    </p>
                  </div>
                </div>
                <div className=&quot;flex items-start space-x-4&quot;>
                  <CheckCircle className=&quot;h-6 w-6 text-green-500 mt-1 flex-shrink-0&quot; />
                  <div>
                    <h3 className=&quot;font-semibold text-lg mb-2&quot;>Ongoing Support</h3>
                    <p className=&quot;text-muted-foreground&quot;>
                      Comprehensive support and maintenance to ensure your AI solutions continue to deliver value.
                    </p>
                  </div>
                </div>
              </div>
              <div className=&quot;space-y-6&quot;>
                <div className=&quot;flex items-start space-x-4&quot;>
                  <CheckCircle className=&quot;h-6 w-6 text-green-500 mt-1 flex-shrink-0&quot; />
                  <div>
                    <h3 className=&quot;font-semibold text-lg mb-2&quot;>Custom Solutions</h3>
                    <p className=&quot;text-muted-foreground&quot;>
                      Tailored AI solutions designed specifically for your business needs and goals.
                    </p>
                  </div>
                </div>
                <div className=&quot;flex items-start space-x-4&quot;>
                  <CheckCircle className=&quot;h-6 w-6 text-green-500 mt-1 flex-shrink-0&quot; />
                  <div>
                    <h3 className=&quot;font-semibold text-lg mb-2&quot;>Affordable Pricing</h3>
                    <p className=&quot;text-muted-foreground&quot;>
                      Competitive pricing that makes AI technology accessible to businesses of all sizes.
                    </p>
                  </div>
                </div>
                <div className=&quot;flex items-start space-x-4&quot;>
                  <CheckCircle className=&quot;h-6 w-6 text-green-500 mt-1 flex-shrink-0&quot; />
                  <div>
                    <h3 className=&quot;font-semibold text-lg mb-2&quot;>Future-Ready</h3>
                    <p className=&quot;text-muted-foreground&quot;>
                      Solutions built with scalability and future growth in mind, ensuring long-term value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-6&quot;>
              Ready to Transform Your Business?
            </h2>
            <p className=&quot;text-xl text-muted-foreground mb-8&quot;>
              Let&apos;s work together to leverage AI technology and drive your business forward. 
              Contact us today to discuss your specific needs and goals.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Button size=&quot;lg&quot; asChild className=&quot;text-lg px-8 py-6&quot;>
                <Link href=&quot;/contact&quot;>
                  Get Started Today
                  <ArrowRight className=&quot;ml-2 h-5 w-5&quot; />
                </Link>
              </Button>
              <Button variant=&quot;outline&quot; size=&quot;lg&quot; asChild className=&quot;text-lg px-8 py-6&quot;>
                <Link href=&quot;/services/ai-automation&quot;>
                  Explore Our Services
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
                Empowering mainstreet businesses with AI automation, custom websites, 
                and intelligent applications that drive growth and efficiency.
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
