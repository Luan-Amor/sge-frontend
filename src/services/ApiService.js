import axios from "axios";
import { CookieService } from './CookieService';

const api = axios.create({
    baseURL: 'http://localhost:3333/',
    timeout: 1000
});

api.interceptors.request.use(async config => {
    const token = CookieService.get('token'); 
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


export default api;
