
import { useLoaderData } from 'react-router-dom';
import art_1 from '../../assets/art-1.png'
import art_2 from '../../assets/art-2.png'
import art_3 from '../../assets/art-3.png'
import CarftDetails from '../CarftDetails/CarftDetails';
import { Slide } from "react-awesome-reveal";



const Home = () => {

  const carfts = useLoaderData()


    return (
       
      <div>
          <div className="carousel w-full  ">
        <div id="slide1" className="carousel-item relative w-full">
          
          <img src={art_1} className="w-full md:h-[450px] "  />
          
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5  top-1/2 ">
             
            <a href="#slide4" className="btn btn-circle ">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
           
          </div>
         
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
        <img src={art_2} className="w-full md:h-[450px] " />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn  btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
        <img src={art_3} className="w-full md:h-[450px] " />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn  btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div> 

        {/* carft item section  */}

               
       
         </div>
         <div className='mt-10 mb-10'>
          <Slide delay={300}>
          <h1 className='text-center font-bold text-3xl font-serif'>Craft Items Section</h1>
          </Slide>
       
         </div>
         <div className='grid md:grid-cols-3 gap-5 container mx-auto mb-10'>
          {
            carfts.map(carft => <CarftDetails key={carft._id} carft={carft}></CarftDetails>)
          }
         </div>
      </div>
    );
};

export default Home;