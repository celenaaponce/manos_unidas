import fs from "fs";
import path from "path";
import OpenAI from "openai";

const openai = new OpenAI();

export async function POST(req) {
  const { text } = await req.json();

  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "shimmer",
    input: text, // Dynamic text input from the POST request
  });

  const speechFile = path.resolve("./speech.mp3");
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);

  return new Response("Speech synthesis complete. File saved.", {
    status: 200,
  });
}