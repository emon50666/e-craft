
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {

  const { user,loading }= useContext(AuthContext)

   if(loading){
    return (
        <div className="justify-center mx-auto text-center min-h-min">
        <span className="loading loading-dots loading-sm"></span>
    </div>
    );
   }

   if (user) {
    return children;
}
   return <Navigate to={'/login'} />;
   
};


PrivateRoute.propTypes = {
    children: PropTypes.node 
};
export default PrivateRoute;