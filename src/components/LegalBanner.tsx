'use client';

import { useState, useEffect } from 'react';
import { AlertTriangle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function LegalBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('legal-accepted');
    if (!accepted) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('legal-accepted', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-yellow-600 dark:bg-yellow-700 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-start gap-4">
        <AlertTriangle className="h-6 w-6 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2">⚠️ Avertissement Légal Important</h3>
          <p className="text-sm mb-3">
            <strong>Tout usage doit être éthique et légal.</strong> Le cracking Wi-Fi, les tests de pénétration 
            ou toute activité de hacking sans autorisation écrite explicite est <strong>strictement interdit</strong> et 
            puni par la loi au Burkina Faso et internationalement. Ce site est à but éducatif uniquement. 
            Vous êtes responsable de vos actions.
          </p>
          <div className="flex gap-2">
            <Button onClick={handleAccept} size="sm" className="bg-white text-yellow-700 hover:bg-gray-100">
              J'ai compris et j'accepte
            </Button>
          </div>
        </div>
        <button onClick={handleAccept} className="text-white hover:text-gray-200">
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
