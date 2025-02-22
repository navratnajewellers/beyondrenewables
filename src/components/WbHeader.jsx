import { Affix } from "rsuite";
import "../styles/header.css";
import companyLogo from "/images/logo-33_2.png";
import AnimatedText2 from "./AnimatedText2";
import AnimatedText3 from "./AnimatedText3";
import { useServerLink } from "../context/server.context";
import { Link } from "react-router-dom";

const WbHeader = () => {
  const { serverLink } = useServerLink();

  return (
    <div>
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
                  <a href="solar_recycling.html">Solar Recycling</a>
                </li>
                <li>
                  <a href="decommissioning.html">
                    Decommissioning of Solar Assets
                  </a>
                </li>
                <li>
                  <a href="digitization.html ">Digitization of Solar Assets</a>
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
              <AnimatedText3 text={`Blog`} />
            </a>
            <a href={`${serverLink}/contact`} className="header-main-item">
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
