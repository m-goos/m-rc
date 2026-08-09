import Link from 'next/link';

type NavItemProps = {
  href: string;
  text: React.ReactNode;
  title?: string;
};

export default function NavItem({ href, text, title = '' }: NavItemProps) {
  return (
    <Link
      href={href}
      className="rounded-md px-2 py-2 target:bg-red-100 hover:bg-slate-300 focus:outline-none focus:ring focus:ring-slate-300 active:bg-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600 dark:active:bg-slate-600"
      title={title}
    >
      {text}
    </Link>
  );
}
