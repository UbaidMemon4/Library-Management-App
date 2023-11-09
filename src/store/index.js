import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "./librarySlice";
const store=configureStore({
    reducer:libraryReducer,
})
export default store