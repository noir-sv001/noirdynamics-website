"use client";

import { motion } from "framer-motion";

export default function SystemMotion() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      <motion.div
        animate={{
          opacity: [0.04, 0.08, 0.04],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white"
      />

      <motion.div
        animate={{
          y: ["0%", "100%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/4 top-[-20%] h-[140px] w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"
      />

      <motion.div
        animate={{
          y: ["100%", "0%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-1/4 bottom-[-20%] h-[180px] w-px bg-gradient-to-b from-transparent via-white/15 to-transparent"
      />
    </div>
  );
}