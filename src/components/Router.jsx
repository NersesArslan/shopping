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
export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { path: "shopping", element: <Shopping /> },
        { path: "cart", element: <Cart /> },
      ]
    },
   
  ]);
  return <RouterProvider router={router} />

}

