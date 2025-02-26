import { Helmet } from "react-helmet-async";
import ScrollPage from "../../components/ScrollPage";
import WbHeader from "../../components/WbHeader";
import { Breadcrumb } from "rsuite";

const Blog2 = () => {
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
          <h1>Blog 2</h1>
        </div>
        <Breadcrumb className="bc-content">
          <Breadcrumb.Item href="/" className="bc-non-active">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="bc-active">
            About Us
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default Blog2;
