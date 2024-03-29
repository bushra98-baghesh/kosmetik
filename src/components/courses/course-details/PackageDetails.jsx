"use client";
import Link from "next/link";

import DatePriceInfo from "./DatePriceInfo";
import PackageCourses from "./PackageCourses";
import { BASEURL_IMG } from "@/components/data/BaseUrl";
const PackageDetails = ({ kit }) => {
  const packageDetails = kit.package;
  console.log(packageDetails);
  return (
    <div className="mx-auto min-h-screen">
      <div
        style={{
          backgroundImage: `url(${BASEURL_IMG}${packageDetails.image})`,
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
        className="min-h-[400px] w-full "
      ></div>
      <h1 className="text-center my-10 max-w-lg font-medium  mx-auto text-[#251B37]">
        This course if a full educational path , it include more than course for
        this track
      </h1>

      <div className="mx-auto container max-w-6xl flex justify-between py-10 gap-10  ">
        <div className=" basis-7/12">
          <h1 className="text-2xl font-semibold">{packageDetails.title}</h1>
          <div className="w-full h-4 border-t-1  border-[#251B37] my-6 "></div>
          <p>{packageDetails.description}</p>
          <h1 className="text-2xl font-semibold text-[#D43347] tracking-wide">
            Courses included in this track
          </h1>
          {packageDetails.courses.map((course, index) => {
            return <PackageCourses key={index} course={course} />;
          })}
        </div>
        <div className="basis-5/12 my-12 flex flex-col items-center justify-start gap-6  ">
          <DatePriceInfo course={packageDetails} />
          <Link
            href={`/courses/package/${packageDetails.id}/register`}
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
export default PackageDetails;
