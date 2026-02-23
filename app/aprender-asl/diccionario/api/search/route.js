import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function GET(request) {

  const { searchParams } = new URL(request.url);

  const query = searchParams.get("query");
  const theme = searchParams.get("theme");
  const cursor = searchParams.get("cursor");

  let filter;

  if (query && theme) {

    filter = {
      and: [
        {
          property: "Word",
          title: { contains: query },
        },
        {
          property: "Themes",
          multi_select: { contains: theme },
        },
      ],
    };

  } else if (query) {

    filter = {
      property: "Word",
      title: { contains: query },
    };

  } else if (theme) {

    filter = {
      property: "Themes",
      multi_select: { contains: theme },
    };

  }

  try {

    const response =
      await notion.databases.query({

        database_id:
          process.env.NOTION_DATABASE,

        page_size: 50,

        start_cursor:
          cursor || undefined,

        sorts: [
          {
            property: "Word",
            direction: "ascending",
          },
        ],

        ...(filter && { filter }),

      });

    return NextResponse.json({

      results: response.results,

      nextCursor: response.next_cursor,

      hasMore: response.has_more,

    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );

  }

}