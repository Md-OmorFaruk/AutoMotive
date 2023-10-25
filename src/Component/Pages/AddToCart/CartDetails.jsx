
import Swal from "sweetalert2";
const CartDetails = ({ cart }) => {
     const {
       _id,
       photoURL,
       name,
       brandName,
       price,
       category,
       description,
       rating,
  } = cart;
  
  const handleDelete = _id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(_id)
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${_id}`, {
          method: 'Delete'
        },)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          if(data.deleteCount>0)
           {
              Swal.fire("Deleted!", "Your cart has been deleted.", "success");
            }
          });
      }
    
      
    
    });
  }
  const handlePayment = () => {
    Swal.fire("Payment Successful , Car will be arrived your home in 3 days");
  };
      return (
        <div>
          <div className="card w-full h-[550px] bg-base-200 shadow-xl shadow-white">
            <figure className="px-10 pt-10">
              <img src={photoURL} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-sky-400 font-font3 text-3xl">
                {name}
              </h2>
              <p className="font-font3 text-xl text-white">
                BrandName : {brandName}
              </p>
              <p className="font-font3 text-xl text-white">
                Category: {category}
              </p>
              <p className="font-font3 text-xl text-white">Rating :{rating}</p>
              <div className="card-actions">
                <button
                  onClick={handlePayment}
                  className="btn btn-primary  bg-sky-400 hover:bg-sky-700 text-white font-font3"
                >
                  Pay Now
                </button>
                  <button onClick={()=>handleDelete(_id)} className="btn btn-primary bg-sky-400 hover:bg-sky-700 text-black font-font3">
                    Delete Cart
                  </button>
              
              </div>
            </div>
          </div>
        </div>
      );
};

export default CartDetails;