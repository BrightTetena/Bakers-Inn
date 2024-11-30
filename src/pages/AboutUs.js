import aboutUsTitles from "../assets/components/AboutUsTitles";
import footer from "../assets/components/Footer";
import homeImages from "../assets/components/HomeImages";
import CoreValues from "../assets/components/OurCoreValues";
import { useState } from "react";
import PageTransions from "../assets/components/PageTransions";
const AboutUs = () => {
  const [visonsMissionTextImages] = useState([
    {
      visionMissionTitle: "Our Mission",
      visionMissionSecTitle:
        "To sharpen our edge in the manufacture and marketing of quality baked products.",
      visionMissionImage: require("../assets/images/Rectangle19.png"),
      id: 1,
    },
    {
      visionMissionTitle: "Our Mission",
      visionMissionSecTitle:
        "To sharpen our edge in the manufacture and marketing of quality baked products.",
      visionMissionImage: require("../assets/images/Rectangle20.png"),
      id: 2,
    },
  ]);
  return (
    <>
      <PageTransions>
        <section className="aboutUs">
          <div className="aboutBanner container-fluid ">
            <img src={homeImages.image19} alt="" className="img-fluid" />
            <h1></h1>
            <img src={require('../assets/images/Vector.png')} alt="" className="img-fluid vectorLines" />
          </div>

          <div className="ourVisions ">
            <div className="outerVisions">
              <div className="row container innerOurVisions">
                {visonsMissionTextImages.map((mission) => (
                  <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ourVisionItem">
                    <div className="d-flex align-items-center" key={mission.id}>
                      <div className="missionLogo">
                        <img
                          src={mission.visionMissionImage}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="missionText">
                        <h2>{mission.visionMissionTitle}</h2>
                        <p>{mission.visionMissionSecTitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <CoreValues />

          <div className="aboutCeo">
            <div className="container outerAboutCeo">
              <div className="row align-items-center innerAboutCeo ">
                <div className="col-12 col-md-12 col-lg-6 AboutCeoItem">
                  <img src={homeImages.image26} alt="" className="img-fluid" />
                </div>
                <div className="col-12 col-md-12 col-lg-6 AboutCeoItem">
                  <div className="ceoPadd">
                    <h2 className="pb-3">{aboutUsTitles.ceoHeading}</h2>
                    <p>{aboutUsTitles.ceoTitle}</p>
                    <p>{aboutUsTitles.ceoSecTitle}</p>
                    <p>{aboutUsTitles.ceoThirdTitle}</p>
                    <div className="ceoSignature text-end">
                      <p>
                        {aboutUsTitles.ceo4thTitle}{" "}
                        <span>{aboutUsTitles.ceo5thTitle}</span>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer />
        </section>
      </PageTransions>
    </>
  );
};

export default AboutUs;
