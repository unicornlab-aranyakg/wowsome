import React, { Component } from "react";

//Imported Classes
import Navbar from "./navigation/Navbar";
import CharacterInfo from "./screen/CharacterInfo";
import CharacterMedia from "./screen/CharacterMedia";
import OAuth from "./OAuth/OAuth";

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
        <div className="container-fluid infoText">
          <div className="row">
            <div className="col-4">
              <CharacterInfo />
            </div>
            <div className="col-4">
              <CharacterMedia />
            </div>
            <div className="col-4">
              <CharacterInfo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ApplicationLayout;
