import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorElement from "../ErrorElement";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Regster from "../Pages/Register/Regster";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";
import Connect from "../Pages/Connect/Connect";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorElement></ErrorElement>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/logIn',
                element:<LogIn></LogIn>
            },
            {
                path:'/register',
                element:<Regster></Regster>
            },
            {
                path:'/details',
                element:<PropertyDetails></PropertyDetails>
            },
            {
                path:'/connect',
                element:<Connect></Connect>
            }
        ]
    }
])

export default router;