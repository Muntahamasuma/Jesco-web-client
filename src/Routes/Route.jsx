import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Homepage from "../Pages/Homepage";
import Shop from "../Pages/Shop";
import Signup from "../Components/Home/Navbar/Signup";
import Login from "../Components/Home/Navbar/Login";
import AboutUs from "../Pages/AboutUs";
import DashBorad from "../Layouts/Dash_layout/DashBorad";
import Dash_overview from "../Pages/Dash_overview";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path:'/',
        element: <Homepage></Homepage>
      },
      {
        path:'/signup',
        element: <Signup/>
      },
      {
        path:'/login',
        element: <Login/>
      },
      {
        path:'/shop',
        element: <Shop/>
      },
      {
        path:'/aboutus',
        element: <AboutUs/>
      },
    ]
  },
  {
    path:'/dashboard',
    element:<PrivateRoute><DashBorad></DashBorad></PrivateRoute>,
    children:[
      {
        path:'/dashboard/overview',
        element: <Dash_overview/>
      }
    ]
  }
]);