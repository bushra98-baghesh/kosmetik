"use client";
import { useEffect, useState } from "react";
import CourseCard from "../course_card/CourseCard";
import { BASEURL } from "@/components/data/BaseUrl";

export default function CourseList({ category_id }) {
  const [courseByCategoryState, setCourseByCategoryState] = useState({
    data: [],
    loading: false,
    error: false,
  });

  async function getCoursesByCategory(id) {
    setCourseByCategoryState({ data: [], loading: true, error: false });

    const res = await fetch(`${BASEURL}/category-courses-packages/${id}`, {
      method: "GET",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    res.json().then((result) => {
      if (result.category) {
        setCourseByCategoryState({
          data: result.category,
          loading: false,
          error: false,
        });
      } else {
        setCourseByCategoryState({
          data: result,
          loading: false,
          error: false,
        });
      }
    });
  }

  useEffect(() => {
    getCoursesByCategory(category_id);
  }, [category_id]);

  if (courseByCategoryState?.loading) {
    return (
      <div
        className="w-full h-full"
        style={{ margin: "0 auto", width: "fit-content" }}
      >
        <div id="loader"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto px-4 gap-8 my-16">
      {courseByCategoryState?.data?.packages?.map((course) => {
        return <CourseCard isCourse={false} course={course} key={course.id} />;
      })}
      {courseByCategoryState?.data?.courses?.map((course) => {
        return <CourseCard isCourse={true} course={course} key={course.id} />;
      })}
    </div>
  );
}
