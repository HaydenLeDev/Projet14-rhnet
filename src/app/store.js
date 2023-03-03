import { combineReducers, configureStore } from "@reduxjs/toolkit";
import employesReducer from "../feature/employes.slice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

 
const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const reducer = combineReducers({
    employees: employesReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})