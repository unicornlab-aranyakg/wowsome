import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../store/CharacterSearchComponents";

class CharacterSearchComponents extends Component {
  render() {
    return (
      <div className="collapse navbar-collapse" id="navbarSearchToggler">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <label htmlFor="region" className="control-label">
              Region:
            </label>
            <select
              className="form-control box-adjust"
              id="region"
              onChange={event => {
                this.props.setRegionData(event.target.value);
              }}
            >
              <option>
                {this.props.CharacterSearchComponents.regionList.option1}
              </option>
              <option>
                {this.props.CharacterSearchComponents.regionList.option2}
              </option>
            </select>
          </li>
          <li className="nav-item">
            <label htmlFor="realm">Realm:</label>
            <select
              className="form-control box-adjust"
              id="realm"
              onChange={event => {
                this.props.setRealmData(event.target.value);
              }}
            >
              <option>
                {this.props.CharacterSearchComponents.realmList.option1}
              </option>
              <option>
                {this.props.CharacterSearchComponents.realmList.option2}
              </option>
              <option>
                {this.props.CharacterSearchComponents.realmList.option3}
              </option>
            </select>
          </li>
          <li className="nav-item">
            <label htmlFor="characterName">Character Name:</label>
            <input
              className="form-control box-adjust"
              id="characterName"
              type="text"
              placeholder="Character Name"
              aria-label="Character Name"
              onChange={event => {
                this.props.setCharacterNameData(event.target.value);
              }}
            />
          </li>
          <li className="nav-item search-button">
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                this.props.getCharacterData(this.props);
              }}
            >
              Search
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(CharacterSearchComponents);
