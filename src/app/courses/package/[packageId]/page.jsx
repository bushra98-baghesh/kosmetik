import { BASEURL } from "@/components/data/BaseUrl";
import PackageDetails from "../../../../components/courses/course-details/PackageDetails";
async function getCourse(id) {
  const res = await fetch(`${BASEURL}/package/${id}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const CourseDetails = async ({ params }) => {
  const { packageId } = params;
  const packageDetails = await getCourse(packageId);

  return <PackageDetails kit={packageDetails} />;
};
export default CourseDetails;
