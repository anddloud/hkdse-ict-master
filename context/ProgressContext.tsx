import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ProgressData, Topic } from '../types';

const STORAGE_KEY = 'hkdse-ict-progress-v1';

const defaultProgress: ProgressData = {
  totalQuestionsAttempted: 0,
  totalQuizzesCompleted: 0,
  correctAnswers: 0,
  topicStats: {}
};

interface ProgressContextType {
  progress: ProgressData;
  updateProgress: (topic: Topic, isCorrect: boolean) => void;
  completeQuiz: () => void;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<ProgressData>(defaultProgress);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        // Merge stored data with default structure to handle migrations/new fields
        const parsed = JSON.parse(stored);
        setProgress({ ...defaultProgress, ...parsed });
      } catch (e) {
        console.error("Failed to parse progress", e);
      }
    }
  }, []);

  const saveProgress = (newProgress: ProgressData) => {
    setProgress(newProgress);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
  };

  const updateProgress = (topic: Topic, isCorrect: boolean) => {
    const newProgress = { ...progress };
    
    // Global Stats
    newProgress.totalQuestionsAttempted += 1;
    if (isCorrect) newProgress.correctAnswers += 1;

    // Topic Stats
    if (!newProgress.topicStats[topic]) {
      newProgress.topicStats[topic] = { attempted: 0, correct: 0, lastStudied: new Date().toISOString() };
    }

    newProgress.topicStats[topic].attempted += 1;
    if (isCorrect) newProgress.topicStats[topic].correct += 1;
    newProgress.topicStats[topic].lastStudied = new Date().toISOString();

    saveProgress(newProgress);
  };

  const completeQuiz = () => {
    const newProgress = { ...progress };
    newProgress.totalQuizzesCompleted += 1;
    saveProgress(newProgress);
  };

  const resetProgress = () => {
    saveProgress(defaultProgress);
  };

  return (
    <ProgressContext.Provider value={{ progress, updateProgress, completeQuiz, resetProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};