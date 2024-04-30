import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";


const UpdateCarft = () => {

    const updatecraftItem = useLoaderData()
 const   {_id, item, description, image,price,rating,processing ,customization,stockStatus,subcategory,} = updatecraftItem ;



  // update craft item

  const handelUpdateCraft = event => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const item = form.item.value;
    const subcategory = form.subcategory.value;
    const description = form.description.value;
    const price = form.price.value; // Corrected name attribute
    const rating = form.rating.value;
    const customization = form.customization.value;
    const stockStatus = form.stockStatus.value;
    const processing = form.processing.value; // Corrected case
 

    const updateCarft = { image, item, subcategory, description, price, rating, customization, stockStatus, processing,  };
    console.log(updateCarft);

    // send data to the server on backend

    fetch(`https://exame-10-server.vercel.app/carft/${_id} `,{
        method: 'PUT',
        headers:{
            "content-type": 'application/json'
        },
        body: JSON.stringify(updateCarft)
    })
    .then(res => res.json())
    .then(data => {
        
        console.log(data)
        if(data. modifiedCount ){
            toast.success('Craft Update Successfully')
        }
    })
};

    return (
        <div>
            <h1 className="text-center font-semibold mt-10 text-2xl">Update : <span className="text-2xl text-yellow-600">{updatecraftItem.item} </span> </h1>
            <div className="mt-10 mb-10 container mx-auto ">
            <form onSubmit={handelUpdateCraft}>
                <div className="justify-center text-center">
                    <div>
                        <input type="text" defaultValue={image} name="image" placeholder="Image Url" className="input mb-2 input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div>
                        <input type="text" defaultValue={item} name="item" placeholder="Item Name" className="input mb-2 input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div>
                        <select name="subcategory" defaultValue={subcategory} className="select select-warning w-full mb-2 max-w-xs">
                            <option disabled selected value="">Subcategory Name</option>
                            <option>Landscape Painting</option>
                            <option>Portrait Drawing</option>
                            <option>Watercolour Painting</option>
                            <option>Oil Painting</option>
                            <option> Charcoal Sketching</option>
                            <option>Cartoon Drawing</option>

                        </select>
                    </div>
                    <div>
                        <input type="text" defaultValue={description} name="description" placeholder="Short Description" className="input mb-2  input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div>
                        <input type="tex" defaultValue={price} name="price" placeholder="Price" className="input mb-2 input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div>
                        <input type="text" defaultValue={rating} name="rating" placeholder="Rating" className="input mb-2 input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div>
                        <select name="customization" defaultValue={customization} className="select mb-2 select-warning w-full max-w-xs">
                            <option disabled selected value="">Customization</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" defaultValue={processing} name="processing" placeholder="Processing Time" className="input mb-2 input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div>
                        <select name="stockStatus" defaultValue={stockStatus} className="select mb-2 select-warning w-full max-w-xs">
                            <option disabled selected value="">StockStatus</option>
                            <option>In Stock</option>
                            <option>Made To Order</option>
                        </select>
                    </div>
                    
                  
                    <button type="submit" className="btn btn-warning w-1/3">Update</button>
                </div>
            </form>
            <Toaster></Toaster>
        </div>
        </div>
    );
};

export default UpdateCarft;