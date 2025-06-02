"use client";

import { motion } from "framer-motion";

export default function StoriesHeader() {
  return (
    <>
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Client Success Stories & Case Studies
      </motion.h1>
      <motion.h2
        className="text-xl font-semibold text-muted-foreground text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Discover how we transform educational businesses through innovative solutions and proven strategies
      </motion.h2>
    </>
  );
}
