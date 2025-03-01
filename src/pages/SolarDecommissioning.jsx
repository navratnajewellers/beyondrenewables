import { Breadcrumb, Col, Divider, Row } from "rsuite";
import ScrollPage from "../components/ScrollPage";
import WbHeader from "../components/WbHeader";
import { Helmet } from "react-helmet-async";
import "../styles/solarDecommissioning.css";
import decommissionImage from "/images/solar-decommissioning-image-1.png";
import WbFooter from "../components/WbFooter";
import { motion } from "motion/react";
import { useServerLink } from "../context/server.context";

const SolarDecommissioning = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const { serverLink } = useServerLink();

  return (
    <div>
      <Helmet>
        <title>
          Decommissioning of Solar Assets | Beyond Renewables | Sustainability
          through Circularity
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
          <h1>Decommissioning</h1>
        </div>
        <Breadcrumb className="bc-content">
          <Breadcrumb.Item href={`${serverLink}/`} className="bc-non-active">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="bc-active">
            Decommissioning of Solar Assets
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="sd-section1-container">
        <Row
          className="sd-sec1-row1-container"
          as={motion.section}
          initial={{ opacity: 0, translateY: 45 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Col xs={24} sm={24} md={12} lg={12} className="sd-sec1-row1-image">
            <div className="imageWrapper">
              <img src={decommissionImage} />
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} className="sd-sec1-row1-content">
            <div>
              <h4 className="main-color header-special-text ">Solar Panel</h4>
              <h2>Decommissioning of Solar Assets</h2>
            </div>
            <div>
              <p>
                At Beyond Renewables, we also specialize in the decommissioning
                of solar panels. Our comprehensive process involves safely
                removing panels from service, dismantling them with precision,
                and ensuring all components are sustainably managed. This
                service seamlessly integrates with our efficient recycling
                operations, reflecting our commitment to sustainability and
                environmental stewardship.
              </p>
            </div>
          </Col>
        </Row>
        <Row
          className="sd-sec1-row2-container"
          as={motion.section}
          initial={{ opacity: 0, translateY: 45 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>
            Decommissioning solar panels is a critical aspect of the solar
            lifecycle, particularly as panels begin to degrade and reach the end
            of their useful life. Without proper decommissioning, the risk of
            environmental contamination from hazardous materials such as cadmium
            and lead increases significantly. Additionally, improper handling of
            decommissioned panels can lead to the loss of valuable materials
            like silicon and silver, which are crucial for manufacturing new
            panels and other high-tech applications.
          </p>
        </Row>
        <Row
          className="sd-sec1-row3-container"
          as={motion.section}
          initial={{ opacity: 0, translateY: 45 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div>
            <h4 className="main-color">
              Planning and Logistics: The Backbone of Effective Decommissioning
            </h4>
            <p className="main-para-col">
              At Beyond Renewables, we understand that effective decommissioning
              starts with meticulous planning and robust logistics. Our approach
              to solar panel decommissioning is built around these core
              principles:
            </p>
          </div>
        </Row>
        <Row
          className="sd-sec1-row4-container"
          as={motion.section}
          initial={{ opacity: 0, translateY: 45 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Col xs={24} sm={24} md={8} lg={8} className="sd-row4-container">
            <div className="sd-row4-content">
              <h4 className="main-color">Comprehensive Site Assessments</h4>
              <p className="main-para-col">
                Before initiating the decommissioning process, our team conducts
                thorough site assessments to understand the specific
                requirements of each project. This includes evaluating the
                condition of the panels, identifying potential hazards, and
                planning for the safe removal of the panels.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} className="sd-row4-container">
            <div className="sd-row4-content">
              <h4 className="main-color">Customized Decommissioning Plans</h4>
              <p className="main-para-col">
                Based on the site assessments, we develop customized
                decommissioning plans that detail every step of the process,
                from the safe disconnection and removal of panels to their
                transportation to recycling facilities. Our plans ensure minimal
                disruption to the site and maximize the recovery of valuable
                materials.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} className="sd-row4-container">
            <div className="sd-row4-content">
              <h4 className="main-color">
                Efficient Transportation and Handling
              </h4>
              <p className="main-para-col">
                Logistics play a crucial role in the decommissioning process. We
                have established a network of transportation solutions that
                ensure the safe and efficient transfer of decommissioned panels
                from the site to our recycling facilities. Our focus on reducing
                the carbon footprint of transportation aligns with our
                commitment to sustainability.
              </p>
            </div>
          </Col>
        </Row>
        <Divider />
        <Row
          className="sd-sec1-row5-container"
          as={motion.section}
          initial={{ opacity: 0, translateY: 45 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div>
            <h2 className="main-color">
              Beyond Renewables’ Decommissioning Services
            </h2>
            <p className="main-para-col">
              Beyond Renewables offers a suite of decommissioning services
              tailored to meet the needs of solar plant operators, installers,
              and other stakeholders:
            </p>
          </div>
          <div>
            <ul>
              <li>
                <h4 className="main-color">Safe Disconnection and Removal:</h4>
                <p className="main-para-col">
                  We ensure that all panels are safely disconnected from the
                  grid and removed from their mounting structures without
                  causing damage to the environment or the remaining
                  infrastructure.
                </p>
              </li>
              <li>
                <h4 className="main-color">Safe Disconnection and Removal:</h4>
                <p className="main-para-col">
                  We ensure that all panels are safely disconnected from the
                  grid and removed from their mounting structures without
                  causing damage to the environment or the remaining
                  infrastructure.
                </p>
              </li>
              <li>
                <h4 className="main-color">Safe Disconnection and Removal:</h4>
                <p className="main-para-col">
                  We ensure that all panels are safely disconnected from the
                  grid and removed from their mounting structures without
                  causing damage to the environment or the remaining
                  infrastructure.
                </p>
              </li>
              <li>
                <h4 className="main-color">Safe Disconnection and Removal:</h4>
                <p className="main-para-col">
                  We ensure that all panels are safely disconnected from the
                  grid and removed from their mounting structures without
                  causing damage to the environment or the remaining
                  infrastructure.
                </p>
              </li>
            </ul>
          </div>
          <div className=" mt-4 ">
            <p className="main-para-col">
              <span className="main-color">At Beyond Renewables,</span> we
              understand that effective decommissioning starts with meticulous
              planning and robust logistics. Our approach to solar panel
              decommissioning is built around these core principles:
            </p>
          </div>
        </Row>
      </div>
      <div>
        <WbFooter />
      </div>
    </div>
  );
};

export default SolarDecommissioning;
