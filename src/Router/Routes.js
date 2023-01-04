import { createBrowserRouter } from "react-router-dom";
import Donation from "../Components/Pages/Donation";
import Events from "../Components/Pages/Events";
import Home from "../Components/Pages/Home";
import Login from "../Components/Pages/Login";
import RegisterList from "../Components/Pages/RegisterList";
import SignUp from "../Components/Pages/SignUp";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('https://volunteer-server-roan.vercel.app/services')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/donation/:id',
                element: <Donation></Donation>,
                loader: ({params})=> fetch(`https://volunteer-server-roan.vercel.app/services/${params.id}`)
            },
            {
                path: '/events',
                element: <Events></Events>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/register',
                element: <RegisterList></RegisterList>
            },
        ]
    }
])

export default router;