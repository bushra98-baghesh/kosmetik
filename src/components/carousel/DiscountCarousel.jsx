import CourseCard from "@/components/courses/course_card/CourseCard";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import CarouselButtons from "./CarouselButtons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
      className=""
      style={{
        "--swiper-pagination-color": "#ED4459",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "0.5",
        "--swiper-pagination-progressbar-size": "10px",
      }}
      modules={[Navigation, A11y]}
      spaceBetween={20}
      slidesPerView={3}
      breakpoints={sliderSettings}
      initialSlide={0}
    >
      {discountCourses.map((course) => (
        <SwiperSlide
          key={course.id}
          className="flex items-center justify-center"
        >
          <CourseCard course={course} />
        </SwiperSlide>
      ))}
      <CarouselButtons />
    </Swiper>
  );
}
