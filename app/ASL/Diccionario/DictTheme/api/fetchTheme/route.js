import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function GET(request) {
  const theme = request.headers.get('x-filter'); // Get 'filter' value from a custom header
  const nextCursor = request.headers.get('x-next-cursor'); // Get 'next_cursor' value from a custom header

  const queryOptions = {
    database_id: process.env.NOTION_DATABASE,
    sorts: [{ property: "Word", direction: "ascending" }],
  };

  if (theme) {
    if (theme.includes(",")) {
      const themes = theme.split(", ");
      queryOptions.filter = {
        or: themes.map((t) => ({
          property: "Themes",
          multi_select: {
            contains: t,
          },
        })),
      };
    } else {
      queryOptions.filter = {
        property: "Themes",
        multi_select: {
          contains: theme,
        },
      };
    }
  }

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
