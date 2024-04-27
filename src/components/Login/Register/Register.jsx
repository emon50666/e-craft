
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";


import toast, { Toaster } from 'react-hot-toast';





const Register = () => {
const {registerUser,error,setError} = useContext(AuthContext)


const handelSignup = e =>{

    

    e.preventDefault();
    const form = e.target
    const name =  form.name.value
    const email =  form.email.value
    const image =  form.image.value
    const password =  form.password.value
 
    console.log(name,email,image,password)

    setError('')

    if(password.length <6){
        setError('place 6 digit password');
        return;
        
    }
      if(!/[A-Z]/.test(password) ){
        setError('Give an uppercase &  Lowercase Letter (a,A)');
        return;
       }
       if(!/[a-z]/.test(password) ){
        setError('Give an uppercase & Lowercase  Letter (a,A)');
        return;
       }




    registerUser(email,password)

    .then(result =>{
        toast.success('Account Create Successfully')
        console.log(result.user)
          // update profile
          updateProfile(result.user,{
            displayName: name,
            photoURL: image
        })
    })
    .catch(error =>{
        console.log(error.message)
    })
   


}


    return (
        <div className="bg-gray-100 md:p-20">
        <div className="container mx-auto mb-20 ">
       <h1 className="text-3xl text-center font-bold font-serif mb-5 pt-10">Register Now</h1>
       <div className="card shrink-0 w-full max-w-sm shadow-2xl border-b-4 border-yellow-400 shadow-gray-300 -300/50 justify-center mx-auto">
 <form onSubmit={handelSignup} className="card-body">
 <div className="form-control">
     <label className="label">
       
     </label>
     <input  name="name"  type="name" placeholder="Name" className="input input-bordered" required  />
   </div>
   <div className="form-control">
    
     <input name="email"  type="email" placeholder="Email" className="input input-bordered" required  />
    
   </div>
   <div className="form-control">
   
     <input name="image"  type="photo" placeholder="Photo url" className="input input-bordered" 
     
   
     />
   </div>
   <div className="form-control ">
   
    <div className="flex">
    <input name="password"  type="password" placeholder="Password" className="input input-bordered w-full" required
     />
 
    </div>
   </div>
  <div className="form-control mt-2 mb-2 ">
   <button   className="btn bg-[#FFE100] hover:bg-black text-black hover:text-white font-bold text-base font-serif ">Register</button>
 </div> 
 
   <p className="text-sm flex text-center mx-auto gap-2"> All Ready Have A Account ? <Link to={'/login'}> <p className="font-serif text-sm  underline underline-offset-2 text-[#5c2eff] ">Login</p></Link> </p>
  

   {
        error && <p className="text-red-500  font-sm mt-2 mb-5 text-center ">{error}</p>
      }

 </form>
 
  
</div>
<Toaster />
   </div>

   </div>
    );
};

export default Register;