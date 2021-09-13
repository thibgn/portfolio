import { notionAPI, getDatabase, getTitleFromId } from '../../utils/notion';
import { NotionRenderer, Code } from 'react-notion-x';
import Nav from '../../components/Nav';
import Back from '../../components/Back';

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
  const title = await getTitleFromId(id);

  return {
    props: {
      recordMap,
      title,
    },
    revalidate: 1,
  };
}

export default function Project({ recordMap, title }) {
  return (
    <>
      {recordMap && (
        <>
          <Nav title={title} />
          <Back path={'/projects'} name='projets' home />
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
