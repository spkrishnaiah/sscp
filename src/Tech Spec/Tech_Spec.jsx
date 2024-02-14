// YourComponent.jsx

import React from "react";
import "./Tech_Spec.css";
import T1 from "./T1.jpeg";
import T2 from "./T2.jpeg";
import T3 from "./T3.jpeg";
import T4 from "./T4.jpeg";
import T5 from "./T5.jpeg";
import T6 from "./T6.jpeg";
import T7 from "./T7.jpg";
import T8 from "./T8.jpeg";
import T9 from "./T9.jpeg";

const YourComponent = () => {
  return (
    <div className="app">
      <div className="card">
        <div className="card-title">
          <h2>
            The general requirement shall be as follows for individual pipes.
          </h2>
        </div>
        <div className="card-text">
          <div className="info-row">
            <p>
              <strong>Pipe Type:</strong> Precast Reinforced Concrete Spun Pipe
            </p>
            <p>
              <strong>I.S. Ref.:</strong> IS: 458/2003
            </p>
            <p>
              <strong>Class:</strong> NP2, NP3, NP4, P1, P2 & P3
            </p>
          </div>
          <div className="info-row">
            <p>
              <strong>Size:</strong> 150 mm dia to 2200 mm dia
            </p>
            <p>
              <strong>Length:</strong> 2000 mm or 2500 mm
            </p>
            <p>
              <strong>Concrete:</strong> M35
            </p>
          </div>
          <div className="info-row">
            <p>
              <strong>Manufacturing:</strong> Spun Type, Flush Joint and Socket
              / Spigot Type
            </p>
          </div>
        </div>
      </div>

      <div className="gallery">
        <img src={T1} alt="" />
        <img src={T2} alt="" />
        <img src={T3} alt="" />
        <img src={T4} alt="" />
        <img src={T5} alt="" />
        <img src={T6} alt="" />
        <img src={T7} alt="" />
        <img src={T8} alt="" />
        <img src={T9} alt="" />
      </div>
    </div>
  );
};

export default YourComponent;
