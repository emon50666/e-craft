
const UpdateCarft = () => {
    return (
        <div>
            <h1 className="text-center font-semibold mt-10 text-3xl">Update Craft item</h1>
            <div className="mt-10 mb-10 container mx-auto ">
            <form>
                <div className="justify-center text-center">
                    <div>
                        <input type="text" name="image" placeholder="Image Url" className="input mb-2 input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div>
                        <input type="text" name="item" placeholder="Item Name" className="input mb-2 input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div>
                        <select name="subcategory" className="select select-warning w-full mb-2 max-w-xs">
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
                        <input type="text" name="description" placeholder="Short Description" className="input mb-2  input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div>
                        <input type="tex" name="price" placeholder="Price" className="input mb-2 input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div>
                        <input type="text" name="rating" placeholder="Rating" className="input mb-2 input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div>
                        <select name="customization" className="select mb-2 select-warning w-full max-w-xs">
                            <option disabled selected value="">Customization</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" name="processing" placeholder="Processing Time" className="input mb-2 input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div>
                        <select name="stockStatus" className="select mb-2 select-warning w-full max-w-xs">
                            <option disabled selected value="">StockStatus</option>
                            <option>In Stock</option>
                            <option>Made To Order</option>
                        </select>
                    </div>
                    
                  
                    <button type="submit" className="btn btn-warning w-1/3">Add</button>
                </div>
            </form>
          
        </div>
        </div>
    );
};

export default UpdateCarft;