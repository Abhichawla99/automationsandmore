&quot;use client&quot;;

import { useEffect, useState } from &quot;react&quot;;

interface TidyCalEmbedProps {
  path: string;
  className?: string;
}

export function TidyCalEmbed({ path, className = &quot;&quot; }: TidyCalEmbedProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Load TidyCal script if not already loaded
    const existingScript = document.querySelector(&apos;script[src=&quot;https://asset-tidycal.b-cdn.net/js/embed.js&quot;]&apos;);
    
    if (!existingScript) {
      const script = document.createElement(&apos;script&apos;);
      script.src = &apos;https://asset-tidycal.b-cdn.net/js/embed.js&apos;;
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
        <div className=&quot;flex items-center justify-center p-8&quot;>
          <div className=&quot;text-center&quot;>
            <div className=&quot;animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4&quot;></div>
            <p className=&quot;text-muted-foreground&quot;>Loading booking calendar...</p>
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
