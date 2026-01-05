"use client";

import { useMemo } from "react";
import { useTextToSpeech, SPEED_OPTIONS } from "@/hooks/useTextToSpeech";

interface AudioReaderProps {
  /** HTML content to read - tags will be stripped automatically */
  htmlContent: string;
}

/**
 * Strips HTML tags and decodes entities to get plain text
 */
function stripHtml(html: string): string {
  // Create a temporary element to parse HTML
  if (typeof document === "undefined") return html;
  const temp = document.createElement("div");
  temp.innerHTML = html;
  return temp.textContent || temp.innerText || "";
}

/**
 * Minimal audio reader controls using Web Speech API.
 * Provides play/pause toggle and speed selection.
 */
export function AudioReader({ htmlContent }: AudioReaderProps) {
  const { isPlaying, isPaused, rate, isSupported, toggle, stop, updateRate } =
    useTextToSpeech();

  // Memoize the stripped text to avoid re-parsing on every render
  const text = useMemo(() => stripHtml(htmlContent), [htmlContent]);

  // Don't render if TTS is not supported
  if (!isSupported) {
    return null;
  }

  const isActive = isPlaying || isPaused;

  return (
    <div className="flex items-center gap-3">
      {/* Play/Pause Button */}
      <button
        onClick={() => toggle(text)}
        className="flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-150 hover:bg-gray-50"
        style={{
          borderColor: "var(--theme-border)",
          color: "var(--theme-text)",
        }}
        aria-label={isPlaying && !isPaused ? "Pause" : "Listen to chapter"}
      >
        {isPlaying && !isPaused ? (
          // Pause icon
          <svg
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          // Play icon
          <svg
            className="h-4 w-4 ml-0.5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5.14v14.72a1 1 0 001.5.86l11-7.36a1 1 0 000-1.72l-11-7.36a1 1 0 00-1.5.86z" />
          </svg>
        )}
      </button>

      {/* Stop Button - only show when active */}
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
        <span
          className="text-sm"
          style={{ color: "var(--theme-text-muted)" }}
        >
          {isPaused ? "Paused" : "Playing..."}
        </span>
      )}
    </div>
  );
}
