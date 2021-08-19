import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Thibaud Gerin</title>
        <meta
          name='description'
          content='Thibaud Gerin | Fullstack Developer | Portfolio'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>welcome to my personnal site</h1>
      </main>

      <footer>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
