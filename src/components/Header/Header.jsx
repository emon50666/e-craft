import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import { Tooltip } from 'react-tooltip'
const Header = () => {




  const [theme,setTheme] = useState("light")
  const handelTheme = (e) =>{
      if(e.target.checked){
          setTheme('dark')
      }else{
          setTheme('light')
      }
  }


  useEffect(()=> {
    localStorage.setItem('theme',theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme',localTheme)
 },[theme])




  const {user,logOutUser} = useContext(AuthContext)




    return (
        <div className="md:px-5 bg-[#010632] z-50 ">
        <div className="navbar  z-50">
<div className="navbar-start">
<div className="dropdown">
  <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
  </div>
  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 gap-5 z-[1] p-2 shadow bg-[#010632]  rounded-box w-52">

  <NavLink to={'/'}  className=  {({isActive}) => isActive ? 'text-[#FFE100] font-black ' : 'text-gray-300'   }   > <li>Home</li> </NavLink>

<NavLink to={'/art'}   data-tooltip-id="my-tooltip" data-tooltip-content="Hello world!" data-tooltip-place="top" className=  {({isActive}) => isActive ? 'text-[#FFE100] font-black my-anchor-element ' : 'text-gray-300'   }   > <li>All Art & craft Items</li> </NavLink>

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

<NavLink to={'/'}  data-tooltip-id="my-tooltip"  data-tooltip-content="Home"   data-tooltip-place="top" className=  {({isActive}) => isActive ? 'text-[#FFE100] font-black  my-anchor-element ' : 'text-gray-300'   }   > <li>Home</li> </NavLink>

<NavLink to={'/art'}   data-tooltip-id="my-tooltip" data-tooltip-content="All Art & craft Items"   data-tooltip-place="top" className=  {({isActive}) => isActive ? 'text-[#FFE100] font-black my-anchor-element  ' : 'text-gray-300'   }   > <li>All Art & craft Items</li> </NavLink>

<NavLink to={'/addcraft'} data-tooltip-id="my-tooltip" data-tooltip-content="Add Craft Item"   data-tooltip-place="top"   className=  {({isActive}) => isActive ? 'text-[#FFE100] font-black my-anchor-element ' : 'text-gray-300'   }   > <li>Add Craft Item</li> </NavLink>
<NavLink to={'/artlist'} data-tooltip-id="my-tooltip" data-tooltip-content="My Art & Craft List"   data-tooltip-place="top"   className=  {({isActive}) => isActive ? 'text-[#FFE100] font-black my-anchor-element ' : 'text-gray-300'   }   > <li>My Art & Craft List</li> </NavLink>

<NavLink to={'/login'} data-tooltip-id="my-tooltip" data-tooltip-content="SignIn"   data-tooltip-place="top"  className=  {({isActive}) => isActive ? 'text-[#FFE100] font-black my-anchor-element ' : 'text-gray-300'}  > <li>SignIn</li> </NavLink>
<NavLink to={'/register'} data-tooltip-id="my-tooltip" data-tooltip-content="SignUp"   data-tooltip-place="top"   className=  {({isActive}) => isActive ? 'text-[#FFE100] font-black my-anchor-element ' :  'text-gray-300' }  > <li>SignUp</li> </NavLink>
  

   
   
</ul>
</div>
<label className="cursor-pointer kalo  md:mr-3 grid place-items-center">
  <input type="checkbox" onClick={handelTheme} value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
<div>
{/* <button className="bg-[#FFE100] buton mr-4 text-white rounded-lg pt-2 pb-2 pr-8 pl-8 font-bold ">LogOut</button> */}
</div>

{
    user ? <div className="dropdown dropdown-end  pik">
    <div tabIndex={0} role="button" className="buton btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full border ">
       {
        user && user.photoURL ? (
          <img referrerPolicy="no-referrer" src={user.photoURL}  />
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
<Tooltip id="my-tooltip" />
    </div>
    );
};

export default Header;