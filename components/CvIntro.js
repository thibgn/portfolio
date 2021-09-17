import styled from 'styled-components';
import Image from 'next/image';
import { content } from '../content/index';

export default function CvIntro() {
  const locale = 'fr';
  const translated = locale == 'fr' ? content.fr : content.en;
  return (
    <Intro>
      <Image src='/profile.png' width='500' height='500' alt='Thibaud Gerin' />
      <span>
        <Subtitle>{translated.intro_h}</Subtitle>
        {translated.intro_p}
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
