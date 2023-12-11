import Nav from '@/components/Nav';

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
        <div className="h-screen bg-slate-50">
          <Nav />
          <div className="p-4">
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
