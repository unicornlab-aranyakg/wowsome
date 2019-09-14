import React, { Component } from "react";

//Imported Classes
import Navbar from "./navigation/Navbar";
import CharacterInfo from "./screen/CharacterInfo";
import CharacterMedia from "./screen/CharacterMedia";
import OAuth from "./OAuth/OAuth";
import "../css/screen/screen.css";

class ApplicationLayout extends Component {
  render() {
    return (
      <div>
        <div>
          <OAuth />
        </div>
        <div>
          <Navbar />
        </div>
        <div className="infoText">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <CharacterMedia />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <CharacterInfo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ApplicationLayout;
