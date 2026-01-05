/**
 * Book Data Structure
 * This file contains the book content. Replace with your own content.
 */

export interface Chapter {
  id: string;
  title: string;
  content: string;
}

export interface Section {
  id: string;
  title: string;
  chapters: Chapter[];
}

export interface Book {
  title: string;
  subtitle?: string;
  author: string;
  sections: Section[];
}

export const book: Book = {
  title: "The Art of Building Products",
  subtitle: "A practical guide to creating software people love",
  author: "Your Name",
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      chapters: [
        {
          id: "why-this-book",
          title: "Why This Book Exists",
          content: `
            <p>Every great product starts with a simple idea. But between that spark of inspiration and a finished product lies a vast wilderness of decisions, trade-offs, and challenges that can derail even the most promising concepts.</p>

            <p>This book is a guide through that wilderness. It's not about frameworks or methodologies—there are plenty of those already. Instead, it's about developing the judgment and intuition you need to make good decisions when the path isn't clear.</p>

            <blockquote>The best products aren't built by following rules. They're built by people who understand principles deeply enough to know when to break the rules.</blockquote>

            <p>We'll explore the core principles that separate great products from mediocre ones, examine real examples of both success and failure, and develop a practical toolkit for navigating the product development journey.</p>
          `,
        },
        {
          id: "who-this-is-for",
          title: "Who This Is For",
          content: `
            <p>This book is for anyone who wants to build products that matter. Whether you're a founder, a product manager, a designer, or an engineer—if you care about creating something people genuinely value, you'll find useful ideas here.</p>

            <h3>What You'll Learn</h3>

            <ul>
              <li>How to identify problems worth solving</li>
              <li>The art of saying no to good ideas</li>
              <li>Building for real humans, not personas</li>
              <li>When to ship and when to wait</li>
              <li>Creating products that grow through word of mouth</li>
            </ul>

            <p>I've tried to keep things practical. Theory is only useful if it helps you make better decisions in the real world. Every concept in this book comes with concrete examples and actionable takeaways.</p>
          `,
        },
      ],
    },
    {
      id: "foundations",
      title: "Foundations",
      chapters: [
        {
          id: "start-with-problems",
          title: "Start With Problems, Not Solutions",
          content: `
            <p>The most common mistake in product development is falling in love with a solution before understanding the problem. It's easy to get excited about a clever idea or a cool technology, but that excitement often blinds us to the question that matters most: <strong>Does anyone actually need this?</strong></p>

            <p>Great products solve real problems. They address genuine pain points or unfulfilled desires in people's lives. The key word here is "genuine"—not problems you think people should have, or problems that would exist in an ideal world, but problems people actually experience today.</p>

            <h3>Finding Real Problems</h3>

            <p>The best way to find real problems is to observe real behavior. Watch how people work. Listen to their complaints. Pay attention to the workarounds they create. These organic adaptations are gold—they reveal where existing solutions fall short.</p>

            <blockquote>The gap between what people say they want and what they actually need is where the best products are born.</blockquote>

            <p>When someone tells you they want a faster horse, don't just build a faster horse. Understand why they want to go faster. What are they trying to accomplish? What's getting in their way? The answer might be a car, but it might also be a better road, or a train, or a phone call that eliminates the need to travel at all.</p>
          `,
        },
        {
          id: "simplicity",
          title: "The Power of Simplicity",
          content: `
            <p>Simplicity isn't about having fewer features. It's about having the right features, organized in the right way, so that using the product feels effortless.</p>

            <p>Every feature you add is a trade-off. It might solve a problem for some users, but it also adds complexity for everyone. It increases the learning curve. It creates more surface area for bugs. It makes the product harder to maintain and evolve.</p>

            <h3>The Complexity Tax</h3>

            <p>Think of complexity as a tax you pay on every future decision. Each feature constrains what you can do next. Each option you present to users is a decision they have to make. Each setting is something that can be configured wrong.</p>

            <ul>
              <li><strong>Cognitive load:</strong> Users have limited mental bandwidth</li>
              <li><strong>Maintenance burden:</strong> Every feature needs ongoing care</li>
              <li><strong>Testing surface:</strong> More features mean more things that can break</li>
              <li><strong>Documentation debt:</strong> Everything needs to be explained</li>
            </ul>

            <p>The best products feel simple even when they're doing sophisticated things under the hood. They hide complexity, making smart defaults and automating decisions where possible.</p>

            <blockquote>Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.</blockquote>
          `,
        },
        {
          id: "iteration",
          title: "Ship, Learn, Repeat",
          content: `
            <p>You can't think your way to a great product. At some point, you have to put something in front of real users and see what happens. This is uncomfortable—your early versions will be rough, and criticism stings—but it's the only way to learn what actually works.</p>

            <p>The goal isn't to ship something perfect. It's to ship something good enough to learn from. What features do people actually use? Where do they get stuck? What do they try to do that you didn't anticipate?</p>

            <h3>The Learning Loop</h3>

            <p>Effective iteration follows a simple pattern:</p>

            <ol>
              <li><strong>Ship:</strong> Release something to real users</li>
              <li><strong>Observe:</strong> Watch how people actually use it</li>
              <li><strong>Learn:</strong> Identify gaps between intention and reality</li>
              <li><strong>Adjust:</strong> Make changes based on what you learned</li>
              <li><strong>Repeat:</strong> Do it again, faster</li>
            </ol>

            <p>The speed of this loop matters enormously. Teams that can cycle through it quickly learn faster and build better products. This is why small, focused releases beat big, comprehensive launches almost every time.</p>

            <p>Don't aim for perfection. Aim for momentum.</p>
          `,
        },
      ],
    },
    {
      id: "execution",
      title: "Execution",
      chapters: [
        {
          id: "saying-no",
          title: "The Art of Saying No",
          content: `
            <p>Every feature request sounds reasonable in isolation. A customer needs this. A competitor has that. This metric would improve if we just added this one thing. Before you know it, your product is a bloated mess that tries to do everything and does nothing well.</p>

            <p>Saying no is one of the most important skills in product development. It's also one of the hardest, because it means disappointing people in the short term to serve them better in the long term.</p>

            <h3>When to Say No</h3>

            <ul>
              <li>When a feature would help a few users at the expense of many</li>
              <li>When you're adding complexity to avoid a hard design decision</li>
              <li>When the feature doesn't align with your core value proposition</li>
              <li>When you're building it just because a competitor has it</li>
              <li>When you can't explain why it matters in one sentence</li>
            </ul>

            <blockquote>Focus is not about saying yes to the thing you've got to focus on. It's about saying no to the hundred other good ideas.</blockquote>

            <p>A focused product that does one thing exceptionally well beats a comprehensive product that does many things adequately. Users don't want more options—they want better outcomes.</p>
          `,
        },
        {
          id: "quality",
          title: "Quality as a Feature",
          content: `
            <p>Quality isn't a phase that happens at the end of development. It's a mindset that informs every decision from the beginning. When you treat quality as an afterthought, you end up with a product that feels rough and unfinished—even if it technically works.</p>

            <p>Quality shows up in the details. It's the animation that makes an interaction feel smooth. It's the error message that actually helps instead of confusing. It's the three seconds you save users by remembering their preferences.</p>

            <h3>The Quality Multiplier</h3>

            <p>High quality creates a virtuous cycle:</p>

            <ul>
              <li>Users trust the product more, so they use it more confidently</li>
              <li>Fewer bugs mean fewer support requests and less firefighting</li>
              <li>Word of mouth improves because people recommend things they're proud to use</li>
              <li>The team takes pride in their work, which improves retention and morale</li>
            </ul>

            <p>Quality is expensive upfront but cheap over time. Cutting corners is cheap upfront but expensive over time. The math almost always favors quality.</p>

            <p>This doesn't mean perfectionism. It means caring deeply about the things that matter to users, and being willing to say "not yet" when something isn't ready.</p>
          `,
        },
      ],
    },
  ],
};

/**
 * Helper function to get all chapters in flat array
 */
export function getAllChapters(): Chapter[] {
  return book.sections.flatMap((section) => section.chapters);
}

/**
 * Helper function to find a chapter by ID
 */
export function getChapterById(id: string): Chapter | undefined {
  return getAllChapters().find((chapter) => chapter.id === id);
}

/**
 * Helper function to get previous and next chapters
 */
export function getAdjacentChapters(currentId: string): {
  prev: Chapter | null;
  next: Chapter | null;
} {
  const chapters = getAllChapters();
  const currentIndex = chapters.findIndex((c) => c.id === currentId);

  return {
    prev: currentIndex > 0 ? chapters[currentIndex - 1] : null,
    next: currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null,
  };
}
