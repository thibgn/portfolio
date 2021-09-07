import Head from 'next/head';
import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { Colors, Fonts } from '../styles/ThemeConfig';
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
      <h2 className='flex-center'>
        Check out my&nbsp;
        <a
          href='/projects/'
          className='underlined underlined--offset'
          target='_blank'
        >
          latest projects
        </a>
      </h2>
      <div className='italic flex-center'>
        Scroll down for CV
        <span className='animate animate--down'>&nbsp;👇</span>
      </div>
      <Curriculum />
      <a href='mailto:thibaudgerin@pm.me'>
        <GetInTouch
          onMouseOver={(e) => e.target.classList.add('btnClick')}
          onMouseOut={(e) => e.target.classList.remove('btnClick')}
          theme={theme}
          content='get in touch'
        />
      </a>
      <Footer>
        <div>
          Made in Marseille with <span>❤</span>
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
  padding: 20px 15px;
  width: 33%;
  border-radius: 5px;
  cursor: pointer;
  webkit-transition: all 0.25s;
  -moz-transition: all 0.25s;
  -ms-transition: all 0.25s;
  -o-transition: all 0.25s;
  transition: all 0.25s;
  background: linear-gradient(
    90deg,
    rgba(255, 51, 102, 1) 0%,
    rgba(32, 164, 243, 1) 35%,
    rgba(46, 196, 182, 1) 100%
  );
  background-size: 300%;
  background-position: right;
  z-index: 10;

  &:before {
    content: '${(props) => props.content}';
    color: ${(props) => (props.theme === 'dark' ? Colors.light : Colors.light)};
    font-weight: 800;
    font-size: 1.2em;
    font-family: ${Fonts.paragraphs};
  }

  &:hover {
    background-position: left;
    transform: scale(1.2);
  }

  @media screen and (max-width: 425px) {
    font-size: 0.7em;
  }
`;
