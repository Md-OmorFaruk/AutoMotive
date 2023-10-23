import { Link } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Header from "../Pages/Header/Header";
import errorImage from '../../images/error.jpg'

const ErrorPage = () => {
      return (
            <div>
                  <Header></Header>
                  <div className="max-w-5xl mx-auto mb-20  shadow-sky-400 shadow-inner">
                        <div className="card w-full bg-base-200 mx-auto mt-10 lg:mt-10 p-10">
                  <figure className="px-10 pt-5">
                  <img src={errorImage} alt="Shoes" className="rounded-xl max-h-52 max-w-md" />
                  </figure>
                  <div className="card-body items-center text-center">
                  <h2 className="card-title text-sky-400 font-font2 text-5xl">Error!</h2>
                  <p className='max-w-xl mb-3 font-font3'>Oops! Something went wrong. We're sorry for the inconvenience. Our team has been notified and is working to fix the issue.</p>
                  <div className="card-actions">
                        <Link to='/'><button className="btn btn-primary bg-sky-400 text-white font-bold hover:bg-sky-800">Back to Home</button></Link>
                  </div>
                  </div>
                  </div>
                  </div>
                  <Footer></Footer>
                  
            </div>
      );
};

export default ErrorPage;