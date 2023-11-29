import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdProfile from "../Component/Dashboard/Admin/AdProfile";
import AllClasses from "../Component/Dashboard/Admin/AllClasses";
import TeacherRequests from "../Component/Dashboard/Admin/TeacherRequests";
import Users from "../Component/Dashboard/Admin/Users";
import EnClassDetails from "../Component/Dashboard/Student/EnClassDetails";
import MyEnrolls from "../Component/Dashboard/Student/MyEnrolls";
import Profile from "../Component/Dashboard/Student/Profile";
import AddClass from "../Component/Dashboard/Teacher/AddClass";
import MyClass from "../Component/Dashboard/Teacher/MyClass";
import TeacherClassDetails from "../Component/Dashboard/Teacher/TeacherClassDetails";
import TProfile from "../Component/Dashboard/Teacher/TProfile";
import SignIn from "../Component/SignIn/SignIn";
import SignUp from "../Component/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import PageError from "../Pages/404/PageError";
import ClassDetails from "../Pages/AllClass/ClassDetails";
import Classes from "../Pages/AllClass/Classes";
import Home from "../Pages/Home/Home";
import Payment from "../Pages/Payment/Payment";
import TeachOn from "../Pages/TeachOn/TeachOn";
import PrivateRoute from "./PrivateRoute";

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
            {
                path: '/payment',
                element: <Payment />
            },
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: 
        [
            {
                path: 'users',
                element: <Users></Users>
            },
            {
                path:'allclassreq',
                element: <AllClasses></AllClasses>
            },
            {
                path:'request',
                element: <TeacherRequests></TeacherRequests>
            },
            {
                path:'adprofile',
                element: <AdProfile></AdProfile>
            },
            {
                path: 'myenrolls',
                element: <MyEnrolls></MyEnrolls>
            },
            {
                path: 'stdprofile',
                element: <Profile></Profile>
            },
            {
                path: '/dashboard/myenroll-class/:id',
                element: <EnClassDetails></EnClassDetails>,
            },
            {
                path: 'tprofile',
                element: <TProfile></TProfile>
            },
            {
                path: 'teacher-myclass',
                element: <MyClass></MyClass>
            },
            {
                path: '/dashboard/class/:id',
                element: <TeacherClassDetails></TeacherClassDetails>
            },
            {
                path: 'addclass',
                element: <AddClass></AddClass>
            }
        ]
    }
]);
