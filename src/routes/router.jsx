import { createBrowserRouter } from "react-router"
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/homelayout/Home";
import Bills from "../components/homelayout/Bills";
import BillDetails from "../components/homelayout/BillDetails";
import Footer from "daisyui/components/footer";
import Login from "../page/Login";
import Register from "../page/Register";
import AuthLayout from "../layouts/AuthLayout";
import PrivateRoute from "../provider/PrivateRoute";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <HomeLayout></HomeLayout>,
            children:[
                {
                    path:"",
                    element: <Home></Home>
                },
                {
                    path:"/bills",
                    element: <PrivateRoute><Bills></Bills></PrivateRoute>
                    
                },
                {
                    path: "/categories/:id",
                    element: <BillDetails></BillDetails>
                },
            ]
        },
        {
            path:"/auth",
            element: <AuthLayout></AuthLayout> ,
            children:[
                {
                    path:"/auth/login",
                    element: <Login></Login>
                },
                {
                    path:"/auth/register",
                    element: <Register></Register>
                },
            ]
        },
        {
            path:"/*",
            element: <h2>Error 404</h2>
        },
       
    ]
);
export default router;