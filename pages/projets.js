import Head from 'next/head';
import styled from 'styled-components';

import { getDatabase } from '../utils/notion';
import ProjectItem from '../components/ProjectItem';
import Nav from '../components/Nav';
import { getRandomPhoto } from '../utils/unsplash';

export const getStaticProps = async () => {
  const projects = await getDatabase(process.env.NOTION_PROJECTS_DB);
  const photo = await getRandomPhoto();
  return {
    props: {
      projects,
      photo,
    },
    revalidate: 1,
  };
};

export default function Portfolio({ projects, photo }) {
  console.log(projects);
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta
          name='description'
          content='Thibaud Gerin | Fullstack Developer | Portfolio'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav title='Projets' />
      <br />
      <ProjectGrid>
        {projects.map((p) => {
          return <ProjectItem p={p} key={p.id} photo={photo} />;
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
`;
