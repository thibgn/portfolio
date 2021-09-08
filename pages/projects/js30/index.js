import { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';

import Drumbox from '../../../components/Drumbox';
import Canvas from '../../../components/Canvas';

export default function Js30() {
  const [demo, setDemo] = useState('drumbox');
  const [loading, setLoading] = useState(false);
  const drumbox = demo == 'drumbox';
  const dessin = demo == 'dessin';
  // const video = demo == 'video';
  // const konami = demo == 'konami';

  const handleChange = (e) => {
    setLoading(true);
    document.querySelector(`#${demo}`).classList.remove('active');
    setDemo(e.target.innerHTML);
    e.target.classList.add('active');
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>JS-30</title>
        <meta
          name='description'
          content='Thibaud Gerin | Fullstack Developer | Javascript30'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Link href={'/projects'}>
        <a>&larr; back</a>
      </Link>
      <Selecteur>
        <span className='active' onClick={(e) => handleChange(e)} id='drumbox'>
          drumbox
        </span>
        <span onClick={(e) => handleChange(e)} id='dessin'>
          dessin
        </span>
        {/* <span onClick={(e) => handleChange(e)} id='video'>
          video
        </span>
        <span onClick={(e) => handleChange(e)} id='konami'>
          konami
        </span> */}
      </Selecteur>
      {loading && <p>loading...</p>}
      {drumbox && <Drumbox />}
      {dessin && <Canvas />}
      {/* {video && <Video />}
      {konami && <p>konami is on</p>} */}
    </>
  );
}

const Selecteur = styled.div`
  margin: 60px 0;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .active {
    background: linear-gradient(
      90deg,
      rgba(255, 51, 102, 1) 0%,
      rgba(32, 164, 243, 1) 35%,
      rgba(46, 196, 182, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2em;
  }
`;
