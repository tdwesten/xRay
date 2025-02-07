import React from 'react';
import { motion } from 'framer-motion';
import { FaInbox } from 'react-icons/fa';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 1.5, bounce: 0 },
      opacity: { duration: 0.01 }
    }
  }
};

const EmptyState = () => {
  const renderLine = (x1, y1, x2, y2) => (
    <motion.line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      variants={draw}
    />
  );

  return (
    <div className="flex flex-col items-center justify-center p-6 h-full">
      <motion.div
        initial="hidden"
        animate="visible"
        className="w-32 h-32 relative mb-4"
      >
        {/* Circle */}
        <motion.svg
          viewBox="0 0 100 100"
          className="w-full h-full absolute"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-gray-200 dark:text-gray-700"
            variants={draw}
          />
        </motion.svg>

        {/* Lines */}
        <motion.svg
          viewBox="0 0 100 100"
          className="w-full h-full absolute text-blue-500 dark:text-blue-400"
        >
          {renderLine("30", "35", "70", "35")}
          {renderLine("30", "45", "70", "45")}
          {renderLine("30", "55", "70", "55")}
          {renderLine("30", "65", "50", "65")}
        </motion.svg>

        {/* Icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <FaInbox className="w-8 h-8 text-gray-400 dark:text-gray-500" />
        </motion.div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center"
      >
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">
          No Logs Yet
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Start your application to see logs appear here
        </p>
      </motion.div>
    </div>
  );
};

export default EmptyState;
