import styled from 'styled-components';
import ToggleTheme from '../components/ToggleTheme';
import Back from './Back';
import { useRouter } from 'next/router';

export default function Nav({ title }) {
  const router = useRouter();
  const isProjets = router.pathname == '/projets';
  const isBlog = router.pathname == '/blog';
  const isProjet = router.pathname == '/projets/[id]';
  const isJS30 = router.pathname == '/projets/js30';
  const isArticle = router.pathname == '/blog/[id]';

  console.log(router.pathname);
  console.log(router);
  return (
    <NavWrapper>
      <div>
        {isBlog && <Back home />}
        {isProjets && <Back home />}
        {isProjet && <Back path={'/projets'} name={'projets'} home />}
        {isArticle && <Back path={'/blog'} home />}
        {isJS30 && <Back path={'/projets'} name={'projets'} home />}
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
