"use client";

import NavLink from "./navLink/NavLink";

const Links = ({ navBag }) => {
  const links = [
    {
      title: "Startseite",
      path: "/",
    },
    {
      title: "Kurse",
      path: "/courses",
    },
    {
      title: "über uns",
      path: "/about",
    },
    {
      title: "Kontakt",
      path: "/contact",
    },
  ];
  return (
    <div>
      <ul className={"hidden md:flex py-4  "}>
        {links.map((link) => (
          <li
            key={link.title}
            className=" text-[#8f8c8c] hover:text-[#503572] px-6 cursor-pointer  capitalize font-medium duration-300 transition-all ease-in-out relative after:block  after:content-[''] after:rounded-lg  after:absolute after:h-[2px] after:bg-[#503572] after:w-full after:scale-x-0 after:hover:scale-x-[60%]  after:transition after:duration-300 after:origin-left"
          >
            <NavLink item={link} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Links;
