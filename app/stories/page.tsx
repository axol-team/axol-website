import { getAllStories } from "@/lib/mdx";
import StoriesHeader from "@/components/stories/stories-header";
import StoriesList from "@/components/stories/stories-list";

export default async function StoriesPage() {
  const stories = await getAllStories();

  return (
    <div className="container mx-auto px-4 py-8">
      <StoriesHeader />
      <StoriesList stories={stories} />
    </div>
  );
}
