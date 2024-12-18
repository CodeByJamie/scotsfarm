"use client";
import { Bars3Icon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import NavLink from "./navLink";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const currentPath = usePathname();
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropDown] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const handleToggle = () => {
    setToggle(!toggle);
    setDropDown(!dropdown);
  };

  return (
    <div
      className={`absolute top-0 left-0 w-full h-fit flex flex-row justify-between items-center p-4 text-zinc-300 bg-zinc-900 bg-opacity-30 font-funnelSans px-6`}
    >
      <Link href="/" className="text-xl text-white">
        ScotsFarm
      </Link>
      <Bars3Icon className="size-5 lg:hidden" />
      <nav className="flex items-center gap-12">
        <NavLink name="About us" />
        <div
          className={`relative flex flex-row items-center justify-center gap-2`}
        >
          <NavLink name="Services" />
          <ChevronRightIcon
            className={`size-4 cursor-pointer ${
              toggle && "rotate-90"
            } duration-300`}
            onClick={handleToggle}
          />
          <div className="absolute flex flex-col top-[2.6rem]">
            <AnimatePresence>
              {dropdown && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={menuVariants}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`flex flex-col bg-zinc-900 bg-opacity-30 gap-2 rounded-b-lg text-center z-50 py-2 px-4 select-none`}
                >
                  <NavLink name="Location" />
                  <NavLink name="Sustainability" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <NavLink name="Contact"/>
      </nav>
    </div>
  );
}
