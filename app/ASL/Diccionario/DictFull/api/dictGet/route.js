import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function GET(request) {
  // const { searchParams } = new URL(request.url);
  const nextCursor = request.headers.get('x-next-cursor');
  const queryOptions = {
    database_id: process.env.NOTION_DATABASE,
    sorts: [{ property: "Word", direction: "ascending" }],
  };

  if (nextCursor) {
    queryOptions.start_cursor = nextCursor;
  }
  try {
    const response = await notion.databases.query(queryOptions);
    return NextResponse.json({ response });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}