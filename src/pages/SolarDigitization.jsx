import { Helmet } from "react-helmet-async";
import ScrollPage from "../components/ScrollPage";
import { Breadcrumb, Col, Row } from "rsuite";
import WbHeader from "../components/WbHeader";
import "../styles/solarDigitization.css";
import WbFooter from "../components/WbFooter";
import { motion } from "motion/react";
import { useServerLink } from "../context/server.context";

const SolarDigitization = () => {
  const { serverLink } = useServerLink();

  return (
    <div>
      <Helmet>
        <title>
          Digitization of the PV Economy | Beyond Renewables | Sustainability
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
          <h1>Digitization</h1>
        </div>
        <Breadcrumb className="bc-content">
          <Breadcrumb.Item href={`${serverLink}/`} className="bc-non-active">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="bc-active">
            Digitization of the PV Economy
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="dt-section1-container">
        <motion.div
          initial={{ opacity: 0, translateY: 45 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="main-color header-special-text ">Solar Panel</h4>
          <h2>Digitization of the PV Economy</h2>
          <p className="main-para-col">
            At Beyond Renewables, we believe in harnessing the power of
            technology to revolutionize the solar industry. Our vision for the
            future includes the &quot;Digitization of the PV Economy&quot;—a
            pioneering initiative aimed at creating a seamless, data-driven
            ecosystem that tracks and manages solar assets throughout their
            entire lifecycle. This innovative approach is set to transform how
            solar projects are managed in India, ensuring efficiency,
            sustainability, and accountability at every stage.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 45 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="main-color">
            What is Digitization of the PV Economy?
          </h3>
          <p className="main-para-col">
            The Digitization of the PV Economy is an ambitious project that
            involves developing an accessible and comprehensive database of
            solar projects across India. This database will allow stakeholders,
            from manufacturers and installers to policymakers and recyclers, to
            track the status, performance, and lifecycle of solar assets in
            real-time. By providing a centralized platform for data, Beyond
            Renewables aims to enhance the transparency and efficiency of the
            solar industry, enabling better decision-making and ensuring that
            every solar panel is utilized to its fullest potential before
            reaching its endof-life.
          </p>
        </motion.div>
      </div>
      <div className="dt-section2-container">
        <motion.div
          className="dt-sec2-header"
          initial={{ opacity: 0, translateY: 45 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="main-color">Our Solutions</h4>
          <h2>Key Features and Benefits</h2>
        </motion.div>
        <Row
          as={motion.div}
          initial={{ opacity: 0, translateY: 45 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Col xs={24} sm={24} md={12} lg={12}>
            <div className="dt-sec2-content">
              <h4>
                <a className="main-color" href="/solar-recycling">
                  Lifecycle Tracking of Solar Assets
                </a>
              </h4>
              <p className="main-para-col">
                Our digitization platform will enable the tracking of solar
                panels from the moment they are installed until they are
                decommissioned. This lifecycle tracking ensures that panels are
                maintained properly, their performance is monitored, and when
                the time comes, they are responsibly decommissioned and
                recycled. This comprehensive tracking helps in identifying
                panels that may need early intervention, thus extending their
                useful life and maximizing return on investment.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <div className="dt-sec2-content">
              <h4>
                <a className="main-color" href="/solar-recycling">
                  Resource Recovery and Forward Integration
                </a>
              </h4>
              <p className="main-para-col">
                One of the key innovations of our digitization initiative is the
                ability to track and manage the extracted raw materials from
                decommissioned panels. By closely monitoring the flow of
                materials such as silicon, silver, and copper, Beyond Renewables
                can ensure that these resources are recycled and reintegrated
                into new solar products or other industries. This closed-loop
                system supports a circular economy, reducing dependency on
                virgin materials and minimizing waste.
              </p>
            </div>
          </Col>
        </Row>
        <Row
          className="dt-sec2-content-container2"
          as={motion.div}
          initial={{ opacity: 0, translateY: 45 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Col xs={24} sm={24} md={12} lg={12}>
            <div className="dt-sec2-content">
              <h4>
                <a className="main-color" href="/solar-recycling">
                  Enhanced Transparency and Accountability
                </a>
              </h4>
              <p className="main-para-col">
                Our platform will bring unprecedented transparency to the solar
                industry. Stakeholders will have access to real-time data on the
                status and performance of solar assets, enabling better
                oversight and accountability. This transparency builds trust
                among consumers, investors, and regulators, fostering a more
                sustainable and resilient solar market.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <div className="dt-sec2-content">
              <h4>
                <a className="main-color" href="/solar-recycling">
                  Data-Driven Decision Making
                </a>
              </h4>
              <p className="main-para-col">
                The data collected through our digitization platform will be
                invaluable for research, development, and policy-making. By
                analysing trends and patterns in solar asset performance and
                lifecycle management, stakeholders can make informed decisions
                that drive innovation, improve efficiency, and enhance the
                sustainability of the solar industry in India.
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <div className="dt-section3-container">
        <motion.section
          initial={{ opacity: 0, translateY: 45 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="main-color">The Future of Solar in India</h3>
          <p className="main-para-col">
            Beyond Renewables is committed to leading the way in the
            digitization of the PV economy in India. As we develop and implement
            this cutting-edge technology, we are laying the foundation for a
            future where solar energy is not only a source of clean power but
            also a model of efficiency and sustainability. By ensuring that
            every solar panel is tracked, managed, and recycled responsibly, we
            are helping to create a truly circular economy that benefits both
            the environment and the economy.
          </p>
          <p className="main-para-col">
            Join us on this journey to a smarter, more sustainable solar future.
            At Beyond Renewables, we are not just imagining the future of solar
            energy—we are building it.
          </p>
        </motion.section>
      </div>
      <div>
        <WbFooter />
      </div>
    </div>
  );
};

export default SolarDigitization;
