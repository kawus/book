"use client";

import { useState } from "react";
import Link from "next/link";
import { book } from "@/data/book";
import { SettingsPanel } from "./SettingsPanel";

interface SlideMenuProps {
  currentChapterId?: string;
}

export function SlideMenu({ currentChapterId }: SlideMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      {/* Menu Button - Shape Up style pill */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-all duration-150 hover:bg-gray-800"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <span>{book.title}</span>
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-200"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out Panel */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-80 max-w-[85vw] transform shadow-xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ backgroundColor: "var(--theme-bg)" }}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b p-6" style={{ borderColor: "var(--theme-border)" }}>
            <div>
              <h2 className="font-semibold" style={{ color: "var(--theme-text)" }}>{book.title}</h2>
              <p className="text-sm" style={{ color: "var(--theme-text-muted)" }}>{book.author}</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-md p-2 transition-colors duration-150 hover:bg-gray-100"
              style={{ color: "var(--theme-text-muted)" }}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-6">
            {/* Home Link */}
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="mb-6 flex items-center gap-2 text-sm transition-colors duration-150"
              style={{ color: "var(--theme-text-secondary)" }}
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Home
            </Link>

            {/* Settings Toggle */}
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="mb-4 flex w-full items-center justify-between text-xs font-semibold uppercase tracking-wide"
              style={{ color: "var(--theme-text-muted)" }}
            >
              <span>Settings</span>
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${showSettings ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Settings Panel (collapsible) */}
            {showSettings && (
              <div className="mb-6 rounded-lg border p-4" style={{ borderColor: "var(--theme-border)", backgroundColor: "var(--theme-bg-secondary)" }}>
                <SettingsPanel />
              </div>
            )}

            {/* Table of Contents */}
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--theme-text-muted)" }}>
              Contents
            </p>

            {book.sections.map((section) => (
              <div key={section.id} className="mb-6">
                <p className="mb-2 text-sm font-semibold" style={{ color: "var(--theme-text)" }}>
                  {section.title}
                </p>
                <ul className="space-y-1">
                  {section.chapters.map((chapter) => (
                    <li key={chapter.id}>
                      <Link
                        href={`/chapter/${chapter.id}`}
                        onClick={() => setIsOpen(false)}
                        className={`block rounded-md px-3 py-2 text-sm transition-colors duration-150 ${
                          currentChapterId === chapter.id
                            ? "font-medium"
                            : ""
                        }`}
                        style={{
                          backgroundColor: currentChapterId === chapter.id ? "var(--theme-bg-secondary)" : "transparent",
                          color: currentChapterId === chapter.id ? "var(--theme-text)" : "var(--theme-text-secondary)",
                        }}
                      >
                        {chapter.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
