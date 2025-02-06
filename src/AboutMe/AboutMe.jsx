import Lottie from "react-lottie";
import aboutMeAnimation from "../assets/aboutMe.json";

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
    <div className="mb-10 mt-14 w-10/12 mx-auto">
      <h2 className="text-3xl md:text-4xl text-violet-800 font-extrabold mb-4">
        About Me
      </h2>

      {/* Equal Height Section */}
      <section className="flex flex-col md:flex-row items-stretch justify-between px-6 py-8 text-black h-auto md:h-[450px] border-purple-400 border-dashed border-2">
        
        {/* Left Section: Introduction */}
        <div className="md:w-1/2 w-full md:text-left text-center mb-6 md:mb-0 flex flex-col justify-center h-full px-6 rounded-md">
          <p className="md:text-lg mb-4 text-gray-500">
            Hi! I&apos;m <span className="text-violet-900 font-bold">Chitra</span> Rani Das, a passionate{" "}
            <span className="text-orange-400">Frontend Developer</span> focused on learning and exploring new technologies.
          </p>
          <p className="md:text-lg mb-4 text-gray-700">
            After my graduation in CSE, my programming journey began with web development, where I fell in love with building beautiful, interactive, and user-friendly web applications.
          </p>
          <p className="md:text-lg mb-4 text-gray-500">
            I enjoy working on projects that push the boundaries of interactivity and design, and I always strive to make the user experience as seamless as possible.
          </p>
          <p className="md:text-lg mb-4 text-gray-700">
            Now, I am focusing on learning new libraries and frameworks. My goal for 2025 is to enhance my focus and become a full-stack developer.
          </p>
        </div>

        {/* Right Section: Lottie Animation */}
        <div className="md:w-1/2 w-full flex justify-center items-center bg-gradient-to-r from-violet-200 via-purple-600 to-violet-900 p-6 rounded-md h-full">
          <div className="w-4/5 sm:w-3/4 md:w-2/3 flex items-center justify-center">
            <Lottie options={defaultOptions} height={300} width={300} />
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <div className="mt-6">
        <h3 className="text-2xl font-bold mb-4 text-center text-violet-800">Hobbies</h3>
        <div className="overflow-hidden rounded-lg shadow-lg mx-auto w-full md:w-3/5">
          <table className="table-auto w-full text-center">
            <tbody>
              <tr className="border-l-4 border-r-4 border-violet-600 transition-transform hover:scale-105">
                <td className="px-6 py-4 text-gray-700 bg-purple-100 hover:bg-gradient-to-r from-purple-600 to-orange-400 font-semibold hover:text-white">
                  Drawing
                </td>
              </tr>
              <tr className="border-l-4 border-r-4 border-violet-600 transition-transform hover:scale-105">
                <td className="px-6 py-4 text-gray-700 bg-slate-100 hover:bg-gradient-to-r from-purple-600 to-orange-400 font-semibold hover:text-white">
                  Hiking
                </td>
              </tr>
              <tr className="border-l-4 border-r-4 border-violet-600 transition-transform hover:scale-105">
                <td className="px-6 py-4 text-gray-700 bg-purple-100 hover:bg-gradient-to-r from-purple-600 to-orange-400 font-semibold hover:text-white">
                  Traveling
                </td>
              </tr>
              <tr className="border-l-4 border-r-4 border-violet-600 transition-transform hover:scale-105">
                <td className="px-6 py-4 text-gray-700 bg-slate-100 hover:bg-gradient-to-r from-purple-600 to-orange-400 font-semibold hover:text-white">
                  Pet a Cat
                </td>
              </tr>
              <tr className="border-l-4 border-r-4 border-violet-600 transition-transform hover:scale-105">
                <td className="px-6 py-4 text-gray-700 bg-purple-100 hover:bg-gradient-to-r from-purple-600 to-orange-400 font-semibold hover:text-white">
                  Photography
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
