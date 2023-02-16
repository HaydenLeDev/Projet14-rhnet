import { createSlice } from "@reduxjs/toolkit";

export const employeesSlice = createSlice({
    name:"employees",
    initialState:{
        employees: null,
    },
    reducers: {
        setEmployeesData: (state, action) => {
            state.employees = action.payload
        },
        addEmployee:(state, action) => {
            state.employees.push(action.payload)
        }
    }
})

export const { setEmployeesData, addEmployee } = employeesSlice.actions
export default employeesSlice.reducer