import { configureStore } from "@reduxjs/toolkit";
import empReducer from './empSlice';

// createStore();

console.log('1. store configured');

// store = configureStore({ 
//     reducer : {}
// });

const store = configureStore({
    reducer: {
        emp: empReducer
        // , dept: deptReducer, jobs: jobReducer etc  
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
