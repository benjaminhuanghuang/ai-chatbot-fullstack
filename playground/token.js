// tiktoken, OpenAI’s tokenizer library
import { get_encoding } from "tiktoken";

const encoding = get_encoding("cl100k_base");

const text = "Hello, world!";

// 使用 BPE（Byte-Pair Encoding）算法，将字符串切分为子词（subword）片段，并将每个片段映射到唯一的整数 token ID。
const tokens = encoding.encode(text);

console.log("Text:", text);
console.log("Tokens:", tokens);
console.log("Number of tokens:", tokens.length);
