import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
const LambrghiniDetails = ({ details }) => {

  const {_id, photoURL, name, brandName, price, category, description, rating } =
    details;

  return (
    <div>
      <div className="bg-base-100 shadow-xl shadow-black rounded-xl md:grid grid-cols-5 items-center justify-center ">
        <div className="col-span-2 ">
          <figure>
            <img
              className=" h-[420px] object-cover rounded-xl transition-transform duration-300 ease-out hover:scale-105"
              src={photoURL}
              alt="Movie"
            />
          </figure>
        </div>
        <div className="pl-5 pr-5 col-span-3">
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
            <AiFillStar className="text-orange-600 text-2xl" />
          </div>

          <div className="flex justify-between mt-5 font-font1 ">
            <div className="card-actions ">
              <Link to="/updateProduct">
                {" "}
                <button className="btn btn-primary bg-sky-400 hover:bg-sky-500 text-black font-extrabold">
                  Update
                </button>
              </Link>
            </div>
            <div className="card-actions">
              <Link to={`/${brandName}/${_id}`}>
                {" "}
                <button className="btn bg-sky-400 hover:bg-sky-500 text-black font-extrabold">
                  Full Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LambrghiniDetails;
