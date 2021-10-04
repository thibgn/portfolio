import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { Colors, Fonts } from '../styles/ThemeConfig';
import Curriculum from '../components/Curriculum';
import CvIntro from '../components/CvIntro';
import Nav from '../components/Nav';
import Competences from '../components/Competences';

import { content } from '../content/index';

export default function Home() {
  const locale = 'fr';
  const translated = locale == 'fr' ? content.fr : content.en;
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

      <Nav title='Thibaud Gerin' />
      <CvIntro />
      <Competences />
      <h2 className='flex-center'>
        {translated.project_intro}
        <Link href='/projets/' alt='portfolio'>
          <a className='underlined underlined--offset'>
            {translated.project_cta}
          </a>
        </Link>
      </h2>
      <div className='italic flex-center'>
        Descendez pour le CV
        <span className='animate animate--down'>&nbsp;👇</span>
      </div>
      <Curriculum />
      <a href='mailto:thibaudgerin@pm.me'>
        <GetInTouch
          onMouseOver={(e) => e.target.classList.add('btnClick')}
          onMouseOut={(e) => e.target.classList.remove('btnClick')}
          theme={theme}
          content={translated.get_in_touch}
        />
      </a>
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
