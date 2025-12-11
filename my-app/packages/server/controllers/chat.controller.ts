import type { Request, Response } from 'express';
import { chatService } from '../services/chat.service';
import z from 'zod';

const chatSchema = z.object({
   prompt: z
      .string()
      .trim()
      .min(1, 'Prompt is required')
      .max(1000, 'Prompt is too long (max 1000 characters)'),
   conversationId: z.uuid(),
});

export class chatController {
   async sendMessage(req: Request, res: Response) {
      const parseResult = chatSchema.safeParse(req.body);
      if (!parseResult.success) {
         return res
            .status(400)
            .json({ errors: z.treeifyError(parseResult.error) });
      }
      try {
         const response = await chatService.sendMessage(prompt, conversationId);
         res.status(200).json({ response });
      } catch (error) {
         res.status(500).json({ error: 'Failed to send message' });
      }
   }
}
