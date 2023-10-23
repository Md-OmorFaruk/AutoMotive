import { Outlet } from "react-router-dom";
import Header from "../Pages/Header/Header";
import Footer from "../Pages/Footer/Footer";


const Layout = () => {
      return (
            <div>
                  <Header></Header>
                  <Outlet></Outlet>
                  <Footer></Footer>
                  
            </div>
      );
};

export default Layout;