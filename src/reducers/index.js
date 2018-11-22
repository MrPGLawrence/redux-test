import { combineReducers } from "redux";
import muteReducer from "./mute-reducer";
import soloReducer from "./solo-reducer";
import faderReducer from "./fader-reducer";
import onOffReducer from "./on-off-reducer";
import {
  muteListener,
  soloListener,
  faderListener,
  onOffListener
} from "./listener-reducer";

const allReducers = combineReducers({
  mute: muteReducer,
  solo: soloReducer,
  fader: faderReducer,
  onOff: onOffReducer,
  muteListener: muteListener,
  soloListener: soloListener,
  faderListener: faderListener,
  onOffListener: onOffListener
});

export default allReducers;
