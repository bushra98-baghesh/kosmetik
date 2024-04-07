"use client";
import { GoArrowRight } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import { ImFilePdf } from "react-icons/im";
import useDownloader from "react-use-downloader";
const DatePriceInfo = ({ course, isCourse }) => {
  const { download } = useDownloader();
  console.log(course);
  const fileUrl = isCourse ? "/course.pdf" : "/package.pdf";
  const filename = isCourse ? "course-contract.pdf" : "package-contract.pdf";

  return (
    <div className="border-3 border-[#D43347] max-w-xs mx-auto p-10 rounded-lg shadow-md shadow-zinc-500 space-y-6">
      <div className="bg-[#ED4459]/20 p-5">
        <h1 className="font-medium">Veranstaltungen</h1>
        <div className="w-full h-4 border-t-1  border-[#0D0023] my-2 "></div>
        <div className="space-y-2 text-[#663C4E] font-medium text-sm">
          {course?.dates?.length > 0 ? (
            course.dates.map((date) => {
              return (
                <div key={date.id} className="flex items-center gap-2">
                  <GoArrowRight className="text-[#0D0023]" />
                  <p className="">
                    {date.from_date} - {date.to_date}
                  </p>
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
        <div className="flex items-center gap-2 text-sm font-medium">
          <button onClick={() => download(fileUrl, filename)}>
            <ImFilePdf size={25} className="text-[#0D0023]" />
          </button>
          <p className="text-sm">Zur Registrierung herunterladen</p>
        </div>
      </div>
      <div className="bg-[#ED4459]/20 p-5">
        <h1 className="font-medium">Preis</h1>
        <div className="w-full h-4 border-t-1  border-[#0D0023] my-2 "></div>
        <div className="flex  gap-2 ">
          <GoArrowRight size={22} className="text-[#0D0023]" />
          {course.discount > 0 ? (
            <p className="text-base font-medium space-x-1">
              € {course.price_after_discount}{" "}
              <span className=" line-through text-sm text-red-800 ">
                € {course.price}
              </span>{" "}
              <br />
              plus Basic equipment
            </p>
          ) : (
            <p className="text-sm font-medium">
              € {course.price_after_discount} plus Basic equipment
            </p>
          )}
        </div>
        <h1 className="font-medium pt-8">Adresse</h1>
        <div className="w-full h-4 border-t-1  border-[#0D0023] my-2 "></div>
        <div className="flex items-center gap-2 text-sm font-medium">
          <FaLocationDot size={15} />
          <p>{course.address}</p>
        </div>
      </div>
    </div>
  );
};
export default DatePriceInfo;
