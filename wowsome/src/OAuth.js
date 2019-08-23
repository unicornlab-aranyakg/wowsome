import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./store/OAuth";

class DisplayOAuthFields extends Component {
  async componentDidMount() {
    await this.props.requestAccessTokenFromBlizzardAPI();
    console.log("OAUTH: ", this.props);
  }

  render() {
    return (
      <div>
        <p>OAUTH</p>
      </div>
    );
  }
}

export default connect(
  state => state.data,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(DisplayOAuthFields);
