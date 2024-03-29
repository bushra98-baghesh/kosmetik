import { GoArrowRight } from "react-icons/go";
import { ImFilePdf } from "react-icons/im";
const DatePriceInfo = ({ course }) => {
  console.log(course);
  return (
    <div className="border-3 border-[#D43347] max-w-xs mx-auto p-10 rounded-lg shadow-md shadow-zinc-500 space-y-6">
      <div className="bg-[#ED4459]/20 p-5">
        <h1 className="font-medium">Events</h1>
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
            <p className="text-center">No Events Available</p>
          )}
        </div>
      </div>
      <div className="bg-[#ED4459]/20 p-5  ">
        <h1 className="font-medium">Training Contract</h1>
        <div className="w-full h-4 border-t-1  border-[#0D0023] my-2 "></div>
        <div className="flex items-center gap-2 text-sm font-medium">
          <ImFilePdf size={25} className="text-[#0D0023]" />
          <p>Download to register</p>
        </div>
      </div>
      <div className="bg-[#ED4459]/20 p-5">
        <h1 className="font-medium">Price</h1>
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
      </div>
    </div>
  );
};
export default DatePriceInfo;
