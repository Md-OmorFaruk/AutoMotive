import slider1 from "../../../images/slide1.jpg";
import slider2 from "../../../images/slide3.jpg";
import slider3 from "../../../images/alide2.jpg";
import LambrghiniDetails from "../Lamborghini/LambrghiniDetails";
import { useLoaderData } from "react-router-dom";
const Porsche = () => {
   const porsche = useLoaderData();
   const filteredPorsche = porsche.filter((car) => car.brandName === "Porsche");
  return (
    <div className="max-w-screen-xl mx-auto mb-20">
      <div className="carousel w-full max-h-[40vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={slider2} className="w-full object-cover" />
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
          <img src={slider3} className="w-full object-cover" />
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
          Porsche
        </h1>
      </div>
      <div className="md:grid grid-cols-2 gap-14 mt-10">
        {filteredPorsche.map((details) => (
          <LambrghiniDetails
            key={details._id}
            details={details}
          ></LambrghiniDetails>
        ))}
      </div>
    </div>
  );
};

export default Porsche;
