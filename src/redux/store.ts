import { configureStore, } from "@reduxjs/toolkit";
import empReducer from './empSlice';

console.log('1. store configured');
const store = configureStore({
    reducer: {
        emp: empReducer
        // , dept: deptReducer, jobs: jobReducer etc  
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;