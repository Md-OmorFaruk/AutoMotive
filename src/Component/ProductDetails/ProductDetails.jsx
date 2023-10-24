import {  useLoaderData } from "react-router-dom";
import AllDetails from "./AllDetails";

const ProductDetails = () => {
      const carDetails = useLoaderData();
      return (
        <div>
          <div className="max-w-screen-xl mx-auto  shadow-inner shadow-sky-500 mt-16 mb-16">
            <h1 className="text-center text-sky-400 font-font3 text-3xl mb-5 pt-10 ">
              Product details
                        </h1>
                        <div className="p-5">
                              {
                                    carDetails.map(car => <AllDetails
                                          key={carDetails._id}
                                          car={car}
                                    ></AllDetails>)
                              }
                        </div>
          </div>
        </div>
      );
};

export default ProductDetails;