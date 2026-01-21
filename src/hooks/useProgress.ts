'use client';

import { useState, useEffect } from 'react';

export interface CourseProgress {
  courseId: string;
  completed: boolean;
  completedAt?: Date;
  quizScores?: { [quizId: string]: number };
}

export interface UserProgress {
  courses: { [courseId: string]: CourseProgress };
  totalBadges: number;
  currentLevel: 'Débutant' | 'Intermédiaire' | 'Expert';
}

const COURSES_ORDER = [
  'introduction',
  'hacking-fundamentals', 
  'network-testing',
  'wifi-security',
  'exercises',
  'resources'
];

const COURSE_NAMES = {
  'introduction': 'Introduction à Kali Linux',
  'hacking-fundamentals': 'Fondamentaux du Hacking',
  'network-testing': 'Tester son réseau',
  'wifi-security': 'Sécurité WiFi',
  'exercises': 'Exercices pratiques',
  'resources': 'Ressources'
};

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>({
    courses: {},
    totalBadges: 0,
    currentLevel: 'Débutant'
  });

  useEffect(() => {
    const saved = localStorage.getItem('kali-academy-progress');
    if (saved) {
      setProgress(JSON.parse(saved));
    }
  }, []);

  const saveProgress = (newProgress: UserProgress) => {
    setProgress(newProgress);
    localStorage.setItem('kali-academy-progress', JSON.stringify(newProgress));
  };

  const markCourseCompleted = (courseId: string) => {
    const newProgress = {
      ...progress,
      courses: {
        ...progress.courses,
        [courseId]: {
          courseId,
          completed: true,
          completedAt: new Date(),
          quizScores: progress.courses[courseId]?.quizScores || {}
        }
      }
    };

    // Calculer le niveau
    const completedCount = Object.values(newProgress.courses).filter(c => c.completed).length;
    newProgress.currentLevel = completedCount >= 5 ? 'Expert' : completedCount >= 3 ? 'Intermédiaire' : 'Débutant';
    newProgress.totalBadges = completedCount;

    saveProgress(newProgress);
  };

  const saveQuizScore = (courseId: string, quizId: string, score: number) => {
    const courseProgress = progress.courses[courseId] || { courseId, completed: false };
    const newProgress = {
      ...progress,
      courses: {
        ...progress.courses,
        [courseId]: {
          ...courseProgress,
          quizScores: {
            ...courseProgress.quizScores,
            [quizId]: score
          }
        }
      }
    };

    saveProgress(newProgress);
  };

  const getNextCourse = (currentCourseId: string) => {
    const currentIndex = COURSES_ORDER.indexOf(currentCourseId);
    if (currentIndex >= 0 && currentIndex < COURSES_ORDER.length - 1) {
      return {
        id: COURSES_ORDER[currentIndex + 1],
        name: COURSE_NAMES[COURSES_ORDER[currentIndex + 1] as keyof typeof COURSE_NAMES]
      };
    }
    return null;
  };

  const getProgressPercentage = () => {
    const completed = Object.values(progress.courses).filter(c => c.completed).length;
    return Math.round((completed / COURSES_ORDER.length) * 100);
  };

  const isCourseCompleted = (courseId: string) => {
    return progress.courses[courseId]?.completed || false;
  };

  const getCourseScore = (courseId: string, quizId: string) => {
    return progress.courses[courseId]?.quizScores?.[quizId] || 0;
  };

  return {
    progress,
    markCourseCompleted,
    saveQuizScore,
    getNextCourse,
    getProgressPercentage,
    isCourseCompleted,
    getCourseScore,
    COURSES_ORDER,
    COURSE_NAMES
  };
}