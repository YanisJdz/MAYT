import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'user',
    initialState: {
        userBase: [],
    },
    reducers: {
        addUser: (state, action) => {
            state.userBase.push(action.payload)
        },
        removeUser: (state, action) => {
            state.userBase.splice(action.payload, 1)
        }
    },

})

const {reducer, actions} = slice;

export {reducer, actions};
