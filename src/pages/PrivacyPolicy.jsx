import { Breadcrumb } from "rsuite";
import ScrollPage from "../components/ScrollPage";
import WbHeader from "../components/WbHeader";
import WbFooter from "../components/WbFooter";
import { Helmet } from "react-helmet-async";
import { useServerLink } from "../context/server.context";

const PrivacyPolicy = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const { serverLink } = useServerLink();

  return (
    <div>
      <Helmet>
        <title>
          Privacy Policy | Beyond Renewables | Sustainability through
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
          <h1>Privacy Policy</h1>
        </div>
        <Breadcrumb className="bc-content">
          <Breadcrumb.Item href={`${serverLink}/`} className="bc-non-active">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="bc-active">
            Privacy Policy
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div>
        <WbFooter />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
