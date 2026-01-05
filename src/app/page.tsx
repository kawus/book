import Link from "next/link";
import { book, getAllChapters } from "@/data/book";
import { ContinueReading } from "@/components/ContinueReading";

export default function LandingPage() {
  const firstChapter = getAllChapters()[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <main className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Cover Image Placeholder */}
          <div className="w-64 shrink-0 lg:w-72">
            <div className="aspect-[2/3] rounded-lg bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 shadow-[0_2px_4px_rgba(0,0,0,0.02),0_4px_8px_rgba(0,0,0,0.04),0_8px_16px_rgba(0,0,0,0.06),0_16px_32px_rgba(0,0,0,0.08)]">
              <div className="flex h-full flex-col justify-between text-white">
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
                    {book.author}
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold leading-tight tracking-tight">
                    {book.title}
                  </h2>
                  {book.subtitle && (
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      {book.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Book Info */}
          <div className="flex-1 text-center lg:text-left">
            <p className="mb-2 text-sm font-medium text-gray-400">
              By {book.author}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 lg:text-5xl">
              {book.title}
            </h1>
            {book.subtitle && (
              <p className="mt-4 text-xl leading-relaxed text-gray-600">
                {book.subtitle}
              </p>
            )}

            {/* Continue Reading (shows if user has progress) */}
            <div className="mt-8">
              <ContinueReading />
            </div>

            {/* CTA Button */}
            <div className="mt-4">
              <Link
                href={`/chapter/${firstChapter.id}`}
                className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-150 hover:-translate-y-px hover:bg-gray-800 hover:shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
              >
                Start Reading
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Table of Contents Preview */}
            <div className="mt-12 border-t border-gray-200 pt-8">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-400">
                Contents
              </h3>
              <div className="space-y-4">
                {book.sections.map((section) => (
                  <div key={section.id}>
                    <p className="mb-2 font-semibold text-gray-900">
                      {section.title}
                    </p>
                    <ul className="space-y-1">
                      {section.chapters.map((chapter) => (
                        <li key={chapter.id}>
                          <Link
                            href={`/chapter/${chapter.id}`}
                            className="text-sm text-gray-600 transition-colors duration-150 hover:text-gray-900"
                          >
                            {chapter.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
