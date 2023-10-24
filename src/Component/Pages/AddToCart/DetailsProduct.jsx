import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const DetailsProduct = ({ carInfo }) => {
      const { _id, photoURL, name, brandName, price, category, description, rating } = carInfo;
      
      const info = {
               _id,
               photoURL,
               name,
               brandName,
               price,
               category,
               description,
               rating,
             };
      console.log(info);

      
      const handleUpdate = e => {
             e.preventDefault();
             const form = e.target;
             const photoURL = form.photoURL.value;
             const name = form.name.value;
             const brandName = form.brandName.value;
             const price = form.price.value;
             const category = form.category.value;
             const description = form.description.value;
            const rating = form.rating.value;

            const allInformation = {
              photoURL,
              name,
              brandName,
              price,
              category,
              description,
              rating
            };


       fetch(`http://localhost:5000/automotive/${_id}`, {
         method: "PUT",
         headers: {
           "content-type": "application/json",
         },
         body: JSON.stringify(allInformation),
       })
         .then((res) => res.json())
         .then((data) => {
               console.log( data);
               Swal.fire("Update successful");
         });
      }
      
      
      
      return (
        <div className="max-w-screen-xl mx-auto">
          <div>
            <Link to="/">
              {" "}
              <h1 className="text-sky-500 font-font2 text-3xl pl-2 mt-5">
                ↩ Back to Home
              </h1>
            </Link>
            <form onSubmit={handleUpdate} className="bg-base-200 shadow-lg shadow-sky-400 max-w-6xl mx-auto p-16 mt-16 mb-20 rounded-xl">
              <div className="max-w-3xl mx-auto mb-10">
                <h1 className="text-center text-sky-400 font-font3 text-3xl mb-5">
                  Add Product
                </h1>
                <p className="text-center font-font3 text-sm">
                  Discover our newest arrivals on the homepage, where innovation
                  meets style. From cutting-edge technology to timeless designs,
                  dive into a world of possibilities and elevate your driving
                  experience with our latest products. Welcome to a showcase of
                  automotive excellence, right at your fingertips.
                </p>
              </div>

              <div className="md:grid grid-cols-2 gap-10">
                <div>
                  <label className="text-sky-400 font-font3 mr-16">
                    Image:
                  </label>
                  <input
                    type="text"
                    name="photoURL"
                    id="photo"
                    defaultValue={photoURL}
                    className="input input-bordered input-primary w-full "
                  />
                </div>
                <div>
                  <label className="text-sky-400 font-font3 mr-10">Name:</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    defaultValue={name}
                    className="input input-bordered input-primary w-full  mb-5"
                  />
                </div>
                {/* <div >
                                    <label className="text-sky-400 font-font3 mr-4">Brand name:</label>
                              <input type="text" name="brandName" id="brand" placeholder="Brand name" className="input input-bordered input-primary w-full " />
                                    </div> */}
                <div>
                  <label className="text-sky-400 font-font3 mr-4">
                    Brand Name:
                  </label>
                  <select
                    type="text"
                    id="brandName"
                    name="brandName"
                    defaultValue={brandName}
                    className="input input-bordered input-primary w-full border-blue-800"
                  >
                    <option>Lamborghini</option>
                    <option>Ford</option>
                    <option>BMW</option>
                    <option>Porsche</option>
                    <option>Benz</option>
                    <option>Tesla</option>
                  </select>
                </div>
                <div className="">
                  <label className="text-sky-400 font-font3 mr-4">
                    Category:
                  </label>
                  <select
                    type="text"
                    id="category"
                    name="category"
                    defaultValue={category}
                    className="input input-bordered input-primary w-full border-blue-800"
                  >
                    <option>Sports Car</option>
                    <option>SUV</option>
                    <option>Super car</option>
                    <option>Truck</option>
                    <option>Compact Car</option>
                    <option>Sedan </option>
                    <option>Plug-in Hybrid Sports Car</option>
                    <option>Convertible</option>
                    <option>BMW M1</option>
                    <option>Oscula PA2</option>
                    <option>Luxury Sedan </option>
                    <option>Electric Sedan</option>
                    <option> Electric Compact Car</option>
                    <option>Electric SUV </option>
                    <option>Ford racing cars</option>
                    <option>Tesla Model S</option>
                    <option> Tesla Model 3</option>
                    <option>Model 3 Maximum range</option>
                    <option>Tesla Model Y</option>
                    <option>Porsche Cayenne</option>
                    <option>Tesla Model Y</option>
                    <option>Porsche 911 GT3</option>
                    <option>Porsche 911</option>
                    <option>Porsche Boxster</option>
                  </select>
                </div>
                <div>
                  <label className="text-sky-400 font-font3 mr-10">
                    Price:
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    defaultValue={price}
                    className="input input-bordered input-primary w-full  mb-5"
                  />
                </div>
                <div>
                  <label className="text-sky-400 font-font3 mr-10">
                    Description:
                  </label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    defaultValue={description}
                    className="input input-bordered input-primary w-full  mb-5"
                  />
                </div>
                <div className="col-span-2">
                  <label className="text-sky-400 font-font3 mr-10">
                    Rating:
                  </label>
                  <input
                    type="text"
                    id="rating"
                    name="rating"
                    defaultValue={rating}
                    className="input input-bordered input-primary w-full  mb-5"
                  />
                </div>
              </div>
              <input
                type="submit"
                value="Updated"
                className="w-full bg-sky-400 text-white font-font3 text-xl py-3 px-7 rounded-xl"
              />
            </form>
          </div>
        </div>
      );
};

export default DetailsProduct;