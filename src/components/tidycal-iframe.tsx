"use client";

import { useState, useEffect } from "react";

interface TidyCalIframeProps {
  path: string;
  className?: string;
}

export function TidyCalIframe({ path, className = "" }: TidyCalIframeProps) {
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
        <div className="flex items-center justify-center p-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading booking calendar...</p>
          </div>
        </div>
      )}
      <iframe
        src={`https://tidycal.com/${path}?embed=1`}
        className={`tidycal-iframe w-full border-0 rounded-lg ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        style={{ 
          minHeight: '600px',
          height: isLoaded ? 'auto' : '0px'
        }}
        title="TidyCal Booking Calendar"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
