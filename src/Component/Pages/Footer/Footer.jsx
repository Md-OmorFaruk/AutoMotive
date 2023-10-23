const Footer = () => {
      return (
            <div className="bg-base-200">
                  <div className="max-w-screen-xl mx-auto text-white">
                  <footer className="footer p-10 text-base-content">

                                                <nav>
                  <header className="footer-title text-sky-400 font-font3 font-bold">Services</header> 
                  <a className="link link-hover  text-white">Branding</a> 
                  <a className="link link-hover  text-white">Design</a> 
                  <a className="link link-hover  text-white">Marketing</a> 
                  <a className="link link-hover text-white">Advertisement</a>
                  </nav> 
                  <nav>
                  <header className="footer-title text-sky-400 font-font3 font-bold">Company</header> 
                  <a className="link link-hover  text-white">About us</a> 
                  <a className="link link-hover  text-white">Contact</a> 
                  <a className="link link-hover  text-white">Jobs</a> 
                  <a className="link link-hover  text-white">Press kit</a>
                  </nav> 
                  <nav>
                  <header className="footer-title text-sky-400 font-font3 font-bold">Legal</header> 
                  <a className="link link-hover  text-white">Terms of use</a> 
                  <a className="link link-hover  text-white">Privacy policy</a> 
                  <a className="link link-hover text-white">Cookie policy</a>
                  </nav> 
                  <form>
                  <header className="footer-title text-sky-400 font-font3 font-bold">Newsletter</header> 
                  <fieldset className="form-control w-80">
                        <label className="label">
                        <span className="label-text text-white">Enter your email address</span>
                        </label> 
                        <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
                        <button className="btn btn-primary bg-sky-400 absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                  </fieldset>
                  </form>
                  </footer>
                              </div>
            </div>
      );
};

export default Footer;