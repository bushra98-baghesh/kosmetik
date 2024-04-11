"use client";
import Link from "next/link";

import DatePriceInfo from "./DatePriceInfo";
import PackageCourses from "./PackageCourses";
import { BASEURL_IMG } from "@/components/data/BaseUrl";
const PackageDetails = ({ kit }) => {
  const packageDetails = kit.package;

  return (
    <div className="mx-auto min-h-screen">
      <div className=" backdrop-blur-2xl px-2   mx-auto pt-16 pb-4   flex items-center justify-center">
        <img
          src={`${BASEURL_IMG}${packageDetails.image}`}
          alt="kosmetik"
          className="  object-fill object-center max-h-[500px] rounded md shadow-lg shadow-black/30 "
        />
      </div>
      <h1 className="text-center my-10 max-w-xl font-medium  mx-auto text-[#251B37] text-sm px-4">
        Wenn es sich bei diesem Kurs um einen vollständigen Bildungsweg handelt,
        umfasst er mehr als nur den Kurs für diesen Titel
      </h1>

      <div className="mx-auto container max-w-6xl flex flex-col md:flex-row justify-between py-6 gap-10 px-4  ">
        <div className=" basis-7/12">
          <h1 className="text-2xl font-semibold">{packageDetails.title}</h1>
          <div className="w-full h-4 border-t-1  border-[#251B37] my-4 "></div>
          <p className=" text-lg font-medium max-w-md pb-10">
            {packageDetails.description}
          </p>
          <h1 className="text-base sm:text-lg md:text-xl font-semibold text-[#D43347] tracking-wide">
            In diesem Track enthaltene Kurse
          </h1>
          {packageDetails.courses.map((course, index) => {
            return <PackageCourses key={index} course={course} />;
          })}
        </div>
        <div className="basis-5/12 my-12 flex flex-col items-center justify-start gap-6  ">
          <DatePriceInfo course={packageDetails} isCourse={false} />
          <Link
            href={`/courses/package/${packageDetails.id}/register`}
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
export default PackageDetails;
