import { useEffect, useState } from "react";
import { AuthService } from "../services/AuthService";
import { UserService } from "../services/UserService";

export const useUser = () => {

    const [user, setUser] = useState([]); 
    let isMounted = true;

    useEffect(() => {
        const {id} = AuthService.getTokenDecode();
        UserService.getUser(id)
            .then(({data}) => {
                if(isMounted){
                    setUser(data)
                }
            })
            return () => { isMounted = false; }
        },[])

    return [user, setUser]

} 