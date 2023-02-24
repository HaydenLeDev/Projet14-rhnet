import { configureStore } from "@reduxjs/toolkit";
import employesReducer from "../feature/employes.slice";

/**
 * Create our state redux
 */
export default configureStore({
    reducer: {
        employees: employesReducer,
    },
})