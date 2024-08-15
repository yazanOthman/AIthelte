"use client";
import { motion } from "framer-motion";

export default function Message({ message }) {
  const isAI = message.role === "assistant";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`flex ${isAI ? "justify-start" : "justify-end"} mb-4`}
    >
      <div
        className={`max-w-[70%] ${
          isAI ? "bg-gray-700" : "bg-blue-600"
        } rounded-lg p-3 shadow-md`}
      >
        <span className="p-3 rounded-lg max-w-5xl inline-block whitespace-pre-wrap">
          {message.content}
        </span>
      </div>
    </motion.div>
  );
}
