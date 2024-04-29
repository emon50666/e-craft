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
import ViewCarftDetails from "../ViewCarftDetails/ViewCarftDetails";
import UpdateCarft from "../UpdateCarft/UpdateCarft";
import MyArtListRoute from "../MYArtListRoute/MyArtListRoute";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: ()=> fetch('http://localhost:5000/carft')
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
          element: <Art></Art>,
          loader: ()=> fetch('http://localhost:5000/carft')
        },
        {
          path: '/addcraft',
          element: <PrivateRoute><AddCraft></AddCraft></PrivateRoute>
        },
        {
          path: '/carftdetails/:id',
          element: <PrivateRoute><ViewCarftDetails></ViewCarftDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/carft/${params.id}`)
        },
        {
          path: '/artlist',
          element: <PrivateRoute><ArtList></ArtList></PrivateRoute>
        },
        {
          path: '/updatecarft/:id',
          element: <UpdateCarft></UpdateCarft>,
          loader: ({params}) => fetch(`http://localhost:5000/carft/${params.id} `)
          
        },
        {
          path: '/craftlist',
          element: <MyArtListRoute></MyArtListRoute>
        }
      ]
    },
  ]);

  export default router