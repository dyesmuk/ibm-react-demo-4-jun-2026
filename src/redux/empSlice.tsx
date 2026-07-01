import { createSlice } from "@reduxjs/toolkit";

// slice = createSlice({name, intitalState, reducers});

console.log('empSlice');

const EmpSlice = createSlice(
    {
        name: 'emp',
        initialState: {
            empData: {
                id: '',
                firstName: '',
                lastName: '',
                email: '',
                salary: ''

            },
            allEmpData: []
        },
        reducers: {
            getEmpById: (state, action) => {
                console.log(state);
                state.empData = action.payload;
            },
            getAllEmps: (state, action) => {
                console.log(state);
                state.empData = action.payload;
            }
        }
    }
);

export const { getEmpById, getAllEmps } = EmpSlice.actions;

export default EmpSlice.reducer;
