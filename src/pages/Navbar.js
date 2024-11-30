import logo from "../assets/images/logo.png";
import React from "react";
import { Routes, Route, NavLink, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const LazyHome = React.lazy(() => import("./Home"));
const LazyAbout = React.lazy(() => import("./AboutUs"));
const LazyProducts = React.lazy(() => import("./Products"));
const LazyRecipes = React.lazy(() => import("./Recipes"));
const LazyKidsCorner = React.lazy(() => import("./KidsCorner"));
const LazyContactUs = React.lazy(() => import("./ContactUs"));

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <style>
        {`
          .navbar-nav {
            display: flex;
            flex-direction: row; /* Default horizontal layout */
            gap: 10px;
            transition: all 0.3s ease-in-out;
          }

          .navbar-collapse {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease-in-out; /* Smooth transition */
          }

          .navbar-collapse.show {
            max-height: 500px; /* Enough space for all menu items */
          }

          .navbar-collapse.show .navbar-nav {
            flex-direction: column; /* Switch to vertical layout */
            gap: 15px; /* Add spacing between links */
          }

          .nav-link {
            padding: 10px 0;
            text-align: center;
          }

          @media (min-width: 992px) {
            .navbar-nav {
              flex-direction: row; /* Revert to horizontal layout on larger screens */
              gap: 10px;
            }

            .navbar-collapse {
              max-height: none; /* Remove height restriction */
              overflow: visible;
            }
          }
        `}
      </style>
      <div className="backgroungColor">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid innerNav">
            <NavLink to="/" className="navbar-brand mx-3">
              <img src={logo} alt="logo" className="img-fluid" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
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
        </nav>
      </div>
      <Outlet />
      <AnimatePresence initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            index
            element={
              <React.Suspense fallback="loading">
                <LazyHome />
              </React.Suspense>
            }
          />
          <Route
            path="/aboutUs"
            element={
              <React.Suspense fallback="loading">
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route
            path="/products"
            element={
              <React.Suspense fallback="loading">
                <LazyProducts />
              </React.Suspense>
            }
          />
          <Route
            path="/recipes"
            element={
              <React.Suspense fallback="loading">
                <LazyRecipes />
              </React.Suspense>
            }
          />
          <Route
            path="/kidsCorner"
            element={
              <React.Suspense fallback="loading">
                <LazyKidsCorner />
              </React.Suspense>
            }
          />
          <Route
            path="/contactUs"
            element={
              <React.Suspense fallback="loading">
                <LazyContactUs />
              </React.Suspense>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default Navbar;
