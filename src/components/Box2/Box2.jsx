import React from "react";
import { motion } from "framer-motion";

//Events & Drag Concept!!

const Box2 = () => {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        //to add drag just add drag prop &
        //x or y to move in one path i.e, drag="x"/drag="y"
        drag
        dragConstraints={{
          right: 20,
          left: -20,
          top: 5,
          bottom: 5,
        }}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.8 }}
      >
        Dabba No-2
      </motion.div>
    </div>
  );
};

export default Box2;
