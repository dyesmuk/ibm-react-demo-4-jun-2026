
import api from "./api.service";

export const getEmployeeById = async (id) => {
    console.log(id);
    return await api.get(`/api/employees/${id}`);
};



export const loginUser = async (user) => {
    return await api.post('/api/auth/login', user);
};

export const register = async (user) => {
    return await api.post('/api/auth/register', user);
};

export const logout = async () => {
    return await api.post('/api/auth/logout');
};

