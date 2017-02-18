import Head from 'next/head';
import useSpiritualistData from '~/hooks/useSpiritualistData';

export default function Home() {
  const { loading, error, spiritualist } = useSpiritualistData();

  return (
    <>
      <Head>
        <title>Espiritualistas aleatórios</title>
        <meta name="description" content="Lorem ipsum com espírito" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" p-8 flex items-center justify-center flex-col">
        <h1 className="mb-6 text-xs">Espiritualista de exemplo</h1>

        {!loading && !error && (
          <article className="p-4 rounded-none max-w-sm shadow mb-8">
            <header className="font-black uppercase text-2xl text-center mb-2">
              {spiritualist.name}
            </header>
            <p className="text-sm text-justify">{spiritualist.description}</p>
          </article>
        )}
        <footer className="flex items-center content-center text-xs">
          por mim!
        </footer>
      </main>
    </>
  );
}
