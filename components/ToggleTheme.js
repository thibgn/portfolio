import React from 'react';
import styled from 'styled-components';

export default function ToggleTheme({ theme, toggleTheme }) {
  const iDark = theme === 'dark';
  return <ToggleButton onClick={toggleTheme} />;
}

const ToggleButton = styled.button`
  height: 32px;
  padding: 16px;
`;
