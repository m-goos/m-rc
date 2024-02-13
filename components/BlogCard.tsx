import { FrontMatter } from 'lib/readPosts';
import Link from 'next/link';

type BlogCardProps = {
  frontMatter: FrontMatter;
  slug: string;
};

export default function BlogCard({ frontMatter, slug }: BlogCardProps) {
  return (
    <Link
      href={`blog/${slug}`}
      className="rounded-md bg-slate-100 p-3 mb-4 transition ease-in-out focus:outline-none focus:ring ring-offset-2 focus:ring-slate-300 hover:bg-slate-200 active:bg-slate-400"
      title={frontMatter.title}
    >
      <h2 className="text-xl font-semibold">{frontMatter.title}</h2>
      <p className="text-sm font-extralight font-serif pb-1">
        {frontMatter.date.toDateString()}
      </p>
      <p>{frontMatter.description}</p>
    </Link>
  );
}
