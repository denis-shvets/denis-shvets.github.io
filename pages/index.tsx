import Head from 'next/head';

function HomePage() {
  const name = 'Denis Shvets';
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <h1>{name}</h1>
    </>
  );
}

export default HomePage;
