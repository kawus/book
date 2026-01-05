"use client";

import { useReadingSettings } from "@/hooks/useReadingSettings";

/**
 * Provider component that initializes reading settings on app load.
 * The useReadingSettings hook applies CSS variables to the document.
 */
export function SettingsProvider({ children }: { children: React.ReactNode }) {
  // Initialize settings - this hook applies CSS variables to <html>
  useReadingSettings();

  return <>{children}</>;
}
