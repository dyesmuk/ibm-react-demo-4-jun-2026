import axios from "axios";

// const apiUrl = 'https://jsonplaceholder.typicode.com/users';
const apiUrl = 'http://localhost:3000/api/employees';

export const getEmployeeById = async (id) => {
    console.log(id);
    return await axios.get(`${apiUrl}/${id}`);
};

// other functions 

