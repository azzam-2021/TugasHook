import { createBrowserRouter } from "react-router";
import Home from "./ReactRouter/Home";
import About from "./ReactRouter/About";
import Contact from "./ReactRouter/Contact";
import Profile from "./ReactRouter/Profile";
import NotFound from "./ReactRouter/NotFound";
import ProfileDetail from "./ReactRouter/ProfileDetail";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/Contact',
        element: <Contact />
    },
    {
        path: '/profile',
        element: <Profile />,
    },
    {
        path: '/profile/:id',
        element: <ProfileDetail />,
    },
    {
        path: '/*',
        element: <NotFound />
    }
])
export default router