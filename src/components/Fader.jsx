import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { moveFader } from "../actions";

class Fader extends Component {
  render() {
    console.log(this.props.fader);
    return (
      <div className="fader">
        <div>{this.Fade()}</div>
      </div>
    );
  }

  Fade() {
    return this.props.fader.map(action => (
      <Slider
        vertical={true}
        key={action.id}
        //   onChange={() => this.props.moveFader(action)}
      />
    ));
  }
}

const mapStateToProps = state => {
  return {
    fader: state.fader
  };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ moveFader }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Fader);
