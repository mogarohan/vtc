import Image from 'next/image';

type Post = {
  id: number;
  title: string;
  slug: string;
  content: string;
  image?: string | null;
};

async function getPost(slug: string): Promise<Post> {
  const res = await fetch(
    `https://happy.techstrota.com/api/blogs/${slug}`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch blog');
  }

  return res.json();
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ unwrap params
  const { slug } = await params;

  const post = await getPost(slug);

  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[420px] object-cover rounded-xl mb-8"
        />
      )}

      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
