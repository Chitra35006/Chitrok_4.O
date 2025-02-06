import { motion } from "framer-motion";

const NoExp = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row w-10/12 mx-auto my-14 border-purple-500 border-4 rounded-bl-[100px] rounded-tr-[40px]">
        
        {/* Left Section: Experiences */}
        <motion.div
          className="mb-4 flex-1 md:mr-4 bg-gradient-to-br from-white to-violet-200 p-6 rounded-br-[100px] rounded-tl-[40px]"
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
          <h4 className="text-xl pb-2 font-bold">Experiences</h4>
          <p className="text-gray-600">
            Although I don&apos;t have professional experience yet, I am eager to seize any opportunity that will allow me to apply my skills and give my best performance.
          </p>
        </motion.div>
      
        {/* Right Section: Why Hire Me */}
        <motion.div
          className="flex-1 bg-gradient-to-br from-purple-200 to-white p-6 rounded-bl-[100px] rounded-tr-[40px]"
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
            <h4 className="text-xl pb-2 font-bold">Why Hire Me?</h4>
            <p className="text-gray-600">
              While I may not have work experience yet, my passion for web development and my commitment to learning make me a great fit for any opportunity. I am dedicated to improving my skills and providing high-quality work.
            </p>
          </div>
      
          <div className="text-end">
            <p className="text-gray-500 text-sm">I am excited to bring my enthusiasm, skills, and determination to new opportunities!</p>
            <button className="mt-4 text-white bg-violet-800 hover:bg-violet-700 px-4 py-2 rounded-full">
              Let&apos;s Connect
            </button>
          </div>
        </motion.div>
      </div>
    );
};

export default NoExp;
