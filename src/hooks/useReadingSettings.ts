"use client";

import { useEffect, useState, useCallback } from "react";

const STORAGE_KEY = "book-reading-settings";

export type FontFamily = "inter" | "georgia" | "merriweather";

export interface ReadingSettings {
  darkMode: boolean;
  fontFamily: FontFamily;
  fontSize: number; // 14-22px
  lineHeight: number; // 1.4-2.0
}

const DEFAULT_SETTINGS: ReadingSettings = {
  darkMode: false,
  fontFamily: "inter",
  fontSize: 18,
  lineHeight: 1.75,
};

/**
 * Hook to manage reading settings with localStorage persistence
 */
export function useReadingSettings() {
  const [settings, setSettings] = useState<ReadingSettings>(DEFAULT_SETTINGS);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load settings from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Partial<ReadingSettings>;
        setSettings({ ...DEFAULT_SETTINGS, ...parsed });
      }
    } catch {
      // Ignore localStorage errors
    }
    setIsLoaded(true);
  }, []);

  // Apply settings to document whenever they change
  useEffect(() => {
    if (!isLoaded) return;

    const root = document.documentElement;

    // Apply theme
    root.setAttribute("data-theme", settings.darkMode ? "dark" : "light");

    // Apply CSS variables
    root.style.setProperty("--reading-font-size", `${settings.fontSize}px`);
    root.style.setProperty("--reading-line-height", `${settings.lineHeight}`);
    root.style.setProperty("--reading-font-family", getFontStack(settings.fontFamily));
  }, [settings, isLoaded]);

  // Update a single setting
  const updateSetting = useCallback(<K extends keyof ReadingSettings>(
    key: K,
    value: ReadingSettings[K]
  ) => {
    setSettings((prev) => {
      const newSettings = { ...prev, [key]: value };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newSettings));
      } catch {
        // Ignore localStorage errors
      }
      return newSettings;
    });
  }, []);

  // Reset to defaults
  const resetSettings = useCallback(() => {
    setSettings(DEFAULT_SETTINGS);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  return {
    settings,
    isLoaded,
    updateSetting,
    resetSettings,
  };
}

/**
 * Get the CSS font-family stack for a font option
 */
function getFontStack(font: FontFamily): string {
  switch (font) {
    case "georgia":
      return "Georgia, 'Times New Roman', serif";
    case "merriweather":
      return "var(--font-merriweather), Merriweather, Georgia, serif";
    case "inter":
    default:
      return "var(--font-inter), Inter, system-ui, -apple-system, sans-serif";
  }
}

/**
 * Font options for the UI
 */
export const FONT_OPTIONS: { value: FontFamily; label: string; style: string }[] = [
  { value: "inter", label: "Inter", style: "Sans-serif" },
  { value: "georgia", label: "Georgia", style: "Serif" },
  { value: "merriweather", label: "Merriweather", style: "Serif" },
];
