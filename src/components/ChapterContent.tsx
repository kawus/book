"use client";

import { useMemo, useEffect, useRef } from "react";
import { useTextToSpeech, SPEED_OPTIONS } from "@/hooks/useTextToSpeech";

interface ChapterContentProps {
  htmlContent: string;
}

interface ParsedParagraph {
  text: string;
  words: string[];
}

/**
 * Parses HTML content into an array of paragraphs with words
 */
function parseContent(html: string): ParsedParagraph[] {
  if (typeof document === "undefined") return [];

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  // Get all paragraph elements
  const elements = doc.querySelectorAll("p");

  return Array.from(elements).map((el) => {
    const text = el.textContent || "";
    // Split into words, preserving punctuation attached to words
    const words = text.split(/\s+/).filter((w) => w.length > 0);
    return { text, words };
  });
}

/**
 * Chapter content with integrated audio reader and word-by-word highlighting.
 * Highlights the current word being read and auto-scrolls to keep it visible.
 */
export function ChapterContent({ htmlContent }: ChapterContentProps) {
  const {
    isPlaying,
    isPaused,
    rate,
    isSupported,
    currentParagraphIndex,
    currentWordIndex,
    toggle,
    updateRate,
  } = useTextToSpeech();

  // Parse content into paragraphs with words
  const paragraphs = useMemo(() => parseContent(htmlContent), [htmlContent]);

  // Extract just the text for TTS
  const paragraphTexts = useMemo(
    () => paragraphs.map((p) => p.text),
    [paragraphs]
  );

  // Ref for the currently highlighted word (for scrolling)
  const highlightedWordRef = useRef<HTMLSpanElement>(null);

  // Auto-scroll to highlighted word
  useEffect(() => {
    if (currentWordIndex >= 0 && highlightedWordRef.current) {
      highlightedWordRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentParagraphIndex, currentWordIndex]);

  return (
    <div>
      {/* Audio Controls */}
      {isSupported && (
        <div className="not-prose mb-8 flex items-center gap-3">
          {/* Play/Pause Button */}
          <button
            onClick={() => toggle(paragraphTexts)}
            className="flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-150 hover:bg-gray-50"
            style={{
              borderColor: "var(--theme-border)",
              color: "var(--theme-text)",
            }}
            aria-label={isPlaying && !isPaused ? "Pause" : "Listen to chapter"}
          >
            {isPlaying && !isPaused ? (
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg
                className="h-4 w-4 ml-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5.14v14.72a1 1 0 001.5.86l11-7.36a1 1 0 000-1.72l-11-7.36a1 1 0 00-1.5.86z" />
              </svg>
            )}
          </button>

          {/* Speed Selector */}
          <select
            value={rate}
            onChange={(e) => updateRate(Number(e.target.value))}
            className="h-9 rounded-md border px-2 text-sm transition-colors duration-150 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
            style={{
              borderColor: "var(--theme-border)",
              color: "var(--theme-text)",
              backgroundColor: "transparent",
            }}
            aria-label="Playback speed"
          >
            {SPEED_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Paragraphs with word-by-word highlighting */}
      {paragraphs.map((paragraph, pIndex) => (
        <p key={pIndex} className="mb-6">
          {paragraph.words.map((word, wIndex) => {
            const isHighlighted =
              pIndex === currentParagraphIndex && wIndex === currentWordIndex;
            return (
              <span
                key={wIndex}
                ref={isHighlighted ? highlightedWordRef : null}
                className={isHighlighted ? "word-highlight" : ""}
              >
                {word}{" "}
              </span>
            );
          })}
        </p>
      ))}
    </div>
  );
}
