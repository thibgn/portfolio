import {
  notionAPI,
  getDatabase,
  getPropertiesFromPage,
} from '../../utils/notion';
import { NotionRenderer, Code } from 'react-notion-x';
import styled from 'styled-components';
import Nav from '../../components/Nav';
import TagList from '../../components/TagList';

export const getStaticPaths = async () => {
  const database = await getDatabase(process.env.NOTION_PROJECTS_DB);
  return {
    paths: database.map((project) => ({ params: { id: project.id } })),
    fallback: true,
  };
};

export async function getStaticProps(context) {
  const { id } = context.params;
  const recordMap = await notionAPI.getPage(id);
  // const title = await getTitleFromId(id);
  const properties = await getPropertiesFromPage(id);

  return {
    props: {
      recordMap,
      properties,
    },
    revalidate: 1,
  };
}

export default function Project({ recordMap, properties }) {
  const title = properties.title.title[0].plain_text || '';
  const tags = properties.tags.multi_select || '';
  const url = properties.url?.url || '';
  return (
    <>
      {recordMap && (
        <>
          <Nav title={title} />
          <ProjectHead>
            <TagList tags={tags} />
            <a href={url} className='link_icon'>
              www&nbsp;
              <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor'>
                <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
                <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
              </svg>
            </a>
          </ProjectHead>
          <br />
          <br />
          <br />
          <br />
          <NotionRenderer
            recordMap={recordMap}
            components={{
              code: Code,
            }}
          />
        </>
      )}
    </>
  );
}

const ProjectHead = styled.div`
  display: flex;
  flex-wrap: wrap;
  line-height: 2.2rem;
  justify-content: space-between;
  align-items: baseline;

  @media (min-width: 768px) {
  }
`;
