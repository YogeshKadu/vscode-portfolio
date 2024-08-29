import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import Instruction from "../pages/Instruction";
import Contact from "../pages/Contact";
import Technologies from "../pages/Technologies";
import NotFound from "../pages/NotFound";
import Experience from "../pages/Experience";
import Settings from "../pages/Settings";
import MarkdownEditor from "../pages/Markdown/MarkdownEditor";
import Codepen from "../pages/Codepen";
const routes = createBrowserRouter([
    {
        path:"/",
        element:<Layout />,
        children:[
            {
                index:true,
                element:<Home />
            },
            {
                path:"instruction",
                element:<Instruction />
            },
            {
                path:"profile",
                element:<MarkdownEditor />
            },
            {
                path:"codepen",
                element:<Codepen />
            },
            {
                path:"contact",
                element:<Contact />
            },
            {
                path:"experience",
                element:<Experience />
            },
            {
                path:"technologies",
                element:<Technologies />
            },
            {
                path:"settings",
                element:<Settings />
            },
            {
                path:"*",
                element:<NotFound />
            },
        ]
    }
])

export default routes;