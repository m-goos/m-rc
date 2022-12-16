import Nav from './Nav';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="bg-slate-100 h-screen">
        <Nav />
        <div className="p-4">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
