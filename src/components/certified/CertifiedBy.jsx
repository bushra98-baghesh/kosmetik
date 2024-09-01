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
        width={110}
        height={110}
        alt={"BfD"}
      />
      <motion.img
        initial={{ translateY: -50, opacity: 0.4 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        src="/images/Azav.jpg"
        width={60}
        height={60}
        alt={"Azav"}
      />
      <motion.img
        initial={{ translateY: -50, opacity: 0.4 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        src="/images/logo.png"
        width={70}
        height={70}
        alt={"German Board"}
      />
      <motion.img
        initial={{ translateY: -50, opacity: 0.4 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        src="/images/ISO.png"
        width={70}
        height={70}
        alt={"ISO"}
      />
      {/* <motion.img
        initial={{ translateY: -50, opacity: 0.4 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        src="/images/Dakks.png"
        width={160}
        height={160}
        alt={"Dakks"}
      /> */}
    </div>
  );
};
export default CertifiedBy;
