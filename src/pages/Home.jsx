// import { Link } from "react-router-dom";
import WbHeader from "../components/WbHeader";
import { useServerLink } from "../context/server.context";
import "../styles/home.css";
import { Accordion, Col, Divider, Row } from "rsuite";
import { motion } from "motion/react";
import HomeCarousel from "../components/HomeCarousel";
import PartnerLogoCarousel from "../components/PartnerLogoCarousel";
import SolarBlog from "../components/SolarBlog";
import ContactForm from "../components/ContactForm";
import WbFooter from "../components/WbFooter";
import ScrollPage from "../components/ScrollPage";
// import { FaBeer } from "react-icons/fa";

const Home = () => {
  const { serverLink } = useServerLink();

  return (
    <div>
      <div>
        <ScrollPage />
      </div>
      <div className=" absolute w-full z-10 ">
        <WbHeader />
      </div>
      <div>
        <div className="home-section-1">
          {/* <img src="/images/wind-1.jpg" /> */}
          <motion.div
            className=" flex flex-col home-section1-content "
            initial={{ opacity: 0, translateY: 65 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
          >
            <h2>Circular Economy</h2>
            <h3>for the PV industry</h3>
            <p>
              At Beyond Renewables, we aim to lead the global transition to
              sustainable energy by pioneering comprehensive Solar PV recycling
              solutions for a greener, cleaner, and circular future.{" "}
            </p>
            <div>
              <a href="#" className="section1-discover">
                Discover{" "}
              </a>
            </div>
          </motion.div>
        </div>
        <div className="home-section-2 flex flex-col ">
          <div className="section2-content">
            <h4>Our Solutions</h4>
            <h2>Our PV Recycling Ecosystem</h2>
          </div>
          <div className=" w-full section2-accordion">
            <Accordion
              defaultActiveKey={1}
              bordered
              className="section-accor-con"
            >
              <Accordion.Panel
                header={<p className="sec2-panel-header">Solar Recycling</p>}
                eventKey={1}
                className="section2-acc-panel"
              >
                <Row className="sec2-content-cont custom-flex ">
                  <Col xs={10}>
                    <motion.div
                      initial={{ opacity: 0, translateY: 25 }}
                      whileInView={{ opacity: 1, translateY: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="imageWrapper ">
                        <img src={`${serverLink}/images/section2-image1.png`} />
                      </div>
                    </motion.div>
                  </Col>
                  <Col xs={14}>
                    <div className="sec2-panel-content">
                      <motion.div
                        initial={{ opacity: 0, translateY: 35 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.7 }}
                      >
                        <motion.h3>Solar Recycling</motion.h3>
                        <motion.p>
                          We have ingeniously combined a range of cutting-edge
                          machines to develop the most efficient solar panel
                          recycling process available. This innovative approach
                          sets us apart, ensuring maximum recovery of
                        </motion.p>
                        <a href="#">Load More</a>
                      </motion.div>
                    </div>
                  </Col>
                </Row>
              </Accordion.Panel>
              <Accordion.Panel
                header={
                  <p className="sec2-panel-header">
                    Decommissioning of Solar Assets
                  </p>
                }
                eventKey={2}
                className="section2-acc-panel"
              >
                <Row className="sec2-content-cont custom-flex ">
                  <Col xs={10}>
                    <motion.div
                      initial={{ opacity: 0, translateY: 25 }}
                      whileInView={{ opacity: 1, translateY: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="imageWrapper">
                        <img src={`${serverLink}/images/section2-image2.png`} />
                      </div>
                    </motion.div>
                  </Col>
                  <Col xs={14}>
                    <div className="sec2-panel-content">
                      <motion.div
                        initial={{ opacity: 0, translateY: 35 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.7 }}
                      >
                        <motion.h3>Decommissioning of Solar Assets</motion.h3>
                        <motion.p>
                          We also specialize in the decommissioning of solar
                          assets. Our comprehensive process involves safely
                          removing panels from service, dismantling them with
                          precision, and ensuring all components are sustainably
                          managed.
                        </motion.p>
                        <a href="#">Load More</a>
                      </motion.div>
                    </div>
                  </Col>
                </Row>
              </Accordion.Panel>
              <Accordion.Panel
                header={
                  <p className="sec2-panel-header">
                    Digitization of Solar Assets
                  </p>
                }
                eventKey={3}
                className="section2-acc-panel"
              >
                <Row className="sec2-content-cont custom-flex ">
                  <Col xs={10}>
                    <motion.div
                      initial={{ opacity: 0, translateY: 25 }}
                      whileInView={{ opacity: 1, translateY: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="imageWrapper">
                        <img src={`${serverLink}/images/section2-image3.png`} />
                      </div>
                    </motion.div>
                  </Col>
                  <Col xs={14}>
                    <div className="sec2-panel-content">
                      <motion.div
                        initial={{ opacity: 0, translateY: 35 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.7 }}
                      >
                        <motion.h3>Digitization of Solar Assets</motion.h3>
                        <motion.p>
                          Our technology team is continuously working towards
                          created a digital ecosystem that enables comprehensive
                          tracking of solar assets and provides data analytics
                          regarding efficiency, panel aging, and energy
                          generation.
                        </motion.p>
                        <a href="#">Load More</a>
                      </motion.div>
                    </div>
                  </Col>
                </Row>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>
        <Row className="home-section3 flex  ">
          <div className="home-section3-bg"></div>
          <Col xs={14} className="sec3-content">
            <motion.div
              className=" flex flex-col text-center "
              initial={{ opacity: 0, translateY: 25 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="main-color">Our Mission</h2>
              <h3>To Infinity & Beyond</h3>
              <p>
                We aim to reduce solar waste, recover valuable materials, and
                promote a circular economy, ensuring that the benefits of
                renewable energy are realized sustainably. We aspire to set
                global standards for renewables waste management and contribute
                significantly to the global energy landscape
              </p>
            </motion.div>
          </Col>
          <Col xs={10} className=" flex justify-center ">
            <motion.div
              className="imageWrapper sec3-img "
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: [1.5, 1] }}
              transition={{ duration: 0.6 }}
            >
              <img src={`${serverLink}/images/about-4.png`} />
            </motion.div>
          </Col>
        </Row>
        <div className="home-section4 ">
          <Row
            as={motion.div}
            className="sec4-content1"
            initial={{ opacity: 0, translateY: 25 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Col xs={24} md={12} className="sec4-recycling-image">
              <div className="imageWrapper recycling-img1">
                <img src={`${serverLink}/images/consultation.jpg`} />
              </div>
              <div className="imageWrapper recycling-img2">
                <img src={`${serverLink}/images/solar-2.jpg`} />
              </div>
              <div className="imageWrapper recycling-img3">
                <img src={`${serverLink}/images/dot effect.svg`} />
              </div>
            </Col>
            <Col xs={24} md={12} className="sec4-recycling-content">
              <h4 className="main-color">PV Recycling</h4>
              <h2>Beyond Renewables: Sustainability through Circularity</h2>
              <p>
                In this era where environmental sustainability is paramount, our
                founders - Manhar and Vedant - have envisioned a truly
                sustainable future through Renewables waste management. Driven
                by a shared passion for sustainability and innovation, we aim to
                instill strong values in our company that strengthen our
                dedication to creating a cleaner future and fostering a circular
                economy.
              </p>
            </Col>
          </Row>
          <Row
            as={motion.div}
            className="sec4-content1"
            initial={{ opacity: 0, translateY: 25 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Col xs={24} md={12} className="sec4-recycling-content">
              <h4 className="main-color">About Us</h4>
              <h2>Innovators in Renewables Recycling</h2>
              <p>
                Beyond Renewables is more than just a startup; it&apos;s a
                movement towards a sustainable world. Our mission is to
                revolutionize recycling and waste management, transforming how
                industries and individuals perceive and handle waste. We believe
                in the power of a circular economy, where resources are reused,
                repurposed, and regenerated to their fullest potential. Our
                approach integrates advanced technologies and innovative
                practices, ensuring that every step we take is aligned with our
                commitment to environmental stewardship. From solar PV panel
                recycling to developing comprehensive waste management
                solutions, Beyond Renewables is at the forefront of change.
                Manhar and Vedant bring diverse expertise and a shared vision to
                the table. Together, they are dedicated to pushing boundaries
                and setting new standards in the recycling industry. Their
                leadership and dedication drive Beyond Renewables to
                continuously seek new opportunities to expand and impact various
                sectors, contributing to a sustainable future for generations to
                come.
              </p>
            </Col>
            <Col xs={24} md={12} className="sec4-recycling-video">
              <video
                src={`${serverLink}/videos/01.mp4`}
                autoPlay
                muted
                loop
                playsInline
                style={{ width: "100%", height: "auto" }}
              />
            </Col>
          </Row>
        </div>
        <Divider />
        <div className="home-section5 ">
          <motion.div
            className="sec5-content text-center "
            initial={{ opacity: 0, translateY: 25 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="main-color">Our Products</h4>
            <h2>Sustainably Sourced Raw Materials</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 25 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <HomeCarousel />
          </motion.div>
        </div>
        <Divider />
        <div className="home-section6 ">
          <motion.div
            className="sec5-content text-center "
            initial={{ opacity: 0, translateY: 25 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="main-color">Partners</h4>
            <h2>Our Partners</h2>
          </motion.div>
          <motion.div
            className=" flex justify-center "
            initial={{ opacity: 0, translateY: 25 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="fade-left"></div>
            <div className="fade-right"></div>
            <div
              className="sec6-logo-container"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
              }}
            >
              <PartnerLogoCarousel />
            </div>
          </motion.div>
        </div>
        <Divider />
        <div className="home-section7 ">
          <motion.div
            className="sec5-content text-center "
            initial={{ opacity: 0, translateY: 25 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="main-color">Blog</h4>
            <h2>Latest News & Blog</h2>
          </motion.div>
          <motion.div
            className="blog-container"
            initial={{ opacity: 0, translateY: 25 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <SolarBlog />
          </motion.div>
        </div>
        <Divider />
        <motion.div
          className="home-section8 "
          initial={{ opacity: 0, translateY: 25 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="sec8-bg-img"></div>
          <ContactForm />
        </motion.div>
        <div>
          <WbFooter />
        </div>
      </div>
      <div>
        {/* <h3>
          {" "}
          Lets go for a <FaBeer />?{" "}
        </h3> */}
        {/* <Link to="/beyondrenewables/page-scroll">Scroll Page</Link> */}
        {/* <Link to={`${serverLink}/page-scroll`}>Scroll Page</Link> */}
      </div>
    </div>
  );
};

export default Home;
