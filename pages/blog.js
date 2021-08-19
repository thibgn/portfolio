import { getDatabase } from '../utils/notion';
// import { Link } from 'next/link';

export const getStaticProps = async () => {
  const posts = [];
  const postsRaw = await getDatabase(process.env.NOTION_BLOG_DB);

  postsRaw.map((post) => {
    console.log(post);
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
    <main>
      <h1>This is the blog</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <a href={`/blog/${post.id}`}>{post.title}</a>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
