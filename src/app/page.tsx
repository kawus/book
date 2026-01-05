"use client";

import { useState } from "react";
import { book, getAllChapters, getAdjacentChapters } from "@/data/book";

export default function BookPage() {
  const allChapters = getAllChapters();
  const [currentChapterId, setCurrentChapterId] = useState(allChapters[0].id);

  const currentChapter = allChapters.find((c) => c.id === currentChapterId);
  const { prev, next } = getAdjacentChapters(currentChapterId);

  // Find which section the current chapter belongs to
  const currentSection = book.sections.find((section) =>
    section.chapters.some((c) => c.id === currentChapterId)
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold tracking-tight text-gray-900">
                {book.title}
              </h1>
              <p className="text-sm text-gray-500">{book.author}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl">
        <div className="flex">
          {/* Sidebar - Table of Contents */}
          <aside className="hidden w-72 shrink-0 border-r border-gray-200 lg:block">
            <nav className="sticky top-0 h-screen overflow-y-auto p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
                Contents
              </p>

              {book.sections.map((section) => (
                <div key={section.id} className="mb-6">
                  <p className="mb-2 text-sm font-semibold text-gray-900">
                    {section.title}
                  </p>
                  <ul className="space-y-1">
                    {section.chapters.map((chapter) => (
                      <li key={chapter.id}>
                        <button
                          onClick={() => setCurrentChapterId(chapter.id)}
                          className={`block w-full rounded-md px-3 py-2 text-left text-sm transition-colors duration-150 ${
                            currentChapterId === chapter.id
                              ? "bg-gray-100 font-medium text-gray-900"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          }`}
                        >
                          {chapter.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="min-h-screen flex-1 px-6 py-12 lg:px-16">
            {/* Mobile TOC Dropdown */}
            <div className="mb-8 lg:hidden">
              <select
                value={currentChapterId}
                onChange={(e) => setCurrentChapterId(e.target.value)}
                className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-900 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-100"
              >
                {book.sections.map((section) => (
                  <optgroup key={section.id} label={section.title}>
                    {section.chapters.map((chapter) => (
                      <option key={chapter.id} value={chapter.id}>
                        {chapter.title}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            {/* Section Label */}
            {currentSection && (
              <p className="mb-2 text-sm font-medium text-gray-400">
                {currentSection.title}
              </p>
            )}

            {/* Chapter Content */}
            {currentChapter && (
              <article className="prose mx-auto max-w-2xl">
                <h1>{currentChapter.title}</h1>
                <div
                  dangerouslySetInnerHTML={{ __html: currentChapter.content }}
                />
              </article>
            )}

            {/* Chapter Navigation */}
            <nav className="mx-auto mt-16 flex max-w-2xl items-center justify-between border-t border-gray-200 pt-8">
              {prev ? (
                <button
                  onClick={() => setCurrentChapterId(prev.id)}
                  className="group flex items-center gap-2 text-sm text-gray-600 transition-colors duration-150 hover:text-gray-900"
                >
                  <svg
                    className="h-4 w-4 transition-transform duration-150 group-hover:-translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <span className="font-medium">{prev.title}</span>
                </button>
              ) : (
                <div />
              )}

              {next ? (
                <button
                  onClick={() => setCurrentChapterId(next.id)}
                  className="group flex items-center gap-2 text-sm text-gray-600 transition-colors duration-150 hover:text-gray-900"
                >
                  <span className="font-medium">{next.title}</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              ) : (
                <div />
              )}
            </nav>
          </main>
        </div>
      </div>
    </div>
  );
}
