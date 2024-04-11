"use client";
import CourseCard from "@/components/courses/course_card/CourseCard";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import CarouselButtons from "./CarouselButtons";
import "swiper/css";
import "swiper/css/navigation";

export default function DiscountCarousel({ discountCourses }) {
  const sliderSettings = {
    440: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    924: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  };

  return (
    <Swiper
      className=" w-full "
      style={{
        "--swiper-pagination-color": "#ED4459",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "0.5",
        "--swiper-pagination-progressbar-size": "10px",
      }}
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={sliderSettings}
      initialSlide={0}
    >
      {discountCourses.courses.map((course) => (
        <SwiperSlide
          key={course.id}
          className="flex flex-col items-center justify-center relative"
        >
          <CourseCard isCourse={true} course={course} />
        </SwiperSlide>
      ))}
      {discountCourses.packages.map((course) => (
        <SwiperSlide
          key={course.id}
          className="flex flex-col items-center justify-center relative"
        >
          <CourseCard isCourse={false} course={course} />
        </SwiperSlide>
      ))}
      <CarouselButtons />
    </Swiper>
  );
}
