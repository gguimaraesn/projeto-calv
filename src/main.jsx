import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root.jsx'
import Home from './routes/Home.jsx'
import Register from './routes/Register.jsx'
import Aprendizado from './routes/Aprendizado.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/quem-somos",
        element: <Home />,
      },
      {
        path: "/aprendizado",
        element: <Aprendizado />,
      },
      {
        path: "/premium",
        element: <Home />,
      },
      {
        path: "/categorias",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
