"use client";
import { Button } from "@nextui-org/react";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
const ThirdContainer = ({ categories }) => {
  return (
    <div className="container max-w-4xl mx-auto my-16 px-8 text-center">
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1.1 }}
        transition={{ duration: 1 }}
        className="flex gap-1 text-2xl  text-[#251B37] font-semibold tracking-wide text-center justify-center my-4 "
      >
        {" "}
        Beliebtesten
        <span>
          Kategorien
          <div className=" w-22 h-3 border-t-3 rounded-t-[100%] border-[#FFCACA] "></div>
        </span>
      </motion.h1>
      <p className="font-medium text-[#6D737A]">
        Verschiedene Kategorien, um das zu finden, was Sie lernen möchten
      </p>
      <div className=" my-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {categories.map((cat, index) => {
          return (
            <Button
              key={index}
              color="primary"
              variant={"bordered"}
              size="lg"
              radius="sm"
              className="flex items-center justify-center border-[#251B37] text-[#251B37]  shadow-md shadow-gray-400 py-6 px-2 "
            >
              <span> {cat.name}</span>

              <GoArrowUpRight size={16} className="text-[#251B37]" />
            </Button>
          );
        })}
      </div>
    </div>
  );
};
export default ThirdContainer;
