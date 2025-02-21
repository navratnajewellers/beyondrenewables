import { Affix } from "rsuite";
import "../styles/header.css";
import companyLogo from "/images/logo-33_2.png";
import AnimatedText2 from "./AnimatedText2";
import AnimatedText3 from "./AnimatedText3";

const WbHeader = () => {
  return (
    <div>
      <Affix>
        <header className="header-container flex">
          <a href="/" className="logo imageWrapper">
            <img
              src={companyLogo}
              alt="Transparent"
              className="bg-transparent"
            />
          </a>
          <nav className="header-main flex flex-row">
            <a href="/" className="header-main-item ">
              <AnimatedText2 text={`Home`} />
            </a>
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
            <a href="/about" className="header-main-item">
              <AnimatedText2 text={`About`} />
            </a>
            <a href="/blog" className="header-main-item">
              <AnimatedText3 text={`Blog`} />
            </a>
            <a href="/contact" className="header-main-item">
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
