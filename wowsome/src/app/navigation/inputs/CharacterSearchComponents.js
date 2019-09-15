import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { actionCreators } from "../../../store/CharacterSearchComponents";
import {
  firebaseConnect,
  firestoreConnect,
  isLoaded,
  isEmpty
} from "react-redux-firebase";

class CharacterSearchComponents extends Component {
  render() {
    const RealmOptions = params => {
      const options = params.params.realms.realm.map(realm => (
        <option key={realm}>{realm}</option>
      ));
      return options;
    };
    const RegionOptions = params => {
      const options = params.params.regions.region.map(region => (
        <option key={region}>{region}</option>
      ));
      return options;
    };

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
              {!this.props.Firestore.data.searchFields ? (
                <option>Hello</option>
              ) : (
                <RegionOptions
                  params={this.props.Firestore.data.searchFields}
                />
              )}
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
              {!this.props.Firestore.data.searchFields ? (
                <option>Whoopsie!</option>
              ) : (
                <RealmOptions params={this.props.Firestore.data.searchFields} />
              )}
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

export default compose(
  connect(
    state => state,
    dispatch => bindActionCreators(actionCreators, dispatch)
  ),
  firebaseConnect(),
  firestoreConnect(["searchFields"])
)(CharacterSearchComponents);
