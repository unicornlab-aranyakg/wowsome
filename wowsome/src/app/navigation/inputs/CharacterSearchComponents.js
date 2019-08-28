import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../store/CharacterSearchComponents";

class CharacterSearchComponents extends Component {
  render() {
    return (
      <div className="collapse navbar-collapse" id="navbarSearchToggler">
        <div className="row navbar-label-text">
          <div className="col-12">
            <div className="form-inline">
              <label htmlFor="region" className="control-label">
                Region:
              </label>
              <select
                className="form-control mx-2 my-2"
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
              <label htmlFor="realm">Realm:</label>
              <select
                className="form-control mx-2 my-2"
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
              <input
                className="form-control mx-2 my-2"
                type="text"
                placeholder="Character Name"
                aria-label="Character Name"
                onChange={event => {
                  this.props.setCharacterNameData(event.target.value);
                }}
              />
              <button
                className="btn btn-outline-success mx-2 my-2"
                onClick={() => {
                  this.props.getCharacterData(this.props);
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

export default connect(
  state => state,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(CharacterSearchComponents);
