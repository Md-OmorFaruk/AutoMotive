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
      return (
            <div>
                  <img src={photoURL} alt="" />
                  <h1>name: { name}</h1>
            </div>
      );
};

export default CartDetails;