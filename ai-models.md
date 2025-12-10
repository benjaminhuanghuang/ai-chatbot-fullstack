# Introduction to AI Models

What Can You Do With Language Models?

Understanding Tokens and Context Window

Counting Tokens

Choosing the Right Model

Understanding Model Settings

Calling Models

## ESSENTIAL AI SKILLS

● Large Language Models (LLMs)
● Prompt Engineering
● Retrieval-Augmented Generation (RAG)
● Vector Databases
● Building Agents

## LLM

A system that's trained to understand and generate human language

## Token

<https://platform.openai.com/tokenizer>

- Whole words ("Paris")
- Parts of words ("engineer")
- Punctuation
- Emojis or spaces
- ~3/4 of a word

## CONTEXT WINDOW

● Our prompt (input)
● Model's response
● The chat history

GPT-4o Mini: 128K
GPT-4.1: 1M
Mistral: 32K

## get tokens

```sh
npm init -y
npm i tiktoken
```

## Choosing the Right Model

- Reasoning
- Cost
- Speed
- Context
- Modalities
- Privacy
