import fs from 'fs';
import path from 'path';
import { conversationRepository } from '../repositories/conversation.repository';
import { OpenAI } from 'openai/client.js';
import template from '../prompts/chatbot.txt';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const parkInfo = fs.readFileSync(
   path.join(__dirname, '..', 'prompts', 'WonderWorld.md'),
   'utf-8'
);
const instructions = template.replace('{{parkInfo}}', parkInfo);

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
         model: 'gpt-4o-mini',
         input: prompt,
         instructions,
         temperature: 0.2,
         max_output_tokens: 100,
         previous_response_id:
            conversationRepository.getLastResponseId(conversationsId),
      });
      conversationRepository.setLastResponseId(conversationsId, response.id);
      return { id: response.id, message: response.output_text };
   },
};
