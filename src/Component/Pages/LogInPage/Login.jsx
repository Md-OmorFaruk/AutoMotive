import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
      const [error, setError] = useState(null)
      
  const { signInUser, signWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const loginInfo = { email, password };
    console.log(loginInfo);

    //Sign in User
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
            navigate("/");
            setError('');
            
      })
      .catch((error) => {
            console.log(error);
            setError("Invalid email or password. Please try again.");
      });
    form.reset();
  };
  //sign with google
  const handleSignInWithGoogle = () => {
    signWithGoogle()
      .then((result) => {
            console.log(result.user);
            navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
   return (
     <div>
       <div className="max-w-4xl mx-auto p-5 md:p-20 bg-base-200 rounded-2xl mt-20 mb-10 shadow-2xl shadow-sky-400">
         <div className="text-center mb-10">
           <h1 className="font-font3 font-bold text-5xl p-4 text-sky-400 ">
             Sign In
           </h1>
           <p className="font-font3 text-sm text-white">
             Welcome! Please sign in to access our services and enjoy a
             personalized experience. Your journey with us begins here. Thank
             you for choosing us.
           </p>
         </div>
         <form onSubmit={handleLogin}>
           <div className="md:flex">
             <button className="btn hover:bg-base-200  hover:border-none join-item rounded-r-full font-font3 text-sky-400 min-w-[40px]">
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
           <div className="text-center mt-10">
             <input
               type="submit"
               value="SignIn"
               className="text-white font-font3 bg-sky-400 py-4 px-10 rounded-md hover:bg-sky-600"
             />
           </div>
           <p className="text-white font-font3 text-md text-center pt-5">
             New here? Click here to{" "}
             <Link to="/register">
               <span className="text-blue-600"> Registration</span>
             </Link>
           </p>
           <div className="divider font-font3 text-sky-400 font-bold">OR</div>
           <div>
             <button
               onClick={handleSignInWithGoogle}
               className="text-black hover:bg-slate-300 font-font3 text-md text-center mt-5 bg-white rounded-xl flex items-center max-w-fit mx-auto py-5 px-7"
             >
               <FcGoogle className="text-2xl"></FcGoogle>
               <p>Sign In with Google</p>
             </button>
           </div>
         </form>
       </div>
     </div>
   );
};

export default Login;