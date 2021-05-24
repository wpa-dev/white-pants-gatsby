import React from 'react';
import { motion } from 'framer-motion';
import { timeout } from 'constants/transition';

export const Transition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, delay: timeout, delayChildren: timeout }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5, type: "tween" }}
  >
    {children}
  </motion.div>
)

export default Transition;
