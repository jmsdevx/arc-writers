const initialState = {
  pending: "",
  selectedType: "",
  types: {
    all: []
  }
};

const REQUEST_PENDING = "REQUEST_PENDING";
const REQUEST_FULFILLED = "REQUEST_FULFILLED";
const REQUEST_REJECTED = "REQUEST_REJECTED";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PENDING:
      return {
        ...state,
        pending: action.pending
      };
    case REQUEST_FULFILLED:
      return {
        ...state,
        types: {
          all: action.payload
        },
        pending: action.pending
      };
    case REQUEST_REJECTED:
      return { ...state, pending: action.pending, error: action.error };
    default:
      return state;
  }
};

export default reducer;
