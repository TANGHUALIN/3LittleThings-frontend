import DiaryPage from "../pages/DiaryPage";
import TopPage from "../pages/TopPage";
import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from "../components/AuthRoute";

import LayoutPage from "../pages/Layout";
import FavoritePage from "../pages/FavoritePage";
import TimelinePage from "../pages/TimelinePage";
import AboutSitePage from "../pages/AboutSitePage";
import LoadingPage from "../pages/LoadingPage";
import CorrectPassword from "../pages/CorrectPassword";
import LoadingPage2 from "../pages/LoadingPage2";

const router=createBrowserRouter(
    [{
        path:"/",
        element:<TopPage />
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
        path:"/aboutsite",
        element:<AboutSitePage />
    },
    {
        path:"/loading/:temptoken",
        element:<LoadingPage />

    },
    {
        path:"/loading2/:temptoken",
        element:<LoadingPage2 />

    },
    {
        path:"/changepassword",
        element:<CorrectPassword />

    },



    ]


)

export default router;