import { Link, NavLink } from "react-router-dom";
import logo from '../../../images/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GiHamburgerMenu } from "react-icons/gi";
import avatar from '../../../images/avatar.jpg'

const Header = () => {
      const { user, logOut } = useContext(AuthContext);
      const handleLogOut = () => {
             logOut()
               .then((result) => {
                 console.log(result.user);
               })
               .catch((error) => {
                 console.log(error);
               });
      }
      const navlinkHome = (
        <>
          <li className="font-font1 font-bold text-sm">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#000000" : "#FFFFFF",
                background: isActive ? "#00C1DE" : "#1D232A",
              })}
              className="uppercase font-bold font-fon1 text-black items-center text-center"
            >
              Home
            </NavLink>
          </li>
          <li className="font-font1 font-bold text-sm">
            <NavLink
              to="/addProduct"
              style={({ isActive }) => ({
                color: isActive ? "#000000" : "#FFFFFF",
                background: isActive ? "#00C1DE" : "#1D232A",
              })}
              className="uppercase font-bold font-fon1 text-black items-center text-center"
            >
              Add Product
            </NavLink>
          </li>
          <li className="font-font1 font-bold text-sm">
            <NavLink
              to="/addToCart"
              style={({ isActive }) => ({
                color: isActive ? "#000000" : "#FFFFFF",
                background: isActive ? "#00C1DE" : "#1D232A",
              })}
              className="uppercase font-bold font-fon1 text-black items-center text-center "
            >
              Add To Cart
            </NavLink>
          </li>
          {/* {
         user && <>
           <li className="font-font1 font-bold text-sm">
            <NavLink
              to="/addToCart"
              style={({ isActive }) => ({
                color: isActive ? "#000000" : "#FFFFFF",
                background: isActive ? "#00C1DE" : "#1D232A",
              })}
              className="uppercase font-bold font-fon1 text-black items-center text-center "
            >
              About Us
            </NavLink>
          </li>
            </>
        } */}
        </>
        
      ); 
  return (
    // <div>
    //   <div className="max-w-screen-2xl mx-auto ">
    //     <div className="max-w-screen-xl mx-auto text-right navbar flex flex-col md:flex-row justify-between ">
    //       <div className="max-w-sm flex gap-0 navbar-start">
    //         <img src={logo} alt="Logo" className="max-w-[100px]" />
    //         <Link
    //           to="/"
    //           className="btn hover:bg-base-100 btn-ghost font-bold p-0 text-sky-400 text-2xl font-font2"
    //         >
    //           ROADROVER
    //         </Link>
    //       </div>
    //       {user ? (
    //         <>
    //           <div className="navbar-center lg::pl-16">
    //             <NavLink
    //               to="/"
    //               style={({ isActive }) => ({
    //                 color: isActive ? "#000000" : "#FFFFFF",
    //                 background: isActive ? "#00C1DE" : "#1D232A",
    //               })}
    //               className="btn text-base normal-case font-bold font-fon1 text-black"
    //             >
    //               Home
    //             </NavLink>

    //             <NavLink
    //               to="/addProduct"
    //               style={({ isActive }) => ({
    //                 color: isActive ? "#000000" : "#FFFFFF",
    //                 background: isActive ? "#00C1DE" : "#1D232A",
    //               })}
    //               className="btn text-sm  normal-case font-bold font-fon1 text-black"
    //             >
    //               Add Product
    //             </NavLink>

    //             <div>
    //               <NavLink
    //                 to="/myCart"
    //                 style={({ isActive }) => ({
    //                   color: isActive ? "#000000" : "#FFFFFF",
    //                   background: isActive ? "#00C1DE" : "#1D232A",
    //                 })}
    //                 className="btn text-sm  normal-case font-bold font-font1 text-black"
    //               >
    //                 My Cart
    //               </NavLink>
    //             </div>
    //           </div>
    //         </>
    //       ) : (
    //         <>
    //           <div className="block md:navbar-center lg:pl-32">
    //             <NavLink
    //               to="/"
    //               style={({ isActive }) => ({
    //                 color: isActive ? "#000000" : "#FFFFFF",
    //                 background: isActive ? "#00C1DE" : "#1D232A",
    //               })}
    //               className="btn text-base normal-case font-bold font-fon1 text-black"
    //             >
    //               Home
    //             </NavLink>

    //             <NavLink
    //               to="/addProduct"
    //               style={({ isActive }) => ({
    //                 color: isActive ? "#000000" : "#FFFFFF",
    //                 background: isActive ? "#00C1DE" : "#1D232A",
    //               })}
    //               className="btn text-sm  normal-case font-bold font-fon1 text-black"
    //             >
    //               Add Product
    //             </NavLink>

    //             <div>
    //               <NavLink
    //                 to="/myCart"
    //                 style={({ isActive }) => ({
    //                   color: isActive ? "#000000" : "#FFFFFF",
    //                   background: isActive ? "#00C1DE" : "#1D232A",
    //                 })}
    //                 className="btn text-sm  normal-case font-bold font-font1 text-black"
    //               >
    //                 My Cart
    //               </NavLink>
    //             </div>
    //           </div>
    //         </>
    //       )}
    //       <div className="block navbar-end items-center ">
    //         {user ? (
    //           <>
    //             <NavLink className="btn text-sm  normal-case font-bold font-font1  hover:bg-sky-400 text-white ml-5">
    //               <div className="flex items-center gap-4">
    //                 <div className="avatar online">
    //                   <div className="w-5 rounded-full">
    //                     <img src={avatar} />
    //                   </div>
    //                 </div>
    //                 {user.email}
    //               </div>
    //             </NavLink>

    //             <NavLink
    //               onClick={handleLogOut}
    //               className="btn text-sm  normal-case font-bold font-font1 text-white hover:bg-sky-400"
    //             >
    //               SignOut
    //             </NavLink>
    //           </>
    //         ) : (
    //           <>
    //             <NavLink
    //               to="/logIn"
    //               style={({ isActive }) => ({
    //                 color: isActive ? "#000000" : "#FFFFFF",
    //                 background: isActive ? "#00C1DE" : "#1D232A",
    //               })}
    //               className="btn text-sm  normal-case font-bold font-font1 text-black"
    //             >
    //               Sign In
    //             </NavLink>

    //             <NavLink
    //               to="/register"
    //               style={({ isActive }) => ({
    //                 color: isActive ? "#000000" : "#FFFFFF",
    //                 background: isActive ? "#00C1DE" : "#1D232A",
    //               })}
    //               className="btn text-sm  normal-case font-bold font-font1 text-black"
    //             >
    //               Register
    //             </NavLink>
    //           </>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    //

    <div className="max-w-screen-xl mx-auto">
      <div className="md:navbar bg-base-100">
        <div className="flex items-center max-w-fit mx-auto md:max-w-full md:m-0 md:navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost pr-0 lg:hidden">
              <GiHamburgerMenu className="text-sky-400 text-2xl font-extrabold"></GiHamburgerMenu>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinkHome}
            </ul>
          </div>
          <div className="flex items-center gap-0 ">
            {" "}
            <img src={logo} alt="Logo" className="max-w-[100px] p-0" />
            <Link
              to="/"
              className="normal-case btn hover:bg-base-100 btn-ghost font-bold p-0 text-sky-400 text-2xl font-font2"
            >
              ROADROVER
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinkHome}</ul>
        </div>
        <div className="text-xs font-font1 flex items-center max-w-fit mx-auto md:max-w-full md:m-0 md:navbar-end">
          {user ? (
            user.displayName ? (
              <>
                <img src={user.photoURL} alt="" className="rounded-full w-10 mr-2" />
                <p className="btn uppercase font-bold font-fon1 bg-sky-900 text-white items-center text-center ">
                  {user.displayName}
                </p>
                <NavLink
                  onClick={handleLogOut}
                  className="btn bg-transparent uppercase font-bold font-fon1 text-white hover:bg-sky-400 items-center text-center "
                >
                  Sign Out
                </NavLink>
              </>
            ) : (
              <>
                <>
                  <img
                    src={avatar}
                    alt=""
                    className="rounded-full w-10 mr-2"
                  />
                  <p className="btn uppercase font-bold font-fon1 bg-sky-900 text-white items-center text-center ">
                    {user.email}
                  </p>
                  <NavLink
                    onClick={handleLogOut}
                    className="btn bg-transparent uppercase font-bold font-fon1 text-white hover:bg-sky-400 items-center text-center "
                  >
                    Sign Out
                  </NavLink>
                </>
              </>
            )
          ) : (
            <>
              <NavLink
                to="/logIn"
                style={({ isActive }) => ({
                  color: isActive ? "#000000" : "#FFFFFF",
                  background: isActive ? "#00C1DE" : "#1D232A",
                })}
                className="btn uppercase font-bold font-fon1 text-black items-center text-center "
              >
                Sign in
              </NavLink>
              <NavLink
                to="/register"
                style={({ isActive }) => ({
                  color: isActive ? "#000000" : "#FFFFFF",
                  background: isActive ? "#00C1DE" : "#1D232A",
                })}
                className="btn uppercase font-bold font-fon1 text-black items-center text-center "
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;