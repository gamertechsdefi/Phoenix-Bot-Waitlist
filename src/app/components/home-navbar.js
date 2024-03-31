"use client";
import "next/image";

export default function HomeNavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4 text-center">
            {/* Logo or Brand name */}
            <div>
              <a
                href="https://bot.phoenixtoken.community"
                className="flex items-center py-5 px-2 text-white font-bold"
              >
                <img src={logoImage} alt="logo icon" width="45px" />
                <span className="ml-2 text-red-900">Phoenix Bot</span>
              </a>
            </div>
            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-2">
              <a href="" className="py-5 px-3 hover:text-gray-400">
                Home
              </a>
              <a href="#about" className="py-5 px-3 hover:text-gray-400">
                About
              </a>
              <a href="#tokenomics" className="py-5 px-3 hover:text-gray-400">
                Tokenomics
              </a>
              <a href="#howtobuy" className="py-5 px-3 hover:text-gray-400">
                How to buy
              </a>

              <a href="#community" className="py-5 px-3 hover:text-gray-400">
                Socials
              </a>
            </div>
          </div>
          {/* Secondary Nav */}
          <div className="hidden md:flex items-center space-x-1 shake glow">
            <a
              style={{
                background: "rgb(255,166,0)",
                background:
                  "linear-gradient(127deg, rgba(255,166,0,1) 0%, rgba(255,0,0,1) 100%)",
              }}
              href="#"
              className="font-bold py-2 px-3 text-white rounded hover:bg-yellow-600 hover:text-white transition duration-300"
            >
              Join Waitlist
            </a>
          </div>
          {/* Mobile button */}
          <div className="md:hidden flex items-center">
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
      </div>
      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden`}>
        <a href="#home" className="block py-2 px-4 text-sm hover:bg-blue-700">
          Home
        </a>
        <a href="#about" className="block py-2 px-4 text-sm hover:bg-blue-700">
          About
        </a>
        <a
          href="#tokenomics"
          className="block py-2 px-4 text-sm hover:bg-blue-700"
        >
          Keepernomics
        </a>
        <a
          href="#howtobuy"
          className="block py-2 px-4 text-sm hover:bg-blue-700"
        >
          How to buy
        </a>
        <a
          href="#community"
          className="block py-2 px-4 text-sm hover:bg-blue-700"
        >
          Join the Keepers
        </a>
        <a
          href="#airdrop"
          className="block font-bold py-2 px-4 text-sm hover:bg-blue-700"
        >
          Airdrop
        </a>
        <a
          href="https://pancakeswap.finance/swap?outputCurrency=0xb6623B503d269f415B9B5c60CDDa3Aa4fE34Fd22"
          className="block font-bold py-2 px-4 text-sm bg-pink-300 text-pink-900 rounded hover:bg-blue-700 hover:text-white transition duration-300"
        >
          Buy now
        </a>
      </div>
    </nav>
  );
}
