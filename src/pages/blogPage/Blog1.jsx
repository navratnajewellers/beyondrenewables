import { Helmet } from "react-helmet-async";
import { Breadcrumb, Divider, Row } from "rsuite";
import ScrollPage from "../../components/ScrollPage";
import WbHeader from "../../components/WbHeader";
import { FaGripLinesVertical } from "react-icons/fa6";
import "../../styles/blog1.css";
import WbFooter from "../../components/WbFooter";
import blogImage1 from "/images/blog-1.jpg";
import blogImage2 from "/images/blog-2.jpg";
import { motion } from "motion/react";
import { useServerLink } from "../../context/server.context";

const Blog1 = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const { serverLink } = useServerLink();

  return (
    <div>
      <Helmet>
        <title>
          Solar Panel Waste: Numbers and Nuisance | Beyond Renewables |
          Sustainability through Circularity
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
          <h1>Solar Panel Waste: Numbers and Nuisance</h1>
        </div>
        <Breadcrumb className="bc-content">
          <Breadcrumb.Item href={`${serverLink}/`} className="bc-non-active">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="bc-active">
            Blog
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="blog1-container">
        <motion.section
          className="blog1-section1-container"
          initial={{ opacity: 0, translateY: 25 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="imageWrapper">
            <img src={blogImage1} />
          </div>
          <div className="b-sec1-details">
            <div>
              <h4 className="main-color">Manhar Dixit</h4>
            </div>
            <div>
              <p className="main-para-col">Date :</p>
              <h4 className="main-color">July 30, 2024</h4>
            </div>
            <div>
              <p className="main-para-col">Category</p>
              <h4>Solar Panel</h4>
            </div>
          </div>
        </motion.section>
        <motion.section
          className="blog1-section2-container"
          initial={{ opacity: 0, translateY: 25 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2>Solar Panel Waste: Numbers and Nuisance</h2>
          <p className="main-para-col">
            As a co-founder at BEYOND, I&apos;m deeply passionate about leading
            the charge toward a greener, cleaner, and circular future. The solar
            energy revolution has brought us closer to this vision, but with it
            comes an often-overlooked challenge: solar panel waste. In this
            blog, I&apos;ll walk you through the numbers behind this growing
            issue and explore how we, as entrepreneurs and innovators, can turn
            this nuisance into an opportunity.
          </p>
        </motion.section>
        <section className="blog1-section3-container">
          <Row
            className="b-sec3-content"
            as={motion.div}
            initial={{ opacity: 0, translateY: 25 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="blog-content-icon main-color ">
              <FaGripLinesVertical />
            </div>
            <div>
              <h4>The Solar Boom and Its Shadow</h4>
              <p className="main-para-col">
                India&apos;s solar industry has been on an exhilarating growth
                trajectory. Since 2015, we&apos;ve been adding solar capacity at
                an unprecedented rate, aiming for 500 GW of non-fossil-fuel
                based energy generation by 2030. In 2022 alone, we installed
                17.4 GW of solar capacity, making India the third-largest
                country for new solar installations. This rapid expansion is
                thrilling, but it also brings a significant challenge: what
                happens to all these panels at the end of their life?
              </p>
            </div>
          </Row>
          <Row
            className="b-sec3-content"
            as={motion.div}
            initial={{ opacity: 0, translateY: 25 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="blog-content-icon main-color ">
              <FaGripLinesVertical />
            </div>
            <div>
              <h4>The Growing Pile of Solar Waste</h4>
              <p className="main-para-col">
                Solar panels generally have a lifespan of 20-25 years. However,
                many are decommissioned prematurely due to damage or
                inefficiency. The Council on Energy, Environment, and Water
                (CEEW) estimates that by the end of FY21, India had already
                accumulated around 285 kilotons of solar waste from its existing
                40 GW of grid-connected capacity. Looking ahead, the projections
                are staggering. By 2040, even under the best-case scenario,
                we&apos;re looking at around 0.9 million tonnes of solar PV
                waste. In a less optimistic scenario, this figure could rise to
                as much as 5.7 million tonnes. These numbers highlight the
                urgent need for effective waste management solutions.
              </p>
            </div>
          </Row>
          <Row
            className="b-sec3-content"
            as={motion.div}
            initial={{ opacity: 0, translateY: 25 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="blog-content-icon main-color ">
              <FaGripLinesVertical />
            </div>
            <div>
              <h4>A Global Perspective</h4>
              <p className="main-para-col">
                The solar waste issue isn&apos;t just an Indian problems,
                it&apos;s a global one. The International Renewables Energy
                Agency (IRENA) projects that cumulative global solar PV waste
                could reach 60-78 million tonnes by 2050. Asia, home to leading
                solar adopters like China, Japan, and India, is expected to
                generate the highest volume of this waste. This underscores the
                need for international cooperation and innovation in tackling
                solar waste.
              </p>
            </div>
          </Row>
          <Row
            className="b-sec3-content"
            as={motion.div}
            initial={{ opacity: 0, translateY: 25 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="blog-content-icon main-color ">
              <FaGripLinesVertical />
            </div>
            <div>
              <h4>Turning Waste into Opportunity</h4>
              <p className="main-para-col">
                At BEYOND, we see solar waste not as a nuisance but as an
                opportunity. The challenge lies in the lack of adequate
                recycling infrastructure. Despite the potential to recover up to
                80% of the materials in a PV panel, current recycling rates are
                woefully low, at around 10%. This is primarily due to
                insufficient organization and the high cost of recycling
                compared to landfill disposal. But where others see a problem,
                we see potential.
              </p>
            </div>
          </Row>
          <Row
            className="b-sec3-content"
            as={motion.div}
            initial={{ opacity: 0, translateY: 25 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="blog-content-icon main-color ">
              <FaGripLinesVertical />
            </div>
            <div>
              <h4>India&apos;s Policy Response and Our Role</h4>
              <p className="main-para-col">
                India is taking steps to address this issue. The government
                introduced new E-Waste Management Rules in 2022, classifying
                waste solar PV modules as e-waste. This policy places the
                responsibility for collection and recycling on the producers,
                under an Extended Producer Responsibility (EPR) framework. This
                is a significant step forward, but we believe more can be done.
              </p>
            </div>
          </Row>
        </section>
        <Divider />
        <motion.section
          className="blog1-section4-container"
          initial={{ opacity: 0, translateY: 25 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div>
            <h2>BEYOND&apos;s Vision for a Circular Solar Economy</h2>
          </div>
          <div className="imageWrapper">
            <img src={blogImage2} />
          </div>
          <div className="b-sec4-content">
            <p className="main-para-col">
              We at BEYOND are committed to pioneering comprehensive recycling
              solutions. Here are some strategic steps we believe can drive this
              change:
            </p>
            <ul>
              <li>
                Effective Categorization: Clear categorization of solar PV waste
                will help define the necessary recycling infrastructure and
                market for secondary materials.
              </li>
              <li>
                Mandatory EPR Scheme: Extending the EPR framework to include
                solar waste will set up a funding model for waste management.
              </li>
              <li>
                Value-based Metrics: Developing value-based metrics to measure
                compliance with solar-centric regulations will promote
                high-value recycling.
              </li>
              <li>
                Landfill Restrictions: Coupling landfill restrictions with
                product stewardship schemes will encourage recycling and
                collection activities.
              </li>
              <li>
                Mobile Recycling Plants: Developing mobile recycling units can
                reduce transportation costs and increase recycling efficiency.
              </li>
              <li>
                Robust Tracking Systems: Implementing labelling and tracking
                systems for PV modules will ensure secure handling and shipment.
              </li>
            </ul>
          </div>
        </motion.section>
        <Divider />
        <motion.section
          className="blog1-section5-container"
          initial={{ opacity: 0, translateY: 25 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Row className="b-sec5-header">
            <h2>Leading by Example</h2>
            <p className="main-para-col">
              As entrepreneurs, we have the power to lead by example. By
              investing in advanced recycling technologies and advocating for
              robust policies, we can transform the solar waste challenge into a
              sustainable business opportunity. At BEYOND, we&apos;re dedicated
              to driving this transformation and ensuring that the benefits of
              solar energy are realized by current and future generations.
            </p>
          </Row>
          <Row className="b-sec3-content">
            <div className="blog-content-icon main-color ">
              <FaGripLinesVertical />
            </div>
            <div>
              <h4>The Solar Boom and Its Shadow</h4>
              <p className="main-para-col">
                India&apos;s solar industry has been on an exhilarating growth
                trajectory. Since 2015, we&apos;ve been adding solar capacity at
                an unprecedented rate, aiming for 500 GW of non-fossil-fuel
                based energy generation by 2030. In 2022 alone, we installed
                17.4 GW of solar capacity, making India the third-largest
                country for new solar installations. This rapid expansion is
                thrilling, but it also brings a significant challenge: what
                happens to all these panels at the end of their life?
              </p>
            </div>
          </Row>
        </motion.section>
      </div>
      <div>
        <WbFooter />
      </div>
    </div>
  );
};

export default Blog1;
