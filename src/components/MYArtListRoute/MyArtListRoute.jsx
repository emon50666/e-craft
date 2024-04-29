
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import PropTypes from 'prop-types'; 

const MyArtListRoute = (props) => {
    console.log(props)
const {carftitem,lists,setList} = props;

   

    const { _id, item, image,price,rating,customization,stockStatus }= carftitem;


    // delete craft item
    const handelDelete = _id =>{
        console.log('delete id',_id)


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete Craft!"
          }).then((result) => {
            if (result.isConfirmed) {
          

            console.log('delete confram')

            fetch(`http://localhost:5000/carft/${_id} `,{
                method: "DELETE",

            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                if(data.deletedCount > 0){
                Swal.fire({
                title: "Deleted!",
                text: "Your Craft has been deleted.",
                icon: "success"
              });
            
                }
                const remaining = lists.filter(list => list._id !== _id);
                setList(remaining)
            })


            }
          });

    }

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
                    <p className="flex gap-1 items-center"> <GoDotFill></GoDotFill> {stockStatus.slice(0,8)} </p>


                </div>
                <div className="card-actions flex gap-3">
                        <Link to={`/updatecarft/${_id} `}><button className="pt-2 pb-2 pl-3 pr-3 bg-[#120D5D] text-white rounded-md font-bold">Update</button></Link>
                        <button onClick={()=>handelDelete(_id)} className="pt-2 pb-2 pl-3 pr-3 bg-[#120D5D] text-white rounded-md font-bold">Delete</button>
                        

                </div>
            </div>
        </div>
        </div>
    );
};



MyArtListRoute.propTypes = {
    carftitem: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        item: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        stockStatus: PropTypes.string.isRequired,
        subcategory: PropTypes.string.isRequired,
        customization: PropTypes.string.isRequired,

        carftitem: PropTypes.string.isRequired,
        lists: PropTypes.string.isRequired,
        setList: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    }).isRequired,
    lists: PropTypes.array.isRequired,
    setList: PropTypes.func.isRequired
};





export default MyArtListRoute;