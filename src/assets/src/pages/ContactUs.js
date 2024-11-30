import { useState } from "react";
import homeImages from "../assets/components/HomeImages";
import ItemsFooter from "../assets/components/ItemsFooter";
import PageTransions from "../assets/components/PageTransions";
const ContactUs = () => {
  const [addresses] = useState([
    {
      addressImage: require("../assets/images/Rectangle 669.png"),
      addressHeading: "Harare Bread Factory",
      addressLocation: "1 Shepperton Road, Graniteside, Harare",
      addressContact: "+263 242 710334, +263 242 751481,",
      addressContac2: "+263 242 751572, +263 242 758659",
      addressVoip: "VOIP:",
      addressVoipNumber: "08677006178",
      addressToll: "Econet Toll Free:",
      addressTollNum: "08080151, 08080152",
    },
    {
      addressImage: require("../assets/images/Rectangle 670.png"),
      addressHeading: "Bulawayo Bread Factory",
      addressLocation: "22 A Bellevue Road, Belmont, Bulawayo",
      addressContact: "+263 9 78279, +263 9 68826, +263 9 68381, ",
      addressContac2: "+263 9 68383, +263 9 69592, +263 9 76693",
      addressVoip: "VOIP:",
      addressVoipNumber: "08677006179",
      addressToll: "Econet Toll Free:",
      addressTollNum: "08080151, 08080152",
    },
  ]);

  const [bakersDepots] = useState([
    //*** Depot ***//
    {
      heading: "Depot",
      title: "Chinhoyi Depot",
      title2: "Bindura Depot",
      title3: "Murehwa Depot",
      title4: "Mutare Depot",
      title5: "Hwange Depot",
      title6: "Chiredzi Depot",
      title7: "Masvingo Depot",
      title8: "Gweru Depot",
      title9: "Zvishavane Depot",
      id: 1,
    },
    //*** Address ***//
    {
      heading: "Address",
      title: "94/95 Josiah Tongogara St, Industrial Site, Chinhoyi",
      title2: "461 Luton Road, Industrial Site, Bindurat",
      title3: "Stand number 351 Murehwa Growth Point",
      title4: "5-7 Glasgow Road, Industrial Site, Mutare",
      title5: "29 Derby Drive, Hwange Industrial Site",
      title6: "329 Lion Drive, Chiredzi",
      title7: "1310 Mineral Road, Masvingo",
      title8: "1843 Main Street, Gweru",
      title9: "Shabanie Mine Club, Noelville, Zvishavane",
      id: 2,
    },
    //*** Phone Numbers ***//
    {
      heading: "Address",
      title: "0772 318 309",
      title2: "066 2107317",
      title3: "0652 122 514",
      title4: "020 60715",
      title5: "0281 2820105",
      title6: "0231 231 2709",
      title7: "039 266 333",
      title8: "054 2220 858",
      title9: "0772 395567",
      id: 3,
    },
  ]);

  const [enquiriesJobEmail] = useState([
    {
      title: "For job enquiries , email your CV to",
      email: "hr@bakersinnzim.com",
      id: 1,
    },
    {
      title: "For general enquiries, email",
      email: "marketing@bakersinnzim.com",
      id: 2,
    },
  ]);
  return (
    <>
      <PageTransions>
        <section className="contactUsPage">
          <div className="contactUsBanner col-12 container-fluid">
            <img src={homeImages.image33} alt="" className="img-fluid" />
            <h1>Contact Us</h1>
            <img src={require('../assets/images/Vector.png')} alt="" className="img-fluid vectorLines" />
          </div>

          <div className="contactAddresses  ">
            <div className=" outerContact">
              <div className="row innerContact ">
                {addresses.map((contact) => (
                  <div
                    className="col-12 col-md-6 col-lg-6 justify-content-evenly contactAdresssItem"
                    key={contact.id}>
                    <img
                      src={contact.addressImage}
                      alt=""
                      className="img-fluid"
                    />
                    <h3 className="card-title pt-3 pb-3">
                      {contact.addressHeading}
                    </h3>
                    <p className="card-text ">{contact.addressLocation}</p>
                    <div className="contactMid  ">
                      <p className="card-text">{contact.addressContact}</p>
                      <p className="card-text pb-2">{contact.addressContac2}</p>
                    </div>

                    <div className="voip">
                      <p className="card-text ">
                        <span>{contact.addressVoip}</span>{" "}
                        {contact.addressVoipNumber}
                      </p>
                      <p className="card-text ">
                        <span>{contact.addressToll}</span>{" "}
                        {contact.addressTollNum}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="depots">
            <div className="container outerDepots">
              <h1 className="text-center pb-3">List Of Baker's Inn Depots</h1>
              <div className=" innerDeports">
                {bakersDepots.map((depot) => (
                  <div className="depotsItem" key={depot.id}>
                    <div className="titleBorder">
                      <h3 className="card-title">{depot.heading}</h3>
                    </div>
                    <div className="locationBorder">
                      <p className="card-text pt-3">{depot.title}</p>
                      <p className="card-text">{depot.title2}</p>
                      <p className="card-text">{depot.title3}</p>
                      <p className="card-text">{depot.title4}</p>
                      <div className="py-3"></div>
                      <p className="card-text">{depot.title5}</p>
                      <p className="card-text">{depot.title6}</p>
                      <p className="card-text">{depot.title7}</p>
                      <p className="card-text">{depot.title8}</p>
                      <p className="card-text">{depot.title9}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="enquiries">
            <div className="container">
              <img
                src={require("../assets/images/Rectangle 31.png")}
                alt=""
                className="img-fluid"
              />
              <div className="enqTitles pt-5">
                {enquiriesJobEmail.map((job) => (
                  <div className="enquiriesItem" key={job.id}>
                    <h3>{job.title}</h3>
                    <p>{job.email}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="emailUs">
            <div className="text-center pb-3">
              <h2>Request A Callback</h2>
              <p>
                Complete the form below and we will respond within 24 hours.
              </p>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6 formItem">
                  <select
                    className="form-select mb-4"
                    aria-label="Default select example">
                    <option selected>Your Title</option>
                    <option value="1">Mrs</option>
                    <option value="2">Mr</option>
                    <option value="3">Dr</option>
                  </select>
                </div>

                <div className="col-12 col-md-6 col-lg-6 formItem">
                  <div class="form-floating mb-4">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Enter yourName"
                    />
                    <label for="floatingInput">Your Name</label>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-6 formItem">
                  <div class="form-floating mb-4">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Your Phone Number"
                    />
                    <label for="floatingInput">Your Phone Number</label>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 formItem">
                  <div class="form-floating mb-4">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />

                    <label for="floatingInput">Your E-Mail</label>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 formItem">
                  <select
                    class="form-select mb-4"
                    aria-label="Default select example">
                    <option selected>Select Area Of Interest</option>
                    <option value="1">Select Area Of Interest</option>
                  </select>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 formItem">
                  <select
                    class="form-select mb-4"
                    aria-label="Default select example">
                    <option selected>Nature Of Enquiry</option>
                    <option value="1">Nature Of Enquiry</option>
                  </select>
                </div>
                <div className=" col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12  formItem">
                  <select
                    class="form-select mb-4"
                    aria-label="Default select example">
                    <option selected>
                      Do You Want To Be Contacted By Phone
                    </option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                  </select>
                </div>
                <div className=" col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12  formItem">
                  <div className="form-floating mb-4">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Your Message</label>
                  </div>
                </div>
                <div className=" col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 formItem">
                  <button className="btn mb-4">SUBMIT</button>
                </div>
              </div>
            </div>
          </div>

          <ItemsFooter />
        </section>
      </PageTransions>
    </>
  );
};

export default ContactUs;
