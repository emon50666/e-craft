
import art_1 from '../../assets/art-1.png'
import art_2 from '../../assets/art-2.png'
import art_3 from '../../assets/art-3.png'



const Home = () => {
    return (
       
        <div className="carousel w-full ">
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
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
        <img src={art_3} className="w-full md:h-[450px] " />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div> 
       
                  </div>
    );
};

export default Home;