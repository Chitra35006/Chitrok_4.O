import { motion } from "framer-motion";
import { useTheme } from "../Context/ThemeContext";

const NoExp = () => {
  const { theme} = useTheme();
    return (
        <div className={` p-6 rounded-xl shadow-lg flex flex-col md:flex-row w-10/12 mx-auto my-14  border-4 rounded-bl-[100px] rounded-tr-[40px] ${theme === "dark" ? "bg-[#032644]" : "bg-white"} ${theme === "dark" ? "border-orange-500" : "border-purple-500"}`}>
        
        {/* Left Section: Experiences */}
        <motion.div
          className={`mb-4 flex-1 md:mr-4  p-6 rounded-br-[100px] rounded-tl-[40px] ${theme === "dark" ? "bg-gradient-to-br from-black to-violet-400" : "bg-gradient-to-br from-white to-violet-200"}`}
          animate={{
            y: ["0%", "-10%", "0%"], // Bouncing effect (up and down)
          }}
          transition={{
            duration: 1.5, // Duration of one bounce cycle
            ease: "easeInOut",
            repeat: Infinity, // Make it loop continuously
            repeatType: "loop", // Keeps repeating the animation in a loop
          }}
        >
          <h4 className={`text-xl pb-2 font-bold ${theme === "dark" ? "text-orange-300" : "text-black"}`}>Experiences</h4>
          <p className={`${theme === "dark" ? "text-teal-100" : "text-gray-600"}`}>
            Although I don&apos;t have professional experience yet, I am eager to seize any opportunity that will allow me to apply my skills and give my best performance.
          </p>
        </motion.div>
      
        {/* Right Section: Why Hire Me */}
        <motion.div
          className={`flex-1  p-6 rounded-bl-[100px] rounded-tr-[40px] ${theme === "dark" ? "bg-gradient-to-br from-purple-500 to-black" : "bg-gradient-to-br from-purple-200 to-white"}`}
          animate={{
            y: ["0%", "10%", "0%"], // Bouncing effect (up and down)
          }}
          transition={{
            duration: 1.5, // Duration of one bounce cycle
            ease: "easeInOut",
            repeat: Infinity, // Make it loop continuously
            repeatType: "loop", // Keeps repeating the animation in a loop
          }}
        >
          <div className="mb-4">
            <h4 className={`text-xl pb-2 font-bold ${theme === "dark" ? "text-orange-300" : "text-black"}`}>Why Hire Me?</h4>
            <p className={`${theme === "dark" ? "text-teal-100" : "text-gray-600"}`}>
              While I may not have work experience yet, my passion for web development and my commitment to learning make me a great fit for any opportunity. I am dedicated to improving my skills and providing high-quality work.
            </p>
          </div>
      
          <div className="text-end">
            <p className={` text-sm ${theme === "dark" ? "text-orange-300" : "text-gray-500"}`}>I am excited to bring my enthusiasm, skills, and determination to new opportunities!</p>
            <button className={`mt-4 text-white  px-4 py-2 rounded-full ${theme === "dark" ? "bg-teal-700" : "bg-violet-800"} ${theme === "dark" ? "hover:bg-orange-700" : "hover:bg-violet-700 "}`}>
              Let&apos;s Connect
            </button>
          </div>
        </motion.div>
      </div>
    );
};

export default NoExp;
