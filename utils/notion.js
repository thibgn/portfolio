import { NotionAPI } from 'notion-client';
import { Client } from '@notionhq/client';

// Initializing a wrapped client
export const notionAPI = new NotionAPI({
  authToken: process.env.NOTION_TOKEN_V2,
});

// Initializing a standard client
export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response.results;
};

export const getPostIdFromSlug = async (slug) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_BLOG_DB,
    filter: {
      property: 'slug',
      rich_text: {
        equals: slug,
      },
    },
  });
  return response.results;
};
