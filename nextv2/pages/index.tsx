// pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import VisionBoard from '../src/components/VisionBoard';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Vision Board</title>
        <meta name="description" content="A vision board app to visualize your goals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Vision Board</h1>
        <VisionBoard />
      </main>
    </div>
  );
};

export default Home;
