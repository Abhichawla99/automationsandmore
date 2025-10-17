&quot;use client&quot;;

import { useState, useEffect } from &quot;react&quot;;

interface TidyCalIframeProps {
  path: string;
  className?: string;
}

export function TidyCalIframe({ path, className = &quot;&quot; }: TidyCalIframeProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded to true after a short delay to show the iframe
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`tidycal-iframe-container ${className}`}>
      {!isLoaded && (
        <div className=&quot;flex items-center justify-center p-8&quot;>
          <div className=&quot;text-center&quot;>
            <div className=&quot;animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4&quot;></div>
            <p className=&quot;text-muted-foreground&quot;>Loading booking calendar...</p>
          </div>
        </div>
      )}
      <iframe
        src={`https://tidycal.com/${path}?embed=1`}
        className={`tidycal-iframe w-full border-0 rounded-lg ${isLoaded ? &apos;opacity-100&apos; : &apos;opacity-0&apos;} transition-opacity duration-300`}
        style={{ 
          minHeight: &apos;600px&apos;,
          height: isLoaded ? &apos;auto&apos; : &apos;0px&apos;
        }}
        title=&quot;TidyCal Booking Calendar&quot;
        loading=&quot;lazy&quot;
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
