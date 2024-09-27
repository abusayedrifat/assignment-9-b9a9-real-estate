import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorElement from "../ErrorElement";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Regster from "../Pages/Register/Regster";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";
import Connect from "../Pages/Connect/Connect";
import Profile from "../Pages/Profile/Profile";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/property.json"),
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Regster></Regster>,
      },
      {
        path: "/details/:property_id",
        loader: () => fetch("/property.json"),
        element: (
          <PrivateRoute>
            <PropertyDetails></PropertyDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/connect",
        element: <Connect></Connect>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);

export default router;
