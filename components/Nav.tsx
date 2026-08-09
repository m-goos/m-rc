import Logo from './Logo';
import NavItem from './NavItem';
import ThemeToggle from './ThemeToggle';

export default function Nav() {
  return (
    <nav className="flex flex-row justify-between border-b border-slate-200 py-2 dark:border-slate-700">
      <Logo />
      <div className="flex flex-row items-center">
        <NavItem text="Blog" href="/blog" />
        <NavItem text="Playground" href="/playground" />
        <ThemeToggle />
      </div>
    </nav>
  );
}
