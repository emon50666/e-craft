import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Header = () => {

  const {user,logOutUser} = useContext(AuthContext)




    return (
        <div className="md:px-5 bg-[#010632] ">
        <div className="navbar">
<div className="navbar-start">
<div className="dropdown">
  <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
  </div>
  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 gap-5 z-[1] p-2 shadow bg-[#010632]  rounded-box w-52">

  <NavLink to={'/'}  className=  {({isActive}) => isActive ? 'text-[#FFE100] font-black ' : 'text-gray-300'   }   > <li>Home</li> </NavLink>

<NavLink to={'/art'}  className=  {({isActive}) => isActive ? 'text-[#FFE100] font-black ' : 'text-gray-300'   }   > <li>All Art & craft Items</li> </NavLink>

<NavLink to={'/addcraft'}  className=  {({isActive}) => isActive ? 'text-[#FFE100] font-black ' : 'text-gray-300'   }   > <li>Add Craft Item</li> </NavLink>
<NavLink to={'/artlist'}  className=  {({isActive}) => isActive ? 'text-[#FFE100] font-black ' : 'text-gray-300'   }   > <li>My Art & Craft List</li> </NavLink>

<NavLink to={'/login'}  className=  {({isActive}) => isActive ? 'text-[#FFE100] font-black  ' : 'text-gray-300'}  > <li>SignIn</li> </NavLink>
<NavLink to={'/register'}  className=  {({isActive}) => isActive ? 'text-[#FFE100] font-black ' :  'text-gray-300' }  > <li>SignUp</li> </NavLink>
 
 
 
 

  </ul>
</div>
<div className="font-bold font-serif text-[20px] md:text-3xl logo ">
<Link> <h2 className="gap-0 text-[#FFE100] ">E-Craft </h2> </Link>
</div>
</div>
<div className="navbar-center hidden lg:flex">
<ul className="menu menu-horizontal px-1 gap-7 mr-10">

<NavLink to={'/'}  className=  {({isActive}) => isActive ? 'text-[#FFE100] font-black ' : 'text-gray-300'   }   > <li>Home</li> </NavLink>

<NavLink to={'/art'}  className=  {({isActive}) => isActive ? 'text-[#FFE100] font-black ' : 'text-gray-300'   }   > <li>All Art & craft Items</li> </NavLink>

<NavLink to={'/addcraft'}  className=  {({isActive}) => isActive ? 'text-[#FFE100] font-black ' : 'text-gray-300'   }   > <li>Add Craft Item</li> </NavLink>
<NavLink to={'/artlist'}  className=  {({isActive}) => isActive ? 'text-[#FFE100] font-black ' : 'text-gray-300'   }   > <li>My Art & Craft List</li> </NavLink>

<NavLink to={'/login'}  className=  {({isActive}) => isActive ? 'text-[#FFE100] font-black  ' : 'text-gray-300'}  > <li>SignIn</li> </NavLink>
<NavLink to={'/register'}  className=  {({isActive}) => isActive ? 'text-[#FFE100] font-black ' :  'text-gray-300' }  > <li>SignUp</li> </NavLink>
  

   
   
</ul>
</div>
<div>
{/* <button className="bg-[#FFE100] buton mr-4 text-white rounded-lg pt-2 pb-2 pr-8 pl-8 font-bold ">LogOut</button> */}
</div>

{
    user ? <div className="dropdown dropdown-end  pik">
    <div tabIndex={0} role="button" className="buton btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full border ">
       {
        user && user.photoURL ? (
          <img src={user.photoURL}  />
        ) : (
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfhfRCjTlu-H5p0BfBD_GI6QopG5FIKVPYg&s" alt="Default Profile" />
        )
       }
       
      </div>
    </div>
    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
      <li>
       {user &&  <h4 className="font-semibold capitalize hover:bg-white"> {user.displayName} </h4>}
      


      </li>
     <Link to={'/login'}> <button onClick={()=> logOutUser()}  className="bg-[#FFE100]  mr-4 text-black rounded-lg pt-2 pb-2 pr-8 pl-8 font-bold ">LogOut</button></Link>
    
    </ul>
      
  </div> :

''
   }
</div>
    </div>
    );
};

export default Header;