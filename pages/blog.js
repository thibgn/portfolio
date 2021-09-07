import Head from 'next/head';
import { getDatabase } from '../utils/notion';
import Link from 'next/link';

export const getStaticProps = async () => {
  const posts = [];
  const postsRaw = await getDatabase(process.env.NOTION_BLOG_DB);

  postsRaw.map((post) => {
    posts.push({
      id: post.id,
      title: post.properties.title.title[0].plain_text,
      slug: post.properties.slug.rich_text[0].plain_text,
    });
  });

  return {
    props: {
      posts: posts,
    },
    revalidate: 1,
  };
};

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta
          name='description'
          content='Thibaud Gerin | Fullstack Developer | Blog'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
