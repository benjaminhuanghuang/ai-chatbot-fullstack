# Open source model

huggingface.co

## Create token

Settings -> AccessToken -> Read

## Using huggingface

```sh
bun add @huggingface/inference
```

```js
import { InferenceClient } from '@huggingface/inference';

const inferenceClient = new InferenceClient(process.env.HF_TOKEN);

async summarize(text: string) {
    const output = await inferenceClient.summarization({
        model: 'facebook/bart-large-cnn',
        inputs: text,
        provider: 'hf-inference',
    });
},
```

## Run model locally

Install ollama

Run Meta’s LLaMA 3.1 large language model locally using Ollama

```sh
ollama run llama3.1

ollama rm llama3.1

ollama list
ollama ps
```

## Run Hugging face models with ollama

Hugging face -> Local App and Hardware
Use GGUF format

```sh
ollama run hf.co/.....
```

```js
async summarizeReviews(reviews: string) {
    const response = await ollamaClient.chat({
        model: 'tinyllama',
        messages: [
            {
                role: 'system',
                content: summarizePrompt,
            },
            {
                role: 'user',
                content: reviews,
            }
        ]
    });

    return response.message.content;
}
```
