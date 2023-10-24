import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
const LambrghiniDetails = ({ details }) => {

  const {_id, photoURL, name, brandName, price, category, description, rating } =
    details;

  return (
    <div>
      <div className="bg-base-100 shadow-inner shadow-sky-400 rounded-xl md:grid grid-cols-5 items-center justify-center pb-5 md:pb-0 mt-16 lg:mt-10">
        <div className="col-span-2 card w-full">
          <figure>
            <img
              className=" h-[480px] w-full object-cover rounded-xl p-8 md:p-0 transition-transform duration-300 ease-out hover:scale-125"
              src={photoURL}
              alt="Movie"
            />
          </figure>
        </div>
        <div className="pl-5 pr-5 pt-12 md:pt-0 mb-12 md:mb-0 col-span-3 ">
          <h2 className="card-title font-font3 text-base text-white">
            <span className="text-sky-400">Name:</span> {name}
          </h2>
          <h2 className="card-title pt-3 font-font3 text-sm text-white">
            <span className="text-sky-400">Brand Name:</span> {brandName}
          </h2>
          <h2 className="card-title pt-3 font-font3 text-sm text-white">
            <span className="text-sky-400">Category:</span> {category}
          </h2>
          <h2 className="card-title pt-3 font-font3 text-sm text-white">
            <span className="text-sky-400">Price:</span>$ {price}
          </h2>
          {/* <p className="text-white font-font3 text-sm pt-3">
                <span className="font-font3 text-sky-400 text-base">
                  Description :
                </span>
                 {description}
              </p> */}
          <p className="text-white font-font3 text-sm pt-3">
            <span className="font-font3 text-sky-400 text-base">
              Description :
            </span>{" "}
            {description.length > 200
              ? description.slice(0, 180) + "..."
              : description}
          </p>
          <div className="flex pt-3">
            <p className="font-font3 text-base text-white">
              <span className="font-font3 text-sky-400 text-base">Rating:</span>{" "}
              {rating}
            </p>{" "}
            <AiFillStar className="text-yellow-300 text-2xl" />
          </div>

          <Link to={`/updateProduct/${_id}`}>
            {" "}
            <div className="card-actions justify-center w-full bg-red-500 hover:bg-red-600 mt-5 py-3 rounded-xl">
              <button className=" text-black font-extrabold">Update</button>
            </div>
          </Link>
          <Link to={`/productDetails/${_id}`} >
            {/* to={`/productDetails/${_id}`} */}
            {/* to={`/automotive/${_id}`} */}
            <div className="card-actions bg-sky-400 hover:bg-sky-500 justify-center mt-2 py-3 rounded-xl">
              <button className=" text-black font-extrabold">
                Full Details
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LambrghiniDetails;
