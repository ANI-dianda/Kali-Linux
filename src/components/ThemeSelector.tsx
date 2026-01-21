'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette } from "lucide-react";

type Theme = 'default' | 'minimal' | 'clean' | 'docs';

export function ThemeSelector() {
  const [currentTheme, setCurrentTheme] = useState<Theme>('default');

  const applyTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    document.documentElement.className = `theme-${theme}`;
    localStorage.setItem('kali-academy-theme', theme);
  };

  const themes = [
    { id: 'default' as Theme, name: 'Actuel', desc: 'Design coloré avec animations' },
    { id: 'minimal' as Theme, name: 'Minimaliste', desc: 'Style Linear/Notion épuré' },
    { id: 'clean' as Theme, name: 'Propre', desc: 'Version nettoyée de l\'actuel' },
    { id: 'docs' as Theme, name: 'Documentation', desc: 'Style GitHub/GitLab technique' }
  ];

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Palette className="h-5 w-5" />
          Choisir le style d'interface
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {themes.map((theme) => (
            <Button
              key={theme.id}
              variant={currentTheme === theme.id ? "default" : "outline"}
              onClick={() => applyTheme(theme.id)}
              className="h-auto p-3 flex flex-col items-start text-left"
            >
              <span className="font-medium text-sm">{theme.name}</span>
              <span className="text-xs opacity-70 mt-1">{theme.desc}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}