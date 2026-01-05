"use client";

import Link from "next/link";
import { useReadingProgress } from "@/hooks/useReadingProgress";

export function ContinueReading() {
  const { isLoaded, getProgressInfo } = useReadingProgress();
  const progressInfo = getProgressInfo();

  // Don't render anything until localStorage is loaded
  if (!isLoaded) {
    return null;
  }

  // No saved progress
  if (!progressInfo) {
    return null;
  }

  const { chapter, chapterNumber, totalChapters } = progressInfo;

  return (
    <div className="mb-8">
      <Link
        href={`/chapter/${chapter.id}`}
        className="group block rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all duration-150 hover:border-gray-300 hover:bg-gray-100"
      >
        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-400">
          Continue Reading
        </p>
        <p className="font-semibold text-gray-900 transition-colors duration-150 group-hover:text-gray-700">
          {chapter.title}
        </p>
        <p className="mt-1 text-sm text-gray-500">
          Chapter {chapterNumber} of {totalChapters}
        </p>
      </Link>
    </div>
  );
}
