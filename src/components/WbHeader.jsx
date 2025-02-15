import { Affix } from "rsuite";
import "../styles/header.css";
import companyLogo from "/images/logo-33_1-removebg-preview (1).png";

const WbHeader = () => {
  return (
    <div>
      <Affix>
        <header className="header-container flex">
          <div className="logo imageWrapper">
            <img src={companyLogo}></img>
          </div>
          <div className="header-main flex flex-row">
            <div className="p-r-10 header-main-item ">Intro</div>
            <div className="p-r-10 header-main-item">Benefits</div>
            <div className="p-r-10 header-main-item">Services</div>
            <div className="p-r-10 header-main-item">Testimonials</div>
          </div>
          <div className="header-started">
            <p className="started-text">Sell Your Panels</p>
          </div>
        </header>
      </Affix>
    </div>
  );
};

export default WbHeader;
