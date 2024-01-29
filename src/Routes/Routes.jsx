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
import AddFood from "../Dashboard/Food/AddFood/AddFood";
import ManageFood from "../Dashboard/Food/ManageFood/ManageFood";
import EditFood from "../Dashboard/Food/EditFood/EditFood";
import Cart from "../Pages/CartPage/Cart";
import PrivateRoute from "./PrivateRoute";
import Payments from "../Pages/Payments/Payments";

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
        path: '/details/:id',
        element: <Details />
      },
      {
        path: '/cart',
        element: <PrivateRoute><Cart /></PrivateRoute>
      },
      {
        path: '/payments',
        element: <PrivateRoute><Payments /></PrivateRoute>
      },
      {
        path:'/blogDetails',
        element: <BlogDetails />
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile /></PrivateRoute>
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
        path: '/dashboard/add-item',
        element: <AddFood />
      },
      {
        path:'/dashboard/manage',
        element: <ManageFood />
      },
      {
        path:'/dashboard/manage/:id',
        element: <EditFood />
      },
      {
        path: '/dashboard/users',
        element: <User />
      }
    ]
  }
])