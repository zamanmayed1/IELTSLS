import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const primaryState = {
  vocabs: [],
  status: 'idle', // to track fetch status
  error: null, // to store any fetch errors
};

// Thunk for fetching vocabs
export const fetchVocabs = createAsyncThunk(
  "vocabvault/fetchVocabs",
  async () => {
    const response = await axios.get("/VocabVault.json");
    return response.data;
  }
);

const vocabvaultSlice = createSlice({
  name: "vocabvault",
  initialState: primaryState,
  reducers: {
    // all actions
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVocabs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchVocabs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.vocabs = action.payload;
      })
      .addCase(fetchVocabs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default vocabvaultSlice.reducer;
