import styled from 'styled-components';
import Image from 'next/image';

export default function CvIntro() {
  return (
    <Intro>
      <Image src='/profile.png' width='500' height='500' alt='Thibaud Gerin' />
      <span>
        <Subtitle>Hello I&apos;m Thibaud 👋</Subtitle>
        I’m a digital crafter & acquisition specialist, living in the south of
        France. I love technology as much as nature, enthusiastic when it comes
        to music, personal development, crypto and many other things.
      </span>
    </Intro>
  );
}

const Intro = styled.div`
  margin: 60px 0;
  line-height: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  > * > img {
    border-radius: 50%;
  }

  @media screen and (max-width: 425px) {
    margin-left: -40%;
    > * > img {
      display: none !important;
    }
  }
`;

const Subtitle = styled.h2`
  line-height: 2rem;
`;
