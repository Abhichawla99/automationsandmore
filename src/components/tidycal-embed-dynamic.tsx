&quot;use client&quot;;

import dynamic from &quot;next/dynamic&quot;;
import { useState, useEffect } from &quot;react&quot;;

interface TidyCalEmbedProps {
  path: string;
  className?: string;
}

// Dynamic component that only renders on client
const TidyCalEmbedClient = dynamic(
  () => Promise.resolve(function TidyCalEmbedClient({ path, className = &quot;&quot; }: TidyCalEmbedProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      // Load TidyCal script if not already loaded
      const existingScript = document.querySelector(&apos;script[src=&quot;https://asset-tidycal.b-cdn.net/js/embed.js&quot;]&apos;);
      
      if (!existingScript) {
        const script = document.createElement(&apos;script&apos;);
        script.src = &apos;https://asset-tidycal.b-cdn.net/js/embed.js&apos;;
        script.async = true;
        script.onload = () => {
          // Wait for DOM to be ready and element to exist
          setTimeout(() => {
            const element = document.querySelector(`[data-path=&quot;${path}&quot;]`);
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
          const element = document.querySelector(`[data-path=&quot;${path}&quot;]`);
          if (element && window.TidyCal) {
            window.TidyCal.init();
            setIsLoaded(true);
          }
        }, 100);
      }

      // Fallback: check periodically for TidyCal and element
      const checkTidyCal = setInterval(() => {
        const element = document.querySelector(`[data-path=&quot;${path}&quot;]`);
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
          <div className=&quot;flex items-center justify-center p-8&quot;>
            <div className=&quot;text-center&quot;>
              <div className=&quot;animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4&quot;></div>
              <p className=&quot;text-muted-foreground&quot;>Loading booking calendar...</p>
            </div>
          </div>
        )}
      </div>
    );
  }),
  {
    ssr: false,
    loading: () => (
      <div className=&quot;flex items-center justify-center p-8&quot;>
        <div className=&quot;text-center&quot;>
          <div className=&quot;animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4&quot;></div>
          <p className=&quot;text-muted-foreground&quot;>Loading booking calendar...</p>
        </div>
      </div>
    )
  }
);

export function TidyCalEmbedDynamic({ path, className = &quot;&quot; }: TidyCalEmbedProps) {
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
