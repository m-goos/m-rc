'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItemProps = {
  href: string;
  text: React.ReactNode;
  title?: string;
  /** the logo links home but is branding, so it skips the active underline */
  showActive?: boolean;
};

export default function NavItem({
  href,
  text,
  title = '',
  showActive = true,
}: NavItemProps) {
  const pathname = usePathname();
  // the trailing-slash check keeps "Blog" underlined while reading a post
  // at /blog/<slug>, without /blogsomething matching too
  const isActive =
    showActive && (pathname === href || pathname.startsWith(`${href}/`));

  return (
    <Link
      href={href}
      className={`rounded-md px-2 py-2 target:bg-red-100 hover:bg-slate-300 focus:outline-none focus:ring focus:ring-slate-300 active:bg-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600 dark:active:bg-slate-600 ${
        isActive ? 'underline decoration-2 underline-offset-8' : ''
      }`}
      title={title}
      aria-current={isActive ? 'page' : undefined}
    >
      {text}
    </Link>
  );
}
