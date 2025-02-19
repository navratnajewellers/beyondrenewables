/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import AnimatedText4 from "./AnimatedText4";

// const HoverOverlay = ({ text, buttonText }) => {
const HoverOverlay = ({ text }) => {
  return (
    // <motion.div
    //   className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    //   initial={{ opacity: 0, y: 20 }}
    //   whileHover={{ opacity: 1, y: 0 }}
    // >
    //   <h2 className="text-white text-lg font-bold">{text}</h2>
    //   <button className="mt-2 px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition">
    //     {buttonText}
    //   </button>
    // </motion.div>
    <motion.div
      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileHover={{ opacity: 1, y: 0 }}
    >
      <h4 className="image-overlay-text">
        <AnimatedText4 text={text} />
        {/* {text} */}
      </h4>
    </motion.div>
  );
};

export default HoverOverlay;
