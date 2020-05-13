import { createStore } from "redux";
import { TransmonitorReducer } from "./Reducers";

export const dataStore = createStore(TransmonitorReducer);
