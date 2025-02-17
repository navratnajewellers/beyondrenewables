import Marquee from "react-fast-marquee";
import { useServerLink } from "../context/server.context";

const PartnerLogoCarousel = () => {
  const { serverLink } = useServerLink();

  const images = [
    `${serverLink}/images/logo1.png`,
    `${serverLink}/images/logo3.png`,
    `${serverLink}/images/logo1.png`,
    `${serverLink}/images/logo3.png`,
    `${serverLink}/images/logo1.png`,
    `${serverLink}/images/logo3.png`,
    `${serverLink}/images/logo1.png`,
    `${serverLink}/images/logo3.png`,
  ];

  return (
    <Marquee speed={50} pauseOnHover={true} gradient={false}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Logo ${index}`}
          style={{ marginRight: 20 }}
        />
      ))}
    </Marquee>
  );
};

export default PartnerLogoCarousel;
