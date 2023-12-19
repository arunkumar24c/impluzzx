"use client"
import { useState, useEffect } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { BsTrainFreightFront } from "react-icons/bs";
import { AiFillContacts } from "react-icons/ai";
import { FcOnlineSupport } from "react-icons/fc";
import { motion, useAnimation } from "framer-motion";


const Shipments = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const givenCount = 200;

    const timer = setInterval(() => {
      if (count < givenCount) {
        setCount(count + 1);
      } else {
        clearInterval(timer);
      }
    }, 1);

    return () => clearInterval(timer);
  }, [count]);

  const [counts, setCounts] = useState(0);

  useEffect(() => {
    const givenCounts = 550;

    const timer = setInterval(() => {
      if (counts < givenCounts) {
        setCounts(count + 1);
      } else {
        clearInterval(timer);
      }
    }, 1);

    return () => clearInterval(timer);
  }, [counts]);

  return (
    <div className="brand-container w-full">
      <h1 className="text-center pb-6">Shipments</h1>
      <div className="">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full "
        >
          <motion.div
            className="grid grid-cols-3 gap-4"
            initial="hidden"
            animate="visible"
          >
            {/* 1 */}
            <motion.div
              className="flex-col justify-center items-center flex gap-4 bg-[green] text-white px-4 py-16"
              variants={cardVariants}
            >
              <p>
                <BsTrainFreightFront size={35} />
              </p>
              <motion.h1 variants={countVariants}>{count}+</motion.h1>
              <p>happy client</p>
            </motion.div>
            {/* 2 */}
            <motion.div
              className="flex-col flex justify-center items-center gap-4 bg-[blue] text-white px-4 py-16"
              variants={cardVariants}
            >
              <p>
                <AiFillContacts size={35} />
              </p>
              <motion.h1 variants={countVariants}>550+</motion.h1>
              <p>support</p>
            </motion.div>

            {/* 4 */}
            <motion.div
              className="flex-col flex justify-center items-center gap-4 bg-[yellow] text-white px-4 py-16"
              variants={cardVariants}
            >
              <p>
                <FcOnlineSupport size={35} />
              </p>
              <motion.h1 variants={countVariants}>24/7</motion.h1>
              <p>Telephone support</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Shipments;

// Framer Motion Variants
const cardVariants = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const countVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
