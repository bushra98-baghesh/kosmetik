import Image from "next/image";
import { Button } from "@nextui-org/react";
import { BASEURL_IMG } from "@/components/data/BaseUrl";
import Link from "next/link";
const PackageCourses = ({ course }) => {
  return (
    <div className=" bg-[#ED4459]/10 flex-col items-center justify-center p-8 rounded-md my-10 space-y-2">
      <h1 className="text-[#0D0023] font-medium text-lg">{course.title}</h1>
      <div className="w-full">
        <img
          src={`${BASEURL_IMG}${course.image}`}
          width="600"
          height="600"
          className="py-4 "
        />
      </div>
      <Link href={`/courses/course/${course.id}`}>
        <Button
          size="md"
          className=" px-5 font-medium rounded-md bg-gradient-to-br  from-[#13052b] to-[#342557] text-white shadow-lg transition-all ease-in-out delay-150"
        >
          view course
        </Button>
      </Link>
    </div>
  );
};
export default PackageCourses;
