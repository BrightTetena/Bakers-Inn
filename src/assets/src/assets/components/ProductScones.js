import { useState } from "react";

const ProductsScones = () => {
  const [sconesCards] = useState([
    {
      sconesImage: require("../images/Rectangle 359-1.png"),
      sconesTitle: "Sugar Free Scone",
      sconesSecTitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      id: 1,
    },
    {
      sconesImage: require("../images/Rectangle 359-1.png"),
      sconesTitle: "Sugar Free Scone",
      sconesSecTitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      id: 2,
    },
    {
      sconesImage: require("../images/Rectangle 359-1.png"),
      sconesTitle: "Sugar Free Scone",
      sconesSecTitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      id: 3,
    },
  ]);
  return (
    <section>
      <div className="container-fluid outerScones">
        <div className="d-flex innerScones">
          {sconesCards.map((scones) => (
            <div className="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
              <div className="card">
                <img src={scones.sconesImage} alt="" className="img-fluid" />
                <div className="card-body">
                  <h5 className="card-title">{scones.sconesTitle}</h5>
                  <p className="card-text mt-3">{scones.sconesSecTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsScones;
