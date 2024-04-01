import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Hero from "../pages/Home/Hero/Hero";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Hero />
            }
        ]
    },
]);

export default router;