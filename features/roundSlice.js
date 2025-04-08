import { createSlice } from "@reduxjs/toolkit";

export const roundSlice = createSlice({
    name: "rounds",
    initialState: {
        value: 1,
    },
    reducers: {
        resetRounds: (state) => {
            state.value = 1; 
        },
        incrementByOne: (state) => {
            state.value += 1;
        }
    }
})

export const {
    resetRounds,
    incrementByOne,
} = roundSlice.actions;

export default roundSlice.reducer; 