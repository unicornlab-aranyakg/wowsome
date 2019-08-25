import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./store/AppNavbar";

class AppNavbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand">Navbar</a>
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
          <NavbarSearchComponents params={this.props} />
        </nav>
      </div>
    );
  }
}

class NavbarSearchComponents extends Component {
  render() {
    return (
      <div className="collapse navbar-collapse" id="navbarSearchToggler">
        <label htmlFor="region">Region:</label>
        <select
          className="form-control mx-2"
          id="region"
          onChange={event => {
            this.props.params.setRegionData(event.target.value);
          }}
        >
          <option>{this.props.params.Navbar.regionList.option1}</option>
          <option>{this.props.params.Navbar.regionList.option2}</option>
        </select>
        <label htmlFor="realm">Realm:</label>
        <select
          className="form-control mx-2"
          id="realm"
          onChange={event => {
            this.props.params.setRealmData(event.target.value);
          }}
        >
          <option>{this.props.params.Navbar.realmList.option1}</option>
          <option>{this.props.params.Navbar.realmList.option2}</option>
          <option>{this.props.params.Navbar.realmList.option3}</option>
        </select>
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Character Name"
          aria-label="Character Name"
          onChange={event => {
            this.props.params.setCharacterNameData(event.target.value);
          }}
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          onClick={() => {
            this.props.params.getCharacterData(this.props.params);
          }}
        >
          Search
        </button>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(AppNavbar);
