'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from './ui/button';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ code, language = 'bash', title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-4">
      {title && (
        <div className="bg-muted px-4 py-2 text-sm font-medium border border-b-0 rounded-t-lg">
          {title}
        </div>
      )}
      <div className="relative">
        <pre className={`bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto ${title ? 'rounded-t-none' : ''}`}>
          <code className={`language-${language} text-sm`}>{code}</code>
        </pre>
        <Button
          variant="outline"
          className="absolute top-2 right-2 h-8 px-3 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 hover:bg-slate-700 text-white border-slate-600"
          onClick={handleCopy}
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 mr-1" />
              Copié !
            </>
          ) : (
            <>
              <Copy className="h-3 w-3 mr-1" />
              Copier
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
