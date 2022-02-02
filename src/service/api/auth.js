import axios from 'axios'

const api = axios.created({
    baseURL: process.env.REACT_APP_ACESS_API_URL
});

export const login = (creds) => {
    return api.post("/login", creds, {
        observe: 'response',
        responseType: 'text' 
    })
}

export default api;