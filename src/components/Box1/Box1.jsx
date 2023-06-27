import React, { useState } from "react";
import { motion } from "framer-motion";

//simple transition & moreover css prop used!!

const Box1 = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate={{
          //   x: 500,
          //   opacity: 1,
          x: isAnimating ? 500 : 0,
          opacity: isAnimating ? 1 : 0.5,
          rotate: isAnimating ? 360 : 0,
          //   scale: 2,
          //   backgroundColor: "blue",
          //   rotate: 360,
        }}
        initial={{
          opacity: 0.4,
        }}
        //running from here to there and so on.v
        // animate={{ x: [0, 500, -80, 200] }}

        // transition={{
        //   duration: 1,
        //   type: "tween", //tween work with duration
        // }}

        transition={{
          stiffness: 100,
          type: "spring", //spring work with stiffness
        }}
        onClick={() => setIsAnimating(!isAnimating)}
      >
        Dabba No-1!!
      </motion.div>
    </div>
  );
};

export default Box1;
