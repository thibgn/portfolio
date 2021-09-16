import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { Colors } from '../styles/ThemeConfig';

export default function TagList({ tags }) {
  const theme = useDarkMode().value === true ? 'dark' : 'light';
  return (
    <div>
      {tags.map((tag) => {
        return (
          <Tag
            key={tag.id}
            className='tag'
            background={tag.color}
            theme={theme}
          >
            {tag.name}
          </Tag>
        );
      })}
    </div>
  );
}

const Tag = styled.span`
  border: 1px solid ${(props) => Colors[props.background]};
  color: ${Colors.light};
  background: ${(props) => Colors[props.background]};
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.7em;
  margin-top: 6px;
  margin-left: 4px;
  letter-spacing: 1px;
  cursor: default;
  transition: all 0.4s;
  display: inline-flex;
  max-height: 25px;
  align-items: center;

  &: hover {
    background: ${(props) =>
      props.theme === 'dark' ? Colors.dark : Colors.light};
    color: ${(props) => Colors[props.background]};
  }

  @media (max-width: 610px) {
    font-size: 0.65em;
    padding: 2px 4px;
  }
`;
