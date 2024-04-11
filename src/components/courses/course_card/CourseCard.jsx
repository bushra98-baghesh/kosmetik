"use client";
import { Card, CardHeader, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";
import { BASEURL_IMG } from "../../data/BaseUrl.js";
import styles from "./CourseCard.module.css";
const CourseCard = ({ course, isCourse }) => {
  return (
    <Link
      href={
        isCourse
          ? `courses/course/${course.id}`
          : `courses/package/${course.id}`
      }
    >
      <Card
        shadow="md"
        isPressable
        isHoverable
        radius="sm"
        isFooterBlurred
        className=" w-[300px] overflow-visible  h-full  hover:scale-105 mx-auto  "
      >
        {isCourse === false ? (
          <div className={`${styles.ribbon} ${styles["ribbon-top-right"]}`}>
            <span>Paket</span>
          </div>
        ) : null}

        {course.discount > 0 ? (
          <CardHeader className="absolute z-10 -top-3 -left-3 flex-col items-start">
            <p className="text-sm uppercase text-white  bg-[#f63f3f] p-2 rounded-sm">
              {parseInt(course.discount)}%
            </p>
          </CardHeader>
        ) : null}

        <Image
          radius="sm"
          removeWrapper
          alt="course photo"
          className="z-0 w-full max-h-[200px] min-h-[200px] object-center object-cover  "
          src={
            isCourse
              ? `${BASEURL_IMG}${course.src}`
              : `${BASEURL_IMG}${course.image}`
          }
        />
        <CardFooter className="absolute bg-white/40 min-h-[60px] bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center">
          <p className="text-[#040305] font-semibold text-sm text-center ">
            {course.title}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
};
export default CourseCard;
