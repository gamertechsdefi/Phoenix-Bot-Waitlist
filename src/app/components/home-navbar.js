"use client";
import { useRef, useState } from "react";
import "next/image";
import { motion } from "framer-motion";

const logoImage = "/images/logo_blank.png";

const popVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 1, x: "-100%" },
};

const popupButtonVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

export default function HomeNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // const menuRef = useRef();
  // const listRef = useRef();

  return (
    <nav className=" sticky top-0 z-30 items-center">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: "400", delay: -0.2 }}
        className="bg-white flex mx-4 items-center my-4 md:mx-8"
      >
        <div className="mt-2 flex items-center">
          <img src={logoImage} width="50px" className="mr-2" />
          <span className="font-bold text-red-900">Phoenix Bot</span>
        </div>
        <div className="justify-end flex flex-grow">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className=" font-bold hover:text-[gray] relative flex"
          >
            <span className="">Menu</span>
            <motion.svg
              initial={{ rotate: 270 }}
              whileTap={{ rotate: 0 }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 15.5l-6-6 1.41-1.41L12 12.67l4.59-4.58L18 9.5z" />
            </motion.svg>
          </motion.button>
          {isOpen && (
            <div className="mt-8 flex flex-col absolute bg-gray-100 p-4 rounded-sm ">
              <motion.ul
                onClick={() => setIsOpen(false)}
                variants={popupButtonVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col cursor-pointer"
              >
                <a href="https://phoenixtoken.community" className="hover:text-gray-500">Home</a>
                <a href="https://t.me/PhoenixToken0" className="hover:text-gray-500">Telegram</a>
                <a href="https://x.com/PhoenixToken0" className="hover:text-gray-500">Twitter</a>
                <a href="https://medium.com/@phoenixtoken" className="hover:text-gray-500">Medium</a>
                <a href="https://warpcast.com/phoenixtoken" className="hover:text-gray-500">Warpcaster</a>
                <button 

                className="bg-[red] text-white font-bold rounded-[5px] p-1 hover:bg-gray-100 hover:text-[red]">
                  Buy now</button>
              </motion.ul>
            </div>
          )}
        </div>
      </motion.div>
    </nav>
  );
}
