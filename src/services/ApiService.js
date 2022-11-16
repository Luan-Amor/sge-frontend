import axios from "axios";
import { CookieService } from './CookieService';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000
});

api.interceptors.request.use(async config => {
    const token = await CookieService.get('token'); 
    if (token) { config.headers.Authorization = `Bearer ${token}`; }
    return config;
}, async (error) => {
    console.log("# Error Intercept", error);
    if(error.response.status === 401){
        await CookieService.remove('token');  
    }
    return error;
});


export default api;
