import { Helmet } from "react-helmet-async";
import WbHeader from "../components/WbHeader";
import { Breadcrumb, Row } from "rsuite";
import ScrollPage from "../components/ScrollPage";
import "../styles/product.css";
import { useServerLink } from "../context/server.context";
import WbFooter from "../components/WbFooter";
import { motion } from "motion/react";

const SolarPVPanelRecycling = () => {
  const { serverLink } = useServerLink();

  const productsDetails = [
    {
      id: 1,
      img: `${serverLink}/images/1.jpg`,
      name: "Glass Cutllets",
      materialWeight: "75%",
      recoveryRate: "96%",
      purity: "98%",
    },
    {
      id: 2,
      img: `${serverLink}/images/2.jpg`,
      name: "Aluminium",
      materialWeight: "8%",
      recoveryRate: "99%",
      purity: "99%",
    },
    {
      id: 3,
      img: `${serverLink}/images/3.jpg`,
      name: "Copper",
      materialWeight: "1%",
      recoveryRate: "97%",
      purity: "98%",
    },
    {
      id: 4,
      img: `${serverLink}/images/4.jpg`,
      name: "Silicon",
      materialWeight: "5%",
      recoveryRate: "97%",
      purity: "98%",
    },
    {
      id: 5,
      img: `${serverLink}/images/5.jpg`,
      name: "Silver",
      materialWeight: "0.02%",
      recoveryRate: "95%",
      purity: "99%",
    },
    {
      id: 6,
      img: `${serverLink}/images/6.jpg`,
      name: "Plastic Pyrolysis Oil",
      materialWeight: "10%",
      recoveryRate: "85%",
      purity: "95%",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>
          Solar PV Panel Recycling | Beyond Renewables | Sustainability through
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
          <h1>Solar PV Panel Recycling</h1>
        </div>
        <Breadcrumb className="bc-content">
          <Breadcrumb.Item href="/" className="bc-non-active">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="bc-active">
            Solar PV Panel Recycling: Our Commitment to a Sustainable Future
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="p-section1-container">
        <motion.div
          initial={{ opacity: 0, translateY: 45 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="header-special-text">Solar PV Panel Recycling:</h4>
          <h3 className="main-color">
            Our Commitment to a Sustainable Future:
          </h3>
          <p>
            At Beyond, we specialize in recycling solar PV panels using
            cutting-edge technology to ensure minimal environmental impact and
            maximum resource recovery. Our advanced processes safely dismantle
            and reclaim valuable materials, including high-purity silicon, glass
            cullets, aluminium, copper wire, and silver, ready for reuse in new
            solar panel production and other applications. By reintegrating
            these materials into the supply chain, beyond drives the development
            of a circular economy in the solar industry. Our methods
            significantly reduce waste and resource consumption, while lowering
            CO2 emissions, fostering both environmental and economic
            sustainability.
          </p>
        </motion.div>
      </div>
      <div className="p-section2-container">
        <motion.div
          className="p-sec2-header custom-flex flex-col "
          initial={{ opacity: 0, translateY: 45 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className=" main-color header-special-text">
            Solar PV Panel Recycling:
          </h4>
          <h2>Materials recovered after recycling</h2>
        </motion.div>
        <motion.div
          className="p-sec2-content-container"
          initial={{ opacity: 0, translateY: 45 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {productsDetails.map((data) => (
            <div key={data.id} className="p-sec2-content">
              <div className="imageWrapper">
                <a href="/solar-pv-panel-recycling">
                  <img src={data.img} />
                </a>
              </div>
              <div>
                <h5>
                  <a href="/solar-pv-panel-recycling" className="main-color">
                    {data.name}
                  </a>
                </h5>
                <p>Material Weight: {data.materialWeight}</p>
                <p>Recovery Rate: {data.recoveryRate}</p>
                <p>Purity: {data.purity}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="p-section-detail-container">
        <Row
          className="p-sd-row-container"
          as={motion.section}
          initial={{ opacity: 0, translateY: 45 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="main-color">Partner with Us</h3>
          <p>
            This is a call to companies and corporates with ESG mandates and
            manufacturers with Extended Producer Responsibility requirements to
            partner with us. Utilize our sustainably sourced raw materials and
            integrate them in your supply chain, helping the solar industry
            achieve a circular economy model. Our R&D team continuously works on
            forward integration processes that can transform these materials, so
            that they can be used for manufacturing new solar panels, thereby
            completing the loop.
          </p>
        </Row>
        <Row
          className="p-sd-row-container grey-container "
          as={motion.section}
          initial={{ opacity: 0, translateY: 45 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="main-color">Use-cases in Industries beyond Solar</h3>
          <ul>
            <li>Recycled Glass Cullets</li>
            <li>
              Glass Production: Recycled glass cullets are used as raw materials
              in manufacturing new glass containers and bottles. They help
              reduce the energy required for melting raw glass and decrease
              production costs.
            </li>
            <li>
              Insulation Products: Glass cullets are used in the production of
              fiberglass insulation, enhancing thermal performance and energy
              efficiency in buildings.
            </li>
          </ul>
        </Row>
        <Row
          className="p-sd-row-container"
          as={motion.section}
          initial={{ opacity: 0, translateY: 45 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="main-color">Recycled Copper Wire</h3>
          <ul>
            <li>
              Electrical Wiring: Recycled copper wire is used to manufacture new
              electrical wiring and cables, maintaining high conductivity and
              reducing the need for virgin copper.
            </li>
            <li>
              Electronics Manufacturing: It is repurposed in the production of
              electronic components and circuit boards, ensuring resource
              efficiency and supporting the electronics industry.
            </li>
            <li>
              Industrial Equipment: Recycled copper wire can be used in the
              fabrication of machinery and industrial equipment, leveraging its
              conductive properties for various applications.
            </li>
          </ul>
        </Row>
        <Row
          className="p-sd-row-container grey-container "
          as={motion.section}
          initial={{ opacity: 0, translateY: 45 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="main-color">Recycled Silicon</h3>
          <ul>
            <li>
              Silicon Ingots: Recycled silicon can be used in ingot
              manufacturing.
            </li>
            <li>
              Semiconductor Industry: Recycled silicon is employed in the
              manufacturing of semiconductors and integrated circuits,
              supporting the tech industry while conserving resources.
            </li>
            <li>
              Silicon-Based Products: Recycled silicon wafers can be used in the
              production of silicon-based materials and chemicals, contributing
              to a circular economy in technology manufacturing.
            </li>
          </ul>
        </Row>
        <Row
          className="p-sd-row-container"
          as={motion.section}
          initial={{ opacity: 0, translateY: 45 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="main-color">Recycled Silver</h3>
          <ul>
            <li>
              Jewellery and Watches: Recycled silver is used to create new
              jewellery and watch components, preserving the quality and
              reducing the need for newly mined silver.
            </li>
            <li>
              Electronics: Recycled silver is employed in the production of
              electronic components, such as connectors and circuit boards, due
              to its high conductivity and reliability.
            </li>
            <li>
              Photographic Film: It is used in the manufacturing of photographic
              film and other imaging products, leveraging its historical
              applications while reducing environmental impact.
            </li>
          </ul>
        </Row>
        <Row
          className="p-sd-row-container grey-container "
          as={motion.section}
          initial={{ opacity: 0, translateY: 45 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="main-color">Recycled Aluminium</h3>
          <ul>
            <li>
              Aluminium Cans: Recycled aluminium is widely used to produce new
              beverage cans, maintaining high quality and reducing the need for
              primary aluminium production.
            </li>
            <li>
              Automotive Parts: It is repurposed in the manufacturing of
              automotive components, such as engine parts and wheels, due to its
              lightweight and strong properties.
            </li>
            <li>
              Construction Materials: Recycled aluminium is used in building
              materials like window frames, roofing, and siding, offering
              durability and sustainability in construction projects.
            </li>
          </ul>
        </Row>
      </div>
      <div>
        <WbFooter />
      </div>
    </div>
  );
};

export default SolarPVPanelRecycling;
