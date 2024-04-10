import DiaryPage from "../pages/DiaryPage";
import TopPage from "../pages/TopPage";
import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from "../components/authRoute";

import LayoutPage from "../pages/Layout";
import FavoritePage from "../pages/FavoritePage";
import TimelinePage from "../pages/TimelinePage";
import AboutSitePage from "../pages/AboutSitePage";
import LoadingPage from "../pages/LoadingPage";

const router=createBrowserRouter(
    [{
        path:"/",
        element:<LayoutPage />
    },
    {
        path:"/diary",
        element:<AuthRoute><LayoutPage /></AuthRoute>,
        children:[
         
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
    },
    {
        path:"/verifyfail",
        element:<AboutSitePage />

    },
    {
        path:"/loading/:temptoken",
        element:<LoadingPage />

    },



    ]


)

export default router;