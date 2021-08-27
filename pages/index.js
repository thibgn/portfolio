import Head from 'next/head';
import styled from 'styled-components';
import { Colors } from '../styles/ThemeConfig';
import useDarkMode from 'use-dark-mode';
import Curriculum from '../components/Curriculum';
import CvIntro from '../components/CvIntro';
import Footer from '../components/Footer';

export default function Home() {
  const theme = useDarkMode().value === true ? 'dark' : 'light';

  return (
    <>
      <Head>
        <title>Thibaud Gerin</title>
        <meta
          name='description'
          content='Thibaud Gerin | Fullstack Developer | Personnal website'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <CvIntro />
      <Curriculum />
      <GetInTouch
        onMouseOver={(e) => e.target.classList.add('btnClick')}
        onMouseOut={(e) => e.target.classList.remove('btnClick')}
        theme={theme}
      >
        <span className='noselect'>get in touch</span>
      </GetInTouch>
      <Footer>
        <div>
          Made in Marseille 🇫🇷 with <span>♥️</span>
        </div>
        <div>gh tw li dr</div>
      </Footer>
    </>
  );
}

const GetInTouch = styled.div`
  text-align: center;
  margin: 0 auto;
  background: ${Colors.secondary};
  padding: 15px;
  width: 33%;
  border-radius: 5px;
  color: ${(props) => (props.theme === 'dark' ? Colors.dark : Colors.light)};
  font-weight: bold;
  font-variant: small-caps;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.2s linear;
`;
