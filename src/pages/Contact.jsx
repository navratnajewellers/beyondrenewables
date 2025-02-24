import { Breadcrumb, Col, Loader, Row } from "rsuite";
import ScrollPage from "../components/ScrollPage";
import WbHeader from "../components/WbHeader";
import "../styles/contact.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import ContactForm from "../components/ContactForm";
import WbFooter from "../components/WbFooter";
import { useState } from "react";
import locationImage from "/images/location-img.jpeg";
import emailImage from "/images/email-img.jpeg";
import phoneImage from "/images/phone-img.jpeg";
import followImage from "/images/follow-img.jpeg";
import { motion } from "motion/react";

const Contact = () => {
  const [isMapLoading, setIsMapLoading] = useState(true);

  return (
    <div>
      <div>
        <ScrollPage />
      </div>
      <div className=" absolute w-full z-10 ">
        <WbHeader />
      </div>
      <div className="breadcumb-container ">
        <div className=" bc-header ">
          <h1>Contact Us</h1>
        </div>
        <Breadcrumb className="bc-content">
          <Breadcrumb.Item href="/" className="bc-non-active">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="bc-active">
            Contact Us
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="contact-section1-container">
        <motion.div
          className="ct-sec1-header text-center "
          initial={{ opacity: 0, translateY: 25 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="main-color">Contact details</h4>
          <h2>Happy to Answer All Your Questions</h2>
        </motion.div>
        <motion.div
          className="ct-sec1-content"
          initial={{ opacity: 0, translateY: 45 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="ct-contact-container">
            <div className="imageWrapper">
              <img src={locationImage} />
            </div>
            <div className="ct-contact-details-container">
              <div className="ct-contact-details">
                <h5>Our Addresses:</h5>
                <p>
                  1505/1506, Hemkunt Tower, 98, Nehru Place, New delhi - 110019
                </p>
              </div>
            </div>
          </div>
          <div className="ct-contact-container">
            <div className="imageWrapper">
              <img src={emailImage} />
            </div>

            <div className="ct-contact-details-container">
              <div className="ct-contact-details">
                <h5>Emails:</h5>
                <p>
                  <a href="mailto:info@beyondrenewables.in">
                    info@beyondrenewables.in
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="ct-contact-container">
            <div className="imageWrapper">
              <img src={phoneImage} />
            </div>

            <div className="ct-contact-details-container">
              <div className="ct-contact-details">
                <h5>Phones:</h5>
                <p>
                  <a href="tel:+91 8340-325075">+91 8340-325075</a>
                </p>
              </div>
            </div>
          </div>
          <div className="ct-contact-container">
            <div className="imageWrapper">
              <img src={followImage} />
            </div>
            <div className="ct-contact-details-container">
              <div className="ct-contact-details">
                <h5>Follow Us:</h5>
                <div className=" flex justify-evenly ct-social-icon-container  ">
                  <a href="#">
                    <FaFacebookF />
                  </a>
                  <a href="#">
                    <FaLinkedinIn />
                  </a>
                  <a href="#">
                    <FaXTwitter />
                  </a>
                  <a href="#">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="contact-section2-container">
        <Row
          as={motion.div}
          className="ct-sec2-header text-center "
          initial={{ opacity: 0, translateY: 45 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="main-color">Contact details</h4>
          <h2>Happy to Answer All Your Questions</h2>
        </Row>
        <Row
          as={motion.div}
          initial={{ opacity: 0, translateY: 45 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Col xs={24} sm={24} md={12} lg={12} className="ct-sec2-contactform">
            <ContactForm />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            className="ct-sec2-gmap-conatiner"
          >
            <div className="ct-sec2-gmap">
              <Loader
                size="md"
                center
                content="loading"
                vertical
                className={isMapLoading ? "" : " dis-none-imp "}
              />
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7365384940667!2d77.24790428885501!3d28.547637699999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce340ab79b197%3A0x3720d15cd5fb9b1f!2sHemkunt%20Tower!5e0!3m2!1sen!2sin!4v1721993932794!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setIsMapLoading(false)}
              ></iframe>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <WbFooter />
      </div>
    </div>
  );
};

export default Contact;
