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
        <table className="table table-hover">
          <tbody>
            <tr>
              <th scope="row">
                <p className="titleText"> Character Name: </p>
              </th>
              <td height="30">
                <p className="valueText">
                  {this.props.CharacterSearchComponents.data.name}
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <p className="titleText"> Gender: </p>
              </th>
              <td>
                <p className="valueText">
                  {this.props.CharacterSearchComponents.data.gender.name}
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <p className="titleText"> Race: </p>
              </th>
              <td>
                <p className="valueText">
                  {this.props.CharacterSearchComponents.data.race.name}
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <p className="titleText"> Faction: </p>
              </th>
              <td>
                <p className="valueText">
                  {this.props.CharacterSearchComponents.data.faction.name}
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <p className="titleText"> Guild: </p>
              </th>
              <td>
                <p className="valueText">
                  {this.props.CharacterSearchComponents.data.guild.name}
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <p className="titleText"> Class: </p>
              </th>
              <td>
                <p className="valueText">
                  {
                    this.props.CharacterSearchComponents.data.character_class
                      .name
                  }
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <p className="titleText"> Spec: </p>
              </th>
              <td>
                <p className="valueText">
                  {this.props.CharacterSearchComponents.data.active_spec.name}
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <p className="titleText"> Equipped Item Level: </p>
              </th>
              <td>
                <p className="valueText">
                  {
                    this.props.CharacterSearchComponents.data
                      .equipped_item_level
                  }
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <p className="titleText"> Achievement Points: </p>
              </th>
              <td>
                <p className="valueText">
                  {this.props.CharacterSearchComponents.data.achievement_points}
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <p className="titleText"> Last Login: </p>
              </th>
              <td>
                <p className="valueText">
                  <ConvertToDate
                    params={
                      this.props.CharacterSearchComponents.data
                        .last_login_timestamp
                    }
                  />
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      );
    };

    return (
      <div>
        <div>
          {!this.props.CharacterSearchComponents.isLoaded ? (
            <div>
              <div className="landing">
                <div className="home-wrap">
                  <div className="home-left"></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="landing">
              <div className="home-wrap">
                <div className="home-left">
                  <div>
                    <ExtractData />
                  </div>
                </div>
              </div>
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
