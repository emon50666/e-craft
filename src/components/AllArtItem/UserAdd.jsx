import PropTypes from 'prop-types';
import UserAddDetails from "./UserAddDetails";
import { Slide} from "react-awesome-reveal";
const UserAdd = ({ adduser }) => {
   

   
    return (
        <div>
            <Slide delay={300}>
            <h1 className='text-center font-bold mt-5 mb-10 text-3xl font-serif'>Craft items section</h1>
            </Slide>
            <Slide direction={'right'} delay={300}>
            <div className="grid md:grid-cols-3 gap-5 container mx-auto">
                
                {
                    
                    adduser.slice(0, 6).map(carft => <UserAddDetails key={carft._id} carft={carft}></UserAddDetails>)
                }
            </div>
            </Slide>
        </div>
    );
};

UserAdd.propTypes = {
    adduser: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired, 
    })).isRequired
};

export default UserAdd;
