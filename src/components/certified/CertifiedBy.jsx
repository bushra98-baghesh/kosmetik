"use client";
import { motion } from "framer-motion";
const CertifiedBy = () => {
  return (
    <div className="mx-auto max-w-5xl flex items-center justify-evenly my-20 z-0">
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        src="/images/Azav.jpg"
        width={70}
        height={70}
        alt={"Background Image"}
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        src="/images/logo.png"
        width={90}
        height={90}
        alt={"Background Image"}
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        src="/images/ISO.png"
        width={140}
        height={140}
        alt={"Background Image"}
      />
    </div>
  );
};
export default CertifiedBy;
