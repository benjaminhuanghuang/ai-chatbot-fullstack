import { get_encoding } from "tiktoken";

const encoding = get_encoding("cl100k_base");

const text = "Hello, world!";
const tokens = encoding.encode(text);

console.log("Text:", text);
console.log("Tokens:", tokens);
console.log("Number of tokens:", tokens.length);
