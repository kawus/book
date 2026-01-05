"use client";

import { useEffect, useState } from "react";
import { getChapterById, getAllChapters } from "@/data/book";

const STORAGE_KEY = "book-reading-progress";

interface ReadingProgress {
  chapterId: string;
  timestamp: number;
}

/**
 * Hook to manage reading progress in localStorage
 */
export function useReadingProgress() {
  const [progress, setProgress] = useState<ReadingProgress | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load progress from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as ReadingProgress;
        // Verify the chapter still exists
        if (getChapterById(parsed.chapterId)) {
          setProgress(parsed);
        }
      }
    } catch {
      // Ignore localStorage errors
    }
    setIsLoaded(true);
  }, []);

  // Save progress to localStorage
  const saveProgress = (chapterId: string) => {
    const newProgress: ReadingProgress = {
      chapterId,
      timestamp: Date.now(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
      setProgress(newProgress);
    } catch {
      // Ignore localStorage errors
    }
  };

  // Get chapter info for the saved progress
  const getProgressInfo = () => {
    if (!progress) return null;

    const chapter = getChapterById(progress.chapterId);
    if (!chapter) return null;

    const allChapters = getAllChapters();
    const currentIndex = allChapters.findIndex((c) => c.id === progress.chapterId);

    return {
      chapter,
      chapterNumber: currentIndex + 1,
      totalChapters: allChapters.length,
    };
  };

  return {
    progress,
    isLoaded,
    saveProgress,
    getProgressInfo,
  };
}
