import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Component/Layout/Layout.jsx";
import ErrorPage from "./Component/Layout/ErrorPage.jsx";
import AddProduct from "./Component/Pages/AddToCart/AddProduct";
import Home from "././Component/Pages/Home/Home";
import Login from "./Component/Pages/LogInPage/Login";
import Register from "./Component/Pages/Register/Register";
import AuthProvider from "./Component/AuthProvider/AuthProvider";
import AddToCart from "./Component/Pages/AddToCart/AddToCart";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Bmw from "./Component/BrandPages/BMW/Bmw";
import Ford from "./Component/BrandPages/Ford/Ford";
import Porsche from "./Component/BrandPages/Porsche/Porsche";
import Lamborghini from "./Component/BrandPages/Lamborghini/Lamborghini";
import Benz from "./Component/BrandPages/Benz/Benz";
import Tesla from "./Component/BrandPages/Tesla/Tesla";
import UpdateProduct from "./Component/Pages/AddToCart/UpdateProduct";
import ProductDetails from "./Component/ProductDetails/ProductDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/addToCart",
        element:<PrivateRoute><AddToCart></AddToCart></PrivateRoute>,
        loader: () => fetch("http://localhost:5000/cart"),

        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/automotive/${params.id}`),
      },
      {
        path: "/logIn",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/bmw",
        element: <Bmw></Bmw>,
        loader: () => fetch("http://localhost:5000/automotive"),
      },
      {
        path: "/ford",
        element: <Ford></Ford>,
        loader: () => fetch("http://localhost:5000/automotive"),
      },
      {
        path: "/porsche",
        element: <Porsche></Porsche>,
        loader: () => fetch("http://localhost:5000/automotive"),
      },
      {
        path: "/lamborghini",
        element: <Lamborghini></Lamborghini>,
        loader: () => fetch("http://localhost:5000/automotive"),
      },
      {
        path: "/benz",
        element: <Benz></Benz>,
        loader: () => fetch("http://localhost:5000/automotive"),
      },
      {
        path: "/tesla",
        element: <Tesla></Tesla>,
        loader: () => fetch("http://localhost:5000/automotive"),
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/automotive/${params.id}`),
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/automotive/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
