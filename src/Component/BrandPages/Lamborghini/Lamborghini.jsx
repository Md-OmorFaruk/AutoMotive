import slider1 from "../../../images/slide1.jpg";
import slider2 from "../../../images/slide3.jpg";
import slider3 from "../../../images/alide2.jpg";
import { useLoaderData } from "react-router-dom";
import LambrghiniDetails from "./LambrghiniDetails";
import HeroSection from "../../Pages/HeroSection/HeroSection";
const Lamborghini = () => {
  const lambo = useLoaderData()
   const filteredCars = lambo.filter(
     (car) => car.brandName === "Lamborghini"
   );
   return (
     <div className="md:max-w-screen-xl mx-auto mb-20">
       <div className="carousel w-full max-h-[40vh]">
         <div id="slide1" className="carousel-item relative w-full">
           <img src={slider3} className="w-full object-cover" />
           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
             <a href="#slide3" className="btn btn-circle">
               ❮
             </a>
             <a href="#slide2" className="btn btn-circle">
               ❯
             </a>
           </div>
         </div>
         <div id="slide2" className="carousel-item relative w-full">
           <img src={slider1} className="w-full object-cover" />
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
           <img src={slider2} className="w-full object-cover" />
           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
             <a href="#slide2" className="btn btn-circle">
               ❮
             </a>
             <a href="#slide1" className="btn btn-circle">
               ❯
             </a>
           </div>
         </div>
       </div>

       <div>
         <h1 className="text-xl font-font2 text-center pt-20">
           ---Our New Car Collection---
         </h1>
         <h1 className="text-5xl font-bold font-font3 text-center text-sky-400">
           Lamborghini
         </h1>
         <div className="md:grid grid-cols-2 gap-14 mt-10">
           {filteredCars.map((details) => (
             <LambrghiniDetails
               key={details._id}
               details={details}
             ></LambrghiniDetails>
           ))}
         </div>
       </div>
     </div>
   );
};

export default Lamborghini;
