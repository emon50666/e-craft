import { Link } from "react-router-dom";
import { FaFacebook,FaGithub ,FaPhoneAlt,FaMapMarkerAlt   } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa6";


const Footer = () => {
    return (
        <div>
        <footer className="footer p-10 bg-black text-gray-400 ">
  <aside>
  <div className="font-bold font-serif text-[20px] md:text-3xl logo ">
<Link> <h2 className="gap-0 text-[#FFE100] ">E-Craft </h2> </Link>
</div>
    <p>Welcome to E-Craft, where <br /> innovation meets craftsmanship.  </p>
   
  </aside> 
  
  
  <nav>
    <h6 className="footer-title">Address</h6> 
  <p className="flex items-center gap-2"> <FaPhoneAlt className="text-yellow-500"></FaPhoneAlt> +8801786397249</p>
  <p className="flex items-center gap-2"> <FaEnvelope className="text-yellow-500"></FaEnvelope> ecraft@gmail.com</p>
  <p className="flex items-center gap-2"> <FaMapMarkerAlt  className="text-yellow-500"></FaMapMarkerAlt> South Asia,Dhaka, Bangladesh.</p>

  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <li className="marker:text-yellow-500  "><a className="link link-hover">Terms of use</a></li>
    <li className="marker:text-yellow-500  "><a className="link link-hover">Privacy policy</a></li>
    <li className="marker:text-yellow-500  "><a className="link link-hover">Cookie policy</a></li>

   
  </nav>
  <nav>
    <h6 className="footer-title">Follow Us</h6> 
    <div className="grid grid-flow-col gap-4 mt-2">
    <Link> <FaFacebook className="text-2xl"></FaFacebook> </Link>
    <Link> <FaGithub  className="text-2xl" ></FaGithub> </Link>
    <Link> <IoLogoLinkedin  className="text-2xl"></IoLogoLinkedin> </Link>

    </div>
  </nav> 
</footer>

<div className="bg-black text-gray-500 text-center pb-2 text-base border-t border-gray-700 pt-3">
<p>Copyright © 2024 - All right reserved</p>
</div>
        </div>
    );
};

export default Footer;