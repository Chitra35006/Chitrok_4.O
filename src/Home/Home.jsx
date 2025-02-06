import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import TechSkill from "../TechSkill/TechSkill";


const Home = () => {
    return (
        <div>
           <NavBar></NavBar>
           <Banner></Banner>
           <AboutMe></AboutMe>
           <TechSkill></TechSkill>
           <div className="bg-gradient-to-tr from-violet-950 via-blue-900 to-purple-700
        py-10">
            <Footer></Footer>
           </div>
        </div>
    );
};

export default Home;