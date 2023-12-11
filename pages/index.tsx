import Layout from '@/components/Layout';
import Hello from '@/components/Hello';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marc Goossens',
  description: 'Personal blog on software development by Marc Goossens',
};

export default function Home() {
  return (
    <Layout>
      <Hello />
    </Layout>
  );
}
