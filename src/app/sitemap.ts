import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://automationsandmore.com'
  
  // Generate all routes dynamically
  const routes = [
    // Main pages
    { path: '', priority: 1, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
    
    // Service index pages
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/services/ai-automation', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/services/websites', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/services/apps', priority: 0.9, changeFrequency: 'weekly' },
    
    // Industry index pages
    { path: '/industries', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/industries/retail', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/industries/healthcare', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/industries/restaurants', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/industries/professional-services', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/industries/real-estate', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/industries/manufacturing', priority: 0.8, changeFrequency: 'weekly' },
    
    // AI Automation location pages
    { path: '/ai-automation-calgary', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/ai-automation-chicago', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/ai-automation-houston', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/ai-automation-los-angeles', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/ai-automation-new-york', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/ai-automation-philadelphia', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/ai-automation-phoenix', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/ai-automation-san-antonio', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/ai-automation-san-diego', priority: 0.7, changeFrequency: 'monthly' },
    
    // AI Automation service pages
    { path: '/ai-automation-company', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/ai-automation-consultant', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/ai-automation-cost', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/ai-automation-platform', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/ai-automation-services', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/ai-automation-software', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/ai-automation-solutions', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/ai-automation-tools', priority: 0.7, changeFrequency: 'monthly' },
    
    // AI Automation comparison pages
    { path: '/ai-automation-vs-hiring-staff', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/ai-automation-vs-manual-processes', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/ai-automation-vs-outsourcing', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/ai-automation-vs-traditional-software', priority: 0.6, changeFrequency: 'monthly' },
    
    // Website services
    { path: '/ai-website-builder', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/business-website-design', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/custom-website-development', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/ecommerce-website-development', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/seo-website-development', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/website-automation', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/website-maintenance', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/website-optimization', priority: 0.7, changeFrequency: 'monthly' },
    
    // Business automation services
    { path: '/business-process-automation', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/customer-service-automation', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/email-automation', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/inventory-automation', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/lead-generation-automation', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/small-business-automation', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/social-media-automation', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/workflow-automation', priority: 0.7, changeFrequency: 'monthly' },
  ]
  
  return routes.map(route => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency as 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',
    priority: route.priority,
  }))
}
