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
import AllArtItemCategory from "../AllArtItem/AllArtItemCategory";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: ()=> fetch('https://exame-10-server.vercel.app/carft')
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
          loader: ()=> fetch('https://exame-10-server.vercel.app/carft')
        },
        {
          path: '/addcraft',
          element: <PrivateRoute><AddCraft></AddCraft></PrivateRoute>
        },
        {
          path: '/carftdetails/:id',
          element: <PrivateRoute><ViewCarftDetails></ViewCarftDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://exame-10-server.vercel.app/carft/${params.id}`)
        },
        {
          path: '/artlist',
          element: <PrivateRoute><ArtList></ArtList></PrivateRoute>
        },
        {
          path: '/updatecarft/:id',
          element: <PrivateRoute><UpdateCarft></UpdateCarft></PrivateRoute>,
          loader: ({params}) => fetch(`https://exame-10-server.vercel.app/carft/${params.id} `)
          
        },
        {
          path: '/craftlist',
          element: <MyArtListRoute></MyArtListRoute>
        },

        {
          path: '/allcategory',
         element: <AllArtItemCategory></AllArtItemCategory>,
         loader: () => fetch('https://exame-10-server.vercel.app/craftlist/ ')
        }
      ]
    },
  ]);

  export default router