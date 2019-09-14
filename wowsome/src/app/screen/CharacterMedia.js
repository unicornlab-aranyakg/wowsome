import React, { Component } from "react";
import "../../css/screen/screen.css";
import { connect } from "react-redux";
import { actionCreators } from "../../store/CharacterMedia";
import { bindActionCreators } from "redux";

class CharacterMedia extends Component {
  render() {
    return (
      <div>
        <div>
          {!this.props.isLoaded ? (
            <div>
              <div className="landing renderImg"></div>
            </div>
          ) : (
            <div>
              <img
                src={this.props.mediaData.render_url}
                className="renderImg"
              />
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
