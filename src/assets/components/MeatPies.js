import { useState } from "react";
const MeatPies = () => {
  const [meatPieCards] = useState([
    {
      meatImage: require("../images/Rectangle 359.png"),
      meatTitle: "Family Loaf High Energy Brown",
      meatSecTitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      id: 1,
    },
    {
      meatImage: require("../images/Rectangle 359.png"),
      meatTitle: "Family Loaf High Energy Brown",
      meatSecTitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      id: 2,
    },
    {
      meatImage: require("../images/Rectangle 359.png"),
      meatTitle: "Family Loaf Soft White",
      meatSecTitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      id: 3,
    },
  ]);
  return (
    <section>
      <div className="container-fluid outermeat ">
        <div className="d-flex innermeat">
          {meatPieCards.map((meat) => (
            <div className="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
              <div className="card">
                <img src={meat.meatImage} alt="" className="img-fluid" />
                <div className="card-body">
                  <h5 className="card-title">{meat.meatTitle}</h5>
                  <p className="card-text mt-3">{meat.meatSecTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeatPies;
