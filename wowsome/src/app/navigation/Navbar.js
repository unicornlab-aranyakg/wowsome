import React, { Component } from "react";
import CharacterSearchComponents from "./inputs/CharacterSearchComponents";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="row w-100 align-items-center">
              <div className="col mr-auto">
                <img
                  src="https://icon-library.net/images/phoenix-icon/phoenix-icon-2.jpg"
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                  alt=""
                ></img>
                <p className="navbar-brand ml-2 text-muted navbar-brand-text">
                  Wowsome
                </p>
              </div>
              <div className="ml-auto">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSearchToggler"
                  aria-controls="navbarSearchToggler"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div className="mr-md-auto ml-lg-auto mr-sm-auto">
                <CharacterSearchComponents params={this.props} />
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
