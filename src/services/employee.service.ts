// import axios from "axios";

// import api from "./api.service";

// export const getEmployeeById = async (id) => {
//     console.log(id);
//     return await axios.get(`${api}/${id}`);
// };

// export const getAllEmployees = async () => {
//     console.log('getAllEmployees');
//     return await axios.get(`${api}`);
// };

// other functions




import axios from "axios";

// const apiUrl = 'https://jsonplaceholder.typicode.com/users';
const apiUrl = 'http://localhost:3000/api/employees';

export const getEmployeeById = async (id) => {
    console.log(id);
    return await axios.get(`${apiUrl}/${id}`);
};

export const getAllEmployees = async () => {
    console.log('getAllEmployees');
    return await axios.get(`${apiUrl}`);
};

// other functions 

