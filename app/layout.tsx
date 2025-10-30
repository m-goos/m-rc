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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center min-h-screen bg-slate-50">
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
