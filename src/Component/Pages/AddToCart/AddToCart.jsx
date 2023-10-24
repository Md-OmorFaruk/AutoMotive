import { useLoaderData } from "react-router-dom";
import CartDetails from "./CartDetails";

const AddToCart = () => {
      const load = useLoaderData()
      return (
        <div className="max-w-screen-xl mx-auto">
          <div className="bg-base-200 rounded-xl shadow-lg shadow-sky-400 mt-10 mb-20 p-10 text-center text-sky-400 font-font3 text-4xl">
            <h1>Your Cart</h1>{" "}
                  </div>
                  <div className="md:grid grid-cols-2 gap-10">
                        {
                              load.map(cart => <CartDetails
                                    key={cart.id}
                                    cart={cart}
                              
                              ></CartDetails>)
                        }
                  </div>
        </div>
      );
};

export default AddToCart;