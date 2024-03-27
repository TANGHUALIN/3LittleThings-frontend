import DiaryPage from "../pages/DiaryPage";
import TopPage from "../pages/TopPage";
import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from "../components/authRoute";

import LayoutPage from "../pages/Layout";
import FavoritePage from "../pages/FavoritePage";
import TimelinePage from "../pages/TimelinePage";
import AboutSitePage from "../pages/AboutSitePage";
const router=createBrowserRouter(
    [{
        path:"/",
        element:<TopPage/>
    },
    {
        path:"/diary",
        element:<AuthRoute><LayoutPage /></AuthRoute>,
        children:[
           {
            path:'',
            element:<DiaryPage />,
           },
           {
            path:'favorite',
            element:<FavoritePage />,
           },
           {
            path:'timeline',
            element:<TimelinePage />,
           }
        ]
    },
    {
        path:"/aboutus",
        element:<AboutSitePage />
    }


    ]


)

export default router;