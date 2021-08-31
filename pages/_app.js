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
  console.log(darkMode);
  console.log(theme);

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
            {darkMode.value === true ? (
              <ToggleLigth onClick={darkMode.toggle}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1}
                    d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                  />
                </svg>
              </ToggleLigth>
            ) : (
              <ToggleDark onClick={darkMode.toggle}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1}
                    d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                  />
                </svg>
              </ToggleDark>
            )}
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
  margin: 80px 0;
  font-size: 3.5rem;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ToggleDark = styled.div`
  & > svg {
    padding-top: 10px;
    width: 40px;

    &:hover {
      fill: #031a2f;
    }
  }
`;
const ToggleLigth = styled.div`
  & > svg {
    padding-top: 10px;
    width: 40px;

    &:hover {
      fill: #f6f7f8;
    }
  }
`;
