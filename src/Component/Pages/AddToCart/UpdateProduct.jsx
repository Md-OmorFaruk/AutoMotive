import {  useLoaderData } from "react-router-dom";
import DetailsProduct from "./DetailsProduct";


const UpdateProduct = () => {
  const updateCarInfo = useLoaderData();
  console.log(updateCarInfo);

  return (
    <div>
      <div>
        {updateCarInfo.map(carInfo => <DetailsProduct
          key={carInfo._id}
          carInfo={carInfo}
        
        ></DetailsProduct>)}
      </div>
    </div>
  );
  
};

export default UpdateProduct;