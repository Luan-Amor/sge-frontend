import { useState } from "react";
import { useCookies } from "react-cookie";


export const useToken = () => {

    const [cookies, setCookie] = useCookies(['token']);
    const [token, setToken] = useState(cookies.token);

    const saveToken = (userToken, profile) => {
        setCookie('token', userToken, { path: '/', expires: new Date(Date.now() +10000000) });
        setCookie('perfil', JSON.stringify(profile), { path: '/', expires: new Date(Date.now() +10000000) });

        setToken(userToken);
    };

    return {
        setToken: saveToken,
        token
    }
} 