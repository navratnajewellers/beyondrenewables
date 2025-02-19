/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { useState } from "react";

const AnimatedText2 = ({ text }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className=" font-bold cursor-pointer tracking-wider  "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="text-white inline-block "
          initial={{ color: "rgb(255,255,255)", scale: 1, rotate: 0 }} // White text, normal size
          animate={{
            color: hovered ? "#ff8b38" : "rgb(255,255,255)", // Turns orange on hover
            scale: hovered ? 1.2 : 1, // Slightly increases size
            rotate: hovered ? 360 : 0, // Rotates slightly
          }}
          transition={{
            duration: 0.3,
            delay: index * 0.05, // Creates a wave effect on hover
            ease: "easeInOut",
          }}
        >
          {/* {char} */}
          {char === " " ? "\u00A0" : char} {/* Fixes space issue */}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText2;
