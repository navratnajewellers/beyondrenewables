import Marquee from "react-fast-marquee";
import { useServerLink } from "../context/server.context";

const PartnerLogoCarousel = () => {
  const { serverLink } = useServerLink();

  const images = [
    `${serverLink}/images/logo1.png`,
    `${serverLink}/images/logo3.png`,
    `${serverLink}/images/Reslink.png`,
    `${serverLink}/images/companyLogo2.png`,
    `${serverLink}/images/companyLogo4.png`,
    `${serverLink}/images/logo1.png`,
    `${serverLink}/images/logo3.png`,
    `${serverLink}/images/Reslink.png`,
    `${serverLink}/images/companyLogo2.png`,
    `${serverLink}/images/companyLogo4.png`,
  ];

  return (
    <Marquee speed={100} pauseOnHover={true} gradient={false}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Logo ${index}`}
          style={{
            marginRight: "40px",
            marginLeft: "40px",
            height: "150px",
            width: "250px",
          }}
        />
      ))}
    </Marquee>
  );
};

export default PartnerLogoCarousel;
