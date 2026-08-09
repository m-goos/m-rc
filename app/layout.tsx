import Nav from '@/components/Nav';

// These styles apply to every route in the application
import './globals.css';
import { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.svg',
  },
};

/**
 * Runs before first paint, so the page never flashes light before switching to
 * dark. No stored choice means "follow the OS", which is the default state.
 */
const themeScript = `
try {
  var stored = localStorage.getItem('theme');
  var dark = stored
    ? stored === 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.classList.toggle('dark', dark);
} catch (e) {}
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // the inline script adds a class to <html> before React hydrates
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <div className="flex flex-col items-center min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
          {/* this container sets a flexible max width that's always maxed out */}
          <div className="flex grow max-w-2xl w-full">
            {/* provide padding and keep blogs constrained to 100% width */}
            <div className="flex flex-col w-full px-4">
              <Nav />
              <main className="flex flex-col flex-1 py-8">{children}</main>
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
