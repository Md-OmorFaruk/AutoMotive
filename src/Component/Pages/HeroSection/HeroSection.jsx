import image1 from '../../../images/c1.png'
import image2 from '../../../images/c2.png'
import image3 from '../../../images/c3.png'
import image11 from '../../../images/s1.png'
import image12 from '../../../images/s2.png'
import image13 from '../../../images/s3.png'
import image14 from '../../../images/s4.png'
import about from '../../../images/aboutus.jpg'
import card1 from '../../../images/labor.jpg'
import card2 from '../../../images/tesla.jpg'
import card3 from '../../../images/benz.jpg'
import card4 from '../../../images/bmw.jpg'
import card5 from '../../../images/ford.jpg'
import card6 from '../../../images/poche.jpg'
import { Link, useLoaderData } from 'react-router-dom'
const HeroSection = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <div className="hero min-h-[88vh]">
          <div className="hero-content flex-col lg:flex-row-reverse">
            {/*  */}
            <div className="carousel w-full object-cover">
              <div id="slide1" className="carousel-item relative w-full">
                <img src={image2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img src={image3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img src={image1} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img src={image2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="font-font3 text-2xl pb-5">
                Explore the Road Ahead
              </h2>
              <h1 className="text-5xl font-bold font-font3 text-sky-400">
                Your Journey in Every Mile.
              </h1>
              <p className="py-6 font-font3">
                Explore the latest in automotive excellence at ROADROVER. From
                sleek designs to high-performance rides, discover the perfect
                vehicle for your journey. Get ready to hit the road in style and
                embrace the thrill of driving.
              </p>
              <button className="btn btn-primary bg-sky-400 hover:bg-sky-500 text-black transition-transform duration-300 ease-out hover:scale-110 font-font3 font-bold">
                explore more
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 xl:grid-cols-4 gap-10 bg-base-200 md:px-20  lg:px-10 py-5 max-w-7xl mx-auto rounded-2xl mb-10 shadow-xl shadow-sky-400">
        <div>
          <div className="w-full pt-5 pb-5 ">
            <figure>
              <img
                src={image11}
                className="max-w-[50px] mx-auto md:mx-3  md:w-[50px]"
              />
            </figure>
            <div className="card-body text-center md:text-left p-0 pt-3 ">
              <h2 className="card-title text-left font-font3 text-2xl text-sky-500 max-w-[280px] mx-auto md:mx-2">
                All Functionality
              </h2>
              <p className="font-font3 text-sm max-w-[280px] mx-auto md:mx-2 text-white">
                You will definitely be a fan of the design & aroma of your Car
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full pt-5 pb-5 ">
            <figure>
              <img
                src={image12}
                className="max-w-[42px] mx-auto md:mx-3  md:w-[50px] mb-2"
              />
            </figure>
            <div className="card-body text-center md:text-left p-0 pt-3 ">
              <h2 className="card-title text-left font-font3 text-2xl text-sky-500 max-w-[280px] mx-auto md:mx-2">
                Proper Roasting
              </h2>
              <p className="font-font3 text-sm max-w-[280px] mx-auto md:mx-2 text-white">
                You will definitely be a fan of the design & aroma of your Car
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full pt-5 pb-5 ">
            <figure>
              <img
                src={image13}
                className="max-w-[50px] mx-auto md:mx-3  md:w-[44px] mb-2"
              />
            </figure>
            <div className="card-body text-center md:text-left p-0 pt-3 ">
              <h2 className="card-title text-left font-font3 text-2xl text-sky-500 max-w-[280px] mx-auto md:mx-2">
                Pure Grades
              </h2>
              <p className="font-font3 text-sm max-w-[280px] mx-auto md:mx-2 text-white">
                You will definitely be a fan of the design & aroma of your Car
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full pt-5 pb-5 ">
            <figure>
              <img
                src={image14}
                className="max-w-[44px] mx-auto md:mx-3  md:w-[50px] mb-2"
              />
            </figure>
            <div className="card-body text-center md:text-left p-0 pt-3 ">
              <h2 className="card-title text-left font-font3 text-2xl text-sky-500 max-w-[280px] mx-auto md:mx-2">
                High Quality
              </h2>
              <p className="font-font3 text-sm max-w-[280px] mx-auto md:mx-2 text-white">
                You will definitely be a fan of the design & aroma of your Car
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bout Us */}
      <div className="max-w-screen-xl mx-auto items-center">
        <div className="hero min-h-[80vh] items-center">
          <div className=" md:flex gap-20 text-center md:text-left mt-32 items-center">
            {/*  */}
            <img
              src={about}
              className=" w-[350px] md:h-[500px] md:max-w-[500px] lg:max-w-[560px]  rounded-xl mx-auto object-cover transition-transform duration-300 ease-out hover:scale-110"
            />
            {/*  */}
            <div className="max-w-xl">
              <h2 className="font-font3 text-2xl pb-5 pt-10 md:pt-0">
                About Us
              </h2>
              <h1 className="text-5xl font-bold font-font3 text-sky-400">
                Your Journey Starts Here.
              </h1>
              <p className="py-6 font-font3">
                Welcome to road rover, where the road meets passion and
                expertise. At RoadRover, we are dedicated to providing car
                enthusiasts with a premium platform to explore, learn, and
                indulge in the world of automobiles. Established in 2014 jan 25,
                our website is more than just a digital space .it's a vibrant
                community where automotive lovers come together.{" "}
              </p>
              <button className="btn btn-primary bg-sky-400 text-black font-font3 hover:bg-sky-500 font-bold transition-transform duration-300 ease-out hover:scale-110">
                explore more
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-xl font-bold font-font2  text-center mt-32 ">
        --Drive Passion--
      </p>
      <h1 className="text-5xl font-bold font-font3 text-sky-400 text-center mb-10">
        Our Brand
      </h1>

      {/* Card */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
         <Link to="/lamborghini"><div className="card w-full bg-base-200 shadow-md shadow-sky-400">
          <figure className="">
            <img
              src={card1}
              alt="Shoes"
              className="rounded-xl h-[300px] object-cover w-full transition-transform duration-300 ease-out hover:scale-110"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title  font-font3 text-2xl font-bold text-white">
              Brand : <span className="text-sky-500">Lamborghini</span>
            </h2>

            <div className="card-actions">
             
                {" "}
                <button className="btn btn-primary text-xs mt-3 bg-sky-400 hover:bg-sky-300 text-black font-font3 fon-bold transition-transform duration-300 ease-out hover:scale-110">
                  Explore More
                </button>
             
            </div>
          </div>
        </div> </Link>
        
            <Link to="/tesla"><div className="card w-full bg-base-200 shadow-md shadow-sky-400">
          <figure className="">
            <img
              src={card2}
              alt="Shoes"
              className="rounded-xl h-[300px] object-cover w-full  transition-transform duration-300 ease-out hover:scale-110"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title  font-font3 text-2xl font-bold text-white">
              Brand : <span className="text-sky-500">Tesla</span>
            </h2>

              <div className="card-actions">
                <button className="btn btn-primary text-xs mt-3 bg-sky-400 hover:bg-sky-300 text-black font-font3 fon-bold transition-transform duration-300 ease-out hover:scale-110">
                  Explore More
                </button>
              </div>
           
          </div>
        </div> </Link>
          <Link to="/benz"><div className="card w-full bg-base-200 shadow-md shadow-sky-400">
          <figure className="">
            <img
              src={card3}
              alt="Shoes"
              className="rounded-xl h-[300px] object-cover w-full  transition-transform duration-300 ease-out hover:scale-110"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title  font-font3 text-2xl font-bold text-white">
              Brand : <span className="text-sky-500">Benz</span>
            </h2>

            <div className="card-actions">
            
                <button className="btn btn-primary text-xs mt-3 bg-sky-400 hover:bg-sky-300 text-black font-font3 fon-bold transition-transform duration-300 ease-out hover:scale-110">
                  Explore More
                </button>
            
            </div>
          </div>
        </div>  </Link>
          <Link to="bmw"><div className="card w-full bg-base-200 shadow-md shadow-sky-400">
          <figure className="">
            <img
              src={card4}
              alt="Shoes"
              className="rounded-xl h-[300px] object-cover w-full  transition-transform duration-300 ease-out hover:scale-110"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title  font-font3 text-2xl font-bold text-white">
              Brand : <span className="text-sky-500">BMW</span>
            </h2>

            <div className="card-actions">
            
                {" "}
                <button className="btn btn-primary text-xs mt-3 bg-sky-400 hover:bg-sky-300 text-black font-font3 fon-bold transition-transform duration-300 ease-out hover:scale-110">
                  Explore More
                </button>
             
            </div>
          </div>
        </div> </Link>
         <Link to="/ford"><div className="card w-full bg-base-200 shadow-md shadow-sky-400">
          <figure className="">
            <img
              src={card5}
              alt="Shoes"
              className="rounded-xl h-[300px] object-cover w-full  transition-transform duration-300 ease-out hover:scale-110"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title  font-font3 text-2xl font-bold text-white">
              Brand : <span className="text-sky-500">Ford</span>
            </h2>

            <div className="card-actions">
             
                {" "}
                <button className="btn btn-primary text-xs mt-3 bg-sky-400 hover:bg-sky-300 text-black font-font3 fon-bold transition-transform duration-300 ease-out hover:scale-110">
                  Explore More
                </button>
             
            </div>
          </div>
        </div> </Link>
         <Link to="/porsche"><div className="card w-full bg-base-200 shadow-md shadow-sky-400">
          <figure className="">
            <img
              src={card6}
              alt="Shoes"
              className="rounded-xl h-[300px] object-cover w-full  transition-transform duration-300 ease-out hover:scale-110"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title  font-font3 text-2xl font-bold text-white">
              Brand : <span className="text-sky-500">Porsche</span>
            </h2>

            <div className="card-actions">
             
                <button className="btn btn-primary text-xs mt-3 bg-sky-400 hover:bg-sky-300 text-black font-font3 fon-bold transition-transform duration-300 ease-out hover:scale-110">
                  Explore More
                </button>
              
            </div>
          </div>
        </div></Link>
      </div>
      <div className="max-w-7xl mx-auto mb-32 p-8 lg:p-0 ">
        <h1 className="text-xl font-bold font-font2 text-center mt-36">
          ---Your most wanted question---
        </h1>
        <h1 className="text-5xl font-bold font-font3 text-sky-400 text-center mb-16 ">
          Question & Ans
        </h1>
        <div className="collapse collapse-plus ">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-xl  font-bold font-font3">
            What sets Lamborghini apart from other luxury car brands?
          </div>
          <div className="collapse-content font-font3 text-white">
            <p>
              Lamborghini stands out for its unparalleled combination of Italian
              craftsmanship, cutting-edge technology, and exhilarating
              performance. With iconic designs and roaring engines, it redefines
              the essence of automotive luxury.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus ">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-bold font-font3">
            How does Lamborghini achieve such high-speed performance in its
            vehicles?
          </div>
          <div className="collapse-content font-font3 text-white">
            <p>
              Lamborghini's high-speed prowess is a result of meticulous
              engineering, lightweight materials, and powerful engines. The
              brand invests in aerodynamics and precision tuning, ensuring their
              cars deliver unmatched speed and agility on the road.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus ">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-bold font-font3">
            What innovations has Lamborghini introduced in recent years?
          </div>
          <div className="collapse-content font-font3 text-white">
            <p>
              Lamborghini continues to innovate with advancements like hybrid
              technology, adaptive aerodynamics, and smart connectivity
              features. These innovations enhance both the driving experience
              and sustainability, showcasing Lamborghini's commitment to the
              future of automotive excellence.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus ">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-bold font-font3">
            What makes Lamborghini's interior design so luxurious and appealing?
          </div>
          <div className="collapse-content font-font3 text-white">
            <p>
              Lamborghini interiors are meticulously crafted with premium
              materials, bespoke detailing, and advanced technology. The brand
              focuses on ergonomic excellence and aesthetic finesse, ensuring
              every detail exudes luxury and comfort for the discerning driver.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus  font-font3">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-bold font-font3">
            How does Lamborghini balance performance and environmental
            responsibility in its vehicles?
          </div>
          <div className="collapse-content font-font3 text-white">
            <p>
              Lamborghini is at the forefront of sustainable performance,
              integrating advanced engineering techniques, lightweight
              materials, and hybrid technologies. Through meticulous research,
              the brand achieves a harmonious balance between raw power and
              reduced emissions, setting new standards for eco-conscious
              supercars.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;