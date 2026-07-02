import axios from "axios";

const apiUrl = 'http://localhost:3000';

const api = axios.create({ baseURL: apiUrl });

api.interceptors.request.use((config) => {
    console.log(config);
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// export const loginUser = async (user: any) => api.post('/api/auth/login', user);
// export const register = async (user: any) => api.post('/api/auth/register', user);
// export const logout = async () => api.post('/api/auth/logout');

export default api;