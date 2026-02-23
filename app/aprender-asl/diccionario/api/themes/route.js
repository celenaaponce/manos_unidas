import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function GET() {

  try {

    const themesSet = new Set();

    let cursor = undefined;
    let hasMore = true;

    while (hasMore) {

      const response =
        await notion.databases.query({

          database_id:
            process.env.NOTION_DATABASE,

          start_cursor: cursor,

          page_size: 100,

        });

      response.results.forEach(page => {

        const multi =
          page.properties.Themes?.multi_select || [];

        multi.forEach(t =>
          themesSet.add(t.name)
        );

      });

      hasMore = response.has_more;
      cursor = response.next_cursor;

    }

    const themes =
      Array.from(themesSet).sort();

    return NextResponse.json({

      themes,

    });

  } catch (error) {

    console.error(
      "Themes API error:",
      error
    );

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );

  }

}