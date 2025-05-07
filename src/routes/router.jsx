import { createBrowserRouter } from "react-router"
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/homelayout/Home";
import Bills from "../components/homelayout/Bills";
import BillDetails from "../components/homelayout/BillDetails";
import Footer from "daisyui/components/footer";

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
                    element: <Bills></Bills>
                    
                },
                {
                    path: "/categories/:id",
                    element: <BillDetails></BillDetails>
                },
            ]
        },
        {
            path:"/auth",
            element: <h2>Authentication layout</h2>
        },
        {
            path:"/*",
            element: <h2>Error 404</h2>
        },
       
    ]
);
export default router;