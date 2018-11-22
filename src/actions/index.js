export const toggleMute = button => {
  console.log(button.name);
  return {
    type: "MUTE_CLICKED",
    payload: button
  };
};

export const toggleSolo = button => {
  console.log(button.name);
  return {
    type: "SOLO_CLICKED",
    payload: button
  };
};

export const moveFader = action => {
  console.log(action.name, "<<<name");
  return {
    type: "FADER_MOVED",
    payload: action
  };
};

export const toggleOnOff = action => {
  console.log(action.name, "<<<name");
  return {
    type: "ONOFF_CLICKED",
    payload: action
  };
};