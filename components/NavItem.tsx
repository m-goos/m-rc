import Link from 'next/link';

type NavItemProps = {
  href: string;
  text: string;
  title?: string;
};

export default function NavItem({ href, text, title = '' }: NavItemProps) {
  return (
    <Link
      href={href}
      className="rounded-md px-2 py-2 target:bg-red-100 hover:bg-slate-300 focus:outline-none focus:ring focus:ring-slate-300 active:bg-slate-400"
      title={title}
    >
      {text}
    </Link>
  );
}
