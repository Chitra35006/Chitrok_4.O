import { motion } from "framer-motion";
import { Slide } from "react-awesome-reveal";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useTheme } from "../Context/ThemeContext";

const Banner = () => {
  const{theme} = useTheme();
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf"; // This should now point to the public folder
    link.setAttribute("download", "cv.pdf"); // Force download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className="md:mt-16 mt-10">
      <section className={`flex flex-col md:flex-row items-center justify-center ${theme === "dark" ? "bg-gradient-to-r from-slate-950 via-purple-600 to-slate-700" : "bg-gradient-to-r from-violet-950 via-purple-600 to-orange-900"} text-white py-16 px-8`}>
        {/* Left Section: Image with Hover Effect */}
        <motion.div
  className="relative flex items-center justify-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  {/* Square Shape Behind Image */}
  <motion.div
    className="w-40 h-40 md:w-56 md:h-56 bg-violet-800 rounded-tr-[60px] rounded-bl-[60px] border-orange-700 bg-opacity-20 rounded-lg shadow-lg absolute"
    whileHover={{ scale: 1.05 }}
  ></motion.div>

  {/* Floating Circular Image with Tooltip Effect */}
  <motion.div
    className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl z-10 group"
    whileHover={{ scale: 1.1, rotate: 2 }}
  >
    <img
      src="https://i.ibb.co/Ps21sxmw/me.jpg" // Replace with your actual image path
      alt="Chitra Rani Das"
      className="w-full h-full object-cover"
    />

    {/* Tooltip (Appears on Hover) */}
    <motion.div
      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-black text-white px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
    >
      Chitra Rani Das
    </motion.div>
  </motion.div>
</motion.div>


        {/* Right Section with Slide Animation */}
        <Slide direction="right" duration={1000} triggerOnce>
          <div className="text-center md:text-left md:ml-10 mt-6 md:mt-0 max-w-lg">
            <h2 className="text-2xl md:text-4xl font-extrabold">
              Hi! I am{" "}
              <span className="text-purple-600 bg-orange-200 px-1 rounded-2xl">
                Chitra
              </span>
              , a passionate{" "}
              <span className="text-orange-200">Frontend Developer</span>
            </h2>
            <p className="mt-4 md:text-lg text-base">
              Focused on learning and exploring new technologies. I love
              building interactive and user-friendly web experiences.
            </p>
            <PrimaryButton text="Download Resume" onClick={handleDownload} />
          </div>
        </Slide>
      </section>
    </div>
  );
};

export default Banner;