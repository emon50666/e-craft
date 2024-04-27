

const AddCraft = () => {
    const handelAddCraft = event => {
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
        const email = form.email.value;
        const username = form.username.value;

        const newCarft = { image, item, subcategory, description, price, rating, customization, stockStatus, processing, email, username };
        console.log(newCarft);

        // send data to the server on backend

        fetch('http://localhost:5000/carft',{
            method: 'POST',
            headers:{
                "content-type": 'application/json'
            },
            body: JSON.stringify(newCarft)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    };

    return (
        <div className="mt-10 mb-10 container mx-auto ">
            <form onSubmit={handelAddCraft}>
                <div className="justify-center text-center">
                    <div>
                        <input type="text" name="image" placeholder="Image Url" className="input mb-2 input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div>
                        <input type="text" name="item" placeholder="Item Name" className="input mb-2 input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div>
                        <select name="subcategory" className="select select-warning w-full mb-2 max-w-xs">
                            <option disabled selected value="">Pick a pizza</option>
                            <option>Cheese</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" name="description" placeholder="Short Description" className="input mb-2  input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div>
                        <input type="number" name="price" placeholder="Price" className="input mb-2 input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div>
                        <input type="number" name="rating" placeholder="Rating" className="input mb-2 input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div>
                        <select name="customization" className="select mb-2 select-warning w-full max-w-xs">
                            <option disabled selected value="">Customization</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                    <div>
                        <select name="stockStatus" className="select mb-2 select-warning w-full max-w-xs">
                            <option disabled selected value="">StockStatus</option>
                            <option>In Stock</option>
                            <option>Made To Order</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" name="processing" placeholder="Processing Time" className="input mb-2 input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div>
                        <input type="text" name="email" placeholder="User Email" className="input mb-2 input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div>
                        <input type="text" name="username" placeholder="User Name" className="input mb-2  input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <button type="submit" className="btn btn-warning w-1/3">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddCraft;
