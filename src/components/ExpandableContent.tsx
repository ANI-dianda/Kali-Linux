'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandableContentProps {
  children: React.ReactNode;
  maxHeight?: number;
  previewLines?: number;
}

export function ExpandableContent({ children, maxHeight = 200, previewLines = 3 }: ExpandableContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-none' : `max-h-[${maxHeight}px]`
        }`}
        style={{ maxHeight: isExpanded ? 'none' : `${maxHeight}px` }}
      >
        {children}
      </div>
      
      {!isExpanded && (
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent" />
      )}
      
      <div className="flex justify-center mt-3">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4" />
              Réduire
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              Lire la suite
            </>
          )}
        </Button>
      </div>
    </div>
  );
}