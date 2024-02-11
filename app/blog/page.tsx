import BlogCard from '@/components/BlogCard';
import readPosts from 'lib/readPosts';

export default function Page() {
  const blogs = readPosts();

  return (
    <>
      This is an overview of all blogs:
      <ul>
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <BlogCard title={blog.frontMatter.title} slug={blog.slug} />
          </li>
        ))}
      </ul>
    </>
  );
}
