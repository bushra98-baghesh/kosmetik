"use client";
import CourseList from "../courses/course-list/CourseList";
import Cover from "../../../public/images/courses-cover.jpg";
import CoursesCategories from "../courses/categories/CoursesCategories";
import { useState } from "react";
import { motion } from "framer-motion";

const Courses = ({ categories }) => {
  const [category_id, setCategory_id] = useState(0);

  const handleCatChange = (id) => {
    setCategory_id(id);
  };
  return (
    <div className=" min-h-screen mx-auto  ">
      <div
        style={{
          backgroundImage: `url(${Cover.src})`,

          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="min-h-[300px] w-full flex items-center justify-center relative   "
      >
        <motion.h1
          initial={{ translateY: -50, opacity: 0.4 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-medium text-[#FFEEF0] tracking-wide max-w-md text-center pt-10 "
        >
          Zugang zu über <span className="text-4xl text-[#FFCACA]">50+ </span>
          Kursen von Ausbildern & German Board kosmetik Institution
        </motion.h1>
      </div>
      <div className=" flex items-center justify-center space-x-2 my-4 ">
        <h1 className="text-[#251B37] text-2xl font-semibold">unsere</h1>
        <div className="flex flex-col mt-4">
          <h1 className="text-[#6D39E9] text-3xl font-semibold">Kurse</h1>
          <div className="ml-1 w-20 h-4 border-t-2 rounded-t-[100%] border-[#251B37] "></div>
        </div>
      </div>
      <h1 className="text-center text-lg font-medium">
        Im Laufe der Jahre haben sich, manchmal zufällig, verschiedene Versionen
        entwickelt,
      </h1>

      <div className="max-w-6xl px-4 mx-auto my-16">
        <CoursesCategories
          handleCatChange={handleCatChange}
          categories={categories}
        />
      </div>

      <CourseList category_id={category_id} />
    </div>
  );
};
export default Courses;
