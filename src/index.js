import React from "react";
import * as  ReactDOM  from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import './index.css'
import ErrorPage from "./error-page";
import Home from './pages/Home'
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import { GlobalStyles } from "./Components/GlobalStyle";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />,
  
  },

  {
    path:"about",
    element: <About />
  },

  {
    path: "portfolio",
    element: <Portfolio />
  },

  {
    path:"contact",
    element: <Contact />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render (
  <React.StrictMode>
    <GlobalStyles />
      <RouterProvider router={router} />
  </React.StrictMode>
)
