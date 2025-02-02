import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaPaperPlane, FaVolumeUp } from 'react-icons/fa';
import { IoPersonCircle } from 'react-icons/io5';
import { BsPause, BsRobot } from 'react-icons/bs';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { apiCall } from '../services/ApiCall';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleSend = async () => {
    if (!message.trim()) return;
    const userMessage = { role: 'user', content: message };
    setConversation([...conversation, userMessage]);
    setMessage('');
    setLoading(true);

    try {
      const response = await apiCall(message);
      const aiMessage = { role: 'ai', content: response.data };
      setConversation([...conversation, userMessage, aiMessage]);
      speakText(response.data); 
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Text-to-Speech function
  const speakText = (text) => {
    if (isPaused) return;

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    speech.rate = 1; 
    speech.pitch = 1.2;

    window.speechSynthesis.speak(speech);
  };

  // Toggle Pause/Resume Speech
  const togglePause = () => {
    if (window.speechSynthesis.speaking) {
      if (isPaused) {
        window.speechSynthesis.resume();
      } else {
        window.speechSynthesis.pause();
      }
      setIsPaused(!isPaused);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-blue-500 to-purple-700 p-4 text-white">
      <div className="flex items-center bg-white p-3 rounded-lg shadow-lg text-black mb-4">
        <BsRobot className="text-4xl text-blue-500 mr-3" />
        <h1 className="text-2xl font-bold"> <Link to={"/"}> Python Tutor </Link></h1>
      </div>
      <p> Welcome to the Q&A section. Please ask your question related to Python.</p>

      <div className="relative flex-1 overflow-y-auto space-y-4 p-3 bg-white rounded-lg shadow-md text-black">
        <div className="absolute inset-0 bg-[url('https://img.freepik.com/premium-vector/vector-illustration-depicting-hacker-activities-through-symbolic-iconography_1263357-9010.jpg?semt=ais_hybrid')] bg-contain bg-no-repeat bg-center opacity-20"></div>

        {conversation.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex items-start ${msg.role === 'user' ? 'justify-end' : ''}`}
          >
            <div className={`flex items-center max-w-xs p-3 rounded-lg ${msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
              {msg.role === 'ai' ? <BsRobot className="text-xl mr-2" /> : <IoPersonCircle className="text-xl mr-2" />}
              <div className="flex flex-col">
                <ReactMarkdown>{msg.content}</ReactMarkdown>

                {msg.role === 'ai' && (
                  <div className="flex gap-3 mt-2">
                    {/* Listen Button */}
                    <button onClick={() => speakText(msg.content)} className="text-blue-500 hover:text-blue-700 flex items-center gap-2">
                      <FaVolumeUp />
                      <p>Listen</p>
                    </button>

                    {/* Pause/Resume Button */}
                    <button onClick={togglePause} className="text-red-500 hover:text-red-700 flex items-center gap-2">
                      {isPaused ? <FaVolumeUp /> : <BsPause />}
                      <p>{isPaused ? 'Resume' : 'Pause'}</p>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {loading && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ repeat: Infinity, duration: 1 }}
            className="flex items-center space-x-2"
          >
            <BsRobot className="text-xl text-blue-500" />
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-200" />
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-400" />
          </motion.div>
        )}
      </div>

      <div className="flex items-center bg-white p-3 rounded-lg shadow-lg mt-4">
        <input
          type="text"
          className="flex-1 p-2 rounded-md outline-none text-black"
          placeholder="Ask me anything about Python..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md ml-2"
          onClick={handleSend}
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default Chat;
