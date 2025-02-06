import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";

import NoExp from "../NoExp/NoExp";
import ProjectDemo from "../ProjectShowCase/ProjectDemo";
import TechSkill from "../TechSkill/TechSkill";


const Home = () => {
    return (
        <div>
           
           <Banner></Banner>
           <AboutMe></AboutMe>
           <TechSkill></TechSkill>
           <Education></Education>
           <NoExp></NoExp>
           <ProjectDemo></ProjectDemo>
           <Contact></Contact>
           
        </div>
    );
};

export default Home;