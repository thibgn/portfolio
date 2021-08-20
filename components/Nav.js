import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ToggleTheme from '../components/ToggleTheme';

export default function Nav({ theme, toggleTheme }) {
  const [pageTitle, setPageTitle] = useState();

  useEffect(() => {
    setPageTitle(window.document.title);
  }, [pageTitle]);

  return (
    <NavWrapper>
      <Title>{pageTitle}</Title>
      <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
    </NavWrapper>
  );
}
const Title = styled.h1`
  font-size: 3.5rem;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
