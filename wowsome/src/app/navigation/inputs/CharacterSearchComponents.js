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

const initialStateType = "CHAR::INITIAL_STATE";

class CharacterSearchComponents extends Component {
  componentWillReceiveProps() {
    if (
      this.props.Firestore.data.searchFields &&
      this.props.CharacterSearchComponents.type == initialStateType
    ) {
      this.props.setSearchData(this.props.Firestore.data.searchFields);
    }
  }

  render() {
    const RealmOptions = params => {
      return (
        <select
          className="form-control box-adjust"
          id="realm"
          onChange={event => {
            this.props.setRealmData(event.target.value);
          }}
          value={params.params.realm}
        >
          {this.props.CharacterSearchComponents.type == initialStateType ? (
            <option>Choose...</option>
          ) : (
            params.params.realmList.realm.map(realm => (
              <option key={realm}>{realm}</option>
            ))
          )}
        </select>
      );
    };
    const RegionOptions = params => {
      return (
        <select
          className="form-control box-adjust"
          id="region"
          onChange={event => {
            this.props.setRegionData(event.target.value);
          }}
          value={params.params.region}
        >
          {this.props.CharacterSearchComponents.type == initialStateType ? (
            <option>Choose...</option>
          ) : (
            params.params.regionList.region.map(region => (
              <option key={region}>{region}</option>
            ))
          )}
        </select>
      );
    };

    return (
      <div className="collapse navbar-collapse" id="navbarSearchToggler">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <label htmlFor="region" className="control-label">
              Region:
            </label>
            {this.props.CharacterSearchComponents.type == initialStateType ? (
              <option>Choose...</option>
            ) : (
              <RegionOptions params={this.props.CharacterSearchComponents} />
            )}
          </li>
          <li className="nav-item">
            <label htmlFor="realm">Realm:</label>
            {this.props.CharacterSearchComponents.type == initialStateType ? (
              <option>Choose...</option>
            ) : (
              <RealmOptions params={this.props.CharacterSearchComponents} />
            )}
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
// Most cruical part is here. searchFields is the name of the collection.
export default compose(
  connect(
    state => state,
    dispatch => bindActionCreators(actionCreators, dispatch)
  ),
  firebaseConnect(),
  firestoreConnect(["searchFields"])
)(CharacterSearchComponents);
