"use client";

import { motion } from "framer-motion";
import DiscountCarousel from "@/components/carousel/DiscountCarousel";
const SecondContainer = ({ discountCourses }) => {
  return (
    <div className="w-full min-h-[300px] md:min-h-[400px] bg-gradient-to-br from-[#04001F]  to-[#271534] py-10 ">
      <div className="flex flex-col  max-w-7xl mx-auto gap-14">
        <div className="relative  mx-auto px-10 my-2 xl:text-left text-center ">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            src="/images/Star.png"
            width={30}
            height={30}
            alt={"sparkle"}
            className="my-5"
          />
          <h1 className="text-[#FFECEF] lg:text-4xl md:text-3xl text-2xl font-semibold flex gap-2">
            Rabatt
            <span className="text-[#FFCACA] lg:text-4xl md:text-2xl text-xl font-semibold">
              Kurse
            </span>
          </h1>

          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src="/images/Sparkle.png"
            width={40}
            height={40}
            alt={"sparkle"}
            className="my-5 absolute  -right-0"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            src="/images/Star.png"
            width={30}
            height={30}
            alt={"sparkle"}
            className="my-5 absolute  -left-2"
          />
        </div>
        <div className="flex items-center justify-center overflow-x-hidden overflow-visible mx-4 py-10 ">
          <DiscountCarousel discountCourses={discountCourses} />
        </div>
      </div>
    </div>
  );
};
export default SecondContainer;
