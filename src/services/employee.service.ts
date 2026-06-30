import axios from "axios";

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

export const getEmployeeById = async (userId) => {
    return await axios.get(`${apiUrl}/${userId}`);
};


