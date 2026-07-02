
import api from "./api.service";

export const loginUser = async (user) => {
    console.log(user);
    return await api.post('/api/auth/login', user);
};

export const registerUser = async (user) => {
    console.log(user);
    return await api.post('/api/auth/register', user);
};

export const logoutUser = async () => {
    return await api.post('/api/auth/logout');
};

