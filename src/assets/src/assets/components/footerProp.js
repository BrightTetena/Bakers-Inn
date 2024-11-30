import AboutUs from "../pages/AboutUs";
import Products from "../pages/Products";
import Recipes from "../pages/Recipes";
import KidsCorner from "../pages/KidsCorner";
import ContactUs from "../pages/ContactUs";
import homeImages from "./HomeImages";
import homePageTitles from "./HomePageTitles";
import { Routes, Route, NavLink } from "react-router-dom";
const footerProp = () => {
  return (
    <>
      <footer>
        <div className="container">
          <img
            src={homeImages.image18}
            alt="White bread"
            srcset=""
            className="img-fluid"
          />
          <hr />
          <div className="row">
            <div className="col-lg-3">
              <h3>{homePageTitles.footerTitle}</h3>
              <div className="instagramFeed row">
                <div className="col-lg-4">
                  <img
                    src={homeImages.image15}
                    alt="White bread"
                    srcset=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-4">
                  <img
                    src={homeImages.image16}
                    alt="White bread"
                    srcset=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-4">
                  <img
                    src={homeImages.image17}
                    alt="White bread"
                    srcset=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <h3>{homePageTitles.footerSecTitle}</h3>
              <p>{homePageTitles.locationTitle1}</p>
              <p>{homePageTitles.locationTitle2}</p>
              <p>{homePageTitles.locationTitle3}</p>
              <p>{homePageTitles.locationTitle4}.</p>
            </div>

            <div className="col-lg-3">
              <h3>{homePageTitles.footer3rdTitle}</h3>

              <p>08080151 </p>
              <p>08080152 </p>
              <p>+263 242 751 481</p>
              <p>+263 242 710 334</p>
              <p>marketing@bakersinnzim.com</p>
            </div>

            <div className="col-lg-3">
              <h3>{homePageTitles.footer4thTitle}p</h3>
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/AboutUs" className="nav-link">
                    About Us
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/products" className="nav-link">
                    Products
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/recipes" className="nav-link">
                    Recipes
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/kidscorner" className="nav-link">
                    Kid's Corner
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/contactUs" className="nav-link">
                    CONTACT US
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="copyright">
            <p>{homePageTitles.copyRightTitle}</p>
            <p>
              {homePageTitles.copyRightSecTitle}
              <span>{homePageTitles.copyRightSpan}</span>{" "}
            </p>
          </div>
        </div>
      </footer>

      <Routes>
        {/* <Route path ="/" index element ={<Home />} /> */}
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/kidsCorner" element={<KidsCorner />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default footerProp;
