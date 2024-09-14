"use client";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

export default function Template({ children }){
    

  return (
    <AnimatePresence mode='wait'> 
    <motion.div
        
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}

      >
      {children}
    </motion.div>
    </AnimatePresence>
  );
}
