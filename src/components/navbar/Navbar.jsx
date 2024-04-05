"use client";
import Link from "next/link";
import Links from "@/components/navbar/links/Links";
import React, { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import { HiOutlineX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
    window.scrollY >= 80 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);
  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className={
        navBg && !mobileNavOpen
          ? `bg-white/30 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 transition-all  duration-300 ease-in-out shadow-neutral-600/40 shadow-lg`
          : " fixed top-0 left-0 right-0 z-50 transition-all duration-300  ease-in-out"
      }
    >
      <motion.nav
        className={
          " container max-w-6xl flex items-center justify-between m-auto py-2  px-8 "
        }
        initial="closed"
        animate={mobileNavOpen ? "opened" : "closed"}
      >
        <div className="flex items-center justify-center  ">
          <motion.img
            variants={hideNavItemsVariant}
            src="/logo.ico"
            width={45}
            height={45}
            alt={"logo"}
          />
        </div>
        <Links />

        <motion.div
          className="md:hidden cursor-pointer"
          variants={hideNavItemsVariant}
          onClick={() => setMobileNavOpen(true)}
        >
          <RiMenu2Fill className="text-[#0c0a22]" size={30} />
        </motion.div>

        <motion.div
          variants={mobileMenuVariant}
          className="bg-[#0c0a22]/80 backdrop-blur-md fixed top-0 left-0 min-h-screen z-[100] text-white w-full flex flex-col  py-10 px-6"
        >
          <motion.button
            className=" cursor-pointer flex items-end justify-end "
            variants={fadeInVariant}
            onClick={() => setMobileNavOpen(false)}
          >
            <HiOutlineX size={40} />
          </motion.button>
          <motion.ul
            className="flex flex-col text-xl my-16 space-y-8 items-center justify-center w-full h-full"
            variants={ulVariant}
          >
            <motion.li variants={liVariant} whileTap={{ scale: 0.95 }}>
              <Link
                className="  hover:text-[#bab5fc] px-6 cursor-pointer  capitalize font-medium duration-300 transition-all ease-in-out relative after:block  after:content-[''] after:rounded-lg  after:absolute after:h-[2px] after:bg-[#938bee] after:w-full after:scale-x-0 after:hover:scale-x-[80%]  after:transition after:duration-300 after:origin-center"
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                href="/"
              >
                Startseite
              </Link>
            </motion.li>
            <motion.li whileTap={{ scale: 0.95 }}>
              <motion.div variants={liVariant}>
                <Link
                  className="  hover:text-[#bab5fc] px-6 cursor-pointer  capitalize font-medium duration-300 transition-all ease-in-out relative after:block  after:content-[''] after:rounded-lg  after:absolute after:h-[2px] after:bg-[#938bee] after:w-full after:scale-x-0 after:hover:scale-x-[80%]  after:transition after:duration-300 after:origin-center"
                  onClick={() => setMobileNavOpen(!mobileNavOpen)}
                  href="/courses"
                >
                  Kurse
                </Link>
              </motion.div>
            </motion.li>
            <motion.li whileTap={{ scale: 0.95 }}>
              <motion.div variants={liVariant}>
                <Link
                  className="   hover:text-[#bab5fc] px-6 cursor-pointer  capitalize font-medium duration-300 transition-all ease-in-out relative after:block  after:content-[''] after:rounded-lg  after:absolute after:h-[2px] after:bg-[#938bee] after:w-full after:scale-x-0 after:hover:scale-x-[80%]  after:transition after:duration-300 after:origin-center"
                  onClick={() => setMobileNavOpen(!mobileNavOpen)}
                  href="/about"
                >
                  über uns
                </Link>
              </motion.div>
            </motion.li>
            <motion.li whileTap={{ scale: 0.95 }}>
              <motion.div variants={liVariant}>
                <Link
                  className=" hover:text-[#bab5fc] px-6 cursor-pointer  capitalize font-medium duration-300 transition-all ease-in-out relative after:block  after:content-[''] after:rounded-lg  after:absolute after:h-[2px] after:bg-[#938bee] after:w-full after:scale-x-0 after:hover:scale-x-[80%]  after:transition after:duration-300 after:origin-center"
                  onClick={() => setMobileNavOpen(!mobileNavOpen)}
                  href="/contact"
                >
                  Kontakt
                </Link>
              </motion.div>
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
