import Head from 'next/head';
import SpiritualistRandomizer from '~/components/SpiritualistRandomizer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Espiritualistas aleatórios</title>
        <meta name="description" content="Lorem ipsum com espírito" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" p-8 flex items-center justify-center flex-col">
        <h1 className="mb-6 text-xs">Espiritualista de exemplo</h1>
        <SpiritualistRandomizer />
        <footer className="flex items-center content-center text-xs">
          por mim!
        </footer>
      </main>
    </>
  );
}
