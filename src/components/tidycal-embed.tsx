"use client";

import { useEffect, useState } from "react";

interface TidyCalEmbedProps {
  path: string;
  className?: string;
}

export function TidyCalEmbed({ path, className = "" }: TidyCalEmbedProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Load TidyCal script if not already loaded
    const existingScript = document.querySelector('script[src="https://asset-tidycal.b-cdn.net/js/embed.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://asset-tidycal.b-cdn.net/js/embed.js';
      script.async = true;
      document.head.appendChild(script);
    }

    // Re-initialize TidyCal embeds after script loads
    const initializeTidyCal = () => {
      if (window.TidyCal) {
        window.TidyCal.init();
      }
    };

    // Check if script is already loaded
    if (window.TidyCal) {
      initializeTidyCal();
    } else {
      // Wait for script to load
      const checkTidyCal = setInterval(() => {
        if (window.TidyCal) {
          initializeTidyCal();
          clearInterval(checkTidyCal);
        }
      }, 100);

      // Cleanup interval after 10 seconds
      setTimeout(() => clearInterval(checkTidyCal), 10000);
    }
  }, []);

  // Show loading state on server and initial client render
  if (!isClient) {
    return (
      <div className={`tidycal-embed ${className}`} data-path={path}>
        <div className="flex items-center justify-center p-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading booking calendar...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`tidycal-embed ${className}`} data-path={path}></div>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    TidyCal: {
      init: () => void;
    };
  }
}
