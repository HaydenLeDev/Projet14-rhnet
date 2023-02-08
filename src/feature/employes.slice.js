import { createSlice } from "@reduxjs/toolkit";

export const employeesSlice = createSlice({
    name:"employees",
    initialState:{
        employees: null,
    },
    reducers: {
        setEmployeesData: (state, action) => {
            state.employees = action.payload
        }
    }
})

export const { setEmployeesData } = employeesSlice.actions
export default employeesSlice.reducer