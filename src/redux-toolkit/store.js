import { combineReducers, configureStore } from "@reduxjs/toolkit";
import homodataSlice from "./homodata.slice";
import vocabvaultSlice from "./vocabvault.slice";
import bookslibrarySlice from "./bookslibrary.slice";

const rootReducer = combineReducers({
  homodata: homodataSlice,
  vocabvault: vocabvaultSlice,
  bookslibrary: bookslibrarySlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
