import styled from 'styled-components';
import ToggleTheme from '../components/ToggleTheme';

export default function Nav({ title }) {
  return (
    <NavWrapper>
      <Title>{title}</Title>
      <ToggleTheme />
    </NavWrapper>
  );
}

const Title = styled.h1`
  margin: 80px 0;
  font-size: 3.5rem;

  @media screen and (max-width: 767px) {
    font-size: 2rem;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
