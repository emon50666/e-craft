import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


import MyArtListRoute from "../MYArtListRoute/MyArtListRoute";


const ArtList = () => {
    const {user} = useContext(AuthContext)
    const [lists,setList] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/craftlist/${user?.email}`)
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            setList(data) 
        })
    },[user])
    return (
        <div className="grid md:grid-cols-3  container mx-auto">
            {
    lists.map(carft => <MyArtListRoute key={carft._id} carftitem={carft}></MyArtListRoute>)
     }
        </div>
    );
};

export default ArtList;