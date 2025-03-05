import React from "react";
import "../styles/features.css";
import search from "../gifs/search.gif";
import puzzle from "../gifs/puzzle.gif";
import statis from "../gifs/statis.gif";
import noti from "../gifs/noti.gif";
import rock from "../gifs/rock.gif";
import proct from "../gifs/proct.gif";// Add a suitable gif/icon for Fake Call Alert

const Features = () => {
  // Function to open Complaint Form in a new tab
  const handleIncidentReportClick = () => {
    window.open("/complaint-form", "_blank"); // Opens Complaint Form page in a new tab
  };

  // Function to open Fake Call Alert System page in a new tab
  const handleFakeCallClick = () => {
    window.open("/caller-input", "_blank"); // Opens Caller Input page in a new tab
  };

  return (
    <div>
      <section id="features" className="features_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <p className="features_subtitle">Feature-Packed Driving</p>
              <h2 className="features_title">Our Automated Features</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-1 text-center header-img-section">
                <img src={search} width={150} />
                <h3 className="mt-4">Emergency Mail Alert</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                  We take your security seriously, and that's why we've implemented Mailing systems. 
                  Your information is safeguarded with the latest encryption technology, ensuring your 
                  safety and security. Allowing users to track loved ones!
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-2 text-center header-img-section">
                <img src={puzzle} width={150} />
                <h3 className="mt-4">Emergency Service Support</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                  Get ready to explore every angle, every detail, and every curve of security. 
                  Get email and mobile notifications when a person is in danger by just one tap, 
                  and all SOS messages will be sent with precise locations.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-1 text-center header-img-section">
                <img src={statis} width={150} />
                <h3 className="mt-4">Incident Reporting</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                  We take your community seriously, and that's why we've implemented 
                  Incident Reporting for the community. Your details and information 
                  are safeguarded with the latest encryption technology, ensuring your 
                  privacy.
                </p>
                <button className="btn btn-primary mt-2" onClick={handleIncidentReportClick}>
                  Report an Incident
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-2 text-center header-img-section">
                <img src={noti} width={150} />
                <h3 className="mt-4">Live Location</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                  Using the latest technology and widely available devices, 
                  we utilize live location tracking to safeguard victims 
                  from unnecessary threats and keep them safe.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-1 text-center header-img-section">
                <img src={rock} width={150} />
                <h3 className="mt-4">Emergency Chat</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                  In an emergency, you need help in every way possible. 
                  Our operators, connected with government officials, 
                  will assist you in getting out of dangerous situations.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-2 text-center header-img-section">
                <img src={proct} width={150} />
                <h3 className="mt-4">Mail Services</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                  Get notified via email about every detail and update 
                  regarding the app, prompting you when your loved ones 
                  are in danger.
                </p>
              </div>
            </div>
            {/* Fake Call Alert System Feature */}
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-1 text-center header-img-section">
                <h3 className="mt-4">Fake Call Alert</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                  Need to escape a dangerous situation? Use our Fake Call Alert system 
                  to simulate a real call and get out of an uncomfortable scenario safely.
                </p>
                <button className="btn btn-danger mt-2" onClick={handleFakeCallClick}>
                  Activate Fake Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
