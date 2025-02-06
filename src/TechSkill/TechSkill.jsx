import { motion } from "framer-motion";
import { useState } from "react";
import reactLogo from "../assets/react.png";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import nodeLogo from "../assets/node.png";
import expressLogo from "../assets/express.png";
import mongoLogo from "../assets/mongo.png";
import firebaseLogo from "../assets/firebase.png";

// Explicit Tailwind classes (prevents purging)
const skillStyles = [
  { bg: "bg-blue-600", border: "border-blue-600", text: "text-white" },
  { bg: "bg-red-600", border: "border-red-600", text: "text-white" },
  { bg: "bg-orange-600", border: "border-orange-600", text: "text-white" },
  { bg: "bg-lime-800", border: "border-lime-800", text: "text-white" },
  { bg: "bg-yellow-500", border: "border-yellow-500", text: "text-black" },
  { bg: "bg-green-700", border: "border-green-700", text: "text-white" },
  { bg: "bg-teal-500", border: "border-teal-500", text: "text-white" },
];

const skills = [
  { id: 1, name: "React", img: reactLogo },
  { id: 2, name: "HTML", img: htmlLogo },
  { id: 3, name: "CSS", img: cssLogo },
  { id: 4, name: "Node.js", img: nodeLogo },
  { id: 5, name: "Express.js", img: expressLogo },
  { id: 6, name: "MongoDB", img: mongoLogo },
  { id: 7, name: "Firebase", img: firebaseLogo },
];

const TechSkill = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="my-12 mx-auto text-center w-full">
      <h2 className="text-3xl md:text-4xl text-violet-800 font-extrabold mb-6">
        My Skills
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-12 w-[300%] p-4"
          animate={{ x: isPaused ? 0 : ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 10, // Slower animation
            ease: "easeInOut",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {[...skills, ...skills].map((skill, index) => {
            const style = skillStyles[index % skillStyles.length];
            return (
              <div
                key={index}
                className={`flex flex-col items-center border-4 rounded-tr-[40px] rounded-bl-[40px] px-6 py-4 ${style.bg} ${style.border} ${style.text}`}
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="md:h-24 md:w-24 h-18 w-18 object-contain"
                />
                <p className="font-semibold mt-2">{skill.name}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default TechSkill;
