// const ScrollTry = () => {
//   return <div>ScrollTry</div>;
// };

// export default ScrollTry;

// import { useState, useEffect } from "react";
// import { motion } from "motion/react";

// export default function ScrollTry() {
//   const [scrollPercent, setScrollPercent] = useState(0);

//   // Handle Scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrolled = window.scrollY;
//       const maxScroll =
//         document.documentElement.scrollHeight - window.innerHeight;
//       const scrollRatio = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0;
//       setScrollPercent(scrollRatio);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Background color changes with scroll (RGB format)
//   const backgroundColor = `rgb(${255 - scrollPercent * 2.5}, ${100 + scrollPercent}, ${150 + scrollPercent * 1.5})`;

//   return (
//     <motion.div
//       className="w-full min-h-screen flex justify-center items-center transition-all duration-500"
//       style={{ backgroundColor }}
//     >
//       {/* Scroll Percentage Display */}
//       <motion.div
//         className="fixed top-4 right-6 bg-black text-white px-4 py-2 rounded-lg shadow-lg"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         Scroll: {Math.round(scrollPercent)}%
//       </motion.div>

//       <h1 className="text-4xl font-bold text-white">
//         Scroll Down to Change Background
//       </h1>

//       {/* Extra content to enable scrolling */}
//       <div className="h-[200vh]"></div>
//     </motion.div>
//   );
// }

import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function ScrollTry() {
  const [scrollPercent, setScrollPercent] = useState(0);

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0;
      setScrollPercent(scrollRatio);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Background color changes with scroll (RGB format)
  const backgroundColor = `rgb(${255 - scrollPercent * 2.5}, ${100 + scrollPercent}, ${150 + scrollPercent * 1.5})`;

  // Circle properties
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progress = (scrollPercent / 100) * circumference;

  return (
    <motion.div
      className="w-full min-h-screen flex justify-center items-center transition-all duration-500"
      style={{ backgroundColor }}
    >
      {/* Scroll Percentage Circle */}
      <motion.div
        className="fixed top-6 right-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100">
          {/* Background Circle (Gray) */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="8"
            fill="none"
          />

          {/* Progress Circle (Animated) */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            stroke="white"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round"
            transition={{ duration: 0.2, ease: "easeInOut" }}
          />

          {/* Scroll Percentage Text */}
          <text
            x="50"
            y="55"
            textAnchor="middle"
            fontSize="18"
            fill="white"
            fontWeight="bold"
          >
            {Math.round(scrollPercent)}%
          </text>
        </svg>
      </motion.div>

      <h1 className="text-4xl font-bold text-white">
        Scroll Down to Fill the Circle
      </h1>

      {/* Extra content to enable scrolling */}
      <div className="h-[200vh]"></div>
    </motion.div>
  );
}
