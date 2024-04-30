import { useEffect, useState } from "react";
import CarftDetails from "../CarftDetails/CarftDetails";
import { useParams } from "react-router-dom";



const AllArtItemCategory = () => {
   

 
    const [categorys,setCategorys] = useState([])
const {category} = useParams()

    useEffect(()=>{
        fetch(`https://exame-10-server.vercel.app/craftlist/${category} `)
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            setCategorys(data) 
        })
    },[category])
    return (
        <div>
            {
                categorys.map(category => <CarftDetails key={category._id} category={category} ></CarftDetails>)
            }
        </div>
    );
};

export default AllArtItemCategory;