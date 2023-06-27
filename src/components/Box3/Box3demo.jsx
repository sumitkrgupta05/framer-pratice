//This is just a demo of how to use variants
import React from "react";
import { motion } from "framer-motion";

//Variants!!

const Box3demo = () => {
  //variant : objects
  //     const boxVariant = {
  //     lion: {
  //       x: 100,
  //       scale: 1.5,
  //       backgroundColor: "yellow",
  //     },
  //     hatthi: {
  //       x: 500,
  //       scale: 0.3,
  //       backgroundColor: "green",
  //     },
  //   };

  return (
    <div className="box-container">
      <motion.div
        className="box"
        // variants={boxVariant}
        // initial="lion"
        // animate="hatthi"
      >
        Dabba No-3!!
      </motion.div>
    </div>
  );
};

export default Box3demo;
