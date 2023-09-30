import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Shopping from "./Shopping";
import Navbar from "./Navbar";

const Router = () => {
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },

]);


  return <RouterProvider router={router} />

}

export default Router