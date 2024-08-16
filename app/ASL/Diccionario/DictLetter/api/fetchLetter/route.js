import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const letter = searchParams.get("filter");
  const nextCursor = searchParams.get("next_cursor");
  let response;
  const queryOptions = {
    database_id: process.env.NOTION_DATABASE,
    sorts: [{ property: "Word", direction: "ascending" }],
  };
  if (nextCursor) {
    queryOptions.start_cursor = queryOptions.start_cursor = nextCursor;
    queryOptions.filter = queryOptions.filter = {
      property: "Word",
      title: {
        starts_with: letter,
      },
    };
    response = await notion.databases.query(queryOptions);
    return NextResponse.json({ response });
  } else if (letter) {
    queryOptions.filter = queryOptions.filter = {
      property: "Word",
      title: {
        starts_with: letter,
      },
    };
    response = await notion.databases.query(queryOptions);
    return NextResponse.json({ response });
  }else {
    return NextResponse.json({ message: "no letter to filter by" });
  }
}
