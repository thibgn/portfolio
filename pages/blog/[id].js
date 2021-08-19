import { notionAPI, getDatabase } from '../../utils/notion';
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

  return {
    props: {
      recordMap,
    },
    revalidate: 1,
  };
}

export default function Post({ recordMap }) {
  return (
    <main>
      <h1>This is a post </h1>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={false}
        darkMode={false}
        components={{
          code: Code,
        }}
      />
    </main>
  );
}
