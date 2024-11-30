import homeImages from "./HomeImages";
import homePageTitles from "./HomePageTitles";
import { NavLink } from "react-router-dom";

const ItemsFooter = () => {
  return (
    <>
      <section>
        <footer>
          
          <div className="container outerFooter">
            <div className="footerTopItem">
              <div className="whiteBack" />

              <img
                src={homeImages.image18}
                alt="White bread"
                srcset=""
                className="img-fluid "
              />

              <div className="whiteBack" />
            </div>

            <div className="innerFooter">
              <div className="footerItem">
                <h3 className="pb-3">{homePageTitles.footerTitle}</h3>
                <div className="instagramFeed d-flex  justify-content-space-evenly">
                  <div className="">
                    <img
                      src={homeImages.image15}
                      alt="White bread"
                      srcset=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="">
                    <img
                      src={homeImages.image16}
                      alt="White bread"
                      srcset=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="">
                    <img
                      src={homeImages.image17}
                      alt="White bread"
                      srcset=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="socialIcons">
                  <a
                    href="https://twitter.com/BakersInnZW"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src={require("../images/Twiiter.png")}
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/BakersInnZw"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src={require("../images/face.png")}
                      alt=""
                      className="img-fluid"
                    />{" "}
                  </a>
                  <a
                    href="https://www.linkedin.com/feed/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src={require("../images/link.png")}
                      alt=""
                      className="img-fluid"
                    />{" "}
                  </a>
                </div>
              </div>

              <div className=" footerItem">
                <h3 className="pb-2">{homePageTitles.footerSecTitle}</h3>
                <p>{homePageTitles.locationTitle1}</p>
                <p>{homePageTitles.locationTitle2}</p>
                <p>{homePageTitles.locationTitle3}</p>
                <p>{homePageTitles.locationTitle4}.</p>
              </div>

              <div className=" footerItem">
                <h3 className="pb-2">{homePageTitles.footer3rdTitle}</h3>

                <p>08080151 </p>
                <p>08080152 </p>
                <p>+263 242 751 481</p>
                <p>+263 242 710 334</p>
                <p>marketing@bakersinnzim.com</p>
              </div>

              <div className=" footerItem">
                <h3 className="pb-2">{homePageTitles.footer4thTitle}p</h3>
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
                    Contact Us
                  </NavLink>
                </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="copyright">
              <div className=" d-flex">
                <p>{homePageTitles.copyRightTitle}</p>
                <img
                  src={require("../images/inscor_logo@2x 1.png")}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <p>
                {homePageTitles.copyRightSecTitle}
                <span>{homePageTitles.copyRightSpan}</span>{" "}
              </p>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default ItemsFooter;
