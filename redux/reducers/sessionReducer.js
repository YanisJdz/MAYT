import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'session',
  initialState: {
    sessionData: {},
  },

  reducers: {
    setSession: (state, action) => {
      state.sessionData['user'] = action.payload
    },
    deleteSession: (state, action) => {
      state.sessionData={}
    },

  },

})

const {reducer, actions} = slice;

export {reducer, actions};
