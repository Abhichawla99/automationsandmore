"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { TidyCalIframe } from "./tidycal-iframe";
import { Calendar } from "lucide-react";

interface TidyCalPopupProps {
  path: string;
  triggerText?: string;
  triggerVariant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  triggerSize?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export function TidyCalPopup({ 
  path, 
  triggerText = "Get Free Consultation",
  triggerVariant = "default",
  triggerSize = "default",
  className = ""
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
          <Calendar className="mr-2 h-4 w-4" />
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Schedule Your Free AI Automation Consultation</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <TidyCalIframe path={path} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
