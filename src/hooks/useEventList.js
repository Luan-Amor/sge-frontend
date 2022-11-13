import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Profile } from "../config/profiles";
import { AuthService } from "../services/AuthService";
import { EventService } from "../services/EventService";

export const useEventList = () => {
    const { token } = useSelector(state => state);
    const { role } = AuthService.decodeToken(token.token);
    const [events, setEvents] = useState([]); 

    const getAll = useCallback(async () => {
        if(role && role === Profile.ORGANIZER){
            const { data } = await EventService.getEventOfUser(token);
            setEvents(data)
            return
        }

        const {status, data} =  await EventService.getEvents();

        if(status !== 200) throw new Error();
        setEvents(data)
    },[role, token])

    return {events, setEvents, getAll}

} 