'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { List, CheckCircle2 } from 'lucide-react';

interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [readSections, setReadSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            setReadSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    items.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Card className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <List className="h-4 w-4" />
          Table des matières
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <nav className="space-y-1">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                w-full text-left px-2 py-1.5 rounded text-sm transition-colors
                ${item.level === 2 ? 'pl-2' : item.level === 3 ? 'pl-4' : 'pl-6'}
                ${activeId === item.id 
                  ? 'bg-primary/10 text-primary font-medium' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }
              `}
            >
              <div className="flex items-center gap-2">
                {readSections.has(item.id) && (
                  <CheckCircle2 className="h-3 w-3 text-green-500" />
                )}
                <span className="truncate">{item.title}</span>
              </div>
            </button>
          ))}
        </nav>
        <div className="mt-4 pt-3 border-t text-xs text-muted-foreground">
          Progression: {readSections.size}/{items.length} sections
        </div>
      </CardContent>
    </Card>
  );
}