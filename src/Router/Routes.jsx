import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../Component/SignIn/SignIn";
import SignUp from "../Component/SignUp/SignUp";
import AllClasses from "../Pages/AllClass/AllClasses";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children:[
            {
                path:'/hero',
                element: <SignIn></SignIn>
            },
            {
                path:'/allclasses',
                element: <AllClasses></AllClasses>
            },
            {
                path:'/signin',
                element: <SignIn></SignIn>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
        ]
    },
]);
