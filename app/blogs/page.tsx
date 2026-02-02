import Link from 'next/link';
import Image from 'next/image';

type Post = {
  id: number
  title: string
  slug: string
  content: string
  thumbnail?: string | null
  paragraph?: string
  image?: string | null
}

// 1. Function to fetch data from Laravel
async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://happy.techstrota.com/api/blogs', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  return res.json();
}


export default async function BlogPage() {
  const posts = await getPosts(); // posts is already an array

  return (
    <div className="max-w-6xl mx-auto p-8 pt-30">
      <h1 className="text-4xl font-bold mb-8">Our Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
          >
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>

              <div
                className="text-gray-600 line-clamp-3 mb-4"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <Link
                href={`/blogs/${post.slug}`}
                className="text-blue-600 font-medium hover:underline"
              >
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
