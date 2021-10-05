import styled from 'styled-components';
import ToggleTheme from '../components/ToggleTheme';
import Back from './Back';
import { useRouter } from 'next/router';

export default function Nav({ title }) {
  const router = useRouter();

  const re = new RegExp('/projets/(w*-?w*)*');

  const isProjets = router.pathname == '/projets';
  const isBlog = router.pathname == '/blog';
  const isProjet = re.test(router.pathname);
  const isArticle = router.pathname == '/blog/[id]';

  return (
    <NavWrapper>
      <div>
        {isBlog && <Back home />}
        {isProjets && <Back home />}
        {isProjet && <Back path={'/projets'} name={'projets'} home />}
        {isArticle && <Back path={'/blog'} home />}
        <Title>{title}</Title>
      </div>
      <ToggleTheme />
    </NavWrapper>
  );
}

const Title = styled.h1`
  font-size: 3.5rem;
  margin-left: 18px;

  @media screen and (max-width: 767px) {
    font-size: 2rem;
  }
`;

const NavWrapper = styled.div`
  div {
    display: flex;
    align-items: baseline;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
