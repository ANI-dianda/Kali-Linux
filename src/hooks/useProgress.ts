'use client';

import { useState, useEffect } from 'react';

export interface Progress {
  completedLessons: string[];
  badges: string[];
  quizScores: Record<string, number>;
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>({
    completedLessons: [],
    badges: [],
    quizScores: {},
  });

  useEffect(() => {
    const saved = localStorage.getItem('kali-academy-progress');
    if (saved) {
      setProgress(JSON.parse(saved));
    }
  }, []);

  const saveProgress = (newProgress: Progress) => {
    setProgress(newProgress);
    localStorage.setItem('kali-academy-progress', JSON.stringify(newProgress));
  };

  const completeLesson = (lessonId: string) => {
    const newProgress = {
      ...progress,
      completedLessons: [...new Set([...progress.completedLessons, lessonId])],
    };
    saveProgress(newProgress);
  };

  const addBadge = (badgeId: string) => {
    const newProgress = {
      ...progress,
      badges: [...new Set([...progress.badges, badgeId])],
    };
    saveProgress(newProgress);
  };

  const saveQuizScore = (quizId: string, score: number) => {
    const newProgress = {
      ...progress,
      quizScores: { ...progress.quizScores, [quizId]: score },
    };
    saveProgress(newProgress);
  };

  const getProgressPercentage = () => {
    const totalLessons = 30; // À ajuster selon le nombre total de leçons
    return Math.round((progress.completedLessons.length / totalLessons) * 100);
  };

  return {
    progress,
    completeLesson,
    addBadge,
    saveQuizScore,
    getProgressPercentage,
  };
}
