import { Breadcrumb, Col, Loader, Row } from "rsuite";
import ScrollPage from "../components/ScrollPage";
import WbHeader from "../components/WbHeader";
import "../styles/contact.css";
import ContactForm from "../components/ContactForm";
import WbFooter from "../components/WbFooter";
import { useState } from "react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { FaPhoneVolume } from "react-icons/fa6";

const Contact = () => {
  const [isMapLoading, setIsMapLoading] = useState(true);

  return (
    <div>
      <Helmet>
        <title>
          Contact US | Beyond Renewables | Sustainability through Circularity
        </title>
        <meta
          name="description"
          content="Beyond Renewables | Sustainability through Circularity"
        />
        <meta
          name="keywords"
          content="Beyond Renewables | Sustainability through Circularity"
        />
        <meta
          name="author"
          content="Beyond Renewables | Sustainability through Circularity"
        />
      </Helmet>
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
          <div className="ct-sec1-content-detail">
            <div className="ct-sec1-content-image">
              <FaPhoneVolume />
            </div>
            <div>
              <p>Phone :</p>
              <h5>
                <a href="tel:+918340325075" className="main-color">
                  +91 8340-325075
                </a>
              </h5>
            </div>
          </div>
          <div className="ct-sec1-content-detail">
            <div className="ct-sec1-content-image">
              <FaPhoneVolume />
            </div>
            <div>
              <p>Email Address :</p>
              <h5>
                <a
                  href="mailto:info@beyondrenewables.in"
                  className="main-color"
                >
                  info@beyondrenewables.in
                </a>
              </h5>
            </div>
          </div>
          <div className="ct-sec1-content-detail">
            <div className="ct-sec1-content-image">
              <FaPhoneVolume />
            </div>
            <div>
              <p>Location :</p>
              <h5>
                <a href="#" className="main-color">
                  1505/1506, Hemkunt Tower, 98, Nehru Place, New delhi - 110019
                </a>
              </h5>
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
