"use client";
import { useSwiper } from "swiper/react";
import { Button } from "@nextui-org/react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
const CarouselButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex items-end justify-end mt-8 gap-2 z-50">
      <Button
        isIconOnly
        size="sm"
        radius="sm"
        className="bg-white border-white text-[#251B37] "
        onPress={() => swiper.slidePrev()}
      >
        <IoIosArrowBack />
      </Button>
      <Button
        isIconOnly
        onPress={() => swiper.slideNext()}
        size="sm"
        radius="sm"
        className="bg-[#ED4459] border-[#ED4459] text-white"
      >
        <IoIosArrowForward />
      </Button>
    </div>
  );
};
export default CarouselButtons;
