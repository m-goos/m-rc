import HomeIcon from './HomeIcon';
import NavItem from './NavItem';

export default function Logo() {
  return (
    <NavItem
      href="/"
      title="Go to the homepage"
      text={
        <span className="flex flex-row items-center gap-1.5">
          <HomeIcon className="h-3.5 w-3.5" />
          m-rc
        </span>
      }
    />
  );
}
