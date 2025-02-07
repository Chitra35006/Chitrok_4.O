
import { FaExternalLinkAlt, FaGithub, FaDatabase, FaServer, FaReact, FaExclamationTriangle } from "react-icons/fa";
import { MdOutlineDashboard, MdOutlineSecurity } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
const projects = [
  {
    "id": 1,
    "img": "https://i.ibb.co/fYyG78Q7/w1.png",
    "p_name": "Where Is It",
    "featured": [
      { "feature": "Responsive Design" },
      { "feature": "Firebase Authentication" },
      { "feature": "Add Post For Lost & Found Item" },
      { "feature": "Post Details Page" },
      { "feature": "Manage Item Page" },
      { "feature": "All Recovered Item Page" },
      { "feature": "Update Item & Delete Item" },
      { "feature": "User Friendly Interactivity" },
      { "feature": "Search Item Based on Title & Location" }
    ],
    "description": "This project is a Lost and Found Website, a platform designed to connect individuals who have lost personal belongings with those who may have found them. Users can report lost items, browse found items, and interact to recover their belongings. Developing this website provides practical experience in building full-stack applications, user authentication, file uploads, database management, and API integration.",
    "liveLink": "https://a-11-whereisit.web.app/",
    "technology": [
      {
        "category": "Frontend",
        "technologies": ["React.js", "TailwindCSS", "Daisy UI"]
      },
      {
        "category": "Backend",
        "technologies": ["Node.js", "Express.js"]
      },
      {
        "category": "Database",
        "technologies": ["MongoDB"]
      },
      {
        "category": "Authentication",
        "technologies": ["Firebase Authentication"]
      },
      {
        "category": "Hosting",
        "technologies": ["Client (Firebase)", "Server (Vercel)"]
      }
    ],
    "gitRepo": "https://github.com/Chitra35006/A-11-whereIsIt-Client",
    "challanges": "I initially faced challenges while attempting to update an item for a specific user & get data of a specific user. Additionally, I encountered an application error while deploying the server-side functionality.",
    "futureWork": [
      { "task": "Add Axios for API requests" },
      { "task": "Implement JWT token authentication" },
      { "task": "Add Interceptor for handling API requests" },
      { "task": "Implement sorting functionality by donation amount" },
      { "task": "Display total user count" },
      { "task": "Develop admin functionality" },
      { "task": "Allow users to update status for found product" }
    ]
  },
  
  {
    "id": 2,
    "img": "https://i.ibb.co/q3yX9tWn/cc1.png",
    "p_name": "CrowdCube",
    "featured": [
      { "feature": "Responsive Design" },
      { "feature": "Firebase Authentication" },
      { "feature": "All Campaign" },
      { "feature": "My Campaign" },
      { "feature": "Add New Campaign Page" },
      { "feature": "Private Routes" },
      { "feature": "MongoDB Dynamic Data" },
      { "feature": "User Friendly Interactivity" }
    ],
    "description": "A crowdfunding website is a platform where people can raise money for different projects, ideas, or causes by inviting others to contribute financially. These projects can include personal needs (like medical expenses), creative ideas (like making a film or app), and startups (like launching a new product).",
    "liveLink": "https://a-10-crowd-cube.web.app",
    "technology": [
      {
        "category": "Frontend",
        "technologies": ["React.js", "TailwindCSS", "Daisy UI"]
      },
      {
        "category": "Backend",
        "technologies": ["Node.js", "Express.js"]
      },
      {
        "category": "Database",
        "technologies": ["MongoDB"]
      },
      {
        "category": "Authentication",
        "technologies": ["Firebase Authentication"]
      },
      {
        "category": "Hosting",
        "technologies": ["Client (Firebase)", "Server (Vercel)"]
      }
    ],
    "gitRepo": "https://github.com/Chitra35006/A-10-Crowdcube-Client",
    "challanges": "I initially faced challenges while attempting to load dynamic data as a specific campaign. Additionally, I encountered an error when implementing JWT.",
    "futureWork": [
      { "task": "Add Axios for API requests" },
      { "task": "Implement JWT token authentication" },
      { "task": "Add Interceptor for handling API requests" },
      { "task": "Develop admin functionalities" },
      { "task": "Allow users to request campaign promotion" },
      { "task": "Create separate dashboards for Admin & User" }
    ]
  },
  
  {
    "id": 3,
    "img": "https://i.ibb.co/5xvQNcST/pp.png",
    "p_name": "Perfect Pair",
    "featured": [
      { "feature": "User Friendly Interactivity" },
      { "feature": "Responsive Design" },
      { "feature": "Firebase Authentication" },
      { "feature": "Add User Bio" },
      { "feature": "Update User Bio" },
      { "feature": "Add Contact to Favorite" },
      { "feature": "Upload Marital Status, Share Reviews, Thoughts" },
      { "feature": "View User Bio" },
      { "feature": "Request to Get Number [Pay USD]" },
      { "feature": "Request for a Premium User" },
      { "feature": "After Approval, Can See All User Contact Information" },
      { "feature": "Admin Home [See Total Users, Male, Female, Revenue]" },
      { "feature": "Manage Users: Make Admin or Premium" },
      { "feature": "Approve Premium Requests" },
      { "feature": "Approve Contact Requests" },
      { "feature": "See Success Stories" }
    ],
    "description": "This project is a Matrimony platform using the powerful MERN stack (MongoDB, Express, React, and Node.js). This online platform enables users to connect with potential life partners in an intuitive, user-friendly environment. It has both admin & user dashboards. Users can request to become premium members, and if the admin approves, they gain access to requested contact information. Normal users must pay $5 to view each requested contact.",
    "liveLink": "https://a-12-perfect-pair.web.app",
    "technology": [
      {
        "category": "Frontend",
        "technologies": ["React.js", "TailwindCSS", "Ant Design"]
      },
      {
        "category": "Backend",
        "technologies": ["Node.js", "Express.js"]
      },
      {
        "category": "Database",
        "technologies": ["MongoDB"]
      },
      {
        "category": "Authentication",
        "technologies": ["Firebase Authentication"]
      },
      {
        "category": "Hosting",
        "technologies": ["Client (Firebase)", "Server (Vercel)"]
      }
    ],
    "gitRepo": "https://github.com/Chitra35006/A-12-Perfect-Pair-Client",
    "challanges": "I faced challenges in ensuring users who already added a bio see the update page instead of the add bio page, implementing admin and premium user functionalities, handling multiple stages of data fetching from the database, and integrating JWT authentication.",
    "futureWork": [
      { "task": "Verify Admin Token" },
      { "task": "Add JWT Interceptor" },
      { "task": "Implement User Chat Functionalities" }
    ]
  }
  
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
      <img
        src={selectedProject.img}
        alt={selectedProject.p_name}
        className="w-full h-60 object-cover rounded-md"
      />
      <h2 className="text-3xl font-bold mt-4 text-center">
        {selectedProject.p_name}
      </h2>
      <p className="text-gray-700 text-lg mt-2">{selectedProject.description}</p>

      {/* Live & GitHub Links */}
      <div className="flex justify-center gap-4 mt-4">
        <a
          href={selectedProject.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          <FaExternalLinkAlt /> Live Site
        </a>
        <a
          href={selectedProject.gitRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900"
        >
          <FaGithub /> GitHub
        </a>
      </div>

      {/* Features Section */}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold">🔹 Features</h3>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          {selectedProject.featured.map((item, index) => (
            <li key={index}>{item.feature}</li>
          ))}
        </ul>
      </div>

      {/* Technology Section */}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold flex items-center gap-2">
          <FaServer /> Technology Stack
        </h3>
        <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
          {selectedProject.technology.map((tech, index) => (
            <li
              key={index}
              className="flex items-center gap-2 bg-gray-100 p-2 rounded-md"
            >
              {tech.category === "Frontend" && (
                <FaReact className="text-blue-500" />
              )}
              {tech.category === "Backend" && (
                <FaServer className="text-gray-500" />
              )}
              {tech.category === "Database" && (
                <FaDatabase className="text-green-600" />
              )}
              {tech.category === "Authentication" && (
                <MdOutlineSecurity className="text-red-500" />
              )}
              {tech.category === "Hosting" && (
                <MdOutlineDashboard className="text-purple-500" />
              )}
              <span className="font-medium">
                {tech.category}: {tech.technologies.join(", ")}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Challenges Section */}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold flex items-center gap-2">
          <FaExclamationTriangle className="text-yellow-500" /> Challenges
        </h3>
        <p className="mt-2 text-gray-700">{selectedProject.challanges}</p>
      </div>

      {/* Future Work Section */}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold flex items-center gap-2">
          <RiAdminLine className="text-blue-500" /> Future Work
        </h3>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          {selectedProject.futureWork.map((item, index) => (
            <li key={index}>{item.task}</li>
          ))}
        </ul>
      </div>
    </div>
    );
};

export default ProjectDetails;