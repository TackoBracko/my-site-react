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
import BlogHome from "./pages/Blog/BlogHome";
import SinglePost from "./pages/Blog/SinglePost";

import { GlobalStyles } from "./Styles/GlobalStyle";
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import Layout from "./components/Layout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />,
  
  },

  {
    path:"about",
    element: <About title="So, Who am I" />
  },

  {
    path: "portfolio",
    element: <Portfolio title="PORTFOLIO" />
  },

  {
    path:"contact",
    element: <Contact title="Contact" />
  },

  {
    path:"blog",
    element: <BlogHome />
  },

  {
    path: "singlepost",
    element: <SinglePost />
  }
])


function App() {
  return (
    <React.StrictMode>
      <GlobalStyles />
      <NavBar />
      <Layout>
        <RouterProvider router={router} />
      </Layout>
      <Footer />
    </React.StrictMode>

  )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(
<App />
)
