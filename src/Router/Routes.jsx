import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Users from "../Component/Dashboard/Admin/Users";
import Dashboard from "../Component/Dashboard/Dashboard";
import SignIn from "../Component/SignIn/SignIn";
import SignUp from "../Component/SignUp/SignUp";
import useAxiosPublic from "../hooks/useAxiosPublic";
import PageError from "../Pages/404/PageError";
import ClassDetails from "../Pages/AllClass/ClassDetails";
import Classes from "../Pages/AllClass/Classes";
import Home from "../Pages/Home/Home";
import TeachOn from "../Pages/TeachOn/TeachOn";
import PrivateRoute from "./PrivateRoute";
const axiosPublic = useAxiosPublic;

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <PageError></PageError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/hero',
                element: <SignIn></SignIn>
            },
            {
                path: '/allclasses',
                element: <Classes></Classes>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><ClassDetails></ClassDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5003/allclasses/${params.id}`)
            },
            {
                path: '/teachon',
                element: <TeachOn></TeachOn>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [{
            path: 'users',
            element: <Users></Users>
        }
        ]
    }
]);
