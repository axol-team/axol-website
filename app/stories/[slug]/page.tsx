import { getAllStories, getStoryBySlug } from "@/lib/mdx";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
// import { MDXRemote } from "next-mdx-remote/rsc";

// const components = {
//   h1: ({ children }: { children: React.ReactNode }) => (
//     <h1 style={{ color: "red", fontSize: "48px" }}>{children}</h1>
//   ),
// };

export async function generateStaticParams() {
  const stories = await getAllStories();
  return stories.map((story) => ({
    slug: story.slug,
  }));
}

export default async function Story({ params }: { params: { slug: string } }) {
  const story = await getStoryBySlug(params.slug);

  return (
    <article className="container max-w-3xl mx-auto px-4 py-12">
      <Link
        href="/stories"
        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
        Back to all stories
      </Link>
      
      <div className="mt-8 space-y-6">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          {story.title}
        </h1>
        
        <p className="text-xl text-muted-foreground leading-relaxed">
          {story.description}
        </p>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {story.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground border-t pt-4">
            <Calendar className="w-4 h-4" />
            <time>Published on {story.date}</time>
          </div>
        </div>
      </div>

      <div className="mt-12 prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-primary">
        {story.content}
      </div>
    </article>
  );
}
