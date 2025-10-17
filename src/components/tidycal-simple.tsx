"use client";

import { useEffect, useRef } from "react";

interface TidyCalSimpleProps {
  path: string;
  className?: string;
}

export function TidyCalSimple({ path, className = "" }: TidyCalSimpleProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load TidyCal script if not already loaded
    const existingScript = document.querySelector('script[src="https://asset-tidycal.b-cdn.net/js/embed.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://asset-tidycal.b-cdn.net/js/embed.js';
      script.async = true;
      document.head.appendChild(script);
    }

    // Wait for script to load and then initialize
    const initializeTidyCal = () => {
      if (window.TidyCal && containerRef.current) {
        // Clear any existing content
        containerRef.current.innerHTML = '';
        
        // Create the embed element
        const embedElement = document.createElement('div');
        embedElement.className = 'tidycal-embed';
        embedElement.setAttribute('data-path', path);
        
        // Add to container
        containerRef.current.appendChild(embedElement);
        
        // Initialize TidyCal
        window.TidyCal.init();
      }
    };

    // Check if TidyCal is already available
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

      // Cleanup after 10 seconds
      setTimeout(() => clearInterval(checkTidyCal), 10000);
    }
  }, [path]);

  return (
    <div 
      ref={containerRef} 
      className={`tidycal-container ${className}`}
      style={{ minHeight: '400px' }}
    >
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading booking calendar...</p>
        </div>
      </div>
    </div>
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
