import '../styles/globals.css';
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import styled, { ThemeProvider } from 'styled-components';
import Nav from '../components/Nav';
import { lightTheme, darkTheme, GlobalStyles } from '../styles/themeConfig';
import { useDarkMode } from '../utils/useDarkMode';

export default function MyApp({ Component, pageProps }) {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'dark' ? darkTheme : lightTheme;

  if (!componentMounted) {
    return <div></div>;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Main>
        <Nav theme={theme} toggleTheme={toggleTheme} />
        <Component {...pageProps} />
      </Main>
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
