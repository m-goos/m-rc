import Layout from '@/components/Layout';
import HelloWorld from '@/posts/hello-world/hello-world.mdx';

export default function Blog() {
  return (
    <Layout>
      Welcome to my blog.
      <HelloWorld />
    </Layout>
  );
}
