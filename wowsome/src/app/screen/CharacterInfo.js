import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/CharacterInfo";
import "../../css/screen/screen.css";

//this.props.params.setdata(this.props.params);
class CharacterInfo extends Component {
  render() {
    const ConvertToDate = params => {
      var date = new Date(params.params);
      return date.toLocaleString();
    };
    const ExtractData = () => {
      return (
        <div className="container characterInfoBG my-5 h-100">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h5>
                <div className="row justify-content-start">
                  &emsp;<p className="titleText">Character Name:</p>&ensp;
                  <p className="valueText">
                    {this.props.CharacterSearchComponents.data.name}
                  </p>
                </div>
                <div className="row justify-content-start">
                  &emsp; <p className="titleText">Gender:</p>&ensp;
                  <p className="valueText">
                    {this.props.CharacterSearchComponents.data.gender.name}
                  </p>
                </div>
                <div className="row justify-content-start">
                  &emsp;<p className="titleText">Race:</p>&ensp;
                  <p className="valueText">
                    {this.props.CharacterSearchComponents.data.race.name}
                  </p>
                </div>
                <div className="row justify-content-start">
                  &emsp; <p className="titleText">Faction:</p>&ensp;
                  <p className="valueText">
                    {this.props.CharacterSearchComponents.data.faction.name}
                  </p>
                </div>
                <div className="row justify-content-start">
                  &emsp;<p className="titleText">Guild:</p>&ensp;
                  <p className="valueText">
                    {this.props.CharacterSearchComponents.data.guild.name}
                  </p>
                </div>
              </h5>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h6>
                <div className="row justify-content-start">
                  &emsp;<p className="titleText">Class:</p>&nbsp;
                  <p className="valueText">
                    {
                      this.props.CharacterSearchComponents.data.character_class
                        .name
                    }
                  </p>
                </div>
                <div className="row justify-content-start">
                  &emsp; <p className="titleText">Spec</p>:&nbsp;
                  <p className="valueText">
                    {this.props.CharacterSearchComponents.data.active_spec.name}
                  </p>
                </div>
                <div className="row justify-content-start">
                  &emsp;<p className="titleText">Avarage Item Level:</p>&nbsp;
                  <p className="valueText">
                    {
                      this.props.CharacterSearchComponents.data
                        .average_item_level
                    }
                  </p>
                </div>
                <div className="row justify-content-start">
                  &emsp; <p className="titleText">Equipped Item Level: </p>
                  &nbsp;
                  <p className="valueText">
                    {
                      this.props.CharacterSearchComponents.data
                        .equipped_item_level
                    }
                  </p>
                </div>
                <div className="row justify-content-start">
                  &emsp;<p className="titleText">Achievement Points:</p>&nbsp;
                  <p className="valueText">
                    {
                      this.props.CharacterSearchComponents.data
                        .achievement_points
                    }
                  </p>
                </div>
                <div className="row justify-content-start">
                  &emsp; <p className="titleText">Last Login:</p> :&nbsp;
                  <p className="valueText">
                    <ConvertToDate
                      params={
                        this.props.CharacterSearchComponents.data
                          .last_login_timestamp
                      }
                    />
                  </p>
                </div>
              </h6>
            </div>
          </div>
        </div>
      );
    };

    return (
      <div>
        <div className="w-100">
          {!this.props.CharacterSearchComponents.isLoaded ? (
            <div className="w-100">
              <p>Loading</p>
            </div>
          ) : (
            <div>
              <ExtractData />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(CharacterInfo);
