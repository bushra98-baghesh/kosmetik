"use client";
import { motion } from "framer-motion";
const CertifiedBy = () => {
  return (
    <div className=" max-w-5xl flex items-center justify-evenly my-20 z-0 px-4 mx-auto">
      <motion.img
        initial={{ translateY: -50, opacity: 0.4 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        src="/images/Bfd.png"
        width={100}
        height={100}
        alt={"Background Image"}
      />
      <motion.img
        initial={{ translateY: -50, opacity: 0.4 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        src="/images/Azav.jpg"
        width={60}
        height={60}
        alt={"Background Image"}
      />
      <motion.img
        initial={{ translateY: -50, opacity: 0.4 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        src="/images/logo.png"
        width={70}
        height={70}
        alt={"Background Image"}
      />
      <motion.img
        initial={{ translateY: -50, opacity: 0.4 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        src="/images/ISO.png"
        width={70}
        height={70}
        alt={"Background Image"}
      />
    </div>
  );
};
export default CertifiedBy;
