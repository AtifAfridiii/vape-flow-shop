"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const SuccessResult: React.FC = () => {
  // Animation variants for reusability
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      <Card className="max-w-sm mx-auto shadow-lg">
        <CardContent className="flex flex-col items-center p-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2
            }}
            className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center"
          >
            <Check className="w-8 h-8 text-green-600" />
          </motion.div>

          {/* Animated Heading */}
          <motion.h2
            initial="initial"
            animate="animate"
            variants={textVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-4 text-xl font-semibold text-center text-blue-600"
          >
            Success!
          </motion.h2>

          {/* Animated Description */}
          <motion.p
            initial="initial"
            animate="animate"
            variants={textVariants}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2, // Staggered animation
            }}
            className="mt-2 text-center text-gray-600"
          >
            Your operation was completed successfully.
          </motion.p>
        </CardContent>
      </Card>
    </AnimatePresence>
  );
};

export default SuccessResult;