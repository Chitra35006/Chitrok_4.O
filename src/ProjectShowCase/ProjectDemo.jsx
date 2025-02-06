
import { useNavigate } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";

const projects = [
    {
      id: 1,
      img: "https://i.ibb.co/fYyG78Q7/w1.png",
      p_name: "Where Is It",
      technology: [
        { category: "Frontend", technologies: ["React.js", "TailwindCSS", "Daisy UI"] },
        { category: "Backend", technologies: ["Node.js", "Express.js"] },
        { category: "Database", technologies: ["MongoDB"] },
        { category: "Authentication", technologies: ["Firebase Authentication"] },
        { category: "Hosting", technologies: ["Client (Firebase)", "Server (Vercel)"] },
      ],
      description:
        "This project is a Lost and Found Website, a platform designed to connect individuals who have lost personal belongings with those who may have found them.",
      liveLink: "https://a-11-whereisit.web.app/",
      gitRepo: "https://github.com/Chitra35006/A-11-whereIsIt-Client",
      challanges:"I initially faced challenges while attempting to update an item for a specific user & get data of specific user. Additionally, I encountered an application error when deploying the server-side functionality." ,
futureWork:"Have to add axios,jwt token,interceptorothers features"  ,

    },
    {
      id: 2,
      img: "https://i.ibb.co/q3yX9tWn/cc1.png",
      p_name: "CrowdCube",
      technology: [
        { category: "Frontend", technologies: ["React.js", "TailwindCSS", "Daisy UI"] },
        { category: "Backend", technologies: ["Node.js", "Express.js"] },
        { category: "Database", technologies: ["MongoDB"] },
        { category: "Authentication", technologies: ["Firebase Authentication"] },
        { category: "Hosting", technologies: ["Client (Firebase)", "Server (Vercel)"] },
      ],
      description:
        "A crowdfunding website where people can raise money for projects, ideas, or causes by inviting others to contribute financially.",
      liveLink: "https://a-10-crowd-cube.web.app",
      gitRepo: "https://github.com/Chitra35006/A-10-Crowdcube-Client",
      challanges:"I initially faced challenges while attempting to load dynamic data as specific campaign. Additionally, I encountered an error when implementing the jwt" ,
futureWork:"Have to add axios,jwt token,interceptor & others features" 

    },
    {
      id: 3,
      img: "https://i.ibb.co/5xvQNcST/pp.png",
      p_name: "Perfect Pair",
      technology: [
        { category: "Frontend", technologies: ["React.js", "TailwindCSS", "Ant Design"] },
        { category: "Backend", technologies: ["Node.js", "Express.js"] },
        { category: "Database", technologies: ["MongoDB"] },
        { category: "Authentication", technologies: ["Firebase Authentication"] },
        { category: "Hosting", technologies: ["Client (Firebase)", "Server (Vercel)"] },
      ],
      description:
        "A matrimony platform built with the MERN stack (MongoDB, Express, React, Node.js). Users can connect with potential life partners in a user-friendly environment.",
      liveLink: "https://a-12-perfect-pair.web.app",
      gitRepo: "https://github.com/Chitra35006/A-12-Perfect-Pair-Client",
      challanges:"I have faced challanges to show user who already added bio show the update page not the add bio page,to make admin, to make premium, so many stages to fetch data from the database,while implementing jwt" ,
futureWork:"Have to verify admin token, need to added interceptor"

    },
  ];
const ProjectDemo = () => {
    const navigate = useNavigate();
    const {theme} = useTheme();

    const handleProjectClick = (project) => {
        navigate(`/project-details/${project.id}`); // Navigate to /project-details/:id
      };
    return (
        <div id="project-section">
             <div className={`min-h-screen flex flex-col items-center justify-center  p-10 ${theme === "dark" ? "bg-slate-700" : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"}`}>
      <h1 className="text-white text-4xl font-bold mb-10">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className={` p-5 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300 ${theme === "dark" ? "bg-[#032644]" : "bg-white"}`}
          >
            <img
              src={project.img}
              alt={project.p_name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className={`${theme === "dark" ? "text-orange-300" : "text-black"}`}>{project.p_name}</h2>
            <p className="text-gray-600 text-sm mt-2">
  <strong className={`${theme === "dark" ? "text-teal-300" : "text-gray-500"}`}>Technologies:</strong>{" "}
  <div className="flex flex-wrap gap-2 mt-1">
    {project.technology.map((tech, index) =>
      tech.technologies.map((t, i) => (
        <span
          key={`${index}-${i}`}
          className={`px-3 py-1 text-xs font-semibold rounded-full 
          ${
            [
              "bg-blue-200 text-blue-800",
              "bg-green-200 text-green-800",
              "bg-yellow-200 text-yellow-800",
              "bg-purple-200 text-purple-800",
              "bg-pink-200 text-pink-800",
            ][(index + i) % 5]
          }`}
        >
          {t}
        </span>
      ))
    )}
  </div>
</p>

<button
  className="mt-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg w-full 
             flex items-center justify-center gap-2 
             hover:from-violet-800 hover:via-red-500 hover:to-orange-500  transition duration-300 hover:scale-105"
             onClick={() => handleProjectClick(project)}
>
  View More 
  <span className="ml-1">➜</span>
</button>


          </div>
        ))}
      </div>

      
    </div>
        </div>
    );
};

export default ProjectDemo;