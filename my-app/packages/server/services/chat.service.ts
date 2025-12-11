import { conversationRepository } from '../repositories/conversation.repository';
import { OpenAI } from 'openai/client.js';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const chatService = {
   async sendMessage(prompt: string, conversationsId: string) {
      const response = await client.responses.create({
         model: 'gpt-4o-mini!',
         input: prompt,
         temperature: 0.2,
         max_output_tokens: 100,
         previous_response_id:
            conversationRepository.getLastResponseId(conversationsId),
      });
   },
};
