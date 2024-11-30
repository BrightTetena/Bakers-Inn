import homeImages from "../assets/components/HomeImages";
import ItemsFooter from "../assets/components/ItemsFooter";
import ProductsBread from "../assets/components/ProductsBread";
import MeatPies from "../assets/components/MeatPies";
import ProductsScones from "../assets/components/ProductScones";
import { useState } from "react";
import ProductsDonuts from "../assets/components/ProductsDonuts";
import PageTransions from "../assets/components/PageTransions";
const Products = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <PageTransions>
        <section className="productsPage">
          <div className="productsBanner col-12 container-fluid">
            <img src={homeImages.image30} alt="" className="img-fluid" />
            <h1>Our Product Range</h1>
            <img src={require('../assets/images/Vector.png')} alt="" className="img-fluid vectorLines" />
          </div>

          <div className="ourProducts">
            <h2>Our Products</h2>

            <div className="bloc-tabs pb-5">
              <div
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}>
                <li>Bread</li>
              </div>
              <div
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}>
                <li className="overlay">Meat Pies</li>
              </div>
              <div
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}>
                <li className="overlay">Scones</li>
              </div>
              <div
                className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(4)}>
                <li className="overlay">Donuts</li>
              </div>
            </div>
            <div className="content-tabs container">
              <div
                className={
                  toggleState === 1 ? "content  active-content" : "content"
                }>
                <ProductsBread />
              </div>
              <div
                className={
                  toggleState === 2 ? "content  active-content" : "content"
                }>
                <MeatPies />
              </div>

              <div
                className={
                  toggleState === 3 ? "content  active-content" : "content"
                }>
                <ProductsScones />
              </div>
              <div
                className={
                  toggleState === 4 ? "content  active-content" : "content"
                }>
                <ProductsDonuts />
              </div>
            </div>
          </div>

          <ItemsFooter />
        </section>
      </PageTransions>
    </>
  );
};

export default Products;
