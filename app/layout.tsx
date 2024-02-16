import Nav from '@/components/Nav';

// These styles apply to every route in the application
import './globals.css';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col justify-center min-h-screen bg-slate-50">
          {/* element below is too wide */}
          <div className="flex flex-col grow max-w-2xl px-4">
            <Nav />
            <main className="flex flex-col py-8">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
