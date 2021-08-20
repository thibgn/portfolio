import { createGlobalStyle } from 'styled-components';
import { Colors } from './theme';

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

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`;
