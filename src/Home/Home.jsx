import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";


const Home = () => {
    return (
        <div>
           <NavBar></NavBar>
           <Banner></Banner>
           <AboutMe></AboutMe>
           <div className="bg-violet-950 py-10">
            <Footer></Footer>
           </div>
        </div>
    );
};

export default Home;