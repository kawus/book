"use client";

import { useMemo, useEffect, useRef } from "react";
import { useTextToSpeech, SPEED_OPTIONS } from "@/hooks/useTextToSpeech";

interface ChapterContentProps {
  htmlContent: string;
}

interface ParsedParagraph {
  html: string;
  text: string;
}

/**
 * Parses HTML content into an array of paragraphs
 */
function parseContent(html: string): ParsedParagraph[] {
  if (typeof document === "undefined") return [];

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  // Get all paragraph elements
  const elements = doc.querySelectorAll("p");

  return Array.from(elements).map((el) => ({
    html: el.innerHTML,
    text: el.textContent || "",
  }));
}

/**
 * Chapter content with integrated audio reader and paragraph highlighting.
 * Highlights the current paragraph being read and auto-scrolls to keep it visible.
 */
export function ChapterContent({ htmlContent }: ChapterContentProps) {
  const {
    isPlaying,
    isPaused,
    rate,
    isSupported,
    currentIndex,
    toggle,
    stop,
    updateRate,
  } = useTextToSpeech();

  // Parse content into paragraphs
  const paragraphs = useMemo(() => parseContent(htmlContent), [htmlContent]);

  // Extract just the text for TTS
  const paragraphTexts = useMemo(
    () => paragraphs.map((p) => p.text),
    [paragraphs]
  );

  // Ref for the currently highlighted paragraph (for scrolling)
  const highlightedRef = useRef<HTMLParagraphElement>(null);

  // Auto-scroll to highlighted paragraph
  useEffect(() => {
    if (currentIndex >= 0 && highlightedRef.current) {
      highlightedRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentIndex]);

  const isActive = isPlaying || isPaused;

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

          {/* Stop Button */}
          {isActive && (
            <button
              onClick={stop}
              className="flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-150 hover:bg-gray-50"
              style={{
                borderColor: "var(--theme-border)",
                color: "var(--theme-text)",
              }}
              aria-label="Stop"
            >
              <svg
                className="h-3.5 w-3.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <rect x="6" y="6" width="12" height="12" rx="1" />
              </svg>
            </button>
          )}

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

          {/* Status text */}
          {isActive && (
            <span className="text-sm" style={{ color: "var(--theme-text-muted)" }}>
              {isPaused ? "Paused" : "Playing..."}
            </span>
          )}
        </div>
      )}

      {/* Paragraphs with highlighting */}
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          ref={index === currentIndex ? highlightedRef : null}
          className="transition-all duration-200"
          style={{
            backgroundColor:
              index === currentIndex ? "var(--theme-highlight)" : "transparent",
            borderRadius: index === currentIndex ? "4px" : "0",
            margin: "0 -8px",
            padding: "4px 8px",
          }}
          dangerouslySetInnerHTML={{ __html: paragraph.html }}
        />
      ))}
    </div>
  );
}
