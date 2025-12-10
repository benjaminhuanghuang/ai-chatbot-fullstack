import dotenv from "dotenv";
import { OpenAI } from "openai/client.js";

dotenv.config();

export const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const client = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

const response = await client.responses.create({
  model: "gpt-4o",
  input: "Write a story about a robot",
  temperature: 0.7,
  max_output_tokens: 50,
});
console.log(response);

const stream = await client.responses.create({
  model: "gpt-4o",
  input: "Write a story about a robot",
  temperature: 0.7,
  max_output_tokens: 50,
  stream: true,
});

for await (const event of stream) {
  if (event.delta) {
    process.stdout.write(event.delta);
    // console.log(event.delta);
  }
}
