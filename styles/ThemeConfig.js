import { createGlobalStyle } from 'styled-components';

export const Colors = {
  dark: '#031A2F',
  primary: '#FF3366',
  secondary: '#2EC4B6',
  accent: '#20A4F3',
  light: '#F6F7F8',
};

export const lightTheme = {
  body: Colors.light,
  text: Colors.dark,
  toggleBorder: Colors.light,
  background: Colors.dark,
};

export const darkTheme = {
  body: Colors.dark,
  text: Colors.light,
  toggleBorder: Colors.dark,
  background: Colors.light,
};

export const Fonts = {
  titles: "'Noto Sans JP', sans-serif",
  paragraphs: "'Roboto Mono', monospace",
};

export const GlobalStyles = createGlobalStyle`
 
body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    font-family: ${Fonts.paragraphs}
  }
`;
