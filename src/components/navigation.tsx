&quot;use client&quot;;

import Link from &quot;next/link&quot;;
import { useState } from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from &quot;@/components/ui/navigation-menu&quot;;
import { Menu, X, Zap, Globe, Smartphone, Building2 } from &quot;lucide-react&quot;;
import { TidyCalPopup } from &quot;./tidycal-popup&quot;;

const industries = [
  {
    title: &quot;Retail & E-commerce&quot;,
    href: &quot;/industries/retail&quot;,
    description: &quot;AI-powered inventory management, customer service, and sales optimization&quot;,
    icon: Building2,
  },
  {
    title: &quot;Healthcare&quot;,
    href: &quot;/industries/healthcare&quot;, 
    description: &quot;Patient management, appointment scheduling, and medical record automation&quot;,
    icon: Building2,
  },
  {
    title: &quot;Restaurants & Food Service&quot;,
    href: &quot;/industries/restaurants&quot;,
    description: &quot;Order management, inventory tracking, and customer engagement automation&quot;,
    icon: Building2,
  },
  {
    title: &quot;Professional Services&quot;,
    href: &quot;/industries/professional-services&quot;,
    description: &quot;Client management, document automation, and workflow optimization&quot;,
    icon: Building2,
  },
  {
    title: &quot;Real Estate&quot;,
    href: &quot;/industries/real-estate&quot;,
    description: &quot;Lead management, property listings, and client communication automation&quot;,
    icon: Building2,
  },
  {
    title: &quot;Manufacturing&quot;,
    href: &quot;/industries/manufacturing&quot;,
    description: &quot;Production optimization, quality control, and supply chain automation&quot;,
    icon: Building2,
  },
];

const services = [
  {
    title: &quot;AI Automation&quot;,
    href: &quot;/services/ai-automation&quot;,
    description: &quot;Streamline your business processes with intelligent automation&quot;,
    icon: Zap,
  },
  {
    title: &quot;Custom Websites&quot;,
    href: &quot;/services/websites&quot;,
    description: &quot;Modern, AI-powered websites that convert visitors into customers&quot;,
    icon: Globe,
  },
  {
    title: &quot;Business Apps&quot;,
    href: &quot;/services/apps&quot;,
    description: &quot;Custom mobile and web applications tailored to your business needs&quot;,
    icon: Smartphone,
  },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=&quot;sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60&quot;>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;flex h-16 items-center justify-between&quot;>
          {/* Logo */}
          <Link href=&quot;/&quot; className=&quot;flex items-center space-x-2&quot;>
            <div className=&quot;h-8 w-8 rounded bg-primary flex items-center justify-center&quot;>
              <Zap className=&quot;h-5 w-5 text-primary-foreground&quot; />
            </div>
            <span className=&quot;font-bold text-xl&quot;>Automations & More</span>
          </Link>

          {/* Desktop Navigation */}
          <div className=&quot;hidden md:flex items-center space-x-6&quot;>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className=&quot;grid w-[600px] gap-3 p-4 md:grid-cols-2&quot;>
                      {industries.map((industry) => (
                        <NavigationMenuLink key={industry.href} asChild>
                          <Link
                            href={industry.href}
                            className=&quot;block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground&quot;
                          >
                            <div className=&quot;flex items-center space-x-2&quot;>
                              <industry.icon className=&quot;h-4 w-4&quot; />
                              <div className=&quot;text-sm font-medium leading-none&quot;>
                                {industry.title}
                              </div>
                            </div>
                            <p className=&quot;line-clamp-2 text-sm leading-snug text-muted-foreground&quot;>
                              {industry.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className=&quot;grid w-[400px] gap-3 p-4&quot;>
                      {services.map((service) => (
                        <NavigationMenuLink key={service.href} asChild>
                          <Link
                            href={service.href}
                            className=&quot;block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground&quot;
                          >
                            <div className=&quot;flex items-center space-x-2&quot;>
                              <service.icon className=&quot;h-4 w-4&quot; />
                              <div className=&quot;text-sm font-medium leading-none&quot;>
                                {service.title}
                              </div>
                            </div>
                            <p className=&quot;line-clamp-2 text-sm leading-snug text-muted-foreground&quot;>
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href=&quot;/about&quot; className=&quot;group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50&quot;>
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href=&quot;/contact&quot; className=&quot;group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50&quot;>
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className=&quot;hidden md:flex items-center space-x-4&quot;>
            <Badge variant=&quot;secondary&quot; className=&quot;hidden lg:inline-flex&quot;>
              AI-Powered Solutions
            </Badge>
            <TidyCalPopup 
              path=&quot;abhixchawla/automations-and-more-consultation&quot;
              triggerText=&quot;Get Free Consultation&quot;
              triggerSize=&quot;default&quot;
            />
          </div>

          {/* Mobile menu button */}
          <Button
            variant=&quot;ghost&quot;
            size=&quot;sm&quot;
            className=&quot;md:hidden&quot;
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className=&quot;h-5 w-5&quot; /> : <Menu className=&quot;h-5 w-5&quot; />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className=&quot;md:hidden border-t py-4&quot;>
            <div className=&quot;space-y-4&quot;>
              <div>
                <h3 className=&quot;text-sm font-medium text-muted-foreground mb-2&quot;>Industries</h3>
                <div className=&quot;space-y-2&quot;>
                  {industries.map((industry) => (
                    <Link
                      key={industry.href}
                      href={industry.href}
                      className=&quot;block px-3 py-2 text-sm hover:bg-accent rounded-md&quot;
                      onClick={() => setIsOpen(false)}
                    >
                      {industry.title}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className=&quot;text-sm font-medium text-muted-foreground mb-2&quot;>Services</h3>
                <div className=&quot;space-y-2&quot;>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className=&quot;block px-3 py-2 text-sm hover:bg-accent rounded-md&quot;
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className=&quot;space-y-2 pt-4 border-t&quot;>
                <Link
                  href=&quot;/about&quot;
                  className=&quot;block px-3 py-2 text-sm hover:bg-accent rounded-md&quot;
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href=&quot;/contact&quot;
                  className=&quot;block px-3 py-2 text-sm hover:bg-accent rounded-md&quot;
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <div className=&quot;w-full mt-4&quot;>
                  <TidyCalPopup 
                    path=&quot;abhixchawla/automations-and-more-consultation&quot;
                    triggerText=&quot;Get Free Consultation&quot;
                    triggerSize=&quot;default&quot;
                    className=&quot;w-full&quot;
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
