import {
    createBrowserRouter,

  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../HomePage/Home";
import Register from './../Login/Register/Register';
import Login from "../Login/Register/Login";
import Art from "../AllArtItem/Art";
import AddCraft from "../AddCraft/AddCraft";
import ArtList from "../MyArtList/ArtList";
import Error from "../../404/Error";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/art',
          element: <Art></Art>
        },
        {
          path: '/addcraft',
          element: <PrivateRoute><AddCraft></AddCraft></PrivateRoute>
        },
        {
          path: '/artlist',
          element: <PrivateRoute><ArtList></ArtList></PrivateRoute>
        }
      ]
    },
  ]);

  export default router