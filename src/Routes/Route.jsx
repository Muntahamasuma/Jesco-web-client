import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Homepage from "../Pages/Homepage";
import Signup from "../Home/Navbar/Signup";
import Login from "../Home/Navbar/Login";

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
    ]
  },
]);