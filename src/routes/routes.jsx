import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import BaseLayout from "../BaseLayout";
import ProfilePage from "../pages/ProfilePage";
import PrivateRoutes from "./PrivateRoutes";
import AddTutorial from "../pages/AddTutorial";
import EditTutorial from "../pages/EditTutorial";

const router = createBrowserRouter([
    {
        path: "/",
        Component: BaseLayout,
        
        children: [
            {
                index: true,
                Component: HomePage
            },
            ,
            {
                path: "/login",
                Component: LoginPage
            },
            {
                path: "/register",
                Component: RegisterPage
            },
            {
                path: "/profile",
                element: <PrivateRoutes><ProfilePage></ProfilePage></PrivateRoutes>
            },
            {
                path: "/add-tutorial",
                element: <PrivateRoutes><AddTutorial></AddTutorial></PrivateRoutes>
            },
            {
                path: "/edit-tutorial/:id",
                element: <PrivateRoutes><EditTutorial></EditTutorial></PrivateRoutes>
            }
        ]
    }
]);

export default router;