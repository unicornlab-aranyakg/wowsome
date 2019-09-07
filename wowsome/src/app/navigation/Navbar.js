import React, { Component } from "react";
import "../../css/navigation/navbar.css";
import CharacterSearchComponents from "./inputs/CharacterSearchComponents";

//font-awesome
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab);

class Navbar extends Component {
  render() {
    return (
      <div id="home">
        <nav className="navbar navbar-expand-xl">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                id="navbar-icon"
                src="https://icon-library.net/images/phoenix-icon/phoenix-icon-2.jpg"
              ></img>
              <h6 className="navbar-title">Wowsome</h6>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSearchToggler"
              aria-controls="navbarSearchToggler"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="custom-toggler-icon">
                <FontAwesomeIcon
                  className="fa-spin fa-2x custom-toggler-icon"
                  icon={["fab", "battle-net"]}
                />
              </span>
            </button>

            <CharacterSearchComponents params={this.props} />
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
