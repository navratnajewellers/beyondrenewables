import { Affix } from "rsuite";
import "../styles/header.css";
import companyLogo from "/images/logo-33_2.png";
import AnimatedText2 from "./AnimatedText2";
import AnimatedText3 from "./AnimatedText3";
import { useState } from "react";
import { motion } from "motion/react";

const WbHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Affix>
        <header className="header-container flex">
          <nav className="logo imageWrapper">
            <img
              src={companyLogo}
              alt="Transparent"
              className="bg-transparent"
            />
          </nav>
          <nav className="header-main flex flex-row">
            <a href="#" className="header-main-item ">
              <AnimatedText2 text={`Home`} />
            </a>
            {/* <a href="#" className="header-main-item">
              <AnimatedText2 text={`Our Solutions`} />
            </a> */}
            <div
              className="relative inline-block header-main-item "
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              {/* Hover Trigger (Can Be Anywhere) */}
              <a href="#" className=" font-semibold">
                <AnimatedText2 text={`Our Solutions`} />
              </a>

              {/* Dropdown Menu */}
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-50"
                >
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                      <a href="#">Solar Recycling</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                      <a href="#">Decommissioning of Solar Assets</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                      <a href="#">Digitization of Solar Assets</a>
                    </li>
                  </ul>
                </motion.div>
              )}
            </div>
            <a href="#" className="header-main-item">
              <AnimatedText2 text={`Our Products`} />
            </a>
            <a href="#" className="header-main-item">
              <AnimatedText2 text={`About`} />
            </a>
            <a href="#" className="header-main-item">
              <AnimatedText3 text={`Blog`} />
            </a>
            <a href="#" className="header-main-item">
              <AnimatedText3 text={`Contact`} />
            </a>
          </nav>
          <nav className="header-started">
            <a href="#" className="started-text">
              Sell Your Panels
            </a>
          </nav>
        </header>
      </Affix>
    </div>
  );
};

export default WbHeader;
