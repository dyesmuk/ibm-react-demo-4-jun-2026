import axios from "axios";

const apiUrl = 'https://jsonplaceholder.typicode.com/users/?username=';

export const loginUser = async (user) => {
    return await axios.get(`${apiUrl}${user}`);
};

export const register = async () => {
    return await axios.get(apiUrl);
};

