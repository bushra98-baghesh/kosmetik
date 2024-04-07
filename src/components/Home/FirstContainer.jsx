"use client";
import Image from "next/image";
import Cover from "../../../public/images/cover.jpg";
import style from "./home.module.css";
import { FaBookOpen } from "react-icons/fa6";
import { PiPathBold } from "react-icons/pi";
import { motion } from "framer-motion";

const FirstContainer = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(4,0,31,0.8) 0%, rgba(0,212,255,0) 20%),url(${Cover.src})`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="w-full lg:h-[500px] md:h-[400px] sm:h-[300px]  "
    >
      <div className="flex w-full flex-col-reverse md:flex-row  items-center justify-center gap-10 px-6 ">
        {/* left section */}

        <div className="md:text-start text-center max-w-md  py-10 md:py-0 ">
          <p className="text-base font-medium text-[#251B37] uppercase py-6">
            Beginnen Sie mit dem Erfolg
          </p>
          <h1 className="md:text-4xl text-2xl font-semibold text-[#06241B] max-w-md leading-loose mx-auto md:mx-0">
            Zugang zu über{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
              50+
            </span>{" "}
            Kursen von Ausbildern &
          </h1>
          <h1
            className={`${style.typed}  md:text-4xl text-2xl font-semibold text-[#06241B] mx-auto md:mx-0 `}
          >
            German Board Schule
          </h1>

          <p className=" text-sm font-medium text-[#251B37] pt-10">
            Im Laufe der Jahre haben sich verschiedene Kurse entwickelt,
            manchmal zufällig
          </p>
        </div>
        {/* right section */}
        <div className="md:flex hidden items-center justify-center -space-x-8 relative ">
          <motion.div
            initial={{ translateX: 100 }}
            whileInView={{ translateX: 0 }}
            transition={{ duration: 0.8 }}
            className=" shadow-md shadow-black/40  bg-gradient-to-r from-fuchsia-600/60 to-purple-600/60 backdrop-blur-lg w-32 h-12 rounded-lg z-2 absolute top-0 -right-6 flex items-center justify-center gap-2"
          >
            <FaBookOpen className="text-white" />
            <p className="text-white text-xs "> Schnelles Lernen</p>
          </motion.div>

          <Image
            src="/images/First_2.jpg"
            width={190}
            height={190}
            style={{
              objectFit: "cover",
              borderRadius: "10px", //👈 and here you can select border radius

              boxShadow: "-4px 21px 40px 3px rgba(0,0,0,0.45)",
            }}
            // className=" -rotate-6"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,..."
            alt={"kosmetik"}
          />

          <Image
            src="/images/First_1.jpg"
            width={200}
            height={200}
            style={{
              objectFit: "cover",
              borderRadius: "10px",

              boxShadow: "-4px 21px 40px 3px rgba(0,0,0,0.45)",
            }}
            // className=" rotate-12"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,..."
            alt={"kosmetik"}
          />
          <motion.div
            initial={{ translateX: -100 }}
            whileInView={{ translateX: 0 }}
            transition={{ duration: 0.5 }}
            className=" shadow-md shadow-black/40 bg-gradient-to-r from-slate-900 to-slate-700 backdrop-blur-lg w-32 h-12 rounded-lg z-2 absolute -bottom-6 -left-6 flex items-center justify-center gap-2"
          >
            <PiPathBold className="text-white" />
            <p className="text-white text-xs "> Flexibler Weg</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default FirstContainer;
