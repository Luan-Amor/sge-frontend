import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Profile } from "../config/profiles";
import { AuthService } from "../services/AuthService";
import { EventService } from "../services/EventService";

export const useEventList = () => {

    const [events, setEvents] = useState([]); 

    const { token } = useSelector(state => state);

    const { perfil } = AuthService.decodeToken(token.token);
    
    const getAllEvents = async () => {
        if(perfil && perfil === Profile.ENTERPRISE){
            const { data } = await EventService.getEventOfUser(token);
            setEvents(data)
            return
        }

        const {data} = await EventService.getEvents();
        setEvents(data)
    }


    useEffect(() => {
        getAllEvents();
    }, [])

    return [events, setEvents]

} 