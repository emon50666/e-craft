import UserAddDetails from "./UserAddDetails";




const UserAdd = ({adduser}) => {
    console.log(adduser)
   
    return (
        <div>
             <h1 className='text-center font-bold mt-5 mb-10 text-3xl font-serif'> Craft items section</h1>
             <div className="grid md:grid-cols-3 gap-5 container mx-auto">
             {
         adduser.slice(0,6).map(carft => <UserAddDetails key={carft._id} carft={carft}></UserAddDetails>)
            }
             </div>
        </div>
    );
};

export default UserAdd;