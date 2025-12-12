import React, { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';

export type Message = {
   role: 'user' | 'bot';
   content: string;
};

type ChatMessagesProps = {
   messages: Message[];
};

const ChatMessages = ({ messages }: ChatMessagesProps) => {
   const lastMessageRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (lastMessageRef.current) {
         lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
      }
   }, [messages]);

   const onCopyMessage = (e: React.ClipboardEvent<HTMLParagraphElement>) => {
      const selection = window.getSelection()?.toString().trim();
      if (selection && selection.length > 0) {
         e.stopPropagation();
         e.clipboardData.setData('text/plain', selection);
      }
   };

   return (
      <div className="flex flex-col gap-3">
         {messages.map((msg, index) => (
            <div
               key={index}
               onCopy={onCopyMessage}
               ref={index === messages.length - 1 ? lastMessageRef : null}
               className={`px-3 py-1  rounded-xl ${msg.role === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-100  text-black self-start'}`}
            >
               <ReactMarkdown>{msg.content}</ReactMarkdown>
            </div>
         ))}
      </div>
   );
};

export default ChatMessages;
