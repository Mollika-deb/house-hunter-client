import Layout from "../Components/Layout/Layout";
import SignUp from "../Components/SignUp/SignUp";
import SignIn from "../Components/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children : [
            {
                path:'/signup',
                element:<SignUp/>
            }
        ]

    }

])