import Nav from './Nav';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="h-screen bg-slate-50">
        <Nav />
        <div className="p-4">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
