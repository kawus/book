"use client";

import { useEffect } from "react";
import { useReadingProgress } from "@/hooks/useReadingProgress";

interface SaveProgressProps {
  chapterId: string;
}

/**
 * Invisible component that saves reading progress when mounted
 */
export function SaveProgress({ chapterId }: SaveProgressProps) {
  const { saveProgress } = useReadingProgress();

  useEffect(() => {
    saveProgress(chapterId);
  }, [chapterId, saveProgress]);

  return null;
}
