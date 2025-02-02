import { useState } from "react";
import { Loader2 } from "lucide-react"; // For loading animation
import { apiCall } from "../services/ApiCall";
import ReactMarkdown from "react-markdown";

const AIChatBox = ({ tutor }) => {
  const [messages, setMessages] = useState([
    { role: "ai", content: `Hello! I'm ${tutor?.name || "your AI tutor"}, ready to assist you.` }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
     
    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    try {
    const response = await apiCall(userMessage, tutor)

    const data = await response.data;
      // console.log(data);
    setMessages(prev => [...prev, { role: "ai", content: data }]);
  } catch (error) {
    // console.error("Error fetching AI response:", error);
    setMessages(prev => [...prev, { role: "ai", content: "Oops! Something went wrong. Try again later." }]);
  }

  setLoading(false);
  };

  return (
    <div className="relative bg-white shadow-xl rounded-lg w-full h-full flex flex-col p-4">
      {/* Tutor Profile Section */}
      <div className="flex items-center gap-4 p-2 border-b">
        <img src={tutor?.link || "/default-avatar.png"} alt="Tutor" className="w-12 h-12 rounded-full border" />
        <div>
          <h3 className="text-lg font-semibold text-blue-600">{tutor?.name} </h3>
          <p className="text-gray-500 text-sm">{tutor?.specialization || "Expert AI Tutor"}</p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto mt-2 border p-2 rounded bg-gray-50 h-60">
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 my-1 rounded ${msg.role === "ai" ? "bg-gray-200 text-gray-900" : "bg-blue-100 text-blue-900"}`}>
            <ReactMarkdown>{msg.content}</ReactMarkdown>
          </div>
        ))}
        {loading && (
          <div className="flex items-center gap-2 text-gray-500 mt-2">
            <Loader2 className="animate-spin w-4 h-4" />
             {tutor?.name} is typing...
          </div>
        )}
      </div>

      {/* Input Field */}
      <div className="flex mt-2">
        <input 
          type="text" 
          className="flex-grow p-2 border rounded-l outline-none focus:ring-2 focus:ring-blue-400" 
          value={input} 
          placeholder="Ask a question..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend} className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600 disabled:opacity-50" disabled={loading}>
          Send
        </button>
      </div>
    </div>
  );
};

export default AIChatBox;
