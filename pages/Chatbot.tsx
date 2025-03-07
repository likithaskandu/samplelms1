import { useState, useEffect, useRef } from "react";
import { Send, X, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ type: string; text: string }[]>([
    { type: "bot", text: "Hello! How can I assist you with the LMS platform?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll to latest message
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { type: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      const botMessage = { type: "bot", text: data.reply };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages((prev) => [...prev, { type: "bot", text: "Error fetching response" }]);
    }

    setLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-end">
      {/* Chat Icon */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-yellow-500 p-4 rounded-full text-white shadow-lg hover:bg-yellow-600 transition-all animate-bounce"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle size={28} />
        </motion.button>
      )}

      {/* Chatbot Box */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="w-96 bg-white shadow-2xl rounded-2xl p-5 flex flex-col border border-yellow-500"
        >
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-3">
            <h3 className="text-xl font-semibold text-yellow-700">AI Chat</h3>
            <X className="cursor-pointer text-gray-500 hover:text-red-500" onClick={() => setIsOpen(false)} />
          </div>

          {/* Messages */}
          <div ref={chatContainerRef} className="h-72 overflow-y-auto p-3 space-y-3">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: msg.type === "user" ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`p-3 rounded-lg text-base max-w-[80%] ${
                  msg.type === "user"
                    ? "bg-yellow-600 text-white self-end"
                    : "bg-yellow-300 text-black self-start"
                }`}
              >
                {msg.text}
              </motion.div>
            ))}
            {loading && <div className="text-gray-500 text-sm animate-pulse">Typing...</div>}
          </div>

          {/* Input */}
          <div className="flex items-center border-t pt-3">
            <input
              type="text"
              className="flex-1 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-yellow-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
            />
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={sendMessage}
              className="ml-3 bg-yellow-500 text-white p-3 rounded-xl hover:bg-yellow-600 transition-all"
              disabled={loading}
            >
              <Send size={18} />
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Chatbot;


