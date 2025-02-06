import { useTheme } from "../Context/ThemeContext";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <div className={`shadow-xl border-none md:border-double rounded-md container mx-auto px-6 py-10 ${theme === "light" ? "bg-indigo-950" : "bg-indigo-950"}`}>
      <div className="flex flex-col md:flex-row items-center justify-center mb-4">
        {/* Brand Section */}
        <div className="text-xl font-bold">
          <a href="/" className="text-gray-800 flex items-center text-2xl">
            <img className="w-10 mr-2 animate-pulse" src={logo} alt="Logo" />{" "}
            <h1 className={`${theme === "light" ? "text-gray-300" : "text-black"}`}>
              <span className="text-orange-400">C</span><span className="text-purple-300">hit</span>{" "}
              <span className="text-orange-400">Rok</span>
            </h1>
          </a>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center items-center space-x-6 my-6 md:mt-0">
        <motion.a
          href="https://www.facebook.com/chitra18.cse"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500 transition-colors border-dashed border-2 border-blue-500 p-4"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaFacebook size={24} />
        </motion.a>
        <motion.a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition-colors border-dashed border-2 border-blue-400 p-4"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaTwitter size={24} />
        </motion.a>
        <motion.a
          href="https://github.com/Chitra35006"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-500 transition-colors border-dashed border-2 border-pink-400 p-4"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaGithub size={24} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/chitra-das-cse/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-700 transition-colors border-dashed border-2 border-blue-700 p-4"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaLinkedin size={24} />
        </motion.a>
      </div>

      {/* Follow Us Text */}
      <div className="flex justify-center items-center">
        <span className="text-gray-400 text-center">Follow Me</span>
      </div>
    </div>
  );
};

export default Footer;
