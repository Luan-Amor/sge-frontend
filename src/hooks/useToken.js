import { useState } from "react";


export const useToken = () => {

    const [token, setToken] = useState();

    const saveToken = (userToken) => {
        setToken(userToken);
    };

    return {
        setToken: saveToken,
        token
    }
} 