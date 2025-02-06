import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar";


const MainLayout = () => {
    return (
        <div>
           <NavBar></NavBar>
           <Outlet></Outlet>
           <div className="bg-gradient-to-tr from-violet-950 via-blue-900 to-purple-700
        py-10">
            <Footer></Footer>
           </div>
        </div>
    );
};

export default MainLayout;