import axios from "axios";
import { useCookies } from "react-cookie";


const Instance = () => {
    const api = axios.create({
        baseURL: 'http://localhost:3333/',
        timeout: 1000
    });

    return api;
}

export function ConfigAuth(){
    const [cookie] = useCookies(['token']);
    return { headers: { Authorization: `Bearer ${cookie?.token}` }}
}

export default Instance;
