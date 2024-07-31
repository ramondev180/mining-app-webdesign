import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    openMobileMenu: false
}
const AppSlice = createSlice({name: "app", initialState, reducers: {
    toggleMobileMenu: (state,{payload=null}) => {
        if(payload!==null)
         state.openMobileMenu=payload;
        else 
        state.openMobileMenu=!state.openMobileMenu;
    },
    
}})

export default AppSlice.reducer;

export const {toggleMobileMenu} = AppSlice.actions;
