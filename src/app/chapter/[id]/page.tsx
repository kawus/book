import Link from "next/link";
import { notFound } from "next/navigation";
import { book, getChapterById, getAdjacentChapters } from "@/data/book";
import { SlideMenu } from "@/components/SlideMenu";
import { SaveProgress } from "@/components/SaveProgress";
import { ChapterContent } from "@/components/ChapterContent";

interface ChapterPageProps {
  params: Promise<{ id: string }>;
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { id } = await params;
  const chapter = getChapterById(id);

  if (!chapter) {
    notFound();
  }

  const { next } = getAdjacentChapters(id);

  return (
    <div className="min-h-screen bg-white">
      {/* Save reading progress */}
      <SaveProgress chapterId={id} />

      {/* Minimal Header - just the menu button */}
      <header className="px-6 py-4">
        <SlideMenu currentChapterId={id} />
      </header>

      {/* Main Content - clean and focused */}
      <main className="mx-auto max-w-2xl px-6 pb-16 pt-8">
        {/* Chapter Title */}
        <article className="prose">
          <h1>{chapter.title}</h1>

          {/* Chapter content with audio reader and highlighting */}
          <ChapterContent htmlContent={chapter.content} />
        </article>

        {/* Simple Next Link */}
        {next && (
          <div className="mt-16 border-t border-gray-200 pt-8">
            <Link
              href={`/chapter/${next.id}`}
              className="group flex items-center gap-2 text-gray-600 transition-colors duration-150 hover:text-gray-900"
            >
              <span className="font-medium">Next: {next.title}</span>
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
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}

// Generate static params for all chapters
export async function generateStaticParams() {
  const chapters = book.sections.flatMap((section) => section.chapters);
  return chapters.map((chapter) => ({
    id: chapter.id,
  }));
}
