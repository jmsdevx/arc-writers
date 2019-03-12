import { requestPending, requestFulfilled, requestRejected } from "./sync";
import fetch from "isomorphic-unfetch";

export async function getData(dispatch) {
  //   axios
  //     .get("http://arcapi.org/api/types")
  //     .then(response => {
  //       dispatch(requestFulfilled(response));
  //     })
  //     .catch(err => dispatch(requestRejected()));
  try {
    const res = await fetch("http://arcapi.org/api/types");
    const data = await res.json();
    dispatch(requestFulfilled(data));
  } catch {
    dispatch(requestRejected());
  }
}

export function makeRequest() {
  return async dispatch => {
    dispatch(requestPending());

    getData(dispatch);
  };
}

export function getTypeInfo(type) {
  return dispatch => {
    console.log(type);
    
  };
}
