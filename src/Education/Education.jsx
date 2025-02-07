import { GraduationCap, School, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../Context/ThemeContext";


const Education = () => {
  const educationData = [
    {
      level: "SSC",
      year: "2014",
      gpa: "4.06",
      school: "Deobhog Hazi Uzir Ali High School",
      location: "Narayanganj, Bangladesh",
      text: "GPA",
      text1: "Out of 5.00",
      bg: "bg-gradient-to-br from-blue-100 to-white",
      bg2: "bg-gradient-to-br from-blue-400 to-white",

    },
    {
      level: "HSC",
      year: "2017",
      gpa: "3.67",
      school: "Narayanganj Girls School & College",
      location: "Narayanganj, Bangladesh",
      text: "GPA",
      text1: "Out of 5.00",
      bg: "bg-gradient-to-br from-green-100 to-white",
      bg2: "bg-gradient-to-br from-green-400 to-white"
    },
    {
      level: "B.Sc Engg in CSE",
      year: "2022",
      school: "Sylhet International University",
      gpa: "3.91",
      location: "Sylhet, Bangladesh",
      text: "CGPA",
      text1: "Out of 4.00",
      bg: "bg-gradient-to-br from-purple-100 to-white",
      bg2: "bg-gradient-to-br from-purple-400 to-white",
    },
  ];
const { theme} = useTheme();
  return (
    <div id="education-section" className={` py-4 ${theme === "dark" ? "bg-gradient-to-r from-slate-950 via-purple-500 to-slate-600" : "bg-gradient-to-r from-slate-200 via-purple-400 to-orange-200"}`}>
      <h2 className={`md:text-4xl text-left w-11/12 mx-auto font-semibold ${theme === "dark" ? "text-gray-300" : "text-black"}`}>
        Educational Background
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mb-18 mt-10 w-11/12 mx-auto">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className={`fade-in ${theme === "dark" ? edu.bg2 : edu.bg} shadow-lg rounded-2xl p-5 flex flex-col items-center text-center border border-gray-200 hover:shadow-xl transition duration-300`}

            initial={{ opacity: 0, rotateY: 0 }}
            animate={{
              opacity: 1,
              rotateY: 0, // Rotate continuously
            }}
            transition={{
              duration: 8, // Duration for one full flip
              repeat: Infinity, // Repeat indefinitely
              ease: "linear", // Smooth continuous motion
            }}
            style={{
              perspective: "1000px",
              animation: "flipAnimation 8s linear infinite", // Adding custom flip animation
            }}
          >
            <div className="text-blue-500 mb-3">
              {edu.level === "B.Sc Engg in CSE" ? (
                <GraduationCap size={40} />
              ) : (
                <School size={40} />
              )}
            </div>
            <h2 className="text-xl font-semibold">{edu.level}</h2>
            <p className="text-gray-600">Passing Year: {edu.year}</p>
            {edu.gpa && (
              <p className="text-gray-600">
                {edu.text}: {edu.gpa} {edu.text1}
              </p>
            )}
            <p className="text-gray-700 font-medium mt-2">{edu.school}</p>
            <div className="flex items-center mt-2 text-gray-500">
              <MapPin size={20} className="mr-1" />
              <span>{edu.location}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
