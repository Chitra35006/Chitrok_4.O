import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import ProjectDetails from "../ProjectShowCase/ProjectDetails";
import Four04page from "../Home/Four04page";



export const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        errorElement:<Four04page></Four04page>,
        children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/project-details/:id",
            element:<ProjectDetails></ProjectDetails>
        }
        ]
    }
])