
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 


const CarftDetails = ({ category }) => {
    const { _id, item, image, } = category;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl shadow-yellow-300/25 mb-4">
                <figure><img src={image} alt="" className="w-full h-[200px] " /></figure>
                <div className="card-body">
                    <h2 className="card-title">{item.slice(0,25)}</h2> 
                   
                
                    <div className="card-actions">
                        <Link to={`/carftdetails/${_id}`}>
                            <button className="pt-2 pb-2 pl-6 pr-6 bg-[#FFE100] text-black rounded-md font-bold">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Define PropTypes for the CarftDetails component
CarftDetails.propTypes = {
    category: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        item: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        processing: PropTypes.string.isRequired,


       
        image: PropTypes.string.isRequired
    }).isRequired
};

export default CarftDetails;
