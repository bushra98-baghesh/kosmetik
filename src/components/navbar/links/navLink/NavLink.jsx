"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${
        pathName === item.path && "text-[#503572] font-semibold  "
      }  `}
    >
      {item.title}
    </Link>
  );
};
export default NavLink;
