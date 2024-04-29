
import { useLoaderData } from 'react-router-dom';
import art_1 from '../../assets/art-1.png'
import art_2 from '../../assets/art-2.png'
import art_3 from '../../assets/art-3.png'
import CarftDetails from '../CarftDetails/CarftDetails';
import { Slide } from "react-awesome-reveal";
import UserAdd from '../AllArtItem/UserAdd';



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
        <UserAdd adduser={carfts}></UserAdd>
         <div className='mt-10 mb-10'>
          <Slide delay={300}>
          <h1 className='text-center font-bold text-3xl font-serif'>Art & Craft Categories</h1>
          </Slide>
       
         </div>
         <div className='grid md:grid-cols-3 gap-5 container mx-auto '>
         {
    carfts.slice(0, 6).map(carft => <CarftDetails key={carft._id} carft={carft}></CarftDetails>)
}
         </div>

         {/* pricint sections */}





         <section className="py-20 dark:bg-gray-100 dark:text-gray-800"> 
	<div className="container px-4 mx-auto">
		<div className="max-w-2xl mx-auto mb-16 text-center">
			<span className="font-bold tracking-wider uppercase dark:text-violet-600">Pricing</span>
			<h2 className="text-4xl font-bold lg:text-5xl">Choose your Craft plan</h2>
		</div>
		<div className="flex flex-wrap items-stretch -mx-4">
			<div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-[#F7FAE7] ">
					<div className="space-y-2">
						<h4 className="text-2xl font-bold">Beginner</h4>
						<span className="text-6xl font-bold">Free</span>
					</div>
					<p className="mt-3 leading-relaxed dark:text-gray-600">Whether you are dabbling in painting, sketching, or crafting.</p>
					<ul className="flex-1 mb-6 dark:text-gray-600">
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Exclusive discounts on select products</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Basic art supplies kit</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Monthly inspiration newsletter</span>
						</li>
					</ul>
					<button type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-violet-600 dark:text-gray-50 border border-dashed border-yellow-600">Get Started</button>
				</div>
			</div>
			<div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div className="flex flex-grow flex-col p-6 space-y-6 rounded border border-yellow-600 border-dashed shadow sm:p-8 dark:bg-violet-600 dark:text-gray-50">
					<div className="space-y-2">
						<h4 className="text-2xl font-bold">Pro</h4>
						<span className="text-6xl font-bold">$24
							<span className="text-sm tracking-wide">/month</span>
						</span>
					</div>
					<p className="leading-relaxed">Elevate your craft with our Pro Plans .</p>
					<ul className="flex-1 space-y-2">
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Priority customer support</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Premium art supplies kit with professional-grade materials</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Access to exclusive masterclasses and skill-building workshops
            </span>
						</li>
						
					</ul>
					<a rel="noopener noreferrer" href="#" className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded dark:bg-gray-100  border border-dashed border-yellow-600 dark:text-violet-600">Get Started</a>
				</div>
			</div>
			<div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div className="flex flex-grow flex-col bg-[#F7FAE7] p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-50">
					<div className="space-y-2">
						<h4 className="text-2xl font-bold">Team</h4>
						<span className="text-6xl font-bold">$72
							<span className="text-sm tracking-wide">/month</span>
						</span>
					</div>
					<p className="leading-relaxed dark:text-gray-600">Fuel creativity and collaboration with our Team Plan, ideal for art studios.</p>
					<ul className="space-y-2 dark:text-gray-600">
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Bulk discounts on art supplies for group orders</span>
						</li>
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Priority booking for venue rentals and event spaces</span>
						</li>
					
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Customizable group accounts with role-based access controls</span>
						</li>
						
					</ul>
					<a rel="noopener noreferrer" href="#" className="inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-violet-600  border border-dashed border-yellow-600 dark:text-gray-50">Get Started</a>
				</div>
			</div>
		</div>
	</div>
      </section>





      {/* blog section */}

      <div className="bg-[#F7FAE7]  md:px-10 px-4 py-12 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Our Latest Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="shadow-lg shadow-yellow-200/50 rounded-lg overflow-hidden hover:scale-110 transition-all duration-500 cursor-pointer ">
            <img src="https://i.ibb.co/4sw7Dhs/hqdefault.jpg" alt="Blog Post 1" className="w-full h-52 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Exploring the Art of Sketching</h3>
              <p className="text-gray-600 text-sm">
              Embark on a journey of creativity as we delve into the art of sketching and uncover the secrets behind this timeless form of expression. 
              </p>
            
              <a href="javascript:void(0);" className="mt-4 inline-block text-orange-600 text-sm hover:underline">Read More</a>
            </div>
          </div>
          <div className="shadow-lg shadow-yellow-200/50 rounded-lg hover:scale-110 transition-all duration-500 cursor-pointer  overflow-hidden ">
            <img src="https://i.ibb.co/5RF56yV/images-2.jpg" alt="Blog Post 2" className="w-full h-52 object-cover" />
            <div className="p-6 ">
              <h3 className="text-xl font-bold text-gray-800 mb-2">The Evolution of Drawing in the Digital Age</h3>
              <p className="text-gray-600 text-sm">Witness the evolution of drawing as we explore the transition from traditional paper-based techniques to digital artistry in the modern age </p>
              <a href="javascript:void(0);" className="mt-4 inline-block text-orange-600 text-sm hover:underline">Read More</a>
            </div>
          </div>
          <div className=" shadow-yellow-200/50 rounded-lg  hover:scale-110 transition-all duration-500 cursor-pointer  overflow-hidden shadow-lg">
            <img src="https://i.ibb.co/5RF56yV/images-2.jpg" alt="Blog Post 3" className="w-full h-52 object-cover" />
            <div className="p-6">
              <h3 className ="text-xl font-bold text-gray-800 mb-2">Essential Drawing Techniques Every Artist Should Master</h3>
              <p className="text-gray-600 text-sm">Dive into the world of drawing as we explore ten fundamental techniques that are essential for artists of all skill levels. .</p>
              <a href="javascript:void(0);" className="mt-4 inline-block text-orange-600 text-sm hover:underline">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    );
};

export default Home;