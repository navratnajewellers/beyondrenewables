import { Affix, Drawer, useMediaQuery } from "rsuite";
import "../styles/header.css";
import companyLogo from "/images/logo-33_2.png";
import mobileCompanyLogo from "/images/logo-1.png";
import AnimatedText2 from "./AnimatedText2";
// import AnimatedText3 from "./AnimatedText3";
import { useServerLink } from "../context/server.context";
import { Link } from "react-router-dom";
import MenuIcon from "@rsuite/icons/Menu";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const WbHeader = () => {
  const { serverLink } = useServerLink();

  const [isMobile] = useMediaQuery("(max-width: 900px)");

  const [isOpen, setIsOpen] = useState(false);
  // for the nav in drawer, opening options
  const [open, setOpen] = useState(false);

  console.log("is on Mobile device", isMobile);

  //Desktop Header
  const DesktopHeader = () => {
    return (
      <Affix>
        <header className="header-container flex">
          <a href={`${serverLink}/`} className="logo imageWrapper">
            <img
              src={companyLogo}
              alt="Transparent"
              className="bg-transparent"
            />
          </a>
          <nav className="header-main flex flex-row">
            <Link to={`${serverLink}/`} className="header-main-item ">
              <AnimatedText2 text={`Home`} />
            </Link>
            {/* <a href="#" className="header-main-item">
                <AnimatedText2 text={`Our Solutions`} />
              </a> */}
            <div className="header-main-item header-menu-container ">
              <a href="#">
                <AnimatedText2 text={`Our Solutions`} />
              </a>
              <ul className="header-sub-menu">
                <li>
                  <a href="/solar-recycling">Solar Recycling</a>
                </li>
                <li>
                  <a href="/solar-decommissioning">
                    Decommissioning of Solar Assets
                  </a>
                </li>
                <li>
                  <a href="/solar-digitization ">
                    Digitization of Solar Assets
                  </a>
                </li>
              </ul>
            </div>
            <a href="#" className="header-main-item">
              <AnimatedText2 text={`Our Products`} />
            </a>
            <Link to={`${serverLink}/about`} className="header-main-item">
              <AnimatedText2 text={`About`} />
            </Link>
            <a href={`${serverLink}/blog`} className="header-main-item">
              <AnimatedText2 text={`Blog`} />
            </a>
            <a href={`${serverLink}/contact`} className="header-main-item">
              <AnimatedText2 text={`Contact`} />
            </a>
          </nav>
          <nav className="header-started">
            <a href="/contact" className="started-text">
              Sell Your Panels
            </a>
          </nav>
        </header>
      </Affix>
    );
  };

  // Mobile Header
  const MobileHeader = () => {
    return (
      <Affix>
        <header className="m-header-container shadow-md ">
          <div className="m-header">
            <nav className="m-h-logo-container">
              <a href={`${serverLink}/`} className="m-h-logo imageWrapper">
                <img
                  src={mobileCompanyLogo}
                  alt="Transparent"
                  className="bg-transparent"
                />
              </a>
            </nav>
            <nav className="m-header-section2-container">
              <nav>
                <MenuIcon
                  style={{ fontSize: "2em" }}
                  onClick={() => setIsOpen(!isOpen)}
                  className="main-color"
                />
              </nav>
              <nav className="m-header-started">
                <a href="/contact" className="m-started-text">
                  Sell Your Panels
                </a>
              </nav>
            </nav>
          </div>
        </header>
      </Affix>
    );
  };

  return (
    <div>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
      <div>
        <Drawer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          placement="left"
          className="m-header-drawer-container"
        >
          <Drawer.Header>
            <Drawer.Title className=" text-center main-color-imp ">
              BEYOND RENEWABLES
            </Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <div className="vertical_menu">
              <ul>
                <li className="menu-item">
                  <a href="/">Home</a>
                </li>
                <li className="menu-item-has-children">
                  <a href="#" onClick={() => setOpen(!open)}>
                    Our Solutions
                  </a>
                  <span
                    className="mobile-arrows"
                    onClick={() => setOpen(!open)}
                  >
                    {!open ? <FaPlus /> : <FaMinus />}
                  </span>
                  <ul className={`sub-menu ${open ? "open" : ""}`}>
                    <li>
                      <a href="/solar-recycling">Solar Recycling</a>
                    </li>
                    <li>
                      <a href="/decommissioning">
                        Decommissioning of Solar Assets
                      </a>
                    </li>
                    <li>
                      <a href="/digitization">Digitization of Solar Assets</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a href="/products">Our Products</a>
                </li>
                <li className="menu-item">
                  <a href="/about">About</a>
                </li>
                <li className="menu-item">
                  <a href="/blog">Blog</a>
                </li>
                <li className="menu-item">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </Drawer.Body>
        </Drawer>
      </div>
    </div>
  );
};

export default WbHeader;
