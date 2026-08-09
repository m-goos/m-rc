import GitHubIcon from './GitHubIcon';
import LinkedInIcon from './LinkedInIcon';

export default function Footer() {
  return (
    // max-w-2xl matches the page column: below that width the cap does not
    // bind and the bar fills the viewport, above it the bar lines up with the
    // nav instead of outgrowing it
    <footer className="w-full max-w-2xl rounded-none text-sm text-slate-600 bg-slate-100 dark:text-slate-300 dark:bg-slate-800">
      {/* px-4 mirrors the page container so the links line up with the nav */}
      <div className="flex flex-row items-center justify-center gap-3 px-4 py-4">
        <a
          className="flex flex-row items-center gap-1.5 rounded-md px-2 py-1 hover:bg-slate-200 focus:outline-none focus:ring focus:ring-slate-300 dark:hover:bg-slate-700 dark:focus:ring-slate-600"
          href="https://github.com/m-goos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
          GitHub
        </a>
        <span
          className="h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-600"
          aria-hidden="true"
        />
        <a
          className="flex flex-row items-center gap-1.5 rounded-md px-2 py-1 hover:bg-slate-200 focus:outline-none focus:ring focus:ring-slate-300 dark:hover:bg-slate-700 dark:focus:ring-slate-600"
          href="https://www.linkedin.com/in/marcgoos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
          LinkedIn
        </a>
        <span
          className="h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-600"
          aria-hidden="true"
        />
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
