import { ADD_NUMBER, SUB_NUMBER } from "./actionsType";

export const addNumber = (payload) => ({ type: ADD_NUMBER, payload });
export const subNumber = (payload) => ({ type: SUB_NUMBER, payload });
