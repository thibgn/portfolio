import '../styles/globals.css';
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../styles/ThemeConfig';
import useDarkMode from 'use-dark-mode';
import { useEffect, useState } from 'react';

export default function MyApp({ Component, pageProps }) {
  const [pageTitle, setPageTitle] = useState();
  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(true);
  const theme = darkMode.value ? darkTheme : lightTheme;

  useEffect(() => {
    setIsMounted(true);
    setPageTitle(window.document.title);
  }, [pageTitle]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {isMounted && (
        <Main>
          <NavWrapper>
            <Title>{pageTitle}</Title>
            <ToggleButton onClick={darkMode.toggle} />
          </NavWrapper>
          <Component {...pageProps} />
        </Main>
      )}
    </ThemeProvider>
  );
}

const Main = styled.section`
  max-width: 700px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 3.5rem;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ToggleButton = styled.button`
  height: 32px;
  padding: 16px;
`;
