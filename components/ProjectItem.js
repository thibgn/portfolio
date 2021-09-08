import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { Colors } from '../styles/ThemeConfig';
import useDarkMode from 'use-dark-mode';

export default function ProjectItem({ p }) {
  const theme = useDarkMode().value === true ? 'dark' : 'light';

  const img = p.properties.img_url.rich_text[0]?.plain_text || '';
  const name = p.properties.title.title[0]?.plain_text || '';
  const tags = p.properties.tags?.multi_select || '';
  const desc = p.properties.description.rich_text[0]?.plain_text || '';

  return (
    <Link href={`/projects/${p.id}`} key={p.id}>
      <a>
        <Image src={img} width={400} height={300} placeholder={blur} alt='' />
        <div className='project_details'>
          <p className='project_name'>{name}</p>
          <div className='project_tags'>
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
        </div>
        <span className='project_desc'>{desc}</span>
      </a>
    </Link>
  );
}

const Tag = styled.span`
  border: 1px solid ${(props) => Colors[props.background]};
  color: ${(props) => Colors[props.background]};
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.66em;
  margin-top: 6px;
  margin-left: 4px;
  letter-spacing: 1px;
  cursor: default;
  transition: all 0.4s;
  &: hover {
    background: ${(props) => Colors[props.background]};

    color: ${(props) => (props.theme === 'dark' ? Colors.dark : Colors.light)};
  }
`;
