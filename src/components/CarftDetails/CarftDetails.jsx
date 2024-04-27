
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; // Import PropTypes from 'prop-types'

const CarftDetails = ({ carft }) => {
    const { _id, item, description, image } = carft;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl mb-4">
                <figure><img src={image} alt="" className="w-full h-[200px] " /></figure>
                <div className="card-body">
                    <h2 className="card-title">{item.slice(0,25)}</h2> {/* Use the 'item' prop for the card title */}
                    <p>{description.slice(0,60)}</p> {/* Use the 'description' prop for the card content */}
                    <div className="card-actions">
                        <Link to={`/carftdetails/${_id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Define PropTypes for the CarftDetails component
CarftDetails.propTypes = {
    carft: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        item: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
       
        image: PropTypes.string.isRequired
    }).isRequired
};

export default CarftDetails;
