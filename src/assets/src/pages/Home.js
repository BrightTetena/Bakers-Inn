import homeImages from "../assets/components/HomeImages";
import homePageTitles from "../assets/components/HomePageTitles";
import Cards from "../assets/components/Cards";
import { NavLink } from "react-router-dom";
import ItemsFooter from "../assets/components/ItemsFooter";
import Banner from "../assets/components/Banner";
import AboutHomePage from "../assets/components/AboutHomePage";
import PageTransions from "../assets/components/PageTransions";
import DonationModal from "../assets/components/DonationModal";
import BookTourModal from "../assets/components/BookTourModal";
const Home = () => {
  return (
    <>
      <PageTransions>
        <section className="homePage container-fluid">
          <Banner />

          <div className="aboutBakerInn">
            <div className="container-fluid innerAboutBakersInn">
              <div className="row outerAboutBakerInn">
                <div className="col-12 col-lg-6 col-md-6 AboutBakerInnItem">
                  <h2>{homePageTitles.aboutTitle}</h2>
                </div>
                <div className="col-12 col-lg-6 col-md-6 AboutBakerInnItem2">
                  <p className="lead">{homePageTitles.aboutSecTitle}</p>
                  <NavLink to="/Aboutus" className="btn">
                    {homePageTitles.buttonTitle}
                  </NavLink>
                </div>
                <AboutHomePage />
              </div>
            </div>
          </div>

          <div className="ourProducts">
            <h2 className="text-center pb-3">{homePageTitles.productsTitle}</h2>
            <div className="container-fluid OuterOurProducts">
              <div className="row g-3 innerOurProducts">
                <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 ourProductsImages">
                  <img src={homeImages.image9} alt="" className="img-fluid" />
                  <h3>Bread</h3>
                </div>
                <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 ourProductsImages">
                  <img src={homeImages.image10} alt="" className="img-fluid" />
                  <h3>Meat Pies</h3>
                </div>
                <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 ourProductsImages">
                  <img src={homeImages.image11} alt="" className="img-fluid" />
                  <h3>Scones</h3>
                </div>
                <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 ourProductsImages">
                  <img src={homeImages.image12} alt="" className="img-fluid" />
                  <h3>Donuts</h3>
                </div>
              </div>
              <NavLink to="/products" className="btn">
                {homePageTitles.productButtonTitle}
              </NavLink>
            </div>
          </div>

          <div className="bookATour">
            <div className="container-fluid outerBookTour">
              <div className="row g-5 innerBookTour">
                <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 bookTourItem">
                  <div className="bookATourText">
                    <h2>{homePageTitles.tourTitle}</h2>
                    <p className="">{homePageTitles.secTourTitle}</p>

                    <button
                      className="btn "
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#bookTourToggle">
                      {homePageTitles.tourButtonTitle}
                    </button>
                    <BookTourModal/>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <img src={homeImages.image13} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>

          <div className="donationReq">
            <div className="container-fluid ">
              <div className="row g-5">
                <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <img src={homeImages.image14} alt="" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <h2>{homePageTitles.donationTitle}</h2>
                  <p>{homePageTitles.donationSecTitle}</p>

                  <button
                    className="btn "
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#donationToggle">
                    {homePageTitles.donationButtonTitle}
                  </button>
                  <DonationModal />
                </div>
              </div>
            </div>
          </div>

          <div className="kidsCorner ">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="kidsImage">
                    <img
                      src={require("../assets/images/kisspng-arecaceae-leaf-palm-branch-palm-leaf-leaves-png-5ab1c5aa8368b7 1.png")}
                      alt=""
                      className="img-fluid"
                    />
                    <img
                      src={require("../assets/images/new-super-mario-bros-2-super-paper-mario-png-favpng-rsGyK8GSVR5JcU6tF9nzJCgB8-removebg-preview 1.png")}
                      alt=""
                      className="img-fluid"
                    />
                    <img
                      src={require("../assets/images/2cd43b_19a192ae6ec44ffc9597044f7f063e0c_mv2 1.png")}
                      alt=""
                      className="img-fluid"
                    />
                    <img
                      src={require("../assets/images/mario-7da4a61a.webp")}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6">
                  <div className="kidsText">
                    <h2>{homePageTitles.kidsTitle}</h2>
                    <p>{homePageTitles.kidsSecTitle}</p>
                    <NavLink to="/kidscorner" className="btn">
                      {homePageTitles.kidsButtonTitle}
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Cards />

          <div className="getNotified">
            <div className="container-fluid outerGetNot">
              <div className="row innerrGetNot">
                <div className="col-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 getNotItem">
                  <h2>{homePageTitles.promoTitle}</h2>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="your email"
                      aria-label="your email"
                    />
                    <button className="btn " type="button">
                      SUBMIT
                    </button>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 getNotItem">
                  <div className="d-flex">
                    <img
                      src={homeImages.image2}
                      alt="White bread"
                      srcset=""
                      className="img-fluid"
                    />
                    <img
                      src={homeImages.image3}
                      alt="White bread"
                      srcset=""
                      className="img-fluid"
                    />
                    <img
                      src={homeImages.image4}
                      alt="White bread"
                      srcset=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ItemsFooter />
        </section>
      </PageTransions>
    </>
  );
};

export default Home;
