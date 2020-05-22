const initState = {
  trigger: false,
  list: [],
 spirits: false,
 soda: false,
 juice: false
  //   drink: { name: "", ABV: 0 },
};

const rootReducer = (state = initState, action) => {
  if (action.type === "CHECK_CHANGE") {
    return {
      ...state,
      trigger: !state.trigger,
    };
  }

  if (action.type === "SET_SPIRITS"){
    return{
      ...state,
   spirits: !state.spirits
    }
    
  }
  if (action.type === "SET_SODA"){
    return{
      ...state,
      soda: !state.soda,
    
    }
  }
  if (action.type === "SET_JUICE"){
    return{
      ...state,
      juice: !state.juice,
     
    }
  }
  return state;
};

export default rootReducer;
