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
            <a href="#" className="header-main-item">
              <AnimatedText2 text={`Our Solutions`} />
            </a>
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
