import { notFound } from "next/navigation";

export const dynamic = "force-static";
export const dynamicParams = false;

type Blog = {
  id: number;
  title: string;
  content: string;
  image: string;
  slug: string;
};

async function getAllSlugs(): Promise<Blog[]> {
  try {
    const res = await fetch("https://admin.techstrota.com/api/blogs", {
      // Revalidate every 60 seconds so new blogs appear shortly after being added
      cache: "force-cache",
    });

    if (!res.ok) return [];
    const result = await res.json();
    return Array.isArray(result) ? result : [];
  } catch (err) {
    console.error("Fetch error:", err);
    return [];
  }
}

export async function generateStaticParams() {
  const posts = await getAllSlugs();

  if (!posts || posts.length === 0) return [];

  return posts
    .filter((post) => post && post.slug) // Ensure post and slug exist
    .map((post) => ({
      slug: String(post.slug).trim(), // Clean string
    }));
}

async function getPost(slug: string): Promise<Blog | null> {
  try {
    // decodeURIComponent handles slugs with spaces or special chars
    const decodedSlug = decodeURIComponent(slug);
    const res = await fetch(
      `https://admin.techstrota.com/api/blogs/${decodedSlug}`,
      {
        cache: "force-cache",
      },
    );

    if (!res.ok) return null;
    const result = await res.json();
    return result.data;
  } catch (error) {
    return null;
  }
}

// Next.js 15 strictly requires this type for the Page props
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  // 1. Await the params first
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  if (!slug) notFound();

  // 2. Fetch data
  const post = await getPost(slug);

  // 3. Handle 404
  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded mb-6"
          loading="eager"
        />
      )}

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
