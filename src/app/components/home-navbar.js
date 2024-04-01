"use client";
import "next/image";

const logoImage = "/images/logo_blank.png";

export default function HomeNavBar() {

  return (
    <nav className="bg-gray-200 items-center">
      <div className="bg-gray-400 flex mx-8 items-center space-x-40 my-4 md:space-x-[800px]">
        <div className="flex items-center">
          <img src={logoImage} width="50px" className="mr-2" />
          <span className="font-bold">Phoenix Bot</span>
        </div>
        <div className=" place-items-end">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
        </div>
      </div>
    </nav>
  );
}
