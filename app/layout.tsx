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
        {/* root layout */}
        <div className="min-h-screen bg-slate-50">
          <Nav />
          <div className="flex justify-center py-8 px-4">
            <main className="flex flex-col grow max-w-3xl">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
