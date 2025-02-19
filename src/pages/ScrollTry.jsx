// const ScrollTry = () => {
//   return <div>ScrollTry</div>;
// };

// export default ScrollTry;

// import { useState, useEffect } from "react";
// import { motion } from "motion/react";

// export default function ScrollTry() {
//   const [scrollPercent, setScrollPercent] = useState(0);

//   // Handle Scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrolled = window.scrollY;
//       const maxScroll =
//         document.documentElement.scrollHeight - window.innerHeight;
//       const scrollRatio = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0;
//       setScrollPercent(scrollRatio);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Background color changes with scroll (RGB format)
//   const backgroundColor = `rgb(${255 - scrollPercent * 2.5}, ${100 + scrollPercent}, ${150 + scrollPercent * 1.5})`;

//   return (
//     <motion.div
//       className="w-full min-h-screen flex justify-center items-center transition-all duration-500"
//       style={{ backgroundColor }}
//     >
//       {/* Scroll Percentage Display */}
//       <motion.div
//         className="fixed top-4 right-6 bg-black text-white px-4 py-2 rounded-lg shadow-lg"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         Scroll: {Math.round(scrollPercent)}%
//       </motion.div>

//       <h1 className="text-4xl font-bold text-white">
//         Scroll Down to Change Background
//       </h1>

//       {/* Extra content to enable scrolling */}
//       <div className="h-[200vh]"></div>
//     </motion.div>
//   );
// }

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoMdClose, IoIosMenu } from "react-icons/io";
import companyLogo from "/images/logo-33_2.png";
import { FaChevronDown } from "react-icons/fa";

export default function ScrollTry() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0;
      setScrollPercent(scrollRatio);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Background color changes with scroll (RGB format)
  const backgroundColor = `rgb(${255 - scrollPercent * 2.5}, ${100 + scrollPercent}, ${150 + scrollPercent * 1.5})`;

  // Circle properties
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progress = (scrollPercent / 100) * circumference;

  return (
    <div>
      <div>
        <header className="header-container flex justify-between items-center px-6 py-4 bg-white shadow-md fixed w-full top-0 z-50">
          {/* Logo */}
          <nav className="logo imageWrapper">
            <img src={companyLogo} alt="Company Logo" className="h-10" />
          </nav>

          {/* Desktop Menu (Centered) */}
          <nav className="hidden md:flex flex-row space-x-6 absolute left-1/2 transform -translate-x-1/2">
            <a href="#" className="header-main-item">
              Home
            </a>

            {/* Dropdown Menu for "Our Solutions" */}
            <div
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="header-main-item flex items-center gap-1">
                Our Solutions <FaChevronDown size={16} />
              </button>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md p-2"
                  >
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Solution 1
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Solution 2
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Solution 3
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#" className="header-main-item">
              Our Products
            </a>
            <a href="#" className="header-main-item">
              About
            </a>
            <a href="#" className="header-main-item">
              Blog
            </a>
            <a href="#" className="header-main-item">
              Contact
            </a>
          </nav>

          {/* Right Button */}
          <nav className="hidden md:flex">
            <a
              href="#"
              className="started-text bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Sell Your Panels
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoMdClose size={28} /> : <IoIosMenu size={28} />}
          </button>

          {/* Mobile Menu Dropdown with Animation */}
          <AnimatePresence>
            {isOpen && (
              <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="md:hidden absolute top-full left-0 w-full bg-white shadow-md text-center"
              >
                <a href="#" className="block py-2 border-b">
                  Home
                </a>

                {/* Mobile Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="block py-2 border-b w-full flex justify-center items-center gap-1"
                  >
                    Our Solutions <FaChevronDown size={16} />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-gray-100"
                      >
                        <a href="#" className="block py-2">
                          Solution 1
                        </a>
                        <a href="#" className="block py-2">
                          Solution 2
                        </a>
                        <a href="#" className="block py-2">
                          Solution 3
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a href="#" className="block py-2 border-b">
                  Our Products
                </a>
                <a href="#" className="block py-2 border-b">
                  About
                </a>
                <a href="#" className="block py-2 border-b">
                  Blog
                </a>
                <a href="#" className="block py-2 border-b">
                  Contact
                </a>
                <a href="#" className="block py-2 bg-blue-500 text-white">
                  Sell Your Panels
                </a>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>
      </div>
      <motion.div
        className="w-full min-h-screen flex justify-center items-center transition-all duration-500"
        style={{ backgroundColor }}
      >
        {/* Scroll Percentage Circle */}
        <motion.div
          className="fixed top-6 right-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            {/* Background Circle (Gray) */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="8"
              fill="none"
            />

            {/* Progress Circle (Animated) */}
            <motion.circle
              cx="50"
              cy="50"
              r={radius}
              stroke="white"
              strokeWidth="8"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - progress}
              strokeLinecap="round"
              transition={{ duration: 0.2, ease: "easeInOut" }}
            />

            {/* Scroll Percentage Text */}
            <text
              x="50"
              y="55"
              textAnchor="middle"
              fontSize="18"
              fill="white"
              fontWeight="bold"
            >
              {Math.round(scrollPercent)}%
            </text>
          </svg>
        </motion.div>

        <h1 className="text-4xl font-bold text-white">
          Scroll Down to Fill the Circle
        </h1>

        {/* Extra content to enable scrolling */}
        <div className="h-[200vh]"></div>
      </motion.div>
    </div>
  );
}
