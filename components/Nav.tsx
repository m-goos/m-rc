import Logo from './Logo';
import NavItem from './NavItem';

export default function Nav() {
  return (
    <nav className="flex flex-row justify-between border-b border-slate-200 py-2">
      <Logo />
      <div className="flex flex-row">
        <NavItem text="Blog" href="/blog" />
        <NavItem text="Playground" href="/playground" />
        <NavItem text="About" href="/about" />
      </div>
    </nav>
  );
}
