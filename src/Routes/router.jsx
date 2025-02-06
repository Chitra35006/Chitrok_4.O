import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import ProjectDetails from "../ProjectShowCase/ProjectDetails";



export const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
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