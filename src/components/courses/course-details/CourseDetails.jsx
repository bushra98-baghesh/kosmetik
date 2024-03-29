"use client";
import Link from "next/link";
import Section from "./Section";
import DatePriceInfo from "./DatePriceInfo";
import { BASEURL_IMG } from "@/components/data/BaseUrl";
import Cover from "../../../../public/images/courses-cover.jpg";
const CourseDetails = ({ course }) => {
  const courseDetails = course.course;
  return (
    <div className="mx-auto min-h-screen">
      <div
        style={{
          // backgroundImage: `url(${BASEURL_IMG}${courseDetails.src})`,
          backgroundImage: `url(${Cover.src})`,
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
        className="min-h-[500px] w-full mx-auto "
      ></div>

      <h1 className="text-center my-10 max-w-lg font-medium  mx-auto text-[#251B37]">
        You can register for the full educational path, including this course.
        You can register through{" "}
        <Link href="" className="text-[#6D39E9]">
          here
        </Link>
      </h1>

      <div className="mx-auto container max-w-6xl flex justify-between py-10 gap-10  ">
        <div className=" basis-7/12">
          <h1 className="text-2xl font-semibold">{courseDetails.title}</h1>
          <div className="w-full h-4 border-t-1  border-[#251B37] my-6 "></div>
          {course.sections.map((section) => {
            return <Section key={section.id} section={section} />;
          })}
        </div>
        <div className="basis-5/12 my-12 flex flex-col items-center justify-start gap-6  ">
          <DatePriceInfo course={courseDetails} />
          <Link
            href={`/courses/course/${courseDetails.id}/register`}
            className=" px-5 py-4 text-center font-medium rounded-md bg-gradient-to-br w-4/6 
            from-[#13052b] to-[#342557] text-white shadow-lg transition-all
            ease-in-out delay-150"
          >
            register now
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CourseDetails;
