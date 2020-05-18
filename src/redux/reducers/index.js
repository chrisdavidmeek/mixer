const initState = {
  trigger: false,
  list: [],
  //   drink: { name: "", ABV: 0 },
};

const rootReducer = (state = initState, action) => {
  if (action.type === "CHECK_CHANGE") {
    return {
      ...state,
      trigger: !state.trigger,
    };
  }
  return state;
};

export default rootReducer;
