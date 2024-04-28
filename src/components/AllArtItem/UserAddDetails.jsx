import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 

const UserAddDetails = ({carft}) => {
    const { _id, item, description, image,price,rating,processing } = carft;
    return (
        <div>
        <div className="card bg-base-100 shadow-xl shadow-blue-300/25 mb-4">
            <figure><img src={image} alt="" className="w-full h-[200px] " /></figure>
            <div className="card-body bg-[#F7FAE7] text-black rounded-b-xl ">
                <h2 className="card-title">{item.slice(0,25)}</h2> 
                <p className="text-gray-500">{description.slice(0,60)}</p> 
                <div className="flex">
                    <p className="flex gap-1 items-center"> <GoDotFill></GoDotFill> {price.slice(0,6)} </p>
                    <p className="flex gap-1 items-center"> <GoDotFill></GoDotFill> {rating.slice(0,6)} </p>
                    <p className="flex gap-1 items-center"> <GoDotFill></GoDotFill> {processing} </p>

                </div>
                <div className="card-actions">
                    <Link to={`/carftdetails/${_id}`}>
                        <button className="pt-2 pb-2 pl-6 pr-6 bg-[#120D5D] text-white rounded-md font-bold">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    );
};



UserAddDetails.propTypes = {
    carft: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        item: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        processing: PropTypes.string.isRequired,


       
        image: PropTypes.string.isRequired
    }).isRequired
};



export default UserAddDetails;