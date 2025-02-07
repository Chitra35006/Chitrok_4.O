import { useTheme } from "../Context/ThemeContext";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <div className="relative w-full overflow-hidden">
      {/* Ocean Wave Background */}
      <div className="absolute bottom-0 left-0 w-full">
        {/* Background Wave */}
        <svg
          className="absolute bottom-0 left-0 w-full animate-wave1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="url(#waveGradient1)"
            fillOpacity="1"
            d="M0,128L48,144C96,160,192,192,288,213.3C384,235,480,245,576,213.3C672,181,768,107,864,90.7C960,75,1056,117,1152,144C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <defs>
            <linearGradient id="waveGradient1" gradientTransform="rotate(15)">
              <stop offset="0%" stopColor="#3f0ba5 " /> {/* Violet-950 */}
              <stop offset="50%" stopColor="#0eb2b2" /> {/* Blue-900 */}
              <stop offset="100%" stopColor="#6b21a8" /> {/* Purple-700 */}
            </linearGradient>
          </defs>
        </svg>

        {/* Foreground Wave */}
        <svg
  className="absolute bottom-0 left-0 w-full animate-wave2 opacity-90"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1440 320"
>
  <defs>
    <linearGradient id="waveGradient2" gradientTransform="rotate(15)">
      <stop offset="0%" stopColor="#4F46E5" /> {/* Indigo-600 */}
      <stop offset="50%" stopColor="#2563EB" /> {/* Blue-600 */}
      <stop offset="100%" stopColor="#9333EA" /> {/* Purple-600 */}
    </linearGradient>
  </defs>

  <path
    fill="url(#waveGradient2)"
    fillOpacity="0.9"
    d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,186.7C672,160,768,128,864,122.7C960,117,1056,139,1152,144C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
  ></path>
</svg>

      </div>

      {/* Footer Content */}
      <div className="relative z-10 shadow-xl border-none md:border-double rounded-md container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-center mb-4">
          {/* Brand Section */}
          <div className="text-xl font-bold">
            <a href="/" className="text-gray-800 flex items-center text-2xl">
              <img className="w-10 mr-2 animate-pulse" src={logo} alt="Logo" />{" "}
              <h1 className={`${theme === "light" ? "text-gray-300" : "text-black"}`}>
                <span className="text-teal-300">C</span><span className="text-purple-400">hit</span>{" "}
                <span className="text-teal-300">Rok</span>
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
            className="text-gray-400 hover:text-blue-500 transition-colors border-dashed border-2 border-blue-400 p-4"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaFacebook size={24} />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors border-dashed border-2 border-blue-300 p-4"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaTwitter size={24} />
          </motion.a>
          <motion.a
            href="https://github.com/Chitra35006"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition-colors border-dashed border-2 border-pink-300 p-4"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/chitra-das-cse/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-700 transition-colors border-dashed border-2 border-blue-400 p-4"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaLinkedin size={24} />
          </motion.a>
        </div>

        {/* Follow Us Text */}
        <div className="flex justify-center items-center">
          <span className="text-gray-300 text-center">Follow Me</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
