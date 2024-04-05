"use client";
import Link from "next/link";
import Section from "./Section";
import DatePriceInfo from "./DatePriceInfo";
import { BASEURL_IMG } from "@/components/data/BaseUrl";

const CourseDetails = ({ course }) => {
  const courseDetails = course.course;

  return (
    <div className="mx-auto min-h-screen bg-white">
      <div className=" backdrop-blur-2xl px-2   mx-auto pt-16 pb-4  flex items-center justify-center">
        <img
          src={`${BASEURL_IMG}${courseDetails.src}`}
          alt="kosmetik"
          className="  object-fill object-center max-h-[500px] rounded md shadow-lg shadow-black/30 "
        />
      </div>

      {/* <h1 className="text-center max-w-xl font-medium  mx-auto text-[#251B37] px-4">
        Sie können sich für den gesamten Bildungsweg, einschließlich dieses
        Kurses, anmelden. Sie können sich über registrieren {""}
        <Link href="" className="text-[#6D39E9]">
          here
        </Link>
      </h1> */}

      <div className="mx-auto container max-w-6xl flex flex-col md:flex-row justify-between py-10 gap-10 px-4 ">
        <div className=" basis-7/12">
          <h1 className="text-2xl font-semibold">{courseDetails.title}</h1>
          <div className="w-full h-4 border-t-1  border-[#251B37] my-6 "></div>
          {course.sections.map((section) => {
            return <Section key={section.id} section={section} />;
          })}
        </div>
        <div className="basis-5/12 my-12 flex flex-col items-center justify-start gap-6  ">
          <DatePriceInfo course={courseDetails} isCourse={true} />
          <Link
            href={`/courses/course/${courseDetails.id}/register`}
            className=" px-5 py-4 text-center font-medium rounded-md bg-gradient-to-br w-4/6 
            from-[#13052b] to-[#342557] text-white shadow-lg transition-all
            ease-in-out delay-150 max-w-xs"
          >
            jetzt registrieren
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CourseDetails;
