import useDarkMode from 'use-dark-mode';
import styled from 'styled-components';

export default function ToggleTheme() {
  const darkMode = useDarkMode(true);

  return darkMode.value === true ? (
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
  );
}

const ToggleDark = styled.div`
  @media screen and (max-width: 500px) {
    width: 30px;
  }
  & > svg {
    padding-top: 10px;
    width: 40px;
    cursor: pointer;

    &:hover {
      fill: #031a2f;
    }
  }
`;
const ToggleLigth = styled.div`
  @media screen and (max-width: 500px) {
    width: 30px;
  }
  & > svg {
    padding-top: 10px;
    width: 40px;
    cursor: pointer;

    &:hover {
      fill: #f6f7f8;
    }
  }
`;
