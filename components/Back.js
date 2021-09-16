import Link from 'next/link';
import styled from 'styled-components';

export default function Back({ path, name, home }) {
  return (
    <Ariane>
      {path && (
        <Link href={path}>
          <a>/&nbsp;{name}</a>
        </Link>
      )}
      {home && (
        <Link href={'/'}>
          <a>&larr;&nbsp;home&nbsp;</a>
        </Link>
      )}
    </Ariane>
  );
}

const Ariane = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media screen and (max-width: 767px) {
    font-size: 0.7rem;
  }

  a {
    opacity: 0.5;
    transition: all 0.25s;
    &:hover {
      opacity: 1;
    }
  }
`;
