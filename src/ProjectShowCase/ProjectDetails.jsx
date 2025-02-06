
import { FaExternalLinkAlt, FaGithub, FaDatabase, FaServer, FaReact, FaExclamationTriangle } from "react-icons/fa";
import { MdOutlineDashboard, MdOutlineSecurity } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
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
        "A crowdfunding website is a platform where people can raise money for different projects, ideas, or causes by inviting others to contribute financially. These projects can include personal needs (like medical expenses), creative ideas (like making a film or app), and startups (like launching a new product)",
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
const ProjectDetails = () => {
    const { id } = useParams(); // Get the project id from the URL
    
    // Find the selected project by id
    const selectedProject = projects.find(project => project.id === parseInt(id));
  
    if (!selectedProject) {
      return <p className="text-center text-red-500 text-xl mt-10">Project not found.</p>;
    }
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg md:mt-20">
        {/* Project Image & Title */}
        <img src={selectedProject.img} alt={selectedProject.p_name} className="w-full h-60 object-cover rounded-md" />
        <h2 className="text-3xl font-bold mt-4 text-center">{selectedProject.p_name}</h2>
        <p className="text-gray-700 text-lg mt-2">{selectedProject.description}</p>
  
        {/* Live & GitHub Links */}
        <div className="flex justify-center gap-4 mt-4">
          <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            <FaExternalLinkAlt /> Live Site
          </a>
          <a href={selectedProject.gitRepo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900">
            <FaGithub /> GitHub
          </a>
        </div>
  
        {/* Technology Section */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold flex items-center gap-2"><FaServer /> Technology Stack</h3>
          <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
            {selectedProject.technology.map((tech, index) => (
              <li key={index} className="flex items-center gap-2 bg-gray-100 p-2 rounded-md">
                {tech.category === "Frontend" && <FaReact className="text-blue-500" />}
                {tech.category === "Backend" && <FaServer className="text-gray-500" />}
                {tech.category === "Database" && <FaDatabase className="text-green-600" />}
                {tech.category === "Authentication" && <MdOutlineSecurity className="text-red-500" />}
                {tech.category === "Hosting" && <MdOutlineDashboard className="text-purple-500" />}
                <span className="font-medium">{tech.category}: {tech.technologies.join(", ")}</span>
              </li>
            ))}
          </ul>
        </div>
  
        {/* Challenges Section */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold flex items-center gap-2"><FaExclamationTriangle className="text-yellow-500" /> Challenges</h3>
          <p className="mt-2 text-gray-700">{selectedProject.challanges}</p>
        </div>
  
        {/* Future Work Section */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold flex items-center gap-2"><RiAdminLine className="text-blue-500" /> Future Work</h3>
          <p className="mt-2 text-gray-700">{selectedProject.futureWork}</p>
        </div>
      </div>
    );
};

export default ProjectDetails;