import { useState } from "react";
import homePageTitles from "./HomePageTitles";
import homeImages from "./HomeImages";
import ForKidsModals from "./ForKidsModals";
import ForVegansModals from "./ForVegansModals";
import ForFamilyModals from "./ForFamilyModals";
const Cards = () => {
  const [forKids] = useState([
    {
      cardName: "Shwarma Sandwich",
      prepText: "Prep Time:",
      prepTime: "20 min",

      id: 1,
    },
    {
      cardName: "Shwarma Sandwich",
      prepText: "Prep Time:",
      prepTime: "20 min",
      id: 2,
    },
    {
      cardName: "Shwarma Sandwich",
      prepText: "Prep Time:",
      prepTime: "20 min",
      id: 3,
    },
  ]);

  const [forVegans] = useState([
    {
      cardName: "Sweet Shortbread",
      prepText: "Prep Time:",
      prepTime: "20 min",
      id: 1,
    },
    {
      cardName: "Sweet Shortbread",
      prepText: "Prep Time:",
      prepTime: "20 min",
      id: 2,
    },
    {
      cardName: "Sweet Shortbread",
      prepText: "Prep Time:",
      prepTime: "20 min",
      id: 3,
    },
  ]);

  const [forFamily] = useState([
    {
      cardName: "Salmon Strips",
      prepText: "Prep Time:",
      prepTime: "20 min",
      id: 1,
    },
    {
      cardName: "Salmon Strips",
      prepText: "Prep Time:",
      prepTime: "20 min",
      id: 2,
    },
    {
      cardName: "Salmon Strips",
      prepText: "Prep Time:",
      prepTime: "20 min",
      id: 3,
    },
  ]);

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="bakersRecipes">
      <div className="container outerBakersRec ">
        <h2>{homePageTitles.receipesTitle}</h2>

        <div className="bloc-tabs pb-5">
          <div
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}>
            <li>For Kids</li>
          </div>
          <div
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}>
            <li className="overlay">For Vegans</li>
          </div>
          <div
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}>
            <li className="overlay">For Family</li>
          </div>
        </div>

        <div className="content-tabs container">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }>
            <div className="row">
              {forKids.map((kids) => (
                <div className=" col-12 Item col-md-4 col-lg-4">
                  <div className="bakercard" key={kids.id}>
                    <div className="card">
                      <img
                        src={homeImages.image6}
                        alt=""
                        srcset=""
                        className="img-fluid"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{kids.cardName}</h5>
                        <div className="cardContainer">
                          <p className="card-text">
                            {kids.prepText}
                            <span>{kids.prepTime}</span>
                          </p>
                          <p className="card-text">
                            Serves:{" "}
                            <span className="cardPeople"> 6 people</span>
                          </p>
                          <button
                            className="btn rounded-circle float-end"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#modalToggle">
                            <svg class="svg-icon" viewBox="0 0 20 20">
                              <path
                                fill="none"
                                d="M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0
                                l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109
                                c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483
                                c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788
                                S1.293,9.212,1.729,9.212z"
                              />
                            </svg>
                          </button>
                          <ForKidsModals />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }>
            <div className="row">
              {forVegans.map((vegans) => (
                <div className="col-12 Item col-md-4 col-lg-4">
                  <div className="bakercard" key={vegans.id}>
                    <div className="card">
                      <img
                        src={homeImages.image27}
                        alt=""
                        srcset=""
                        className="img-fluid"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{vegans.cardName}</h5>
                        <p className="card-text">
                          {vegans.prepText}
                          <span>{vegans.prepTime}</span>
                        </p>
                        <p className="card-text">
                          Serves: <span className="cardPeople">6 people</span>
                        </p>
                        <button
                            className="btn rounded-circle float-end"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#veganToogle">
                            <svg class="svg-icon" viewBox="0 0 20 20">
                              <path
                                fill="none"
                                d="M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0
                                l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109
                                c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483
                                c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788
                                S1.293,9.212,1.729,9.212z"
                              />
                            </svg>
                          </button>
                          <ForVegansModals/>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }>
            <div className="row">
              {forFamily.map((family) => (
                <div className="col-12 Item col-md-4 col-lg-4">
                  <div className="bakercard" key={family.id}>
                    <div className="card">
                      <img
                        src={homeImages.image28}
                        alt=""
                        srcset=""
                        className="img-fluid"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{family.cardName}</h5>
                        <p className="card-text">
                          {family.prepText}
                          <span>{family.prepTime}</span>
                        </p>
                        <p className="card-text">
                          Serves: <span className="cardPeople">6 people</span>
                        </p>
                        <button
                            className="btn rounded-circle float-end"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#familyToogle">
                            <svg class="svg-icon" viewBox="0 0 20 20">
                              <path
                                fill="none"
                                d="M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0
                                l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109
                                c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483
                                c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788
                                S1.293,9.212,1.729,9.212z"
                              />
                            </svg>
                          </button>
                          <ForFamilyModals/>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
