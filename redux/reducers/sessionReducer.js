import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'session',
  initialState: {
    sessionData: {},
  },

  reducers: {
    setSession: (state, action) => {
      state.sessionData.user = action.payload;
    },
    deleteSession: (state, action) => {
      state.sessionData = {};
    },
    setFirstName: (state, action) => {
      state.sessionData.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.sessionData.lastName = action.payload;
    },
    setEmail: (state, action) => {
      state.sessionData.email = action.payload;
    },
    setPhone: (state, action) => {
      state.sessionData.phoneNumber = action.payload;
    },
    setBirth: (state, action) => {
      state.sessionData.birthDate = action.payload;
    },
    setPicture: (state, action) => {
      state.sessionData.picture = action.payload;
    },
  },
});

const {reducer, actions} = slice;

export {reducer, actions};
