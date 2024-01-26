import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Menu from "../Pages/Menu/Menu";
import About from "../Pages/About/About";
import Chefs from "../Pages/Chefs/Chefs";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Details from "../Pages/Details/Details";
import BlogDetails from "../Pages/Details/BlogDetails";
import Profile from "../Pages/Profile/Profile";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import AdminHome from "../Dashboard/AdminHome/AdminHome";
import User from "../Dashboard/User/User";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/chefs',
        element: <Chefs />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/details',
        element: <Details />
      },
      {
        path:'/blogDetails',
        element: <BlogDetails />
      },
      {
        path: '/profile',
        element: <Profile />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signUp',
    element: <SignUp />
  },
  {
    path: '/dashboard',
    element: <AdminRoute><DashboardLayouts /></AdminRoute>,
    children: [
      {
        path: '/dashboard',
        element: <AdminHome />
      },
      {
        path: '/dashboard/users',
        element: <User />
      }
    ]
  }
])