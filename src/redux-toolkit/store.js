import { combineReducers, configureStore } from "@reduxjs/toolkit";
import homodataSlice from "./homodata.slice";
import vocabvaultSlice from "./vocabvault.slice";
import bookslibrarySlice from "./bookslibrary.slice";
import profiledataSlice from "./profiledata.slice";
import coursedataslice from "./coursedataslice";

const rootReducer = combineReducers({
  homodata: homodataSlice,
  vocabvault: vocabvaultSlice,
  bookslibrary: bookslibrarySlice,
  profiledata: profiledataSlice,
  coursedata: coursedataslice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
