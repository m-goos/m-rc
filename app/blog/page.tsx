import BlogCard from '@/components/BlogCard';
import readPosts from 'lib/readPosts';

export default function Page() {
  const blogs = readPosts();

  return (
    <>
      <h1 className="text-3xl font-bold pb-4">Latest blogs</h1>
      {blogs.map((blog) => (
        <BlogCard
          frontMatter={blog.frontMatter}
          slug={blog.slug}
          key={blog.slug}
        />
      ))}
    </>
  );
}
