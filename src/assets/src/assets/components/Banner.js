import { useState } from "react";

const Banner = () => {
  const [bannerText] = useState([
    {
      bannerTitle: "Bringing you the  ",
      bannTitleSpan:'best value ',
      bannTitleSpan2:'best prices.',
      bannerText:
        "The freshest sandwiches you can make are with Baker’s inn soft white loaf.",
      buttonText: "Read More",
    },
  ]);
  const [bannerImages] = useState([
    {
      image1: require("../images/Rectangle2.png"),
      image2: require("../images/Rectangle3.png"),
      image3: require("../images/Rectangle4.png"),
      image4: require("../images/Rectangle5.png"),
      id: 1,
    },
  ]);
  return (
    <div className="banner">
      <div className="innerBanner container row">
        {bannerText.map((banner) => (
          <div className="bannerItem col-12 col-md-12 col-lg-12 col-xl-4 col-xxl-4 align-items-center" key={banner}>
            <h1>{banner.bannerTitle} <span>{banner.bannTitleSpan}</span> at the <span>{banner.bannTitleSpan2}</span> </h1>
            <p>{banner.bannerText}</p>
            <div className="btn">{banner.buttonText}</div>

          </div>
        ))}

        <div className="col-12 col-md-8 col-lg-12 col-xl-8 col-xxl-8">
          {bannerImages.map((images) => (
            <section>
              <div className="bannerImages">
                <img src={images.image1} alt="" />
                <img src={images.image2} alt="" />
                <img src={images.image3} alt="" />
                <img src={images.image4} alt="" />
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
