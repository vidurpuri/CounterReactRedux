import { SET_DECREMENT, SET_INCREMENT } from "../types";

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case SET_INCREMENT:
      console.log(state.count);
      return state.count + 1;
    case SET_DECREMENT:
      return state.count - 1;
    default:
      return state;
  }
};

export default counterReducer;
