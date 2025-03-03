import { Breadcrumb } from "rsuite";
import ScrollPage from "../components/ScrollPage";
import WbHeader from "../components/WbHeader";
import "../styles/about.css";
import { PiLinkSimpleBold } from "react-icons/pi";
import WbFooter from "../components/WbFooter";
// import profileImage1 from "/images/t2.png";
// import profileImage2 from "/images/t3.png";
import profileImage1 from "/images/founder1.jpg";
import profileImage2 from "/images/founder2.png";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { useServerLink } from "../context/server.context";

const About = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const { serverLink } = useServerLink();

  return (
    <div>
      <Helmet>
        <title>
          About Us | Beyond Renewables | Sustainability through Circularity
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
          <h1>About Us</h1>
        </div>
        <Breadcrumb className="bc-content">
          <Breadcrumb.Item href={`${serverLink}/`} className="bc-non-active">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="bc-active">
            About Us
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="about-section1-container">
        <div className="about-sec1-bg-img"></div>
        <motion.div
          className="about-sec1-header"
          initial={{ opacity: 0, translateY: 25 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="main-color">Solar Energy</h4>
          <h2>Beyond Renewables: Pioneering a Cleaner Future</h2>
        </motion.div>
        <motion.div
          className="about-sec1-content"
          initial={{ opacity: 0, translateY: 25 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>
            In an era where the environment&apos;s health is paramount, three
            visionaries-Manhar and Vedant-embarked on a journey to make a
            difference. Driven by a shared passion for sustainability and
            innovation, they founded Beyond Renewables, a company dedicated to
            creating a cleaner future and fostering a circular economy.
          </p>
          <p>
            Beyond Renewables is more than a startup; it&apos;s a movement
            toward a sustainable world. Our mission is to revolutionize
            recycling and waste management, transforming how industries and
            individuals perceive and handle waste. We believe in the power of a
            circular economy, where resources are reused, repurposed, and
            regenerated to their fullest potential.
          </p>
          <p>
            Our approach integrates advanced technologies and innovative
            practices, ensuring that every step we take is aligned with our
            commitment to environmental stewardship. From solar PV panel
            recycling to developing comprehensive waste management solutions,
            Beyond Renewables is at the forefront of change.
          </p>
          <p>
            Manhar and Vedant bring diverse expertise and a shared vision to the
            table. Together, they are dedicated to pushing boundaries and
            setting new standards in the recycling industry. Their leadership
            and dedication drive Beyond Renewables to continuously seek new
            opportunities to expand and impact various sectors, contributing to
            a sustainable future for generations to come.
          </p>
        </motion.div>
      </div>
      <div className="about-section2-container">
        <div className="about-sec1-bg-img"></div>
        <motion.div
          className="about-sec1-header"
          initial={{ opacity: 0, translateY: 25 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="main-color">Our Team</h4>
          <h2>Our Best Experts</h2>
        </motion.div>
        <motion.div
          className="about-sec2-content"
          initial={{ opacity: 0, translateY: 25 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="about-profile-container">
            <div className="imageWrapper">
              <img src={profileImage1} />
            </div>
            <div className="about-profile-content">
              <div>
                <h5>Vedant</h5>
                <p className=" text-gray-400 ">Founder</p>
              </div>
              <div className="profile-link-logo">
                <a href="#">
                  <PiLinkSimpleBold />
                </a>
              </div>
            </div>
          </div>
          <div className="about-profile-container">
            <div className="imageWrapper">
              <img src={profileImage2} />
            </div>
            <div className="about-profile-content">
              <div>
                <h5>Manhar</h5>
                <p className=" text-gray-400 ">Founder</p>
              </div>
              <div className="profile-link-logo">
                <a href="#">
                  <PiLinkSimpleBold />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div>
        <WbFooter />
      </div>
    </div>
  );
};

export default About;
