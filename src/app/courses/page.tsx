import CoursesPage from "@/components/courses/Courses";
import { BASEURL } from "@/components/data/BaseUrl";
const getCategories = async () => {
  const res = await fetch(`${BASEURL}/category`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Courses = async () => {
  const Categories = await getCategories();

  return (
    <div>
      <CoursesPage categories={Categories.categories} />
    </div>
  );
};
export default Courses;
