import { configureStore } from "@reduxjs/toolkit";
import employesReducer from "../feature/employes.slice";


export default configureStore({
    reducer:{
        employees: employesReducer,
    },
})