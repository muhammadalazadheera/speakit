import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import BaseLayout from "../BaseLayout";
import PrivateRoutes from "./PrivateRoutes";
import AddTutorial from "../pages/AddTutorial";
import EditTutorial from "../pages/EditTutorial";
import AllTutorials from "../pages/AllTutorials";
import TutorialDetails from "../pages/TutorialDetails";
import MyTutorials from "../pages/MyTutorials";
import MyBookedTut from "../pages/MyBookedTut";
import TutByLang from "../pages/TutByLang";

const router = createBrowserRouter([
    {
        path: "/",
        Component: BaseLayout,
        
        children: [
            {
                index: true,
                Component: HomePage,
                loader: async () => fetch('https://assignment-11-ss.vercel.app/tutorials')
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
                path: "/add-tutorial",
                element: <PrivateRoutes><AddTutorial></AddTutorial></PrivateRoutes>
            },
            {
                path: "/edit-tutorial/:id",
                element: <PrivateRoutes><EditTutorial></EditTutorial></PrivateRoutes>
            },
            {
                path: "/find-tutorial",
                Component: AllTutorials,
                loader: async () => fetch('https://assignment-11-ss.vercel.app/tutorials')
            },
            {
                path: "/tutorial-by-language/:language",
                Component: TutByLang,
                loader: async ({params}) => fetch(`https://assignment-11-ss.vercel.app/tutorials-by-language/${params.language}`)
            },
            {
                path: "/tutorial-details/:id",
                Component: TutorialDetails
            },
            {
                path: "/my-tutorials",
                element: <PrivateRoutes><MyTutorials></MyTutorials></PrivateRoutes>
            },
            {
                path: "/my-booked-tutorials",
                element: <PrivateRoutes><MyBookedTut></MyBookedTut></PrivateRoutes>
            }
        ]
    }
]);

export default router;