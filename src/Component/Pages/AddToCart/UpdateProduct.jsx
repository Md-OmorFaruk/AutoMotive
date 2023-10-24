import { Link } from "react-router-dom";

const UpdateProduct = () => {
      const handleUpdateProduct = e => {
            e.preventDefault()
            const form = e.target;
            const photoURL = form.photoURL.value;
            const name = form.name.value;
            const brandName = form.brandName.value;
            const price = form.price.value;
            const category = form.category.value;
            const description = form.description.value;
            const rating = form.rating.value;

            const info = { photoURL, name, brandName, price, category, description, rating };
            console.log(info);
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
            <form
              onSubmit={handleUpdateProduct}
              className="bg-base-200 shadow-lg shadow-yellow-300 max-w-6xl mx-auto p-16 mt-16 mb-20 rounded-xl"
            >
              <div className="max-w-3xl mx-auto mb-10">
                <h1 className="text-center text-sky-400 font-font3 text-3xl mb-5">
                  Update Product
                </h1>
                <p className="text-center font-font3 text-sm">
                  Keeping your car details current helps us provide you with
                  tailored recommendations, from maintenance tips to compatible
                  accessories. Get advice that's specific to your ride!hare your
                  car's specifications, modifications, and experiences with
                  fellow enthusiasts. Engage in discussions, exchange ideas, and
                  celebrate your love for cars together.
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
                    placeholder="Photo URL"
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
                    className="input input-bordered input-primary w-full border-blue-800"
                  >
                    <option>Lamborghini b838</option>
                    <option>BMW 316i</option>
                    <option>BMW 320i</option>
                    <option>BMW M1</option>
                    <option>Oscula PA2</option>
                    <option>Mercedes-Benz Vito </option>
                    <option>Mercedes-Benz GLE</option>
                    <option>Mercedes-Benz GLC</option>
                    <option>BMW M1</option>
                    <option>Oscula PA2</option>
                    <option>Lamborghini Aventador </option>
                    <option>Lamborghini Countach</option>
                    <option> Ford racing cars</option>
                    <option>Ford concept vehicles </option>
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
                    placeholder="Price"
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
                    placeholder="Describe the product"
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
                    placeholder="Rating out of 10"
                    className="input input-bordered input-primary w-full  mb-5"
                  />
                </div>
              </div>
              <input
                type="submit"
                value="Update Product"
                className="w-full bg-sky-400 text-white font-font3 text-xl py-3 px-7 rounded-xl"
              />
            </form>
          </div>
        </div>
      );
};

export default UpdateProduct;