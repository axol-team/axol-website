"use client";

import { BlogPost } from "@/lib/mdx";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function PostsList({
  posts,  
}: {
  posts: BlogPost[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Link href={`/posts/${post.slug}`}>
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02] h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold tracking-tight">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground leading-relaxed mt-2">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                    <Calendar className="w-4 h-4" />
                    <time>Published on {post.date}</time>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
