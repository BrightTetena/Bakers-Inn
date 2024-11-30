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
      <div className="backgroungColor">
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid innerNav">
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
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav   ">
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
              <React.Suspense fallback='loading'>
                <LazyHome />
              </React.Suspense>
            }
          />
          <Route
            path="/aboutUs"
            element={
              <React.Suspense fallback='loading'>
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route
            path="/products"
            element={
              <React.Suspense fallback='loading'>
                <LazyProducts />
              </React.Suspense>
            }
          />
          <Route
            path="/recipes"
            element={
              <React.Suspense fallback='loading'>
                <LazyRecipes />
              </React.Suspense>
            }
          />
          <Route
            path="/kidsCorner"
            element={
              <React.Suspense fallback='loading'>
                <LazyKidsCorner />
              </React.Suspense>
            }
          />
          <Route
            path="/contactUs"
            element={
              <React.Suspense fallback='loading'>
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
