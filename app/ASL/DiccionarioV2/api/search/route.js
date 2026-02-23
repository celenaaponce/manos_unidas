import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function GET(request) {

  const { searchParams } = new URL(request.url);

  const query = searchParams.get("query");
  const theme = searchParams.get("theme");

  let filter;

  // Build filter only when needed
  if (query && theme) {

    filter = {
      and: [
        {
          property: "Word",
          title: {
            contains: query,
          },
        },
        {
          property: "Themes",
          multi_select: {
            contains: theme,
          },
        },
      ],
    };

  } else if (query) {

    filter = {
      property: "Word",
      title: {
        contains: query,
      },
    };

  } else if (theme) {

    filter = {
      property: "Themes",
      multi_select: {
        contains: theme,
      },
    };

  }

  try {

    // IMPORTANT: only include filter if it exists
    const queryOptions = {
      database_id: process.env.NOTION_DATABASE,
      sorts: [
        {
          property: "Word",
          direction: "ascending",
        },
      ],
      page_size: 50,
    };

    if (filter) {
      queryOptions.filter = filter;
    }

    const response = await notion.databases.query(queryOptions);

    return NextResponse.json({
      results: response.results,
    });

  } catch (error) {

    console.error("Notion search error:", error);

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );

  }

}