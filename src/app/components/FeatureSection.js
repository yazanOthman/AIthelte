"use client";
import {
  ChartBarIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import { motion } from "framer-motion";

const features = [
  {
    name: "Personalized Workouts",
    description:
      "Get custom workout routines tailored to your fitness level and goals.",
    icon: ChartBarIcon,
  },
  {
    name: "Personalized Nutrition",
    description:
      "Receive personalized meal plans to help you achieve your desired body composition.",
    icon: LightningBoltIcon,
  },
  {
    name: "Calorie Tracking",
    description:
      "Track your calorie intake and expenditure to maintain a healthy balance.",
    icon: ScaleIcon,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-white">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-300">
                {feature.description}
              </dd>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
