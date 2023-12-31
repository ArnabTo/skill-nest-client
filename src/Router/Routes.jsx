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
import CompletePayment from "../Pages/Payment/CompletePayment";
import Payment from "../Pages/Payment/Payment";
import TeachOn from "../Pages/TeachOn/TeachOn";
import { ThemeProvider } from "../ThemeContext";
import AdminRoutes from "./AdminRoutes";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ThemeProvider><App></App></ThemeProvider>,
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
                loader: ({ params }) => fetch(`https://skill-nest-server.vercel.app/allclasses/${params.id}`)
            },
            {
                path: '/teachon',
                element: <PrivateRoute><TeachOn></TeachOn></PrivateRoute>
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
                path:'/payment/:id',
                element: <CompletePayment></CompletePayment>
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
                element: <AdminRoutes><Users></Users></AdminRoutes>
            },
            {
                path:'allclassreq',
                element: <AdminRoutes><AllClasses></AllClasses></AdminRoutes>
            },
            {
                path:'request',
                element: <AdminRoutes><TeacherRequests></TeacherRequests></AdminRoutes>
            },
            {
                path:'adprofile',
                element: <AdminRoutes><AdProfile></AdProfile></AdminRoutes>
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
