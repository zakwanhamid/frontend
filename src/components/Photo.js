import React from "react";
import { motion } from "framer-motion";
import MyImage from "../images/photo.jpeg";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.6, ease: "easeIn" },
        }}
      >
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5, duration: 0.6, ease: "easeIn" },
          }}
          className=" ml-1 mt-1 w-[290px] h-[290px] xl:w-[405px] xl:h-[405px] mix-blend-lighten absolute xl:ml-2 xl:mt-2"
        >
          <img
            src={MyImage}
            alt="Zakwan"
            className="object-contain rounded-full"
          />
        </motion.div>
        <motion.svg
          className="w-[300px] xl:w-[420px] h-[300px] xl:h-[420px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#000000"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
