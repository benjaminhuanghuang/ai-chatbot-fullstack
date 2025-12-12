import express from 'express';
import type { Request, Response } from 'express';

import { chatController } from './controllers/chat.controller';

const router = express.Router();

router.get('/health', (req: Request, res: Response) => {
   res.json({ status: 'ok' });
});

router.post('/api/chat', chatController.sendMessage);

router.get('/api/products/:id/reviews', reviewController.getReviews);

router.post(
   '/api/products/:id/reviews/summarize',
   reviewController.summarizeReviews
);

export default router;
