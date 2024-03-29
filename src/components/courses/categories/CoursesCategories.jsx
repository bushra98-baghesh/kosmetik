"use client";

import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselButtons from "../../carousel/CarouselButtons";
import { Button } from "@nextui-org/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CoursesCategories({ categories, handleCatChange }) {
  const sliderSettings = {
    240: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    440: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    680: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    924: {
      slidesPerView: 6,
      spaceBetween: 15,
    },
  };
  return (
    <div>
      <Swiper
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
      >
        {categories.map((cat, id) => {
          return (
            <SwiperSlide key={id}>
              <Button
                onClick={() => {
                  handleCatChange(cat.id);
                }}
                size="lg"
                radius="none"
                className="border-[#13052b] border-2 px-5 bg-[#f5f5f5]  text-[#13052b] font-medium rounded-sm hover:bg-gradient-to-br w-full hover:from-[#13052b] hover:to-[#342557] hover:text-white shadow-lg transition-all ease-in-out delay-150  focus:bg-gradient-to-br focus:from-[#13052b] focus:to-[#342557] focus:text-white "
              >
                {cat.name}
              </Button>
            </SwiperSlide>
          );
        })}

        <CarouselButtons />
      </Swiper>
    </div>
  );
}
