import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image';
import { Colors } from '../styles/ThemeConfig';
import useDarkMode from 'use-dark-mode';

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
      <Intro>
        <Image
          src='/profile.png'
          width='300'
          height='300'
          alt='Thibaud Gerin'
        />
        <span>
          <Subtitle>Hello I'm Thibaud 👋</Subtitle>
          I’m a digital crafter & acquisition specialist, living in the south of
          France. I love technology as much as nature, enthusiastic when it
          comes to music, personal development, crypto and many other things.
        </span>
      </Intro>
      <Resume>
        <Section theme={theme}>
          <div className='category'>Core Kit</div>
          <div className='desc'>
            <p>Front end</p>
            <p>Back end</p>
            <p>Design</p>
            <p>Acquisition</p>
          </div>
        </Section>
        <Section theme={theme}>
          <div className='category'>
            <span>Soft skills</span>
          </div>
          <div className='desc'>
            <p>Creativity</p>
            <p>Problem solving</p>
            <p>Loyalty</p>
          </div>
        </Section>
        <Section theme={theme}>
          <h2 className='title'>experiences</h2>
        </Section>
        <Section theme={theme}>
          <div className='category'>2018 - 2019</div>
          <div className='desc'>
            <span>Product Owner @Onepark</span>
          </div>
        </Section>
        <Section theme={theme}>
          <div className='category'>2014 - 2018</div>
          <div className='desc'>
            <span>Digital Marketing @Onepark</span>
          </div>
        </Section>
        <Section theme={theme}>
          <h2 className='title'>formations</h2>
        </Section>
        <Section theme={theme}>
          <div className='category'>2020</div>
          <div className='desc'>
            <span>Le Wagon bootcamp</span>
          </div>
        </Section>
        <Section theme={theme}>
          <div className='category'>2011 - 13</div>
          <div className='desc'>
            <span>Master in Digital Communications</span>
          </div>
        </Section>
        <Section theme={theme}>
          <div className='category'>2008 - 11</div>
          <div className='desc'>
            <span>Licence in Computer Networking</span>
          </div>
        </Section>
        <Section theme={theme}>
          <h2 className='title'>hobbies</h2>
        </Section>
        <Section>
          <Hobbies theme={theme}>
            <p>
              Crypto Basketball Climbing Outdoors Chess Yoga Meditation Ski Moto
            </p>
          </Hobbies>
        </Section>
      </Resume>
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

const Subtitle = styled.h2`
  line-height: 0.8rem;
`;

const Resume = styled.div`
  margin: 40px 0;
  margin-bottom: 0;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    background: rgb(255, 51, 102);
    background: linear-gradient(
      180deg,
      rgba(255, 51, 102, 1) 0%,
      rgba(32, 164, 243, 1) 35%,
      rgba(46, 196, 182, 1) 100%
    );
    height: 100%;
    width: 4px;
    margin-left: -2px;
    left: 50%;
    top: 0;
    z-index: 1;
  }
`;

const Section = styled.div`
  margin: 40px 0;
  display: flex;
  align-items: center;
  position: relative;

  & > .title {
    margin: 0 auto;
    margin-top: 40px;
    padding-bottom: 10px;
    background: ${(props) =>
      props.theme === 'dark' ? Colors.dark : Colors.light};
    transition: all 0.5s linear;
    z-index: 10;
    font-variant: small-caps;
    font-size: 1.6rem;
  }

  & > .category {
    width: 50%;
    font-size: 1.3rem;
    font-weight: 600;
    text-align: right;
    padding-right: 40px;
  }

  & > .desc {
    width: 50%;
    font-size: 1.05rem;
    padding-left: 40px;

    & > p {
      line-height: 0.6rem;
    }

    &:before {
      content: '';
      position: absolute;
      background: ${(props) =>
        props.theme === 'dark' ? Colors.light : Colors.dark};
      padding: 10px;
      border-radius: 50%;
      left: 50%;
      top: 50%;
      margin-top: -14px;
      margin-left: -14px;
      border: 4px solid
        ${(props) => (props.theme === 'dark' ? Colors.dark : Colors.light)};
      z-index: 10;
      transition: all 0.5s linear;
    }
  }
`;

const Hobbies = styled.div`
  margin: 0 auto;
  margin-bottom: 40px;
  text-align: center;
  padding: 10px 20px;
  width: 50%;
  line-height: 1.5rem;
  border: 2px solid
    ${(props) => (props.theme === 'dark' ? Colors.light : Colors.dark)};
  border-radius: 80px;
  background: ${(props) =>
    props.theme === 'dark' ? Colors.dark : Colors.light};
  z-index: 10;
`;

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

const Intro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  > * > img {
    border-radius: 50%;
  }
`;

const Footer = styled.div`
  margin-top: 40px;
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
`;
