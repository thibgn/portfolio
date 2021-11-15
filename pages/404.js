// 404.js
import Link from 'next/link';
import styled from 'styled-components';

export default function FourOhFour() {
  return (
    <>
      <ErrorPage>
        <h1>404</h1>{' '}
        <Link href='/'>
          <a className='underlined underlined--offset'>Take me home </a>
        </Link>
      </ErrorPage>
    </>
  );
}

const ErrorPage = styled.div`
  display: grid;
  place-content: center;
  height: 66vh;

  a {
    margin: 0 auto;
  }

  h1 {
    font-size: 8em;
    animation: glitch 1s linear infinite;
  }

  @keyframes glitch {
    2%,
    64% {
      transform: translate(2px, 0) skew(0deg);
    }
    4%,
    60% {
      transform: translate(-2px, 0) skew(0deg);
    }
    62% {
      transform: translate(0, 0) skew(5deg);
    }
  }

  h1:before,
  h1:after {
    content: '404';
    position: absolute;
    left: 0;
    color: #ff3366;
    z-index: -1;
  }

  h1:before {
    animation: glitchTop 1s linear infinite;
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  }

  @keyframes glitchTop {
    2%,
    64% {
      transform: translate(2px, -2px);
    }
    4%,
    60% {
      transform: translate(-2px, 2px);
    }
    62% {
      transform: translate(13px, -1px) skew(-13deg);
    }
  }

  h1:after {
    animation: glitchBotom 1.5s linear infinite;
    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  }

  @keyframes glitchBotom {
    2%,
    64% {
      transform: translate(-2px, 0);
    }
    4%,
    60% {
      transform: translate(-2px, 0);
    }
    62% {
      transform: translate(-22px, 5px) skew(21deg);
    }
  }
`;
