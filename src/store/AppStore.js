import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "../slices/AppReducer";

export default configureStore({
    reducer: {
        app: AppReducer,
    },
});

