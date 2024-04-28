import { useLoaderData } from "react-router-dom";

import ArtTable from "./ArtTable";


const Art = () => {
    const carfts = useLoaderData()
    return (
        <div className=" container mx-auto ">
    {
    carfts.map(carft => <ArtTable key={carft._id} carft={carft}></ArtTable>)
     }
        </div>
    );
};

export default Art;