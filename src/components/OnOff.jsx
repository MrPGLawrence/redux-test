import React, { Component } from "react";
import Switch from "react-switch";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { toggleOnOff } from "../actions";

class OnOff extends Component {
  render() {
    return (
      <div className="fader">
        <div>{this.onOffButton()}</div>
      </div>
    );
  }

  onOffButton() {
    return this.props.onOff.map(button => (
      <Switch
        // onChange={this.props.toggleOnOff(button)}
        // checked={}
        onColor="#05b8ff"
        onHandleColor="#2693e6"
        handleDiameter={22}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={15}
        width={36}
        className="OnOff-switch"
        id="OnOff-switch"
      />
    ));
  }
}

const mapStateToProps = state => {
  return {
    onOff: state.onOff
  };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ toggleOnOff }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(OnOff);
