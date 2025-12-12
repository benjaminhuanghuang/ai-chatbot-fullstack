import React from 'react';
import { Button } from '../ui/button';
import { FaArrowUp } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

export type ChatFormData = {
   prompt: string;
};

type ChatInputProps = {
   onSubmit: (data: ChatFormData) => void;
};

const ChatInput = ({ onSubmit }: ChatInputProps) => {
   const { register, handleSubmit, reset, formState } = useForm<ChatFormData>();

   const handleFromSubmit = handleSubmit((data) => {
      reset({ prompt: '' });
      onSubmit(data);
   });

   const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
         e.preventDefault();
         handleFromSubmit();
      }
   };

   return (
      <form
         onSubmit={handleFromSubmit}
         onKeyDown={handleKeyDown}
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
         <Button className="rounded-full w-9 h-9" disabled={!formState.isValid}>
            <FaArrowUp />
         </Button>
      </form>
   );
};

export default ChatInput;
