import Link from 'next/link';

type BlogCardProps = {
  title: string;
  slug: string;
};

export default function BlogCard({ title, slug }: BlogCardProps) {
  return (
    <Link
      href={`blog/${slug}`}
      className="rounded-md px-2 py-2 target:bg-red-100 hover:bg-slate-300 focus:outline-none focus:ring focus:ring-slate-300 active:bg-slate-400"
      title={title}
    >
      {title}
    </Link>
  );
}
