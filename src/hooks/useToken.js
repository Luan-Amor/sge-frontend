import { useState } from "react";
import { useCookies } from "react-cookie";


export const useToken = () => {

    const [cookies, setCookie] = useCookies(['token']);
    const [token, setToken] = useState(cookies.token);

    const saveToken = (userToken, profile) => {
        setCookie('token', userToken, { path: '/', maxAge: 9 });
        setCookie('perfil', JSON.stringify(profile), { path: '/', maxAge: 9 });

        setToken(userToken);
    };

    return {
        setToken: saveToken,
        token
    }
} 