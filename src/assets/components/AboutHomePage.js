import { useState } from "react";

const AboutHomePage = () => {
  const [aboutImages] = useState([
    {
      imageAbout: require("../images/Rectangle6.png"),
      id: 1,
    },
    {
      imageAbout: require("../images/Rectangle7.png"),
      id: 2,
    },
    {
      imageAbout: require("../images/Rectangle8.png"),
      id: 3,
    },
    {
      imageAbout: require("../images/Rectangle9.png"),
      id: 4,
    },
  ]);
  return (
    <div className="row g-3 AboutImages">
      {aboutImages.map((imagesAb) => (
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3  AboutBakerInnImages">
          <img src={imagesAb.imageAbout} alt="pies" className="img-fluid" />
        </div>
      ))}
    </div>
  );
};

export default AboutHomePage;
