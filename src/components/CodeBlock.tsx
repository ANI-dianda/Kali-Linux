'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'bash' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <Button
        onClick={handleCopy}
        size="sm"
        variant="ghost"
        className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 mr-1" />
            Copié
          </>
        ) : (
          <>
            <Copy className="h-4 w-4 mr-1" />
            Copier
          </>
        )}
      </Button>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
        <code className={`language-${language} text-sm`}>{code}</code>
      </pre>
    </div>
  );
}
