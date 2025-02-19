/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { useState } from "react";

const AnimatedText = ({ text }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className=" font-bold cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="text-orange-500"
          initial={{ color: "rgb(249,115,22)" }} // Orange color
          animate={{ color: hovered ? "rgb(255,255,255)" : "rgb(249,115,22)" }}
          transition={{
            duration: 0.2,
            delay: index * 0.05, // Creates a wave effect on hover
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
