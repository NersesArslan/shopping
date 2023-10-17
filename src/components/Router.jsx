import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import Shopping from "./Shopping";
import Navbar from "./Navbar";
import Cart from "./Cart";
import Home from "./Home";
import { useState, useEffect } from "react";
export default function Router() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

 

  useEffect(() => {
      fetch('https://fakestoreapi.com/products')
          .then(res=>res.json())      
          .then(json=> setData(json))       
          .catch((error) => setError(error))
          .finally(() => setLoading(false));
  },[])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        { path: "shopping", element: <Shopping data={data} /> },
        { path: "cart", element: <Cart /> },
      ]
    },
   
  ]);
  return <RouterProvider router={router} />

}

