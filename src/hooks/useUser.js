import { useEffect, useState } from "react";
import { UserService } from "../services/UserService";

export const useUser = () => {

    const [user, setUser] = useState([]); 
    let isMounted = true;

    useEffect(() => {
        UserService.getUser()
            .then(({data}) => {
                if(isMounted){
                    setUser(data)
                }
            })
            return () => { isMounted = false; }
        },[])

    return [user, setUser]

} 