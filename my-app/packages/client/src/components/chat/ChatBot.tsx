import axios from 'axios';
import { useRef, useState } from 'react';
import TypingIndicator from './TypingIndicator';
import type { Message } from './ChatMessages';
import ChatMessages from './ChatMessages';
import ChatInput, { type ChatFormData } from './ChatInput';

type ChatResponse = {
   message: string;
};

export const ChatBot = () => {
   const [messages, setMessages] = useState<Message[]>([]);
   const [isBotTyping, setIsBotTyping] = useState(false);
   const [error, setError] = useState<string | null>(null);
   const conversationId = useRef(crypto.randomUUID());

   const onSubmit = async ({ prompt }: ChatFormData) => {
      try {
         const currentConversationId = conversationId.current;
         setMessages((prev) => [...prev, { role: 'user', content: prompt }]);
         setIsBotTyping(true);
         setError(null);

         const { data } = await axios.post<ChatResponse>('/api/chat', {
            prompt,
            conversationId: currentConversationId,
         });
         // Note!, do not use setMessages([...messages, data.message]) here,
         // it will overwrite messages state set at line 21
         setMessages((prev) => [
            ...prev,
            { role: 'bot', content: data.message },
         ]);
         setIsBotTyping(false);
      } catch (err: unknown) {
         setIsBotTyping(false);
         if (err instanceof Error) {
            setError(err.message);
         } else {
            setError('Something went wrong');
         }
      }
   };

   return (
      <div className="flex flex-col h-full">
         <div className="flex flex-col flex-1 gap-3 mb-10 overflow-y-auto">
            <ChatMessages messages={messages} />
            {isBotTyping && <TypingIndicator />}
            {error && <p className="text-red-500">{error}</p>}
         </div>
         <ChatInput onSubmit={onSubmit} />
      </div>
   );
};
