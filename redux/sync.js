const requestPending = () => {
  return { type: "REQUEST_PENDING", pending: true, error: false };
};

const requestFulfilled = response => {
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

const getTypeInfo = type => {
  return {
    type: "GET_TYPE_INFO",
    payload: type
  };
};

module.exports = {
  requestPending,
  requestFulfilled,
  requestRejected,
  getTypeInfo
};
