import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const testCursor = searchParams.get('next_cursor');
  let response;
  if (testCursor) {
    response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE,
        sorts: [{ property: 'Word', direction: 'ascending' }],
        start_cursor: testCursor,
      });
  }
  else{
    response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE,
        sorts: [{ property: 'Word', direction: 'ascending' }],
      });
  }

  return NextResponse.json({ response });
}