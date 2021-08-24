import { notionAPI, getDatabase, getTitleFromId } from '../../utils/notion';
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
  const title = await getTitleFromId(id);

  return {
    props: {
      recordMap,
      title,
    },
    revalidate: 1,
  };
}

export default function Post({ recordMap, title }) {
  (() => {
    console.log(title);
  })();

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
