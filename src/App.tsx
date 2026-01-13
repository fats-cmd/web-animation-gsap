import "./App.css";

import { motion } from "motion/react";
const App = () => {
  return (
    <>
      {/* fade in animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="w-50 h-50  flex justify-center items-center min-h-screen min-w-screen "
      >
        <motion.h1
          initial={{ opacity: 0, y: -500 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-green-300"
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          Hello world
        </motion.h1>
      </motion.div>

      {/* hovering and tapping animations */}
      <motion.div className=" min-w-screen min-h-screen flex justify-center justify-items-center bg-blue-600 rounded-md">
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#34D399", y: -10 }}
          whileTap={{ scale: 0.9, backgroundColor: "#10B981" }}
          transition={{
            // duration: 2,
            type: "spring",
            stiffness: 900,
            damping: 0,
          }}
          className="text-white font-bold py-2 px-4 rounded-md w-50 h-20"
        >
          Hover and Tap Me
        </motion.button>
      </motion.div>

      {/* variance and stagger animations */}
    </>
  );
};

export default App;
