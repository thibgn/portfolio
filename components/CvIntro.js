import { Colors } from '../styles/ThemeConfig';
import styled from 'styled-components';
import Image from 'next/image';

export default function CvIntro() {
  return (
    <Intro>
      <Image src='/profile.png' width='300' height='300' alt='Thibaud Gerin' />
      <span>
        <Subtitle>Hello I'm Thibaud 👋</Subtitle>
        I’m a digital crafter & acquisition specialist, living in the south of
        France. I love technology as much as nature, enthusiastic when it comes
        to music, personal development, crypto and many other things.
      </span>
    </Intro>
  );
}

const Subtitle = styled.h2`
  line-height: 0.8rem;
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
