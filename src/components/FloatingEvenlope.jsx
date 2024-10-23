import React from 'react';
import { motion } from 'framer-motion';
import { MdEmail } from 'react-icons/md';

const FloatingEnvelope = ({ onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }} // Start off-screen
      animate={{ opacity: 1, y: 0 }} // Fade in and move up
      transition={{ duration: 0.5 }}
      className="fixed bottom-5 right-5 z-50 bg-secondary p-4 rounded-full shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <MdEmail className="text-white text-2xl" />
    </motion.div>
  );
};

export default FloatingEnvelope;
