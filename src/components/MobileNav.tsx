"use client";

import { useRouter } from "next/navigation";
import { book } from "@/data/book";

interface MobileNavProps {
  currentId: string;
}

export function MobileNav({ currentId }: MobileNavProps) {
  const router = useRouter();

  return (
    <div className="mb-8 lg:hidden">
      <select
        value={currentId}
        onChange={(e) => {
          router.push(`/chapter/${e.target.value}`);
        }}
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
  );
}
