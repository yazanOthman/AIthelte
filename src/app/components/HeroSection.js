"use client";
import { motion } from "framer-motion";
export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 z-0"></div>
      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-4">
          Reach Your Fitness Goals with AIthlete
        </h1>
        <p className="text-xl mb-8">
          Get personalized diet plans, workout routines, and calorie tracking
          with our AI-powered fitness assistant.
        </p>
      </motion.div>
    </section>
  );
}
