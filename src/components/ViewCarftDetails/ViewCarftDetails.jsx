

import { GoDotFill } from "react-icons/go";
import { useLoaderData } from "react-router-dom";




const ViewCarftDetails = () => {

    const carfts = useLoaderData()

   
  
    const { item, description, image,price,rating,processing ,customization,stockStatus,subcategory,_id,email,username} = carfts;


   

   
  

    return (
        <div className="container mx-auto mt-10">
           <div className="card bg-base-100 shadow-xl shadow-yellow-300/25 mb-4">
                <figure><img src={image} alt="" className="w-full md:h-[400px] " /></figure>
                <div className="card-body">
                   <div className="md:flex justify-between">
                   <h2 className="card-title  text-3xl">{item}</h2> 
                   <h2 className=" text-base text-orange-600 ">Id: {_id}</h2> 

                   </div>
                    <p className="text-gray-500">{description}</p> 
                    <div className="md:flex text-center">
                        <p className="flex gap-1 items-center"> <GoDotFill></GoDotFill> {price.slice(0,6)} </p>
                        <p className="flex gap-1 items-center"> <GoDotFill></GoDotFill> {rating.slice(0,6)} </p>
                        <p className="flex gap-1 items-center"> <GoDotFill></GoDotFill> {processing} </p>
                        <p className="flex gap-1 items-center"> <GoDotFill></GoDotFill> {customization} </p>
                        <p className="flex gap-1 items-center"> <GoDotFill></GoDotFill> {stockStatus} </p>
                        <p className="flex gap-1 items-center"> <GoDotFill></GoDotFill> {subcategory} </p>
                    </div>
                    <div className="border-t border-dashed">
                        <li> {email} </li>
                        <li> {username} </li>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCarftDetails;