'use client';

import { useProgress } from '@/hooks/useProgress';
import { Award, BookOpen } from 'lucide-react';

export function ProgressBar() {
  const { progress, getProgressPercentage } = useProgress();
  const percentage = getProgressPercentage();

  return (
    <div className="bg-card border rounded-lg p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Votre progression</h3>
        <span className="text-2xl font-bold text-primary">{percentage}%</span>
      </div>
      
      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
        <div 
          className="bg-primary h-full transition-all duration-500 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-primary" />
          <span>{progress.completedLessons.length} leçons</span>
        </div>
        <div className="flex items-center gap-2">
          <Award className="h-4 w-4 text-primary" />
          <span>{progress.badges.length} badges</span>
        </div>
      </div>
    </div>
  );
}
