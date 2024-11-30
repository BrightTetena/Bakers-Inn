import { useState } from "react";
const ProductsDonuts = () => {
  const [donutCards] = useState([
    {
      donutImage: require("../images/Rectangle 359-3.png"),
      donutTitle: "Chocolate Donut",
      donutSecTitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      id: 1,
    },
    {
      donutImage: require("../images/Rectangle 359-2.png"),
      donutTitle: "Chocolate Donut",
      donutSecTitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      id: 2,
    },
    {
      donutImage: require("../images/Rectangle 359-3.png"),
      donutTitle: "Chocolate Donut",
      donutSecTitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      id: 3,
    },
  ]);
  return (
    <section>
      <div className="container-fluid outerDonut">
        <div className="d-flex innerDonut">
          {donutCards.map((donut) => (
            <div className="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
              <div className="card">
                <img src={donut.donutImage} alt="" className="img-fluid" />
                <div className="card-body">
                  <h5 className="card-title">{donut.donutTitle}</h5>
                  <p className="card-text mt-3">{donut.donutSecTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsDonuts;
