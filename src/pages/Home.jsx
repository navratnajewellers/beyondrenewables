// import { Link } from "react-router-dom";
import WbHeader from "../components/WbHeader";
import { useServerLink } from "../context/server.context";
import "../styles/home.css";
import { Accordion, Col, Row } from "rsuite";
import { motion } from "motion/react";

const Home = () => {
  const { serverLink } = useServerLink();
  return (
    <div>
      <div className=" absolute w-full ">
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
                <Row className="sec2-content-cont">
                  <Col xs={10}>
                    <motion.div
                      initial={{ opacity: 0, translateY: 25 }}
                      whileInView={{ opacity: 1, translateY: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="imageWrapper">
                        <img src={`${serverLink}/images/1.jpg`} />
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
                <Row className="sec2-content-cont">
                  <Col xs={10}>
                    <motion.div
                      initial={{ opacity: 0, translateY: 25 }}
                      whileInView={{ opacity: 1, translateY: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="imageWrapper">
                        <img src={`${serverLink}/images/1.jpg`} />
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
                <Row className="sec2-content-cont">
                  <Col xs={10}>
                    <motion.div
                      initial={{ opacity: 0, translateY: 25 }}
                      whileInView={{ opacity: 1, translateY: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="imageWrapper">
                        <img src={`${serverLink}/images/1.jpg`} />
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
        <div className="home-section3 flex flex-col ">
          <div className="imageWrapper sec3-img ">
            <img src={`${serverLink}/images/about-4.png`} />
          </div>
          <div className=" flex flex-col text-center ">
            <h2>Our Mission</h2>
            <h3>To Infinity & Beyond</h3>
            <p>
              We aim to reduce solar waste, recover valuable materials, and
              promote a circular economy, ensuring that the benefits of
              renewable energy are realized sustainably. We aspire to set global
              standards for renewables waste management and contribute
              significantly to the global energy landscape
            </p>
          </div>
        </div>
      </div>
      <div>
        {/* <Link to="/beyondrenewables/page-scroll">Scroll Page</Link> */}
        {/* <Link to={`${serverLink}/page-scroll`}>Scroll Page</Link> */}
      </div>
    </div>
  );
};

export default Home;
