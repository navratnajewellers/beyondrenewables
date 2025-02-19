/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { useState } from "react";

const AnimatedText3 = ({ text }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className=" font-bold cursor-pointer "
      style={{ perspective: 1000 }} // Adds 3D depth
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block text-white"
          initial={{
            color: "rgb(255,255,255)",
            scale: 1,
            rotateX: 0,
            rotateY: 0,
          }}
          animate={{
            color: hovered ? "rgb(249,115,22)" : "rgb(255,255,255)",
            scale: hovered ? 1.3 : 1, // Increases size for a pop-out effect
            rotateX: hovered ? -15 : 0, // Tilts slightly backward
            rotateY: hovered ? 10 : 0, // Slight side tilt
            translateZ: hovered ? 20 : 0, // Creates a depth pop-out effect
          }}
          transition={{
            duration: 0.4,
            delay: index * 0.05,
            ease: "easeOut",
          }}
        >
          {char === " " ? "\u00A0" : char} {/* Keeps spaces visible */}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText3;
