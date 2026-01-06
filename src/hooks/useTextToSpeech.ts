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
 * Convert a character index to a word index by counting words before that position
 */
function getWordIndexFromCharIndex(text: string, charIndex: number): number {
  const textBeforeCursor = text.slice(0, charIndex);
  // Count words by splitting on whitespace
  const words = textBeforeCursor.trim().split(/\s+/);
  return words.length > 0 && words[0] !== "" ? words.length - 1 : 0;
}

/**
 * Hook to manage text-to-speech using the Web Speech API.
 * Supports reading an array of paragraphs with word-level tracking for highlighting.
 */
export function useTextToSpeech() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [rate, setRate] = useState(DEFAULT_SETTINGS.rate);
  const [isSupported, setIsSupported] = useState(true);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(-1);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);

  // Keep track of paragraphs array and current position
  const paragraphsRef = useRef<string[]>([]);
  const currentParagraphIndexRef = useRef(-1);

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

  // Speak a single paragraph with word boundary tracking
  const speakParagraph = useCallback((text: string, onEnd: () => void) => {
    if (!isSupported || typeof window === "undefined") return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.pitch = 1;

    // Track word boundaries for highlighting
    utterance.onboundary = (event) => {
      if (event.name === "word") {
        const wordIndex = getWordIndexFromCharIndex(text, event.charIndex);
        setCurrentWordIndex(wordIndex);
      }
    };

    utterance.onstart = () => {
      setCurrentWordIndex(0);
    };

    utterance.onend = onEnd;
    utterance.onerror = onEnd;

    window.speechSynthesis.speak(utterance);
  }, [rate, isSupported]);

  // Read through paragraphs sequentially
  const speakNext = useCallback(() => {
    const nextIndex = currentParagraphIndexRef.current + 1;

    if (nextIndex >= paragraphsRef.current.length) {
      // Finished all paragraphs
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentParagraphIndex(-1);
      setCurrentWordIndex(-1);
      currentParagraphIndexRef.current = -1;
      return;
    }

    currentParagraphIndexRef.current = nextIndex;
    setCurrentParagraphIndex(nextIndex);
    setCurrentWordIndex(-1); // Reset word index for new paragraph

    speakParagraph(paragraphsRef.current[nextIndex], speakNext);
  }, [speakParagraph]);

  // Start reading an array of paragraphs
  const speakParagraphs = useCallback((paragraphs: string[]) => {
    if (!isSupported || typeof window === "undefined") return;

    // Cancel any existing speech
    window.speechSynthesis.cancel();

    paragraphsRef.current = paragraphs;
    currentParagraphIndexRef.current = -1;

    setIsPlaying(true);
    setIsPaused(false);

    // Start reading first paragraph
    speakNext();
  }, [isSupported, speakNext]);

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
    setCurrentParagraphIndex(-1);
    setCurrentWordIndex(-1);
    currentParagraphIndexRef.current = -1;
  }, [isSupported]);

  // Toggle play/pause
  const toggle = useCallback((paragraphs: string[]) => {
    if (isPlaying && !isPaused) {
      pause();
    } else if (isPlaying && isPaused) {
      resume();
    } else {
      speakParagraphs(paragraphs);
    }
  }, [isPlaying, isPaused, pause, resume, speakParagraphs]);

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
    currentParagraphIndex,
    currentWordIndex,
    speakParagraphs,
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
