import { motion } from "motion/react";

const TestOverlay = () => {
  return (
    <div className="relative w-80 h-56 overflow-hidden group">
      {/* Background Image */}
      <img
        src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752"
        alt="Hover Image"
        className="w-full h-full object-cover"
      />

      {/* Overlay Content (Hidden by Default) */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-white text-lg font-bold">Hovered Text</h2>
        <button className="mt-2 px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition">
          Click Me
        </button>
      </motion.div>
    </div>
  );
};

export default TestOverlay;
