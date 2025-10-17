&quot;use client&quot;;

import { useState } from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from &quot;@/components/ui/dialog&quot;;
import { TidyCalIframe } from &quot;./tidycal-iframe&quot;;
import { Calendar } from &quot;lucide-react&quot;;

interface TidyCalPopupProps {
  path: string;
  triggerText?: string;
  triggerVariant?: &quot;default&quot; | &quot;outline&quot; | &quot;secondary&quot; | &quot;ghost&quot; | &quot;link&quot; | &quot;destructive&quot;;
  triggerSize?: &quot;default&quot; | &quot;sm&quot; | &quot;lg&quot; | &quot;icon&quot;;
  className?: string;
}

export function TidyCalPopup({ 
  path, 
  triggerText = &quot;Get Free Consultation&quot;,
  triggerVariant = &quot;default&quot;,
  triggerSize = &quot;default&quot;,
  className = &quot;&quot;
}: TidyCalPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant={triggerVariant} 
          size={triggerSize}
          className={className}
        >
          <Calendar className=&quot;mr-2 h-4 w-4&quot; />
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className=&quot;max-w-4xl max-h-[90vh] overflow-y-auto&quot;>
        <DialogHeader>
          <DialogTitle>Schedule Your Free AI Automation Consultation</DialogTitle>
        </DialogHeader>
        <div className=&quot;mt-4&quot;>
          <TidyCalIframe path={path} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
