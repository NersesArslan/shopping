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
  const [cart, setCart] = useState([])


  useEffect(() => {
      fetch('https://fakestoreapi.com/products')
          .then(res=>res.json())      
          .then(json=> setData(json))       
          .catch((error) => setError(error))
          .finally(() => setLoading(false));
  },[cart])

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar cart={cart} />,
      children: [
        { index: true, element: <Home /> },
        { path: "shopping", element: <Shopping data={data} error={error} loading={loading} setCart={setCart} cart={cart}
        /> },
        { path: "cart", element: <Cart cart={cart} setCart={setCart}/> },
      ]
    },
   
  ]);
  return <RouterProvider router={router} />

}

