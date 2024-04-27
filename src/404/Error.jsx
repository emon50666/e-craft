import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import errorImg from '../assets/404.png'
import { Link } from "react-router-dom";

const Error = () => {

    return (
        <div className="text-center ">
            <Header></Header>
            <img src={errorImg} alt="" className="w-[300px] justify-center mx-auto"/>
            <h1 className="font-bold text-2xl mt-4 mb-4">Opps Page Not Found !</h1>
           <Link to={'/'}> <button className="bg-[#E86822]  buton md:mr-4 text-white rounded-lg pt-2 pb-2 pr-4 pl-4 mt-2 mb-10 font-bold ">Back to Home</button> </Link>
            <Footer></Footer>
        </div>
    );
};

export default Error;

