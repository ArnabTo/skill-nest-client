import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../Component/SignIn/SignIn";
import SignUp from "../Component/SignUp/SignUp";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children:[
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
