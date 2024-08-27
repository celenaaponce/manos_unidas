import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
export async function POST(request) {
  const data = await request.json(); // Parse the JSON body

//   console.log(data.acquisition);
  const id = await createParent({
    title: data["first-name"] + " " + data["last-name"],
    residence: data.address,
    email: data.email,
    phone: data.phone,
    contact: data.acquisition,
    dhh: data.dhh,
  }); // Call your function to create an item
  console.log(id)
  return NextResponse.json({ id });
}


function createParent({ title, residence, email, phone, contact, dhh }) {
  notion.pages.create({
    parent: {
      database_id: process.env.FAMILY_DATABASE,
    },
    properties: {
      [process.env.NOTION_PARENT_NAME_ID]: {
        title: [
          {
            type: "text",
            text: {
              content: title,
            },
          },
        ],
      },
      [process.env.NOTION_RESIDENCE_ID]: {
        rich_text: [
          {
            type: "text",
            text: {
              content: residence,
            },
          },
        ],
      },
      [process.env.NOTION_EMAIL_ID]: {
        email: email,
      },
      [process.env.NOTION_PHONE_ID]: {
        phone_number: phone,
      },
      [process.env.NOTION_CONTACT_ID]: {
        multi_select: contact.map((tag) => {
          return { name: tag };
        }),
      },
      [process.env.NOTION_DHH_ID]: {
        select: { name: dhh },
      },
    },
  });
}
