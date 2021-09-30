import { createGlobalStyle } from 'styled-components';

export const Colors = {
  dark: '#031A2F',
  primary: '#FF3366',
  secondary: '#2EC4B6',
  accent: '#20A4F3',
  light: '#F6F7F8',
  pink: '#EA9AEA',
  blue: '#71C8FE',
  green: '#8fc93a',
  red: '#ff0022',
  yellow: '#e4cc37',
  purple: '#9D7DDE',
  orange: '#FFBB33',
  darkorange: '#FD7E35',
  gray: '#626262',
  brown: '#9C7C6A',
  indigo: '#5e2bff',
  darkgreen: '#2b9720',
  lightgray: '#5b618a',
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

  .underlined {
    color: ${Colors.accent};
    line-height: 1.2;
    text-decoration: none;
    border-bottom: 1px solid ${Colors.light};
    background-position: 0 1.2em;
    background-size: 0 100%;
    background-repeat: no-repeat;
    transition: all .5s linear;

    &:hover {
      background-size: 100% 100%;
      border-color: transparent;
    }
  }
  
  .underlined--offset {
    box-shadow: inset 0 0.8em 0 0  ${({ theme }) => theme.body};
    background-image: linear-gradient(to right, ${Colors.accent} 0, 
      ${Colors.secondary} 100%);  
  }
  
`;
