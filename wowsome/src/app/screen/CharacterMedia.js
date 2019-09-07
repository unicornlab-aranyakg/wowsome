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
              <div className="landing">
                <div className="home-wrap">
                  <div className="home-middle"></div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="landing">
                <div className="home-wrap">
                  <div className="home-middle">
                    <img
                      src={this.props.mediaData.render_url}
                      className="renderImg"
                    />
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
  state => state.CharacterSearchComponents,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(CharacterMedia);
