import React, { Component } from "react";
import "../../css/screen/screen.css";
import { connect } from "react-redux";
import { actionCreators } from "../../store/CharacterMedia";
import { bindActionCreators } from "redux";

class CharacterMedia extends Component {
  render() {
    return (
      <div>
        <div className="w-100 h-100 my-5">
          {!this.props.isLoaded ? (
            <div className="w-100">
              <p>Loading</p>
            </div>
          ) : (
            <div>
              <div className="container">
                <img
                  src={this.props.mediaData.render_url}
                  className="renderImg rounded img-thumbnail mx-auto"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  state => state.CharacterSearchComponents,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(CharacterMedia);
