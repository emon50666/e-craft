

import { GoDotFill } from "react-icons/go";
import { useLoaderData, useParams } from "react-router-dom";



const ViewCarftDetails = () => {

    const carfts = useLoaderData()
    
    const {id} = useParams()
    const idNumber = parseInt(id);
    const carft = carfts.find(c => c.id === idNumber);
  
    const { item, description, image,price,rating,processing } = carft;


   

   
  

    return (
        <div>
           <div className="card bg-base-100 shadow-xl shadow-yellow-300/25 mb-4">
                <figure><img src={image} alt="" className="w-full h-[200px] " /></figure>
                <div className="card-body">
                    <h2 className="card-title">{item.slice(0,25)}</h2> 
                    <p className="text-gray-500">{description.slice(0,60)}</p> 
                    <div className="flex">
                        <p className="flex gap-1 items-center"> <GoDotFill></GoDotFill> {price.slice(0,6)} </p>
                        <p className="flex gap-1 items-center"> <GoDotFill></GoDotFill> {rating.slice(0,6)} </p>
                        <p className="flex gap-1 items-center"> <GoDotFill></GoDotFill> {processing} </p>

                    </div>
                
                </div>
            </div>
        </div>
    );
};

export default ViewCarftDetails;