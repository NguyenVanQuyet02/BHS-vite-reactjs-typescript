import axios from 'axios';

const API_URL = 'https://reqres.in/api';
// const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const handleRegister = async (email: string, password: string): Promise<void> => {
    await axios.post(`${API_URL}/register`, { email, password })
}

export const handleLogin = async (email: string, password: string): Promise<string> => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data.token;
};