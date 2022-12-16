import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Layout from '../components/Layout';
import Hello from '../components/Hello';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Marc Goossens</title>
        <meta
          name="description"
          content="Personal blog on software development by Marc Goossens"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hello />
      </Layout>
    </>
  );
}
