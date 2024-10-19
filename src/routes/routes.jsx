

import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/home";
import Contact from "../pages/contact";
import About from "../pages/about";
import Product from "../pages/product";
import Layout from "./layout";
import ProductView from "../pages/productView";
import CartPage from "../pages/cart";
import ErrorPage from "../pages/error";

const router = createBrowserRouter([
    {
      path: '/' ,
      element: <Layout  />,
      errorElement: <ErrorPage />,

        children: [
        { 
          index: true, 
          element: <Navigate to="/home" replace />   // This route used to be default route
        },
        {
            path: '/home',
            element: <Home />,
          },
    
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/products',
          element: <Product />,
        },
        {
          path: '/products/:id',
          element: <ProductView />,
        },
        {
            path: '/contact',
            element: <Contact />,
            
          },
          {
            path: '/cart',
            element: <CartPage/>
          }
    
       
   
    
      ]
    },  
    
  
  ])

  export default router;