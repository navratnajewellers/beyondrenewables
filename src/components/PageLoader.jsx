/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function PageLoader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const handleLoad = () => setLoading(false);

    // // Check if the page is already loaded
    // if (document.readyState === "complete") {
    //   handleLoad();
    // } else {
    //   window.addEventListener("load", handleLoad);
    // }

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Ensures at least 2 seconds of loading time

    const handleLoad = () => {
      clearTimeout(timeout);
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {loading ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 flex flex-col items-center justify-center bg-gray-100 z-50"
        >
          {/* Rotating Circle Animation */}
          {/* <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
          ></motion.div> */}

          {/* Bouncing Dots Animation */}
          <div className="flex space-x-2 mt-4">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.6,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
                className="w-6 h-6 bg-orange-500 rounded-full"
              ></motion.div>
            ))}
          </div>

          {/* <p className="mt-3 text-gray-700 font-semibold text-lg">Loading...</p> */}
        </motion.div>
      ) : (
        children
      )}
    </>
  );
}
