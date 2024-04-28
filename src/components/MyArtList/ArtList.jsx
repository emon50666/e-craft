import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useFetcher } from "react-router-dom";

import MyArtListRoute from "../MYArtListRoute/MyArtListRoute";


const ArtList = () => {
    const {user} = useContext(AuthContext)
    const [lists,setList] = useState([])
    useFetcher(()=>{
        fetch(`http://localhost:5000/craftlist/${user?.email}`)
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            setList(data)
        })
    },[user])
    return (
        <div>
            {
    lists.map(carft => <MyArtListRoute key={carft._id} carft={carft}></MyArtListRoute>)
     }
        </div>
    );
};

export default ArtList;