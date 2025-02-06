import Lottie from "react-lottie";
import aboutMeAnimation from "../assets/aboutMe.json";
import { motion } from "framer-motion";

const AboutMe = () => {
  // Lottie options
  const defaultOptions = {
    loop: true, // Make animation loop
    autoplay: true, // Start automatically
    animationData: aboutMeAnimation, // Your animation data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // Adjust the rendering
    },
  };

  return (
    <div id="about-section" className="mb-10 mt-14 w-10/12 mx-auto bg-slate-100 px-8 rounded-4xl">
      {/* About Me Title with Scroll Trigger */}
      <motion.h2
        className="text-3xl md:text-4xl text-violet-800 font-extrabold py-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      {/* Equal Height Section */}
      <section className="flex flex-col md:flex-row items-stretch justify-between px-6 py-8 text-black h-auto md:h-[450px] border-purple-400 border-dashed border-2">
        
        {/* Left Section: Introduction */}
        <motion.div
          className="md:w-1/2 w-full md:text-left text-center mb-6 md:mb-0 flex flex-col justify-center h-full px-6 rounded-md"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="md:text-lg font-medium mb-4 text-gray-500">
            Hi! I&apos;m <span className="text-violet-900 font-bold">Chitra</span> Rani Das, a passionate{" "}
            <span className="text-orange-400">Frontend Developer</span> focused on learning and exploring new technologies.
          </p>
          <p className="md:text-lg font-medium mb-4 text-gray-700">
            After my graduation in CSE, my programming journey began with web development, where I fell in love with building beautiful, interactive, and user-friendly web applications.
          </p>
          <p className="md:text-lg font-medium mb-4 text-gray-500">
            I enjoy working on projects that push the boundaries of interactivity and design, and I always strive to make the user experience as seamless as possible.
          </p>
          <p className="md:text-lg font-medium mb-4 text-gray-700">
            Now, I am focusing on learning new libraries and frameworks. My goal for 2025 is to enhance my focus and become a full-stack developer.
          </p>
        </motion.div>

        {/* Right Section: Lottie Animation */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center items-center bg-gradient-to-r from-violet-200 via-purple-600 to-violet-900 p-6 rounded-md h-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="w-4/5 sm:w-3/4 md:w-2/3 flex items-center justify-center">
            <Lottie options={defaultOptions} height={300} width={300} />
          </div>
        </motion.div>
      </section>

      {/* Hobbies Section */}
      <div className="m-6 pb-8">
        <motion.h3
          className="text-2xl font-bold mb-4 text-center text-violet-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hobbies
        </motion.h3>
        <div className="overflow-hidden rounded-lg shadow-lg mx-auto w-full md:w-3/5">
        <table className="table-auto w-full text-center">
  <tbody>
    {["Drawing", "Hiking", "Traveling", "Pet a Cat", "Photography"].map((hobby, index) => (
      <motion.tr
        key={index}
        className="border-l-4 border-r-4 border-violet-600"
        whileHover={{
          scale: 1.05,
          background: "linear-gradient(to right, #9b4d96, #ff7c00)", // Gradient background on hover
        }}
        transition={{ duration: 0.3 }}
      >
        <td className="px-6 py-4 text-gray-700 font-semibold">
          {hobby}
        </td>
      </motion.tr>
    ))}
  </tbody>
</table>

        </div>
      </div>
    </div>
  );
};

export default AboutMe;
