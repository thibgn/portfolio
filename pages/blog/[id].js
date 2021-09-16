import {
  notionAPI,
  getDatabase,
  getPropertiesFromPage,
} from '../../utils/notion';
import { NotionRenderer, Code } from 'react-notion-x';

export const getStaticPaths = async () => {
  const database = await getDatabase(process.env.NOTION_BLOG_DB);
  return {
    paths: database.map((post) => ({ params: { id: post.id } })),
    fallback: true,
  };
};

export async function getStaticProps(context) {
  const { id } = context.params;
  const recordMap = await notionAPI.getPage(id);
  const properties = await getPropertiesFromPage(id);

  return {
    props: {
      recordMap,
      properties,
    },
    revalidate: 1,
  };
}

export default function Post({ recordMap, properties }) {
  const title = properties.title.title[0].plain_text;
  return (
    <>
      <h1>{title}</h1>
      <NotionRenderer
        recordMap={recordMap}
        components={{
          code: Code,
        }}
      />
    </>
  );
}
