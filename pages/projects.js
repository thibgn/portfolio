import Head from 'next/head';
import styled from 'styled-components';

import { getDatabase } from '../utils/notion';
import ProjectItem from '../components/ProjectItem';

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
          return <ProjectItem p={p} key={p.id} />;
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
