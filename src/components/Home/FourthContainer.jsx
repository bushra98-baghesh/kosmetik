"use client";
import Cover from "../../../public/images/HOME.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./home.module.css";
const FirstContainer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Cover.src})`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="w-full  py-16"
    >
      <motion.div
        initial={{ translateY: -100 }}
        whileInView={{ translateY: 0 }}
        transition={{ duration: 1 }}
        style={{
          background: "rgba(255, 255, 255, 0.6)",
          borderRadius: "10px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.8)",

          border: "1px solid rgba(255, 255, 255, 1)",
        }}
        className="flex w-3/4 md:w-2/4  backdrop-blur-sm  my-10 py-10 px-10   items-center justify-center  mx-auto"
      >
        <div className=" text-center space-y-6 py-10 md:py-0  ">
          <h1 className=" text-lg md:text-xl lg:text-2xl font-semibold  max-w-md text-black ">
            Melden Sie sich noch heute zu einem unserer Kurse und Pakete an
          </h1>
          <p className="text-base font-medium flex items-center justify-center flex-col text-zinc-700 ">
            {" "}
            oder{" "}
          </p>
          <Link href="/contact" className={styles.glow} type="button">
            kontaktiere uns jetzt
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
export default FirstContainer;
