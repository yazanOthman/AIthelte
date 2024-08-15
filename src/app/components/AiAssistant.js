"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { generateResponse } from "../../utils/ai";
import Message from "./Message";
import TypingIndicator from "./TypingIndicator";

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      content:
        "Hi! I'm AIthlete, your AI assistant for workout and diet queries. Let me know how I can assist you today! For workout programs, just include 'workout plans:' in your prompt.",
      role: "assistant",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const aiResponse = await generateResponse(input);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: aiResponse },
      ]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: "assistant",
          content:
            "I'm sorry, I couldn't process that request. Please try again.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <section id="ai-assistant" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get Personalized Fitness Guidance
        </motion.h2>
        <motion.p
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          AIthlete is here to help you every step of the way. Ask questions, get
          advice, and stay motivated on your fitness journey.
        </motion.p>
        <motion.div
          className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div
            ref={chatContainerRef}
            className="h-[400px] overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
          >
            <AnimatePresence>
              {messages.map((msg, index) => (
                <Message key={index} message={msg} />
              ))}
              {isTyping && <TypingIndicator />}
            </AnimatePresence>
          </div>
          <form
            onSubmit={handleSubmit}
            className="p-4 border-t border-gray-700"
          >
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow bg-gray-700 rounded-l-lg px-4 py-2 focus:outline-none"
                placeholder="Ask about workouts, nutrition, or fitness tips..."
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50"
                disabled={isTyping}
              >
                Send
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
