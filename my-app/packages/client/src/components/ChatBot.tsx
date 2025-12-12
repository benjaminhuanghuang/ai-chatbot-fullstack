import { FaArrowUp } from 'react-icons/fa';
import { Button } from './ui/button';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';

type FormData = {
   prompt: string;
};

type ChatResponse = {
   message: string;
};

type Message = {
   role: 'user' | 'bot';
   content: string;
};

export const ChatBot = () => {
   const [messages, setMessages] = useState<Message[]>([]);
   const conversationId = useRef(crypto.randomUUID());
   const { register, handleSubmit, reset, formState } = useForm<FormData>();

   const onSubmit = async ({ prompt }: FormData) => {
      setMessages((prev) => [...prev, { role: 'user', content: prompt }]);
      // console.log(data);
      reset();
      const { data } = await axios.post<ChatResponse>('/api/chat', {
         prompt,
         conversationId: conversationId.current,
      });
      // Note!, do not use setMessages([...messages, data.message]) here,
      // it will overwrite messages state set at line 21
      setMessages((prev) => [...prev, { role: 'bot', content: data.message }]);
   };

   const onKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
         e.preventDefault();
         handleSubmit(onSubmit)();
      }
   };

   return (
      <div>
         <div className="flex flex-col gap-3 mb-10">
            {messages.map((msg, index) => (
               <p
                  key={index}
                  className={`px-2 py-1  rounded-xl ${msg.role === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-100  text-black self-start'}`}
               >
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
               </p>
            ))}
         </div>
         <form
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
