import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: "menu",
    initialState: {
        dropDownValue : null
    },
    reducers :{
        dropDownValueChange: (state,action) => {
            state.dropDownValue = action.payload
        }
    }
})

export const { dropDownValueChange } = menuSlice.actions;

export default menuSlice.reducer;