import {createStore } from "react-redux";
import { TransmonitorReducer } from "./Reducers";

export const dataStore = createStore(TransmonitorReducer);
