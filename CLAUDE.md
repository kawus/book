# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Book is a web platform for publishing books beautifully on the web, inspired by Basecamp's Getting Real. The goal is simplicity-first publishing: writers input chapters and get a beautiful, shareable URL.

## Development Commands

All commands should be run from the `app/` directory:

```bash
cd app
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

## Architecture

### Tech Stack
- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS v4

### Project Structure

```
app/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Landing page with book cover + TOC
│   │   └── chapter/[id]/       # Dynamic chapter pages
│   ├── components/             # React components
│   ├── data/book.ts            # Book content and data types
│   └── hooks/                  # Custom React hooks
```

### Key Patterns

**Book Data Model** (`src/data/book.ts`):
- `Book` contains `Section[]` which contain `Chapter[]`
- Chapters have `id`, `title`, and HTML `content`
- Helper functions: `getAllChapters()`, `getChapterById()`, `getAdjacentChapters()`

**Reading Experience**:
- `useReadingProgress` - Tracks current chapter in localStorage
- `useReadingSettings` - Persists user preferences (dark mode, font, font size, line height)
- `SettingsProvider` - React context for settings across components

**Chapter Pages** are statically generated via `generateStaticParams()`

## Design

For any design work, use the `/functional-design` skill. This applies the functional minimalism design system inspired by Linear and Notion.

Reference [Basecamp's Getting Real](https://basecamp.com/gettingreal) for the target reading experience: clean typography, simple navigation, distraction-free reading.
