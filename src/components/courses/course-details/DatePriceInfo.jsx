"use client";

import { GoArrowRight } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import useDownloader from "react-use-downloader";
import { FaFileDownload, FaRegCalendarAlt } from "react-icons/fa";
const DatePriceInfo = ({ course, isCourse }) => {
  const { download } = useDownloader();
  console.log(course);
  const fileUrl = isCourse ? "/course.pdf" : "/package.pdf";
  const filename = isCourse ? "course-contract.pdf" : "package-contract.pdf";

  return (
    <div className="border-3 border-[#D43347] max-w-xs mx-auto p-8 rounded-lg shadow-md shadow-zinc-500 space-y-6">
      <div className="bg-[#ED4459]/20 p-5">
        <h1 className="font-medium">Veranstaltungen</h1>
        <div className="w-full h-4 border-t-1  border-[#0D0023] my-2 "></div>
        <div className="space-y-2 text-[#0D0023] font-semibold text-sm">
          {course?.dates?.length > 0 ? (
            course.dates.map((date) => {
              return (
                <div className="mb-8 space-y-2" key={date.id}>
                  <div className="flex items-center gap-2  ">
                    <FaRegCalendarAlt />
                    <p className="flex items-center justify-center gap-2">
                      {date.from_date}
                      <GoArrowRight size={15} className="text-[#0D0023]" />{" "}
                      {date.to_date}
                    </p>
                  </div>
                  <div className="flex items-center justify-start gap-2 text-[#0D0023]">
                    <FaLocationDot />
                    <h1 className="font-medium ">{date.location}</h1>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center">Keine Veranstaltungen verfügbar</p>
          )}
        </div>
      </div>
      <div className="bg-[#ED4459]/20 p-5  ">
        <h1 className="font-medium">Trainingsvertrag</h1>
        <div className="w-full h-4 border-t-1  border-[#0D0023] my-2 "></div>
        <div className="flex gap-2 text-sm font-medium">
          <button onClick={() => download(fileUrl, filename)}>
            <FaFileDownload size={25} className="text-[#0d0023ee]" />
          </button>
          <p className="text-sm">Zur Registrierung herunterladen</p>
        </div>
      </div>
      <div className="bg-[#ED4459]/20 p-5">
        <h1 className="font-medium">Preis</h1>
        <div className="w-full h-4 border-t-1  border-[#0D0023] my-2 "></div>
        <div className="flex  gap-2 ">
          <GoArrowRight size={18} className="text-[#0D0023] mt-1" />
          {course.discount > 0 ? (
            <p className=" font-bold space-x-1">
              € {course.price_after_discount}{" "}
              <span className=" line-through text-sm text-red-800 ">
                € {course.price}
              </span>{" "}
              <br />
              <span className="font-medium text-sm"> plus Basic equipment</span>
            </p>
          ) : (
            <p className=" font-bold">
              € {course.price_after_discount} <br />
              <span className="font-medium text-sm"> plus Basic equipment</span>
            </p>
          )}
        </div>
        <h1 className="font-medium pt-8">Adresse</h1>
        <div className="w-full h-4 border-t-1  border-[#0D0023] my-2 "></div>
        <div className="flex items-center gap-2  font-medium">
          <FaLocationDot className="text-[#0D0023]" />
          <p>{course.address}</p>
        </div>
      </div>
    </div>
  );
};
export default DatePriceInfo;
