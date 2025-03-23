export default function PostLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    // responsive prose styling up to 'md'; after that, heading get really large (too large)
    <article className="prose prose-sm md:prose-base prose-slate md:pt-4">
      {children}
    </article>
  );
}
