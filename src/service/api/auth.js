import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_ACESS_API_URL
});

export const login = (creds) => {
    return api.post("/login", creds, {
        observe: 'response',
        responseType: 'text'
    });
}

export const getClient = (email) => {
    return api.get(`/clientes/email?value=${email}`);
}

export default api;