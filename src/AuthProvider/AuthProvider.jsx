import {  createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from './../components/firebase/Firebase.config';




export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();


const [user,setUser] = useState(null)
const [error,setError] = useState('')
const [loading,setLoading] = useState(true)





// register user
const registerUser = (email,password) =>{
    setLoading(true)
  return  createUserWithEmailAndPassword(auth,email,password)
}

// login user
const loginUser = (email,password) =>{
   
   
    return signInWithEmailAndPassword(auth,email,password)
}


// google login

const googleLogin = () =>{
    return signInWithPopup(auth,googleProvider)
}

   
// google login

const githubLogin = () =>{
    return signInWithPopup(auth,gitHubProvider)
}




// log out user
const logOutUser = () =>{
   
   
    return signOut(auth)
}




    // on auth state change 
    useEffect(()=>{
        const unsubScribe =  onAuthStateChanged(auth,(user) =>{
            setLoading(false)
            setUser(user)
          } );

          return () =>{
              unsubScribe();
            }
      },[])


    const authInfo = {
        registerUser,
        loginUser,
        user,
        logOutUser,
        error,
        setError,
        googleLogin,
        githubLogin,
        loading
     
        
       
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.object.isRequired 
};

export default AuthProvider;