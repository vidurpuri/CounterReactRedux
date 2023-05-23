import { SET_DECREMENT, SET_INCREMENT } from "../types";

export const Increment = () => {
  console.log("In Increment");
  return { type: SET_INCREMENT };
};

export const Decrement = () => {
  return { type: SET_DECREMENT };
};
