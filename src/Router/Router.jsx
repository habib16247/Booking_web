import { createBrowserRouter } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import Home from "../Pages/Home/Home";
import Faccilities from "../Pages/Facilities/Faccilities";
import ToursPage from "../Pages/ToursPage/ToursPage";
import Destination from "../Pages/Destination/Destination";
import Page from "../Pages/Page/Page";
import News from "../Pages/News/News";
import Contact from "../Pages/Contact/Contact";
import Registration2 from './../Pages/Auth/Registration/Registration2';
import SignIn from './../Pages/Auth/SignIn/SignIn';


const Router = createBrowserRouter([{
    path: "/",
    element: <MainPage/>,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/facilities",
            element: <Faccilities />
        },
        {
            path: "/tours",
            element: <ToursPage />
        },
        {
            path: "/destination",
            element: <Destination />
        },
        {
            path: "/page",
            element: <Page />
        },
        {
            path: "/news",
            element: <News />
        },
        {
            path: "/contact",
            element: <Contact />
        }
    ]
},

{
    path: "/signup2",
    element: <Registration2 />
},
{
    path: "/signin",
    element: <SignIn/>
}


])

export default Router;