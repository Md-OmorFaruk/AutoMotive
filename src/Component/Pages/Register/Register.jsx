import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
      const [error, setError] = useState(null);
      const [success,setSuccess] = useState(null);
      const {createUser} = useContext(AuthContext)
      const handleRegister = e => {
              e.preventDefault()
            const form = e.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;

             const registerInfo = { name, email, password};
            console.log(registerInfo);
            
            if (password.length < 6) {
                  setError("Password must be at least 6 characters long.");
              return;
            }
             if (!/[A-Z]/.test(password)) {
               setError("Password must contain at least one capital letter.");
               return;
             }
             if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
               setError(
                 "Password must contain at least one special character."
               );
               return;
             }

            // Create User in firebase
            createUser(email, password)
                  .then(result => {
                        console.log(result.user);
                        setError(null)
                    setSuccess("Registered Successful")
                     Swal.fire("Register successful");

                  })
                  .catch(error => {
                        console.log(error);
            })
         form.reset();
      }
      return (
        <div>
          <div className="max-w-4xl mx-auto p-5 md:p-20 bg-base-200 rounded-2xl mt-20 mb-10 shadow-2xl shadow-sky-400">
            <div className="text-center mb-10">
              <h1 className="font-font3 font-bold text-5xl p-4 text-sky-400">
                Register Here
              </h1>
              <p className="font-font3 text-white text-sm">
                Ready to unlock exclusive benefits? Register now to create your
                account and join our community! Enjoy seamless access to our
                services, updates, and personalized offers.
              </p>
            </div>
            <form onSubmit={handleRegister}>
              <div className="md:flex">
                <button className="btn join-item hover:bg-base-200 hover:border-none rounded-r-full font-font3 text-sky-400 min-w-[90px]">
                  Name:
                </button>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered join-item  w-full"
                  placeholder="Name"
                />
              </div>
              <br />
              <div className="md:flex">
                <button className="btn hover:bg-base-200 hover:border-none join-item rounded-r-full font-font3 text-sky-400 min-w-[40px]">
                  Email:
                </button>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered join-item  w-full"
                  placeholder="Email"
                />
              </div>{" "}
              <br />
              <div className="md:flex">
                <button className="btn hover:bg-base-200 hover:border-none join-item rounded-r-full font-font3 text-sky-400 min-w-[85px]">
                  Pass:
                </button>
                <input
                  type="password"
                  name="password"
                  className="input input-bordered join-item w-full"
                  placeholder="Password"
                />
              </div>
              <p className="text-red-600 font-font3 pl-20 pt-5">{error}</p>
              <p className="text-blue-600 font-font3 pl-20">{success}</p>
              <div className="text-center mt-5">
                <input
                  type="submit"
                  value="Register"
                  className="text-white font-font3 bg-sky-400 py-4 px-10 rounded-md hover:bg-sky-600"
                />
              </div>
              <p className="font-font3 text-md text-center pt-5 text-white">
                Already Registered? Click here to{" "}
                <Link to="/logIn">
                  <span className="text-blue-600">login</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      );
};

export default Register;