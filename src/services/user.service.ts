import axios from "axios";
// import type { EmployeeType } from "../models/employee.model";

// const apiUrl = 'https://jsonplaceholder.typicode.com/users/?username=';

const apiUrl = 'http://localhost:3000';

export const loginUser = async (user) => {
    return await axios.post(`${apiUrl}/api/auth/login`, user);
};

export const register = async (user) => {
    return await axios.post(`${apiUrl}/api/auth/register`, user);
};

export const logout = async () => {
    return await axios.post(`${apiUrl}/api/auth/logout`);
};

