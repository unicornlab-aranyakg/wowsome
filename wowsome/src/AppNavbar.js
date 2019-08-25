import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./store/AppNavbar";

class AppNavbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand mx-5">
            <img
              src="https://listimg.pinclipart.com/picdir/s/30-305286_bird-icon-noto-animals-nature-iconset-google-google.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            ></img>
            Wowsome
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavbarSearchComponents params={this.props} />
        </nav>
        <div>
          <DisplayCharacterData params={this.props} />
        </div>
      </div>
    );
  }
}

class NavbarSearchComponents extends Component {
  render() {
    return (
      <div className="collapse navbar-collapse" id="navbarSearchToggler">
        <div className="row">
          <div className="col-12">
            <div className="form-inline">
              <label htmlFor="region" className="control-label">
                Region:
              </label>
              <select
                className="form-control mx-2 my-2"
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
                className="form-control mx-2 my-2"
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
                className="form-control mx-2 my-2"
                type="text"
                placeholder="Character Name"
                aria-label="Character Name"
                onChange={event => {
                  this.props.params.setCharacterNameData(event.target.value);
                }}
              />
              <button
                className="btn btn-outline-success mx-2 my-2"
                onClick={() => {
                  this.props.params.getCharacterData(this.props.params);
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class DisplayCharacterData extends Component {
  render() {
    const ConvertToDate = params => {
      var date = new Date(params.params);
      return date.toLocaleString();
    };
    const ExtractData = () => {
      return (
        <div className="container">
          <h5>
            Character Name:&ensp;
            {this.props.params.Navbar.characterData.name}
            &emsp; Gender:&ensp;
            {this.props.params.Navbar.characterData.gender.name}
            <br />
            <br />
            Race:&ensp;
            {this.props.params.Navbar.characterData.race.name}
            &emsp; Faction:&ensp;
            {this.props.params.Navbar.characterData.faction.name}
            <br />
            <br />
            Guild:&ensp;
            {this.props.params.Navbar.characterData.guild.name}
            <br />
            <br />
            <br />
          </h5>
          <h6>
            Class:&nbsp;
            {this.props.params.Navbar.characterData.character_class.name}
            &emsp; Spec:&nbsp;
            {this.props.params.Navbar.characterData.active_spec.name}
            <br />
            <br />
            Avarage Item Level:&nbsp;
            {this.props.params.Navbar.characterData.average_item_level}
            &emsp; Equipped Item Level:&nbsp;
            {this.props.params.Navbar.characterData.equipped_item_level}
            <br />
            <br />
            Achievement Points:&nbsp;
            {this.props.params.Navbar.characterData.achievement_points}
            &emsp; Last Login: :&nbsp;
            <ConvertToDate
              params={
                this.props.params.Navbar.characterData.last_login_timestamp
              }
            />
          </h6>
        </div>
      );
    };

    return (
      <div>
        {!this.props.params.Navbar.isLoaded ? (
          <div>
            <p>Loading</p>
          </div>
        ) : (
          <div>
            <ExtractData />
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(AppNavbar);
