import { Breadcrumb } from "rsuite";
import ScrollPage from "../components/ScrollPage";
import WbHeader from "../components/WbHeader";
import SolarBlog from "../components/SolarBlog";
import { motion } from "motion/react";
import WbFooter from "../components/WbFooter";
import { Helmet } from "react-helmet-async";
import { useServerLink } from "../context/server.context";

const Blog = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const { serverLink } = useServerLink();

  return (
    <div>
      <Helmet>
        <title>
          Blog |Beyond Renewables | Sustainability through Circularity
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
          <h1>Blog</h1>
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
      <div>
        <WbFooter />
      </div>
    </div>
  );
};

export default Blog;
