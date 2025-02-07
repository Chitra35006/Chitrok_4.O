
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaSun, FaMoon } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { useTheme } from "../Context/ThemeContext";



const NavBar = () => {
  const { theme, toggleTheme } = useTheme();

 

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? theme === "dark"
                  ? "active-link font-bold border-b-4 border-orange-400"
                  : "active-link  font-bold border-b-4 border-violet-200"
                : "inactive-link"
            } ${theme === "dark" ? "text-orange-200" : "text-violet-200"}`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
      <NavLink
  className={({ isActive }) =>
    `${
      isActive
        ? theme === "dark"
          ? "active-link font-bold border-b-4 border-orange-400"
          : "active-link font-bold border-b-4 border-violet-400"
        : theme === "dark"
        ? "inactive-link border-1 border-violet-200 ml-2 rounded-2xl"
        : "inactive-link border-1 border-orange-600 ml-2 rounded-2xl"
    } ${theme === "dark" ? "text-orange-200" : "text-violet-200"}`
  }
  to="/about"
  onClick={(e) => {
    e.preventDefault(); // Prevent default link behavior
    document.getElementById("about-section")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
>
  About
</NavLink>

      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? theme === "dark"
                  ? "active-link font-bold border-b-4 border-orange-400"
                  : "active-link  font-bold border-b-4 border-violet-200"
                  : theme === "dark"
                  ? "inactive-link border-1 border-violet-200 ml-2 rounded-2xl"
                  : "inactive-link border-1 border-orange-600 ml-2 rounded-2xl"
            } ${theme === "dark" ? "text-orange-200" : "text-violet-200"}`
          }
          to="/skill"
          onClick={(e) => {
            e.preventDefault(); // Prevent default link behavior
            document.getElementById("skill-section")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? theme === "dark"
                  ? "active-link font-bold border-b-4 border-orange-400"
                  : "active-link  font-bold border-b-4 border-violet-200"
                  : theme === "dark"
                  ? "inactive-link border-1 border-violet-200 ml-2 rounded-2xl"
                  : "inactive-link border-1 border-orange-600 ml-2 rounded-2xl"
            } ${theme === "dark" ? "text-orange-200" : "text-violet-200"}`
          }
          to="/education"
          onClick={(e) => {
            e.preventDefault(); // Prevent default link behavior
            document.getElementById("education-section")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Education
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? theme === "dark"
                  ? "active-link font-bold border-b-4 border-orange-400"
                  : "active-link  font-bold border-b-4 border-violet-200"
                  : theme === "dark"
                  ? "inactive-link border-1 border-violet-200 ml-2 rounded-2xl"
                  : "inactive-link border-1 border-orange-600 ml-2 rounded-2xl"
            } ${theme === "dark" ? "text-orange-200" : "text-violet-200"}`
          }
          to="/projects"
          onClick={(e) => {
            e.preventDefault(); // Prevent default link behavior
            document.getElementById("project-section")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? theme === "dark"
                  ? "active-link font-bold border-b-4 border-orange-400"
                  : "active-link  font-bold border-b-4 border-violet-200"
                  : theme === "dark"
                  ? "inactive-link border-1 border-violet-200 ml-2 rounded-2xl"
                  : "inactive-link border-1 border-orange-600 ml-2 rounded-2xl"
            } ${theme === "dark" ? "text-orange-200" : "text-violet-200"}`
          }
          to="/contacts"
          onClick={(e) => {
            e.preventDefault(); // Prevent default link behavior
            document.getElementById("contact-section")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="fixed  top-0 left-0 w-full bg-rose-200 shadow-md z-50">
      <div
        className={`navbar px-4 ${
          theme === "dark"
            ? "bg-gradient-to-r from-slate-700 via-teal-900 to-teal-700"
            : "bg-gradient-to-r from-slate-800 via-slate-700 to-orange-700"

        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="w-10 hidden lg:block" src={logo} />
            <span
  className="text-2xl bg-gradient-to-r from-violet-500 via-purple-600 to-pink-500 bg-clip-text text-transparent"
>
  <span
    className={`${
      theme === "dark" ? "text-orange-300" : "text-orange-400"
    }`}
  >
    C
  </span>
  hitra
</span>

<span
  className={`${
    theme === "dark" ? "text-orange-300" : "text-orange-400"
  } text-2xl bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 bg-clip-text text-transparent`}
>
  <Typewriter
    words={["Rani Das"]}
    loop={true}
    cursor
    cursorStyle="_"
    typeSpeed={100}
    deleteSpeed={50}
    delaySpeed={1000}
  />
</span>

          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
  <button onClick={toggleTheme} className="btn btn-ghost rounded-full">
    {theme === "dark" ? <FaSun /> : <FaMoon />}
  </button>

 
    
     

   
 
    <Link to="/signin">
      <button className="border-none btn bg-gradient-to-r from-orange-300 via-orange-500 to-red-500
 font-semibold text-white hover:text-rose-500">
        Login
      </button>
    </Link>
  
        </div>

      </div>
    </div>
  );
};

export default NavBar;