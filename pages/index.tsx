import Head from 'next/head';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'next-tailwind-starter',
  description: 'A Next.js + TypeScript + Tailwind starter by @linkai101',
};

export default function Home() {
  return <>
    <Head>
      <title>next-tailwind-starter</title>
      <meta name="description" content="by @linkai101" />
    </Head>

    <main>
      <div className="container px-8 py-8">
        <h1 className="text-3xl font-bold">
        <a href="https://github.com/linkai101" className="text-blue-500 hover:underline" target="_blank">linkai101</a>/next-tailwind-starter
        </h1>

        <p className="">
          installed with Next.js (Using Pages Router), TypeScript, Tailwind CSS
        </p>
      </div>
    </main>

    <footer>
    </footer>
  </>;
}