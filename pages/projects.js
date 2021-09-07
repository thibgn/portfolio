import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';

import { getDatabase } from '../utils/notion';
import { Colors } from '../styles/ThemeConfig';

export const getStaticProps = async () => {
  const projects = await getDatabase(process.env.NOTION_PROJECTS_DB);
  return {
    props: {
      projects,
    },
    revalidate: 1,
  };
};

export default function Projects({ projects }) {
  const theme = useDarkMode().value === true ? 'dark' : 'light';
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta
          name='description'
          content='Thibaud Gerin | Fullstack Developer | Projects'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ProjectGrid>
        {projects.map((p) => {
          return (
            <Link href={`/projects/${p.id}`} key={p.id}>
              <a>
                <Image
                  src={p.properties.img_url.rich_text[0].plain_text}
                  width={400}
                  height={300}
                  placeholder={blur}
                  alt=''
                />
                <div className='project_details'>
                  <p className='project_name'>
                    {p.properties.title.title[0].plain_text}
                  </p>
                  <div className='project_tags'>
                    {p.properties.tags.multi_select.map((tag) => {
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
                <span className='project_desc'>
                  {p.properties.description.rich_text[0].plain_text}
                </span>
              </a>
            </Link>
          );
        })}
      </ProjectGrid>
    </>
  );
}

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  line-height: 0.8em;
  grid-gap: 4em 2em;
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  > a {
    width: 100%;
    max-width: 400px;
    padding-bottom: 20px;
  }

  .project_details {
    padding: 4px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .project_tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .project_name {
    line-height: 1.4em;
    font-size: 0.9em;
  }

  .project_desc {
    font-size: 0.75em;
    opacity: 0.7;
  }
`;

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
