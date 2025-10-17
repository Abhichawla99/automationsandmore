&quot;use client&quot;;

import { useEffect, useRef } from &quot;react&quot;;

interface TidyCalSimpleProps {
  path: string;
  className?: string;
}

export function TidyCalSimple({ path, className = &quot;&quot; }: TidyCalSimpleProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load TidyCal script if not already loaded
    const existingScript = document.querySelector(&apos;script[src=&quot;https://asset-tidycal.b-cdn.net/js/embed.js&quot;]&apos;);
    
    if (!existingScript) {
      const script = document.createElement(&apos;script&apos;);
      script.src = &apos;https://asset-tidycal.b-cdn.net/js/embed.js&apos;;
      script.async = true;
      document.head.appendChild(script);
    }

    // Wait for script to load and then initialize
    const initializeTidyCal = () => {
      if (window.TidyCal && containerRef.current) {
        // Clear any existing content
        containerRef.current.innerHTML = &apos;&apos;;
        
        // Create the embed element
        const embedElement = document.createElement(&apos;div&apos;);
        embedElement.className = &apos;tidycal-embed&apos;;
        embedElement.setAttribute(&apos;data-path&apos;, path);
        
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
      style={{ minHeight: &apos;400px&apos; }}
    >
      <div className=&quot;flex items-center justify-center p-8&quot;>
        <div className=&quot;text-center&quot;>
          <div className=&quot;animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4&quot;></div>
          <p className=&quot;text-muted-foreground&quot;>Loading booking calendar...</p>
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
