import { useState } from "react";
import aboutUsTitles from "./AboutUsTitles";
const CoreValues = () => {
  const [coreValuesCards] = useState([
    {
      vakuesimage: require("../images/Rectangle21.png"),
      valuesTitle: "Teamwork",
      valuesSecTitle:
        "We set inspiring goals that we pursue with passion, unity and focus. We support each other, build on our strengths and ensure that every player in our team contributes fully. We play to win and realise that synergy, communication and alignment bind us together.",
      id: 1,
    },
    {
      vakuesimage: require("../images/Rectangle22.png"),
      valuesTitle: "Respect",
      valuesSecTitle:
        "We build self-esteem by treating each other fairly, communicating directly and respectfully. We have empathy, discipline and build on our diversity as a source of strength, creativity and innovation.",
      id: 2,
    },
    {
      vakuesimage: require("../images/Rectangle23.png"),
      valuesTitle: "Integrity",
      valuesSecTitle:
        "We uphold the highest professional and ethical standards. We guard the reputation of our brands. Our promises are bankable.",
      id: 3,
    },
    {
      vakuesimage: require("../images/Rectangle24.png"),
      valuesTitle: "Commitment",
      valuesSecTitle:
        "We are accountable to our stakeholders and commit to deliver what we promise. We translate plans into actions; strategies into achievements and tangible returns.",
      id: 4,
    },
    {
      vakuesimage: require("../images/Rectangle8.png"),
      valuesTitle: "Excellence",
      valuesSecTitle:
        "We strive to be the best in our business. We improve all the time, in all aspects and passionately deliver at the highest level. We offer superior value and present our offering with pride.",
      id: 5,
    },
  ]);
  return (
    <section className="ourCoreValues">
      <h2>{aboutUsTitles.valuesHeading}</h2>
      <div className="outerCoreValues ">
        <div className="container">
          <div className="row justify-content-center">
            {coreValuesCards.map((coreCards) => (
              <div className="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 coreValueitem">
                <div className="coreCards" key={coreCards.id}>
                  <div className="card">
                    <img
                      src={coreCards.vakuesimage}
                      alt=""
                      className="img-fluid"
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{coreCards.valuesTitle}</h5>
                      <div className="cardSecTitle">
                        <p className="card-text">{coreCards.valuesSecTitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
