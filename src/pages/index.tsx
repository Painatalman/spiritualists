import Head from 'next/head';
import SpiritualistRandomizer from '~/components/SpiritualistRandomizer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gerador de Espiritualistas</title>
        <meta
          name="description"
          content="Títulos e descrições de espiritualistas para preencher"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center flex-col items-center">
        <main className=" p-8 flex items-center justify-center flex-col">
          <h1 className="mb-6 text-xs">Gerador de Espiritualistas</h1>
          <SpiritualistRandomizer />
        </main>
        <footer className="flex items-center content-center text-xs">
          <a
            className="underline"
            href="https://github.com/Painatalman/spiritualists"
          >
            @painatalman
          </a>
        </footer>
      </div>
    </>
  );
}
