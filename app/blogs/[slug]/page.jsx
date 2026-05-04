import { notFound } from "next/navigation";

export const dynamic = "force-static";

async function getPost(slug) {
  const res = await fetch(`http://127.0.0.1:8000/api/blogs/${slug}`, {
    cache: "force-cache",
  });

  if (!res.ok) return null;

  const result = await res.json();
  return result.data;
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) notFound();

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded mb-6"
        />
      )}

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
