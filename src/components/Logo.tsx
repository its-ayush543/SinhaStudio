import React from 'react';
import { Camera } from 'lucide-react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div
      className="relative w-10 h-10 flex items-center justify-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-black"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <Camera className="relative text-white" size={20} />
    </motion.div>
  );
};

export default Logo;