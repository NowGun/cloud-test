import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

import Main from "./main/Main";
import Create from "./create/Create";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>
    },
    {
        path: "/create",
        element: <Create/>,
    },
]);

export default function Routing() {
    return (
        <RouterProvider router={router}/>
    );
}