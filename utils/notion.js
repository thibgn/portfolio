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

export const getProjectIdFromSlug = async (slug) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_PROJECTS_DB,
    filter: {
      property: 'slug',
      text: {
        equals: slug,
      },
    },
  });
  return response.results[0].id;
};

export const getDatabase = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'published',
      checkbox: {
        equals: true,
      },
    },
  });
  return response.results;
};

export const getPropertiesFromPage = async (id) => {
  const response = await notion.pages.retrieve({
    page_id: id,
  });

  return response.properties;
};
