import SubmitSecDonat from "./SubmitSecDonat";

const DonationModal = () => {
  return (
    <div className="donationModal">
      <div
        className="modal fade"
        id="donationToggle"
        tabindex="-1"
        aria-labelledby="ModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close float-rid"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
            <div className="modalText text-center">
              <h5 className="modal-title" id="exampleModalLabel">
                Request Product Donations
              </h5>
              <p>
                You can apply for product donations by completing this form, we
                will contact you should your application be successful. Please
                bear in mind that we will need at least 3 weeks' notice to the
                date of your event
              </p>
            </div>
            <div class="modal-body ">
              <div className="row modalForms">
                <div className="col-6 col-md-6 col-lg-6 formItem">
                  <div class="form-floating mb-4">
                    <input
                      type="Organaisation Name"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Name of Organisation"
                    />
                    <label for="floatingInput">Name of Organisation</label>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-lg-6 formItem">
                  <div class="form-floating mb-4">
                    <input
                      type="Contact Person"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Name of Contact Person"
                    />
                    <label for="floatingInput">Name of Contact Person</label>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-lg-6 formItem">
                  <div class="form-floating mb-4">
                    <input
                      type="Contact Person Position"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Contact Person Position"
                    />
                    <label for="floatingInput">Contact Person Position</label>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-lg-6 formItem">
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
                <div className="col-6 col-md-6 col-lg-6 formItem">
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
                <div className="col-6 col-md-6 col-lg-6 formItem">
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
                <div className="col-6 col-md-6 col-lg-6 formItem">
                  <div class="form-floating mb-4">
                    <input
                      type="Date of Event"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Date of Event"
                    />
                    <label for="floatingInput">Date of Event</label>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-lg-6 formItem">
                  <select
                    className="form-select mb-4"
                    aria-label="Default select example">
                    <option selected>Intended Use of Donation</option>
                    <option value="1">Intended Use of Donation</option>
                    <option value="2">Intended Use of Donation</option>
                    <option value="3">Intended Use of Donation</option>
                  </select>
                </div>
                <div className="col-6 col-md-6 col-lg-6 formItem">
                  <select
                    className="form-select mb-4"
                    aria-label="Default select example">
                    <option selected>Number of Attendants</option>
                    <option value="1">1-10</option>
                    <option value="2">11-20</option>
                    <option value="3">21-30</option>
                    <option value="4">31-40</option>
                    <option value="5">41-50</option>
                  </select>
                </div>
                <div className="col-6 col-md-6 col-lg-6 formItem">
                  <select
                    className="form-select mb-4"
                    aria-label="Default select example">
                    <option selected>
                      What Product Are Specifically Looking For?
                    </option>
                    <option value="1">Bread</option>
                    <option value="2">Meat Pies</option>
                    <option value="3">Scones</option>
                    <option value="3">Donuts</option>
                  </select>
                </div>
                <div className=" col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 formItem">
                  <button
                    className="btn mb-4 w-100"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#SubmitToggle">
                    SUBMIT
                  </button>
                  <SubmitSecDonat/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;
