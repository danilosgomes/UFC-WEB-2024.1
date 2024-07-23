import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home"
import Criar from "./Professor/Criar";
import Editar from "./Professor/Editar";
import Listar from "./Professor/Listar";

const router = createBrowserRouter(
    [
        {
            path:"/", element: <Home />,
            children: [
                {
                    path:"Professor/Listar", element: <Listar/>         
                },
                {
                    path:"Professor/Criar", element: <Criar/>         
                },
                {
                    path:"Professor/Ediar", element: <Editar/>         
                }
                
            ]
        }
    ]
)