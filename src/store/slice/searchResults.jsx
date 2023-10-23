import { createSlice } from "@reduxjs/toolkit";

const searchResults = createSlice({
  name: "searchData",
  initialState: { data: '' },
  reducers: {
    addData(state, action) {
        if(action.payload.data===undefined)
        {
            state.data=''
        }
        else{
            state.data = { ...action.payload.data };
        }
    },
  },
});

export const { addData } = searchResults.actions;

export default searchResults;
