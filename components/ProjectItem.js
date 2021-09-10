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
    <Projet>
      <Link href={`/projects/${p.id}`} key={p.id} className='project'>
        <a>
          <Image src={img} width={400} height={300} placeholder={blur} alt='' />
          <div className='project_details'>
            <span className='project_name'>{name}</span>
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
            <p className='project_desc'>{desc}</p>
          </div>
        </a>
      </Link>
    </Projet>
  );
}

const Projet = styled.div`
  > a {
    width: 100%;
    max-width: 400px;
    padding-bottom: 20px;
    transition: all 0.3s;
    & > div {
      position: relative;
    }
  }

  .project_tags {
    position: absolute;
    bottom: 85%;
    right: 8px;
    z-index: 10;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
  }

  .project_details {
    padding: 22px 2px 0 2px;
    align-items: baseline;
  }

  .project_name {
    line-height: 1.4em;
    font-size: 1em;
    font-weight: bold;
  }

  .project_desc {
    font-size: 0.8em;
    opacity: 0.7;
  }
`;

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
  
  &: hover {
    background: ${(props) =>
      props.theme === 'dark' ? Colors.dark : Colors.light};
    color:${(props) => Colors[props.background]};
`;
