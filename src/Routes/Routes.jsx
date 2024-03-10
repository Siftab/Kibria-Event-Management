import { Outlet, createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home";
import Detail_services from "../Pages/Detail_services";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoutes from "./PrivateRoutes";
import AboutUs from "../Pages/AboutUs";
import Gallery from "../Pages/Gallery";
import ErrorPage from "../Pages/ErrorPage";


const myRoutes =createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
                ,loader:()=>fetch('/services.json')
                
            },
            {
                path:'/aboutUs',
                element:<PrivateRoutes><AboutUs></AboutUs></PrivateRoutes>
            },
            {
                path:'/services/:id',
                element:<PrivateRoutes><Detail_services></Detail_services></PrivateRoutes>
                ,loader: ()=> fetch('/services.json')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/gallery',
                element:<PrivateRoutes><Gallery></Gallery></PrivateRoutes>,
                loader: ()=> fetch('/ALLImage.json')
            }
        ]
    }
])
export {myRoutes};