export const muteListener = (state = null, action) => {
  if (action.type === "MUTE_CLICKED") {
    return action.payload;
  }
  return state;
};

export const soloListener = (state = null, action) => {
  if (action.type === "SOLO_CLICKED") {
    return action.payload;
  }
  return state;
};

export const faderListener = (state = null, action) => {
  if (action.type === "FADER_MOVED") {
    return action.payload;
  }
  return state;
};

export const onOffListener = (state = null, action) => {
  if (action.type === "ONOFF_CLICKED") {
    return action.payload;
  }
  return state;
};
