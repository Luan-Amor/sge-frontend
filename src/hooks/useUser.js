import { useCallback, useState } from "react";
import { AuthService } from "../services/AuthService";
import { UserService } from "../services/UserService";

export const useUser = () => {

    const [user, setUser] = useState([]);
    const {id} = AuthService.getTokenDecode();

    const getUser = useCallback(async () => {
        const {status, data } = await UserService.getUser(id);
        
        if(status !== 200) throw new Error();

        setUser(data)
    },[id])


    return {user, getUser}

}