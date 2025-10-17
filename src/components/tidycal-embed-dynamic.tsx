"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

interface TidyCalEmbedProps {
  path: string;
  className?: string;
}

// Dynamic component that only renders on client
const TidyCalEmbedClient = dynamic(
  () => Promise.resolve(function TidyCalEmbedClient({ path, className = "" }: TidyCalEmbedProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      // Load TidyCal script if not already loaded
      const existingScript = document.querySelector('script[src="https://asset-tidycal.b-cdn.net/js/embed.js"]');
      
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://asset-tidycal.b-cdn.net/js/embed.js';
        script.async = true;
        script.onload = () => {
          // Wait for DOM to be ready and element to exist
          setTimeout(() => {
            const element = document.querySelector(`[data-path="${path}"]`);
            if (element && window.TidyCal) {
              window.TidyCal.init();
              setIsLoaded(true);
            }
          }, 100);
        };
        document.head.appendChild(script);
      } else {
        // Script already exists, wait for it to be ready
        setTimeout(() => {
          const element = document.querySelector(`[data-path="${path}"]`);
          if (element && window.TidyCal) {
            window.TidyCal.init();
            setIsLoaded(true);
          }
        }, 100);
      }

      // Fallback: check periodically for TidyCal and element
      const checkTidyCal = setInterval(() => {
        const element = document.querySelector(`[data-path="${path}"]`);
        if (element && window.TidyCal && !isLoaded) {
          window.TidyCal.init();
          setIsLoaded(true);
          clearInterval(checkTidyCal);
        }
      }, 200);

      // Cleanup interval after 15 seconds
      setTimeout(() => clearInterval(checkTidyCal), 15000);

      return () => clearInterval(checkTidyCal);
    }, [path, isLoaded]);

    return (
      <div className={`tidycal-embed ${className}`} data-path={path}>
        {!isLoaded && (
          <div className="flex items-center justify-center p-8">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading booking calendar...</p>
            </div>
          </div>
        )}
      </div>
    );
  }),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading booking calendar...</p>
        </div>
      </div>
    )
  }
);

export function TidyCalEmbedDynamic({ path, className = "" }: TidyCalEmbedProps) {
  return <TidyCalEmbedClient path={path} className={className} />;
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    TidyCal: {
      init: () => void;
    };
  }
}
