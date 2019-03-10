const initialState = {
  data: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default reducer;
