import Link from 'next/link';
import styled from 'styled-components';

export default function Back({ path, name, home }) {
  return (
    <Ariane>
      &larr;&nbsp;
      {home && (
        <Link href={'/'}>
          <a>home&nbsp;</a>
        </Link>
      )}
      {path && (
        <Link href={path}>
          <a>/&nbsp;{name}</a>
        </Link>
      )}
    </Ariane>
  );
}

const Ariane = styled.div`
  display: flex;

  a {
    opacity: 0.6;
    transition: all 0.25s;
    &:hover {
      opacity: 1;
    }
  }
`;
