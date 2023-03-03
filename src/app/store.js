import { combineReducers, configureStore } from "@reduxjs/toolkit";
import employesReducer from "../feature/employes.slice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

/**
 * Configuration of Redux Persist
 */
const persistConfig = {
    key: "root",
    version: 1,
    storage
}

/**
 * Creation of reducers
 */
const reducer = combineReducers({
    employees: employesReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

/**
 * Store configuration
 */
export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})