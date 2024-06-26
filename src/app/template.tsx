'use client'

import { motion } from 'framer-motion'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: [0.22,1,0.36,1], duration: 0.75}}
    
    >
      {children}
    </motion.div>
  )
}