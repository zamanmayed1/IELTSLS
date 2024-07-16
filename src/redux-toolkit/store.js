import { combineReducers, configureStore } from "@reduxjs/toolkit";
import homodataSlice from "./homodata.slice";
import vocabvaultSlice from "./vocabvault.slice";

const rootReducer = combineReducers({
  homodata: homodataSlice,
  vocabvault: vocabvaultSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
