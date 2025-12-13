import { llmClient } from '../llm/client';
import { reviewRepository } from '../repositories/review.repository';
import { OpenAI } from 'openai/client.js';

export const reviewService = {
   async summarizeReviews(productId: number): Promise<string> {
      const existingSummary =
         await reviewRepository.getReviewSummary(productId);
      if (existingSummary) {
         return existingSummary;
      }

      // Get the last 10 reviews
      const reviews = await reviewRepository.getReviews(productId, 10);
      const joinedReviews = reviews.map((r) => r.content).join('\n\n');

      const summary = await llmClient.summarizeReviews(joinedReviews);

      await reviewRepository.storeReviewSummary(productId, summary);

      return summary;
   },

   async summarizeReviews_OpenAI(productId: number): Promise<string> {
      // Get the last 10 reviews
      const reviews = await reviewRepository.getReviews(productId, 10);
      const joinedReviews = reviews.map((r) => r.content).join('\n\n');

      const prompt = `
      Summarize the following customer reviews into a shot paragraph, 
      highlighting key themes, both positive and negative:
      ${joinedReviews}
      `;

      const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
      const response = await client.responses.create({
         model: 'gpt-4o-mini',
         input: prompt,
         temperature: 0.2,
         max_output_tokens: 100,
      });

      return response.output_text;
   },
};
