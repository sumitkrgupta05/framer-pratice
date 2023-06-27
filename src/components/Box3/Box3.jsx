//Actual implementation of Variants
import React from "react";
import { motion } from "framer-motion";

const Box3 = () => {
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
      },
    },
  };

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      staggerChildren: 0.2, //rendering list 1 by 1
      //   transition: { //Instead use when in above
      //     delay: 1,
      //   },
    },
  };

  return (
    <div className="box-container">
      <motion.div
        className="box"
        variants={boxVariant}
        animate="visible"
        initial="hidden"
      >
        {[1, 2, 3].map((box) => {
          return (
            <motion.li
              className="boxItem"
              variants={listVariant}
              //   animate="visible"
              //   initial="hidden"
            ></motion.li>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Box3;
