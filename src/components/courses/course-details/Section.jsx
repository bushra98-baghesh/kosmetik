import { BASEURL_IMG } from "@/components/data/BaseUrl";
import Image from "next/image";
const Section = ({ section }) => {
  const informationExists = section.information != null;

  // If information exists, replace newline characters with <br /> tags
  const formattedInformation = informationExists
    ? section.information.replace(/\n/g, "<br />")
    : "";
  return (
    <div className=" text-[#3E3155] space-y-2 max-w-xl my-6 bg-[#342557]/5 w-full rounded-md p-8">
      <h1 className="font-medium text-lg text-[#0D0023]">{section.title}</h1>
      <p
        className="font-medium"
        dangerouslySetInnerHTML={{ __html: formattedInformation }}
      />
      <div className="w-full">
        {section.src ? (
          <img
            src={`${BASEURL_IMG}${section.src}`}
            width="700"
            height="700"
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
