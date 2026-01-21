'use client';

import { useEffect } from 'react';

export function ThemeInitializer() {
  useEffect(() => {
    const savedTheme = localStorage.getItem('kali-academy-theme') || 'default';
    document.documentElement.className = `theme-${savedTheme}`;
  }, []);

  return null;
}