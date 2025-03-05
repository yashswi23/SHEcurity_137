
import React from "react";
import "./WomenSafety.css";
// import csImage from "../assets/cs-removebg-preview.png";
// import locImage from "../assets/loc-removebg-preview.png";
// import sdImage from "../assets/sd2-removebg-preview.png";

const HomeView  = () => {
  return (
    <div className="women-safety-container">
      <h1 className="header-title">360° Women Solution</h1>
      <div className="content-wrapper">
        <div className="text-section">
          <h1>
            <span style={{ fontWeight: "bold" }}>SHE</span>
            <span style={{ fontFamily: "Courier New, Courier, monospace" }}>
              curity
            </span>
          </h1>
          <p>
            SHEcurity is more than just a word—it’s a movement. It combines 'She'
            and 'Security' to emphasize a world where women feel safe, empowered, and
            protected. Whether through community support, awareness, or self-defense,
            SHEcurity stands for a future where every woman has the tools and
            confidence to navigate life without fear.
          </p>
        </div>
        <div className="top-container">
          <p className="section-title">Community Support</p>
          <h2>
            Every woman can share her story and find motivation from others'
            experiences, creating a safe and supportive space.
          </h2>
          {/* <img src={} alt="Community Support" height="300px" width="300px" /> */}
        </div>
      </div>
      <div className="bottom-section">
        <div className="bottom-left">
          <p className="section-title">Red Alert Areas</p>
          <h2>
            Highlighting nearby locations where past incidents of violence or crimes
            have occurred to keep women informed and cautious.
          </h2>
          {/* <img src={} alt="Red Alert Areas" height="250px" width="250px" /> */}
        </div>
        <div className="bottom-right">
          <p className="section-title">Self Defence Techniques</p>
          <h2>Learn practical self-defense techniques to stay safe and empowered in any situation.</h2>
          {/* <img src={} alt="Self Defense" height="190px" width="250px" /> */}
        </div>
      </div>
    </div>
  );
};

export default HomeView;