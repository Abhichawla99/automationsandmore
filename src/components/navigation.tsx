"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X, Zap, Globe, Smartphone, Building2 } from "lucide-react";
import { TidyCalPopup } from "./tidycal-popup";

const industries = [
  {
    title: "Retail & E-commerce",
    href: "/industries/retail",
    description: "AI-powered inventory management, customer service, and sales optimization",
    icon: Building2,
  },
  {
    title: "Healthcare",
    href: "/industries/healthcare", 
    description: "Patient management, appointment scheduling, and medical record automation",
    icon: Building2,
  },
  {
    title: "Restaurants & Food Service",
    href: "/industries/restaurants",
    description: "Order management, inventory tracking, and customer engagement automation",
    icon: Building2,
  },
  {
    title: "Professional Services",
    href: "/industries/professional-services",
    description: "Client management, document automation, and workflow optimization",
    icon: Building2,
  },
  {
    title: "Real Estate",
    href: "/industries/real-estate",
    description: "Lead management, property listings, and client communication automation",
    icon: Building2,
  },
  {
    title: "Manufacturing",
    href: "/industries/manufacturing",
    description: "Production optimization, quality control, and supply chain automation",
    icon: Building2,
  },
];

const services = [
  {
    title: "AI Automation",
    href: "/services/ai-automation",
    description: "Streamline your business processes with intelligent automation",
    icon: Zap,
  },
  {
    title: "Custom Websites",
    href: "/services/websites",
    description: "Modern, AI-powered websites that convert visitors into customers",
    icon: Globe,
  },
  {
    title: "Business Apps",
    href: "/services/apps",
    description: "Custom mobile and web applications tailored to your business needs",
    icon: Smartphone,
  },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">Automations & More</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                      {industries.map((industry) => (
                        <NavigationMenuLink key={industry.href} asChild>
                          <Link
                            href={industry.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center space-x-2">
                              <industry.icon className="h-4 w-4" />
                              <div className="text-sm font-medium leading-none">
                                {industry.title}
                              </div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
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
                    <div className="grid w-[400px] gap-3 p-4">
                      {services.map((service) => (
                        <NavigationMenuLink key={service.href} asChild>
                          <Link
                            href={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center space-x-2">
                              <service.icon className="h-4 w-4" />
                              <div className="text-sm font-medium leading-none">
                                {service.title}
                              </div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
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
                    <Link href="/about" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/contact" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Badge variant="secondary" className="hidden lg:inline-flex">
              AI-Powered Solutions
            </Badge>
            <TidyCalPopup 
              path="abhixchawla/automations-and-more-consultation"
              triggerText="Get Free Consultation"
              triggerSize="default"
            />
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t py-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Industries</h3>
                <div className="space-y-2">
                  {industries.map((industry) => (
                    <Link
                      key={industry.href}
                      href={industry.href}
                      className="block px-3 py-2 text-sm hover:bg-accent rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      {industry.title}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Services</h3>
                <div className="space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-3 py-2 text-sm hover:bg-accent rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t">
                <Link
                  href="/about"
                  className="block px-3 py-2 text-sm hover:bg-accent rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-sm hover:bg-accent rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <div className="w-full mt-4">
                  <TidyCalPopup 
                    path="abhixchawla/automations-and-more-consultation"
                    triggerText="Get Free Consultation"
                    triggerSize="default"
                    className="w-full"
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
