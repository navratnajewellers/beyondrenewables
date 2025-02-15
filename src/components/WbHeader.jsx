import { Affix } from "rsuite";
import "../styles/header.css";
import companyLogo from "/images/logo-33_2.png";

const WbHeader = () => {
  return (
    <div>
      <Affix>
        <header className="header-container flex">
          <div className="logo imageWrapper">
            <img
              src={companyLogo}
              alt="Transparent"
              className="bg-transparent"
            />
          </div>
          <div className="header-main flex flex-row">
            <a href="#" className="header-main-item ">
              Home
            </a>
            <a href="#" className="header-main-item">
              Our Solutions
            </a>
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
          </div>
          <div className="header-started">
            <a href="#" className="started-text">
              Sell Your Panels
            </a>
          </div>
        </header>
      </Affix>
    </div>
  );
};

export default WbHeader;
