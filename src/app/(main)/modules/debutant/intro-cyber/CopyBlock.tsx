'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export function CopyBlock({ code, language = 'bash' }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-xl border border-white/10 bg-black/60 overflow-hidden my-4">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
        <span className="font-mono text-xs text-gray-500">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 font-exo-2 text-xs text-gray-400 hover:text-white transition-colors"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? 'Copié !' : 'Copier'}
        </button>
      </div>
      <pre className="px-4 py-4 overflow-x-auto text-sm text-green-400 font-mono leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}
