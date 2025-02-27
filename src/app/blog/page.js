import Link from 'next/link';
import Navbar from '../../../cmp/Navbar/Navbar';
const getAllPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
};

const BlogPage = async () => {
  const posts = await getAllPosts();

  return (
    <div>
      <Navbar />
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
