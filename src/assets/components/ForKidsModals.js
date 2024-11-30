const ForKidsModals = () => {
  const KidModal = {
    image: require("../images/Rectangle6.png"),

    modalTitle: "Shwarma Sandwich",
    modalTime: "5 Minutes",
    modalTimeImg: require("../images/time.png"),
    modalServeImg: require("../images/serve.png"),
    modalServe: "6 People",

    modalTitle2: "Ingredients",
    modalLine: require("../images/line.png"),
    modaltext: "½ cup olive oil",
    modaltext2: "2 teaspoons salt",
    modaltext3: "½ cup ranch dressing",
    modaltext4: "1 teaspoon lemon juice",
    modaltext5: "3 tablespoons Worcestershire sauce",
    modaltext6: "1 teaspoon white vinegar",
    modaltext7: "1 tablespoon minced fresh rosemary",
    modaltext8: "¼ teaspoon ground black pepper",
    modalTitle3: "Directions",
    modalStepTitle: "Step 1",
    modulStepText:
      "In a medium bowl, stir together the olive oil, ranch dressing, Worcestershire sauce, rosemary, salt, lemon juice, white vinegar, pepper, and sugar. Let stand for 5 minutes. Place chicken in the bowl, and stir to coat with the marinade. Cover and refrigerate for 30 minutes.",
    modalStepTitle2: "Step 2",
    modulStepText2:
      "`Preheat the grill for medium-high heat. Thread chicken onto skewers and discard marinade.",
    modalStepTitle3: "Step 3",
    modulStepText3:
      "Lightly oil the grill grate. Grill skewers for 8 to 12 minutes, or until the chicken is no longer pink in the center, and the juices run clear.",
  };
  // const [forVegansModal] = useState([
  //   {
  //     image: require("../images/Rectangle6.png"),
  //     modalTitle: "Sweet Shortbread",
  //     modalTime: "5 Minutes",
  //     modalServe: "6 People",
  //     modalTitle2: "Ingredients",
  //     modalLine: require("../images/line.png"),
  //     modaltext: "½ cup olive oil",
  //     modaltext2: "2 teaspoons salt",
  //     modaltext3: "½ cup ranch dressing",
  //     modaltext4: "1 teaspoon lemon juice",
  //     modaltext5: "3 tablespoons Worcestershire sauce",
  //     modaltext6: "1 teaspoon white vinegar",
  //     modaltext7: "1 tablespoon minced fresh rosemary",
  //     modaltext8: "¼ teaspoon ground black pepper",
  //     modalTitle3: "Directions",
  //     modalStepTitle: "Step 1",
  //     modulStepText:
  //       "In a medium bowl, stir together the olive oil, ranch dressing, Worcestershire sauce, rosemary, salt, lemon juice, white vinegar, pepper, and sugar. Let stand for 5 minutes. Place chicken in the bowl, and stir to coat with the marinade. Cover and refrigerate for 30 minutes.",
  //     modalStepTitle2: "Step 2",
  //     modulStepText2:
  //       "`Preheat the grill for medium-high heat. Thread chicken onto skewers and discard marinade.",
  //     modalStepTitle3: "Step 3",
  //     modulStepText3:
  //       "Lightly oil the grill grate. Grill skewers for 8 to 12 minutes, or until the chicken is no longer pink in the center, and the juices run clear.",
  //     id: 1,
  //   },
  // ]);

  // const [forFamilyModal] = useState([
  //   {
  //     image: require("../images/Rectangle6.png"),
  //     modalTitle: "Salmon Strips",
  //     modalTime: "5 Minutes",
  //     modalServe: "6 People",
  //     modalTitle2: "Ingredients",
  //     modalLine: require("../images/line.png"),
  //     modaltext: "½ cup olive oil",
  //     modaltext2: "2 teaspoons salt",
  //     modaltext3: "½ cup ranch dressing",
  //     modaltext4: "1 teaspoon lemon juice",
  //     modaltext5: "3 tablespoons Worcestershire sauce",
  //     modaltext6: "1 teaspoon white vinegar",
  //     modaltext7: "1 tablespoon minced fresh rosemary",
  //     modaltext8: "¼ teaspoon ground black pepper",
  //     modalTitle3: "Directions",
  //     modalStepTitle: "Step 1",
  //     modulStepText:
  //       "In a medium bowl, stir together the olive oil, ranch dressing, Worcestershire sauce, rosemary, salt, lemon juice, white vinegar, pepper, and sugar. Let stand for 5 minutes. Place chicken in the bowl, and stir to coat with the marinade. Cover and refrigerate for 30 minutes.",
  //     modalStepTitle2: "Step 2",
  //     modulStepText2:
  //       "`Preheat the grill for medium-high heat. Thread chicken onto skewers and discard marinade.",
  //     modalStepTitle3: "Step 3",
  //     modulStepText3:
  //       "Lightly oil the grill grate. Grill skewers for 8 to 12 minutes, or until the chicken is no longer pink in the center, and the juices run clear.",
  //     id: 1,
  //   },
  // ]);

  return (
    <div className="modals">
      <div
        className="modal fade"
        id="modalToggle"
        tabindex="-1"
        aria-labelledby="ModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div className="modalContent">
            <div class="modal-body ">
              <button
                type="button"
                className="btn-close rounded-circle"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
              <div className="modalItems">
                <div className="allImages row">
                  <div className="innerimage g-0 row col-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="image col-12 col-md-12">
                      <img src={KidModal.image} alt="" className="img-fluid" />
                    </div>
                    <div className="image col-12 col-md-6">
                      <img src={KidModal.image} alt="" className="img-fluid" />
                    </div>
                    <div className="image col-12 col-md-6">
                      <img src={KidModal.image} alt="" className="img-fluid" />
                    </div>
                    <div className="image col-12 col-md-6">
                      <img src={KidModal.image} alt="" className="img-fluid" />
                    </div>
                    <div className="image col-12 col-md-6">
                      <img src={KidModal.image} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="modalDetailsImage col-12 col-md-4 col-lg-8 col-xl-8 col-xxl-8">
                    <div className="modalTitles d-flex justify-content-between">
                      <h5 className="modal-title">{KidModal.modalTitle}</h5>
                    </div>

                    <div className="d-flex serveTime">
                      <div className="timePeople d-flex align-items-center">
                        <img
                          src={KidModal.modalTimeImg}
                          alt=""
                          className="img-fluid"
                        />
                        <p>{KidModal.modalTime}</p>
                      </div>
                      <div className="timePeople d-flex align-items-center">
                        <img
                          src={KidModal.modalServeImg}
                          alt=""
                          className="img-fluid mx-4"
                        />
                        <p className="">{KidModal.modalServe}</p>
                      </div>
                    </div>

                    <div className="ingredients heading">
                      <div className="ingridTitle  d-flex">
                        <h5 className="modal-title">{KidModal.modalTitle2}</h5>
                        <div className="lineDot ">
                          <img
                            src={require("../images/line.png")}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="indridValues">
                      <small>{KidModal.modaltext}</small>
                      <small>{KidModal.modaltext2}</small>
                      <small>{KidModal.modaltext3}</small>
                      <small>{KidModal.modaltext4}</small>
                      <small>{KidModal.modaltext5}</small>
                      <small>{KidModal.modaltext6}</small>
                      <small>{KidModal.modaltext7}</small>
                      <small>{KidModal.modaltext8}</small>
                    </div>

                    <div className="directions heading">
                      <div className="ingridTitle  d-flex">
                        <h5 className="modal-title">{KidModal.modalTitle3}</h5>
                        <div className="lineDot ">
                          <img
                            src={require("../images/line.png")}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="steps">
                      <div className="d-flex">
                        <div className="stepTitleText">
                          <h5 className="modal-title">
                            {KidModal.modalStepTitle}
                          </h5>
                          <small>{KidModal.modulStepText}</small>
                        </div>
                        <div className="stepTitleText">
                          <h5 className="modal-title">
                            {KidModal.modalStepTitle2}
                          </h5>
                          <small>{KidModal.modulStepText2}</small>
                        </div>
                        <div className="stepTitleText">
                          <h5 className="modal-title">
                            {KidModal.modalStepTitle3}
                          </h5>
                          <small>{KidModal.modulStepText3}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForKidsModals;
