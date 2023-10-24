import { AiFillStar } from "react-icons/ai";
const AllDetails = ({ car }) => {
      const { photoURL, name, brandName, price, category, description, rating } = car;
      return (
        <div>
          <div className="bg-base-100  md:grid grid-cols-5 items-center gap-16 ">
            <div className="col-span-3 ">
              <figure>
                <img
                  className=" h-[550px] w-full object-cover"
                  src={photoURL}
                  alt="Movie"
                />
              </figure>
            </div>
            <div className="col-span-2">
              <h2 className=" font-font3 text-xl font-bold text-white">
                <span className="text-sky-400">Name:</span> {name}
              </h2>
              <h2 className="pt-3 font-font3 text-lg font-bold text-white">
                <span className="text-sky-400">Brand Name:</span> {brandName}
              </h2>{" "}
              <h2 className=" pt-3 font-font3 text-lg text-white">
                <span className="text-sky-400">Category:</span> {category}
              </h2>
              <h2 className="pt-3 font-font3 text-lg text-white">
                <span className="text-sky-400">Price: </span>$ {price}
              </h2>
              <div className="flex pt-3">
                <p className="font-font3 text-base text-white">
                  <span className="font-font3 text-sky-400 text-xl">
                    Rating:
                  </span>{" "}
                  {rating}
                </p>{" "}
                <AiFillStar className="text-yellow-300 text-2xl" />
              </div>
              <button className=" text-black font-extrabold bg-sky-400 hover:bg-sky-600 w-full py-3 rounded-xl mt-5">
                Add To Cart
              </button>
            </div>
          </div>
          <div>
            <h1 className="text-center text-sky-400 font-font2 text-5xl mb-5 pt-10">
              About The Car
            </h1>
            <p className="text-white font-font3 text-sm pt-3">
              {description.length > 353
                ? description.slice(0, 353)
                : description}
            </p>
            <p className="text-white font-font3 text-sm pt-3">
              {description.length < 400
                ? description.slice(353, 10000)
                : description.slice(353, 10000)}
            </p>
          </div>
        </div>
      );
};

export default AllDetails;