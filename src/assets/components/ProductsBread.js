import { useState } from "react";
const ProductsBread = () => {
  const [breadCards] = useState([
    {
      breadImage: require("../images/Rectangle2.png"),
      breadTitle: "Family Loaf High Energy Brown",
      breadSecTitle: `Our Premium Soft White loaves are delightfully soft, fresh and delicious. They are loaded with energy and fortified with vitamins and minerals for the classic everyday bread. The Standard Loaf has 18 slices.`,
      id: 1,
    },
    {
      breadImage: require("../images/Rectangle2.png"),
      breadTitle: "Family Loaf High Energy Brown",
      breadSecTitle: `Our Family Loaf High Energy Brown loaves are a great source of fibre, high in energy and fortified with vitamins and minerals! They are perfect for sandwiches, toast, breadcrumbs  anything! The Family Loaf has 21 slices.`,
      id: 2,
    },
    {
      breadImage: require("../images/Rectangle2.png"),
      breadTitle: "Family Loaf Soft White",
      breadSecTitle: `Our Family Loaf Soft White loaves are delightfully soft, fresh and delicious. They are loaded with energy and fortified with vitamins and minerals for the classic everyday bread. The Family Loaf has 21 slices.`,
      id: 3,
    },
 
  
  ]);
  return (
    <section>
      <div className="container-fluid outerBread ">
        <div className="d-flex innerBread">
          {breadCards.map((bread) => (
            <div className="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
              <div className="card">
                <img src={bread.breadImage} alt="" className="img-fluid" />
                <div className="card-body">
                  <h5 className="card-title">{bread.breadTitle}</h5>
                  <p className="card-text mt-3">{bread.breadSecTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsBread;
