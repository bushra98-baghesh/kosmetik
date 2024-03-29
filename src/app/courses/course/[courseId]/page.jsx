import Coursedetails from "@/components/courses/course-details/CourseDetails";
import { BASEURL } from "@/components/data/BaseUrl";
async function getCourse(id) {
  const res = await fetch(`${BASEURL}/course-with-sections/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const CourseDetails = async ({ params }) => {
  const { courseId } = params;
  const course = await getCourse(courseId);

  return <Coursedetails course={course} />;
};
export default CourseDetails;
