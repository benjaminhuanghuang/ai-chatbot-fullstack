import { FaArrowUp } from 'react-icons/fa';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRef, useState, useEffect } from 'react';
import TypingIndicator from './TypingIndicator';
import type { Message } from './ChatMessages';
import ChatMessages from './ChatMessages';

type FormData = {
   prompt: string;
};

type ChatResponse = {
   message: string;
};

export const ChatBot = () => {
   const [messages, setMessages] = useState<Message[]>([]);
   const [isBotTyping, setIsBotTyping] = useState(false);
   const [error, setError] = useState<string | null>(null);
   const conversationId = useRef(crypto.randomUUID());
   const lastMessageRef = useRef<HTMLDivElement>(null);
   const { register, handleSubmit, reset, formState } = useForm<FormData>();

   useEffect(() => {
      if (lastMessageRef.current) {
         lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
      }
   }, [messages]);

   const onSubmit = async ({ prompt }: FormData) => {
      try {
         const currentConversationId = conversationId.current;
         setMessages((prev) => [...prev, { role: 'user', content: prompt }]);
         setIsBotTyping(true);
         setError(null);
         // console.log(data);
         reset({
            prompt: '',
         });
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

   const onKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
         e.preventDefault();
         handleSubmit(onSubmit)();
      }
   };

   return (
      <div className="flex flex-col h-full">
         <div className="flex flex-col flex-1 gap-3 mb-10 overflow-y-auto">
            <ChatMessages messages={messages} />
            {isBotTyping && <TypingIndicator />}
            {error && <p className="text-red-500">{error}</p>}
         </div>
         <form
            // eslint-disable-next-line react-hooks/refs
            onSubmit={handleSubmit(onSubmit)}
            onKeyDown={onKeyDown}
            className="flex flex-col gap-2 items-end border-2 p-4 rounded-3xl"
         >
            <textarea
               {...register('prompt', {
                  required: true,
                  validate: (value) => value.trim().length > 0,
               })}
               className="w-full border-0 focus:outline-0 resize-none"
               placeholder="Ask anything"
               maxLength={1000}
               autoFocus
            />
            <Button
               className="rounded-full w-9 h-9"
               disabled={!formState.isValid}
            >
               <FaArrowUp />
            </Button>
         </form>
      </div>
   );
};
