import { Col, Container, Divider, Row } from "rsuite";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import AnimatedText from "./AnimatedText";
import companyLogo from "/images/logo-33.webp";
import { useServerLink } from "../context/server.context";

const WbFooter = () => {
  const { serverLink } = useServerLink();

  return (
    <div>
      <Container className="wb-footer">
        <Row className="footer-section1">
          <Col
            xs={24}
            sm={24}
            md={8}
            lg={8}
            className=" flex sec1-content-container "
          >
            <div className="footer-row1-icon-container">
              <BiSolidPhoneCall />
            </div>
            <div>
              <h5>Customer Support</h5>
              <Link to="tel:8340325075">8340-325075</Link>
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={8}
            lg={8}
            className=" flex sec1-content-container "
          >
            <div className="footer-row1-icon-container">
              <IoIosMail />
            </div>
            <div>
              <h5>Support & Email</h5>
              <Link to="mailto:info@beyondrenewables.in">
                info@beyondrenewables.in
              </Link>
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={8}
            lg={8}
            className=" flex sec1-content-container "
          >
            <div className="footer-row1-icon-container">
              <IoLocation />
            </div>
            <div>
              <h5>Our Location</h5>
              <Link to="https://google.com/maps">
                WeWork Eldeco Centre, Block A, Shivalik Colony, Malviya Nagar,
                Delhi, New Delhi, Delhi 110017
              </Link>
            </div>
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col xs={24} sm={24} md={8} lg={8} className="sec2-content-container">
            <div>
              <a
                href={`${serverLink}/`}
                className="imageWrapper footer-sec2-logo "
              >
                <img src={companyLogo} />
              </a>
              <div className=" flex m-4 ft-sec2-social-icon-container ">
                <a href="https://linkedin.com/company/beyond-renewables">
                  <FaLinkedinIn />
                </a>

                <a href="#">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={5} lg={5} className="sec2-content-container">
            <div>
              <h4>Services</h4>
              <ul className="sec2-ul">
                <li>
                  <a href={`${serverLink}/solar-recycling`}>Solar Recycling</a>
                </li>
                <li>
                  <a href={`${serverLink}/decommissioning`}>
                    Decommissioning of solar panels
                  </a>
                </li>
                <li>
                  <a href={`${serverLink}/digitization`}>
                    Digitization of solar panels
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={24} sm={24} md={4} lg={4} className="sec2-content-container">
            <div>
              <h4>Quick Links</h4>
              <ul className="sec2-ul">
                <li>
                  <a href={`${serverLink}/contact`}>Contact</a>
                </li>
                <li>
                  <a href={`${serverLink}/about`}>About</a>
                </li>
                <li>
                  <a href={`${serverLink}/blog`}>Blog</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={24} sm={24} md={7} lg={7} className="sec2-content-container">
            <div>
              <h4>Get In Touch</h4>
              <ul className="sec2-ul">
                <li>
                  <a href="tel:+918192804780">Manhar Dixit: 8192804780</a>
                </li>
                <li>
                  <a href="tel:+918340325075"> Vedant Taneja: 8340325075 </a>
                </li>
                <li>
                  <a href="mailto:info@beyondrenewables.in">
                    info@beyondrenewables.in
                  </a>
                </li>
                <li>
                  <a href="#">
                    WeWork Eldeco Centre, Block A, Shivalik Colony, Malviya
                    Nagar, Delhi, New Delhi, Delhi 110017
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="footer-copyright-container">
          <Col xs={24} sm={24} md={14} lg={14}>
            <section className="ft-cp-sec1">
              Copyright {new Date().getFullYear()} - All Rights Reserved By
              <a href="#">
                <AnimatedText text={`Beyond Renewables`} />
              </a>
            </section>
          </Col>
          <Col xs={24} sm={24} md={10} lg={10}>
            <section className="ft-cp-sec2">
              <a href={`${serverLink}/privacy-policy`}>Privacy & Policy</a>
              <a href={`${serverLink}/term-condition`}>Terms and Conditions</a>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WbFooter;
