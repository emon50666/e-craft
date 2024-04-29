import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 

const ArtTable = ({carft}) => {
    const {_id,  item, image,price,rating,stockStatus,username ,subcategory} = carft;
    return (
        <div className="mt-10 mb-10">
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>SubCategory & StockStatus</th>
        <th>Price</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{item} </div>
              <div className="text-sm opacity-100">{username} </div>
            </div>
          </div>
        </td>
        <td>
         {subcategory}
          <br/>
          <span className="badge badge-ghost badge-sm">{stockStatus}</span>
        </td>
        
        <td>{price} </td>
        <td>{rating} </td>

        <th>
        <Link to={`/carftdetails/${_id}`}>
                            <button className="pt-2 pb-2 pl-4 pr-4 border text-black rounded-md font-bold">View Details</button>
                        </Link>
        </th>
      </tr>
     
    </tbody>
    {/* foot */}
    
    
  </table>
</div>
        </div>
    );
};



ArtTable.propTypes = {
    carft: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        item: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        stockStatus: PropTypes.string.isRequired,
        subcategory: PropTypes.string.isRequired,



       
        image: PropTypes.string.isRequired
    }).isRequired
};


export default ArtTable;