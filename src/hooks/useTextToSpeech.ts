"use client";

import { useEffect, useState, useCallback, useRef } from "react";

const STORAGE_KEY = "book-tts-settings";

export interface TTSSettings {
  rate: number; // 0.5 - 2.0
}

const DEFAULT_SETTINGS: TTSSettings = {
  rate: 1.0,
};

/**
 * Hook to manage text-to-speech using the Web Speech API.
 * Provides play/pause/stop controls and speed adjustment.
 */
export function useTextToSpeech() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [rate, setRate] = useState(DEFAULT_SETTINGS.rate);
  const [isSupported, setIsSupported] = useState(true);

  // Keep track of current utterance for cleanup
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Load saved rate from localStorage on mount
  useEffect(() => {
    // Check if Web Speech API is supported
    if (typeof window === "undefined" || !window.speechSynthesis) {
      setIsSupported(false);
      return;
    }

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Partial<TTSSettings>;
        if (parsed.rate) {
          setRate(parsed.rate);
        }
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  // Save rate to localStorage whenever it changes
  const updateRate = useCallback((newRate: number) => {
    setRate(newRate);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ rate: newRate }));
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  // Speak the given text
  const speak = useCallback((text: string) => {
    if (!isSupported || typeof window === "undefined") return;

    // Cancel any existing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.pitch = 1;

    // Track state changes
    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [rate, isSupported]);

  // Pause speech
  const pause = useCallback(() => {
    if (!isSupported || typeof window === "undefined") return;
    window.speechSynthesis.pause();
    setIsPaused(true);
  }, [isSupported]);

  // Resume speech
  const resume = useCallback(() => {
    if (!isSupported || typeof window === "undefined") return;
    window.speechSynthesis.resume();
    setIsPaused(false);
  }, [isSupported]);

  // Stop speech completely
  const stop = useCallback(() => {
    if (!isSupported || typeof window === "undefined") return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  }, [isSupported]);

  // Toggle play/pause
  const toggle = useCallback((text: string) => {
    if (isPlaying && !isPaused) {
      pause();
    } else if (isPlaying && isPaused) {
      resume();
    } else {
      speak(text);
    }
  }, [isPlaying, isPaused, pause, resume, speak]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return {
    isPlaying,
    isPaused,
    rate,
    isSupported,
    speak,
    pause,
    resume,
    stop,
    toggle,
    updateRate,
  };
}

/**
 * Available speed options for TTS
 */
export const SPEED_OPTIONS = [
  { value: 0.5, label: "0.5x" },
  { value: 0.75, label: "0.75x" },
  { value: 1, label: "1x" },
  { value: 1.25, label: "1.25x" },
  { value: 1.5, label: "1.5x" },
  { value: 2, label: "2x" },
];
