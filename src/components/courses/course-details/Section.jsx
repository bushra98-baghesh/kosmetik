import { BASEURL_IMG } from "@/components/data/BaseUrl";
import Image from "next/image";
const Section = ({ section }) => {
  return (
    <div className=" text-[#3E3155] space-y-2 max-w-xl my-12">
      <h1 className="font-medium text-lg text-[#0D0023]">{section.title}</h1>
      <p className="font-medium ">{section.information}</p>
      <div className="w-full">
        {section.src ? (
          <img
            src={`${BASEURL_IMG}${section.src}`}
            width="500"
            height="500"
            className="py-4"
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default Section;
