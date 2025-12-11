import type { Chat } from 'openai/resources.js';
import { conversationRepository } from '../repositories/conversation.repository';
import { OpenAI } from 'openai/client.js';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

type ChatResponse = {
   id: string;
   message: string;
};

export const chatService = {
   async sendMessage(
      prompt: string,
      conversationsId: string
   ): Promise<ChatResponse> {
      const response = await client.responses.create({
         model: 'gpt-4o-mini!',
         input: prompt,
         temperature: 0.2,
         max_output_tokens: 100,
         previous_response_id:
            conversationRepository.getLastResponseId(conversationsId),
      });
      conversationRepository.setLastResponseId(conversationsId, response.id);
      return { id: response.id, message: response.output_text };
   },
};
