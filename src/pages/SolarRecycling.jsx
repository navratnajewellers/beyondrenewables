import { Breadcrumb, Col, Row } from "rsuite";
import "../styles/solarRecycling.css";
import ScrollPage from "../components/ScrollPage";
import WbHeader from "../components/WbHeader";
import WbFooter from "../components/WbFooter";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import consultationImage1 from "/images/consultation2.jpeg";
import { useServerLink } from "../context/server.context";

const SolarRecycling = () => {
  const { serverLink } = useServerLink();

  return (
    <div>
      <Helmet>
        <title>
          Recycle with Beyond | Beyond Renewables | Sustainability through
          Circularity
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
          <h1>Solar Recycling</h1>
        </div>
        <Breadcrumb className="bc-content">
          <Breadcrumb.Item href={`${serverLink}/`} className="bc-non-active">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="bc-active">
            Recycle with Beyond
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="sr-section1-container">
        <Row>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            className="sr-sec1-img-container"
            as={motion.section}
            initial={{ opacity: 0, translateY: 45 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="imageWrapper">
              <img src={consultationImage1} />
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            className="sr-sec1-content-container"
            as={motion.section}
            initial={{ opacity: 0, translateY: 45 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="sr-sec1-header">
              <h4 className="main-color">Solar Panel</h4>
              <h2>Recycle with Beyond</h2>
            </div>
            <div className="sr-sec1-content">
              <p>
                We at Beyond Renewables have ingeniously combined a range of
                cutting-edge machines to develop the most efficient solar panel
                recycling process available. This innovative approach sets us
                apart, ensuring maximum recovery of valuable materials and
                minimal environmental impact. Join us on our journey to
                revolutionize recycling and contribute to a cleaner, more
                sustainable world.
              </p>
              <p>
                We recover critical raw materials from Photovoltaic panels via
                our pioneering recycling technology to recirculate them into the
                energy ecosystem, establishing a circular economy model. Our
                high value recycling process is able to recover greater than 95%
                of the materials from a defunct, damaged, or end-of-life panel.
              </p>
              <p>
                While most scrappers are only able to extract the aluminium
                frame from the panel, our R&D team has come up with a process
                that recovers critical elements like silicon, copper, silver,
                and even the EVA film from the panel. The purity of our
                recovered materials is greater than 90% and we continuously work
                towards improving it.
              </p>
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

export default SolarRecycling;
