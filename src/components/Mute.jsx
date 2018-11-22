import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { toggleMute } from "../actions";

class Mute extends Component {
  render() {
    return <div>
        <div className="mute">{this.muteButton()}</div>
      </div>;
  }

  muteButton() {
    return this.props.mute.map(button => (
      <button key={button.id} onClick={() => this.props.toggleMute(button)}>
        {" "}
        {button.symbol}{" "}
      </button>
    ));
  }
}

const mapStateToProps = state => {
  return {
    mute: state.mute
  };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ toggleMute }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Mute);
