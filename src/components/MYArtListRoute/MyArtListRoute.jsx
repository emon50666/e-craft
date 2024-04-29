import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";



const MyArtListRoute = ({carftitem}) => {
    const {  item, image,price,rating,customization,stockStatus }= carftitem;
    return (
        <div className="">
             <div className="card bg-base-100 shadow-xl shadow-blue-300/25 mb-4 mt-10">
            <figure><img src={image} alt="" className="w-full h-[200px] " /></figure>
            <div className="card-body bg-[#F7FAE7] text-black rounded-b-xl ">
                <h2 className="card-title">{item}</h2> 
               
                <div className="flex">
                    <p className="flex gap-1 items-center"> <GoDotFill></GoDotFill> {price.slice(0,6)} </p>
                    <p className="flex gap-1 items-center"> <GoDotFill></GoDotFill> {rating} </p>
                    <p className="flex gap-1 items-center"> <GoDotFill></GoDotFill> {customization} </p>
                    <p className="flex gap-1 items-center"> <GoDotFill></GoDotFill> {stockStatus} </p>


                </div>
                <div className="card-actions flex gap-3">
                        <Link to={'/updatecarft'}><button className="pt-2 pb-2 pl-3 pr-3 bg-[#120D5D] text-white rounded-md font-bold">Update</button></Link>
                        <button className="pt-2 pb-2 pl-3 pr-3 bg-[#120D5D] text-white rounded-md font-bold">Delete</button>
                        

                </div>
            </div>
        </div>
        </div>
    );
};

export default MyArtListRoute;