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

- Reasoning: Extract, classify, summarize
- Cost
- Speed
- Context
- Modalities
- Privacy

机器学习/深度学习中的 modality（模态）指一种 数据类型或感知通道。例如：

文本（text）
图像（image）
音频（audio）
视频（video）
传感器数据（sensor data）
多模态模型（multimodal models） 就是同时处理多种数据，如图文、视听等。

例如：ChatGPT Vision 是 视觉 + 文本模态；语音助手是 语音（音频）+ 文本 模态。
