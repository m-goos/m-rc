import GitHubIcon from './GitHubIcon';
import LinkedInIcon from './LinkedInIcon';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center text-sm text-slate-600 py-4 bg-gradient-to-br from-slate-100 via-blue-100 to-teal-100">
      <div className="flex flex-row items-center gap-3">
        <a
          className="flex flex-row items-center gap-1.5 rounded-md px-2 py-1 hover:bg-slate-200 focus:outline-none focus:ring focus:ring-slate-300"
          href="https://github.com/m-goos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
          GitHub
        </a>
        <span
          className="h-1 w-1 rounded-full bg-slate-400"
          aria-hidden="true"
        />
        <a
          className="flex flex-row items-center gap-1.5 rounded-md px-2 py-1 hover:bg-slate-200 focus:outline-none focus:ring focus:ring-slate-300"
          href="https://www.linkedin.com/in/marcgoos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
          LinkedIn
        </a>
        <span
          className="h-1 w-1 rounded-full bg-slate-400"
          aria-hidden="true"
        />
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
