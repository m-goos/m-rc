import HelloWorld from '@/posts/hello-world/hello-world.mdx';

export default function Page() {
  return (
    <>
      Welcome to my blog.
      <HelloWorld />
      {/* @TODO - next: 
      - migrate to Next 14
      - upgrade to app router - the MDX support has changed..
      */}
    </>
  );
}
