export default function PostLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate md:pt-4">
      {children}
    </article>
  );
}
