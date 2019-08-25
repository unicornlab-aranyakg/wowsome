import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./store/OAuth";

class DisplayOAuthFields extends Component {
  async componentDidMount() {
    await this.props.requestAccessTokenFromBlizzardAPI();
  }

  render() {
    return <div></div>;
  }
}

export default connect(
  state => state,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(DisplayOAuthFields);
