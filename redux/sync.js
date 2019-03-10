const requestPending = () => {
  return { type: "REQUEST_PENDING", pending: true, error: false };
};

const requestFulfilled = response => {
  console.log(response);
  return {
    type: "REQUEST_FULFILLED",
    payload: response.types,
    pending: false
  };
};

const requestRejected = () => {
  return {
    type: "REQUEST_REJECTED",
    pending: false,
    error: true
  };
};

module.exports = {
  requestPending,
  requestFulfilled,
  requestRejected
};
