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
const GET_TYPE_INFO = "GET_TYPE_INFO";

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
    case GET_TYPE_INFO:
      return {
        ...state,
        selectedType: state.types.all.filter(e => {
          return (
            e.name.includes(action.payload) || e.alias.includes(action.payload)
          );
        })
      };
    default:
      return state;
  }
};

export default reducer;
