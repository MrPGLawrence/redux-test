import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { toggleSolo } from "../actions";

class Solo extends Component {
  render() {
    return (
      <div>
        <div className="solo">{this.soloButton()}</div>
      </div>
    );
  }

  soloButton() {
    return this.props.solo.map(button => (
      <button key={button.id} onClick={() => this.props.toggleSolo(button)}>
        {" "}
        {button.symbol}{" "}
      </button>
    ));
  }
}

const mapStateToProps = state => {
  return {
    solo: state.solo
  };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ toggleSolo }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Solo);
