import { getAllServices, getServiceBySlug } from "@/lib/mdx";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
// import { MDXRemote } from "next-mdx-remote/rsc";

// const components = {
//   h1: ({ children }: { children: React.ReactNode }) => (
//     <h1 style={{ color: "red", fontSize: "48px" }}>{children}</h1>
//   ),
// };

export async function generateStaticParams() {
  const services = await getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function Service({ params }: { params: { slug: string } }) {
  const service = await getServiceBySlug(params.slug);

  return (
    <article className="container max-w-3xl mx-auto px-4 py-12">
      <Link
        href="/services"
        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
        Back to all services
      </Link>
      
      <div className="mt-8 space-y-6">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          {service.title}
        </h1>
        
        <p className="text-xl text-muted-foreground leading-relaxed">
          {service.description}
        </p>
      </div>

      <div className="mt-12 prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-primary">
        {service.content}
      </div>
    </article>
  );
}
