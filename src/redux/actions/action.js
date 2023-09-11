export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

export const REMOVE = (id) => {
  return {
    type: "REMOVE_CART",
    payload: id,
  };
};

export const DECRISE = (id) => {
  return {
    type: "REMOVE_ONE",
    payload: id,
  };
};
