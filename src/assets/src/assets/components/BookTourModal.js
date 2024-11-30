import { NavLink } from "react-router-dom";

const BookTourModal = () => {
  return (
    <div className="BookModal">
      <div
        className="modal fade"
        id="bookTourToggle"
        tabindex="-1"
        aria-labelledby="ModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div className="modal-content">

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
            
              <h5 className="modal-title text-center pb-4" id="exampleModalLabel">
                Book A Factory Tour
              </h5>
            
            <div class="modal-body ">
              <div className="row modalForms">
                <div className="col-6 col-md-6 col-lg-6 modalFormItems">
                  <div class="form-floating mb-2">
                    <input
                      type="Organaisation Name"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Name of Organisation"
                    />
                    <label for="floatingInput">Name of Organisation</label>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-lg-6 modalFormItems">
                  <div class="form-floating mb-4">
                    <input
                      type="name"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Name of Contact Person"
                    />
                    <label for="floatingInput">Name of Contact Person</label>
                  </div>
                </div>

                <div className="col-6 col-md-6 col-lg-6 modalFormItems">
                  <div class="form-floating mb-4">
                    <input
                      type="Organization Address"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Organization Address"
                    />
                    <label for="floatingInput">Organization Address</label>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-lg-6 modalFormItems">
                  <div class="form-floating mb-4">
                    <input
                      type="Organization's Resident Town"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Organization's Resident Town"
                    />
                    <label for="floatingInput">
                      Organization's Resident Town
                    </label>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-lg-6 modalFormItems">
                  <div class="form-floating mb-4">
                    <input
                      type="Contact Person's Telephone"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Contact Person's Telephone"
                    />
                    <label for="floatingInput">
                      Contact Person's Telephone
                    </label>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-lg-6 modalFormItems">
                  <div class="form-floating mb-4">
                    <input
                      type="Email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Contact Person's E-mail"
                    />
                    <label for="floatingInput">Contact Person's E-mail</label>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-lg-6 modalFormItems">
                  <div class="form-floating mb-4">
                    <input
                      type="Date"
                      class="form-control date"
                      id="floatingInput"
                      placeholder="Date"
                    />
                    <label for="floatingInput">Date of Visit</label>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-lg-6 modalFormItems">
                  <select
                    className="form-select mb-4"
                    aria-label="Default select example">
                    <option selected>Number of Participants</option>
                    <option value="1">1-10</option>
                    <option value="2">11-20</option>
                    <option value="3">21-30</option>
                    <option value="4">31-40</option>
                    <option value="5">41-50</option>
                  </select>
                </div>
                <div className="col-12 col-md-12 col-lg-12 modalFormItems">
                  <select
                    className="form-select mb-4"
                    aria-label="Default select example">
                    <option selected>Age Range of Participants</option>
                    <option value="1">6-12</option>
                    <option value="2">13-18</option>
                    <option value="3">19-29</option>
                    <option value="4">30-45</option>
                    <option value="5">46-60</option>
                  </select>
                </div>

                <div className="col-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 modalFormItems">
                  <p className="firstP text-end">
                    Plant Visit{" "}
                    <span>
                      <NavLink>Terms & Conditions</NavLink>
                    </span>
                  </p>
                </div>
                <div className="col-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 modalFormItems">
                  <p>
                    Plant Visit{" "}
                    <span>
                      <NavLink>Safety Requlations</NavLink>
                    </span>
                  </p>
                </div>
                <div className=" col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 modalFormItems">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="CheckBox"
                    />
                    <label className="form-check-label checkBox pb-3" for="CheckBox">
                      Your organisation has agreed to the submission of this
                      application and you have authorisation to submit it. The
                      information you have provided on behalf of your
                      organisation is accurate, full and correct.{" "}
                    </label>
                  </div>
                </div>
                <div className=" col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 modalFormItems">
                  <div className="form-check pb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="CheckBox"
                    />
                    <label className="form-check-label checkBox" for="CheckBox">
                      Have Read The Safety Regulations
                    </label>
                  </div>
                </div>
                <div className=" col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 modalFormItems">
                  <button className="btn mb-4 w-100">SUBMIT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTourModal;
