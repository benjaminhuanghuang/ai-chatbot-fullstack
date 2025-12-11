import { useState } from 'react';
import { ChatBot } from './components/ChatBot';

function App() {
   const [count, setCount] = useState(0);

   return (
      <div className="p-4">
         <ChatBot />
      </div>
   );
}

export default App;
